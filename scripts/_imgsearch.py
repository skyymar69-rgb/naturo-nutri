import sys, json, time, urllib.parse, urllib.request, io

sys.stdout.reconfigure(encoding='utf-8')

API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "NutritherapyImageSourcer/1.0 (contact@example.com)"}

def search(query):
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": query, "gsrnamespace": "6", "gsrlimit": "8",
        "prop": "imageinfo", "iiprop": "url|mime|size", "iiurlwidth": "1200",
    }
    url = API + "?" + urllib.parse.urlencode(params)
    d = None
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=25) as r:
                d = json.load(r)
            if d.get("query", {}).get("pages"):
                break
            time.sleep(1.5)
        except Exception as e:
            time.sleep(1.5)
    if not d:
        return []
    pages = d.get("query", {}).get("pages", {})
    out = []
    for p in pages.values():
        ii = p.get("imageinfo", [{}])[0]
        out.append({
            "title": p.get("title"),
            "thumb": ii.get("thumburl"),
            "mime": ii.get("mime"),
            "index": p.get("index", 999),
        })
    out.sort(key=lambda x: x["index"])
    return out

BROWSER_UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
    "Referer": "https://commons.wikimedia.org/",
}

def verify(url):
    if not url:
        return False
    h = dict(BROWSER_UA)
    h["Range"] = "bytes=0-1023"
    for attempt in range(2):
        try:
            req = urllib.request.Request(url, headers=h, method="GET")
            with urllib.request.urlopen(req, timeout=20) as r:
                ct = r.headers.get("Content-Type", "")
                ok = r.status in (200, 206) and ct.startswith("image/")
                r.read(64)
                return ok
        except Exception:
            time.sleep(1.0)
    return False

if __name__ == "__main__":
    # args: slug query [query2 ...] ; used not taken set passed via env-less approach
    pass
