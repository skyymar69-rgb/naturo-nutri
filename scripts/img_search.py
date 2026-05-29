import sys, io, json, time, urllib.parse, urllib.request
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

UA = "NutritherapyImageSourcing/1.0 (contact: naturo@example.com)"

def search(query, limit=6):
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": query, "gsrnamespace": "6", "gsrlimit": str(limit),
        "prop": "imageinfo", "iiprop": "url|mime|size", "iiurlwidth": "1200",
    }
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    for attempt in range(7):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=30) as r:
                raw = r.read().decode("utf-8")
            if raw.strip().startswith("{"):
                d = json.loads(raw)
                out = []
                for p in d.get("query", {}).get("pages", {}).values():
                    ii = p.get("imageinfo", [{}])[0]
                    out.append({"title": p.get("title"), "thumb": ii.get("thumburl"),
                                "mime": ii.get("mime"), "idx": p.get("index", 99)})
                out.sort(key=lambda x: x["idx"])
                return out
            else:
                time.sleep(10 * (attempt + 1))
        except Exception:
            time.sleep(6 * (attempt + 1))
    return []

def verify(u):
    req = urllib.request.Request(u, method="HEAD", headers={"User-Agent": UA})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=25) as r:
                return r.status, r.headers.get("Content-Type")
        except Exception as e:
            code = getattr(e, "code", None)
            if code == 429:
                time.sleep(8 * (attempt + 1)); continue
            return code, str(e)
    return None, "retry-exhausted"

if __name__ == "__main__":
    mode = sys.argv[1]
    if mode == "batch":
        # remaining args: slug query slug query ...
        pairs = sys.argv[2:]
        results = {}
        for i in range(0, len(pairs), 2):
            slug, query = pairs[i], pairs[i+1]
            res = search(query)
            results[slug] = res
            print("### " + slug + " :: " + query)
            for r in res:
                print("  " + str(r["title"]) + " || " + str(r["thumb"]) + " || " + str(r["mime"]))
            time.sleep(4)
        json.dump(results, open("scripts/_img_results.json", "w"), ensure_ascii=False)
    elif mode == "v":
        print(verify(sys.argv[2]))
