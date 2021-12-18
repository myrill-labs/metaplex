import json

with open(".cache/mainnet-beta-cache.json") as f:
  x = json.load(f)
  items = x['items']

  for i in range(0, 900):
    if str(i) in x["items"]:
      assert x["items"][str(i)]["onChain"]
      assert x["items"][str(i)]["name"] == "myrill.io"
      print(f"{i} OK")
    else:
      print(i)

  print(f"{len(items)}/900")
  assert len(items)==900
