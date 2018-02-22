#!/bin/bash
echo "mKassa - Setting up products... "

curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"C0la","price":10,"imageUrl":"/assets/products/cola.png","category":"None"}'  1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"C0la 0x00","price":10,"imageUrl":"/assets/products/colazero.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Fanta Extc","price":10,"imageUrl":"/assets/products/fantaexotic.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Fanta","price":10,"imageUrl":"/assets/products/fanta.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Mtn Dew","price":10,"imageUrl":"/assets/products/mntdew.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Raml`o`sa","price":10,"imageUrl":"/assets/products/ramlosa.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Rmlsa Ctr","price":10,"imageUrl":"/assets/products/ramlosacitrus.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Pwrkng#","price":15,"imageUrl":"/assets/products/powerking.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"K4ffe","price":10,"imageUrl":"/assets/products/kaffe.gif","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"K4ff3b4nd","price":40,"imageUrl":"/assets/products/kaffekort.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Billys Org","price":20,"imageUrl":"/assets/products/billys.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Billys Veg","price":20,"imageUrl":"/assets/products/billysveg.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"G0rbys","price":15,"imageUrl":"/assets/products/gorbys.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"AEpple","price":5,"imageUrl":"/assets/products/apple.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"T0ast","price":20,"imageUrl":"/assets/products/toast.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"bnn_sKid","price":1,"imageUrl":"/assets/products/skids.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Snixers","price":5,"imageUrl":"/assets/products/snickers.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Gott&etc","price":15,"imageUrl":"/assets/products/gottoblandat.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"5_gdshband","price":5,"imageUrl":"/assets/products/sample.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"20_ptr*","price":5,"imageUrl":"/assets/products/surapatroner.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"c_okie","price":10,"imageUrl":"/assets/products/sample.png","category":"None"}' 1>/dev/null
curl -XPOST 'http://localhost:3000/product' -H "Content-Type: application/json" --data '{"name":"Datorplats","price":200,"imageUrl":"/assets/products/sample.png","category":"None"}' 1>/dev/null

