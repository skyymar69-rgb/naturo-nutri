import urllib.request, urllib.parse, json, sys, time, os

UA = {'User-Agent': 'NutritherapyImageBot/1.0 (contact@example.com)'}
OUT = sys.argv[2] if len(sys.argv) > 2 else 'scripts/_results_372.json'

def fetch(url, headers=None, method='GET'):
    h = headers or UA
    for attempt in range(6):
        try:
            req = urllib.request.Request(url, headers=h, method=method)
            return urllib.request.urlopen(req, timeout=25)
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(8 * (attempt + 1)); continue
            return None
        except Exception:
            time.sleep(3); continue
    return None

def api_search(query):
    params = {
        'action':'query','format':'json','generator':'search',
        'gsrsearch':query,'gsrnamespace':'6','gsrlimit':'8',
        'prop':'imageinfo','iiprop':'url|mime|size','iiurlwidth':'1200'
    }
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
    time.sleep(2.0)
    r = fetch(url)
    if r is None: return []
    try:
        d = json.load(r)
    except Exception:
        return []
    pages = d.get('query',{}).get('pages',{})
    out=[]
    for p in pages.values():
        ii = p.get('imageinfo')
        if not ii: continue
        out.append({'title':p['title'],'thumb':ii[0].get('thumburl'),'mime':ii[0].get('mime'),'idx':p.get('index',99)})
    out.sort(key=lambda x:x['idx'])
    return out

def verify(url):
    time.sleep(1.0)
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers={**UA, 'Range':'bytes=0-2047'})
            r = urllib.request.urlopen(req, timeout=25)
            ct = r.headers.get('Content-Type','')
            return r.status in (200,206) and ct.startswith('image/')
        except urllib.error.HTTPError as e:
            if e.code == 429:
                time.sleep(8*(attempt+1)); continue
            return False
        except Exception:
            time.sleep(3); continue
    return False

BAD = ['logo','.svg','map','diagram','chart','icon','flag','coat of arms','seal','poster']

def good_candidate(c):
    if not c['thumb']: return False
    if c['mime'] not in ('image/jpeg','image/png'): return False
    t = c['title'].lower()
    if any(b in t for b in BAD): return False
    return True

QUERIES = json.load(open(sys.argv[1], encoding='utf-8'))

# resume support
results=[]
done={}
if os.path.exists(OUT):
    try:
        prev=json.load(open(OUT,encoding='utf-8'))
        for r in prev.get('results',[]):
            done[r['slug']]=r
    except Exception:
        pass

used=set(r['src'] for r in done.values() if r.get('src'))

for item in QUERIES:
    slug=item['slug']
    if slug in done and done[slug].get('src'):
        results.append(done[slug]); continue
    chosen=''
    for q in item['queries']:
        cands=api_search(q)
        for c in cands:
            if c['thumb'] in used: continue
            if not good_candidate(c): continue
            if verify(c['thumb']):
                chosen=c['thumb']; used.add(chosen); break
        if chosen: break
    rec={'slug':slug,'src':chosen,'alt':item['alt']}
    results.append(rec)
    # checkpoint
    json.dump({'results':results}, open(OUT,'w',encoding='utf-8'), ensure_ascii=False)
    sys.stderr.write(('OK ' if chosen else 'MISS ')+slug+'\n'); sys.stderr.flush()

json.dump({'results':results}, open(OUT,'w',encoding='utf-8'), ensure_ascii=False)
print(json.dumps({'results':results}, ensure_ascii=False))
