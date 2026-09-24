#!/usr/bin/env python3
"""Update a guide's registry entry (data/guides.ts) and dek (data/guide-deks.ts).
usage: registry.py <slug> <title> <metaTitle> <description> <dek>"""
import re, sys, json
slug, title, meta_title, desc, dek = sys.argv[1:6]
p = "data/guides.ts"; s = open(p).read()
i = s.index(f'    slug: "{slug}",')
start = s.rindex("  {\n", 0, i); end = s.index("\n  },", i)
block = s[start:end]
block = re.sub(r'\n    title: ".*?",(\n    metaTitle: ".*?",)?', "\n    title: " + json.dumps(title) + ",\n    metaTitle: " + json.dumps(meta_title) + ",", block, count=1)
block = re.sub(r'\n    description: ".*?",', "\n    description: " + json.dumps(desc) + ",", block, count=1)
s = s[:start] + block + s[end:]; open(p, "w").write(s)
p = "data/guide-deks.ts"; s = open(p).read()
entry = f"  {json.dumps(slug)}:\n    {json.dumps(dek)},\n"
if f'"{slug}":' in s:
    s = re.sub(rf'  "{re.escape(slug)}":\n    ".*?",\n', entry.replace("\\", "\\\\"), s)
else:
    s = s.rstrip().rstrip("};").rstrip() + "\n" + entry + "};\n"
open(p, "w").write(s)
print("registry+dek updated:", slug)
