#!/bin/bash
echo "mKassa - Setting up products... "

curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Cola","price":10,"imageUrl":"/assets/products/cola.png","category":"None"}'  1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Cola Zero","price":10,"imageUrl":"/assets/products/colazero.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Fanta Exotic","price":10,"imageUrl":"/assets/products/fantaexotic.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Fanta","price":10,"imageUrl":"/assets/products/fanta.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Mountain Dew","price":10,"imageUrl":"/assets/products/mntdew.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Ramlösa","price":10,"imageUrl":"/assets/products/ramlosa.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Ramlösa Citrus","price":10,"imageUrl":"/assets/products/ramlosacitrus.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Powerking","price":15,"imageUrl":"/assets/products/powerking.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Kaffe","price":10,"imageUrl":"/assets/products/kaffe.gif","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Kaffeband","price":40,"imageUrl":"/assets/products/kaffekort.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Billys","price":20,"imageUrl":"/assets/products/billys.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Billys Veg","price":20,"imageUrl":"/assets/products/billysveg.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Gorbys","price":15,"imageUrl":"/assets/products/gorbys.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Äpple","price":5,"imageUrl":"/assets/products/apple.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Toast","price":20,"imageUrl":"/assets/products/toast.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Banana Skids","price":1,"imageUrl":"/assets/products/skids.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Snickers","price":5,"imageUrl":"/assets/products/snickers.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Gott & Blandat","price":15,"imageUrl":"/assets/products/gottoblandat.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"5st Godishalsband","price":5,"imageUrl":"/assets/products/sample.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"20st Patroner","price":5,"imageUrl":"/assets/products/surapatroner.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Cookie","price":10,"imageUrl":"/assets/products/sample.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Datorplats","price":200,"imageUrl":"/assets/products/sample.png","category":"None"}' 1>/dev/null

