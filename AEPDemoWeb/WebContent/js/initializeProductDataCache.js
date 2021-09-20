product_one = {
		"sku" : "cts-sku-1001",
		"productName" : "Nike Men's Dry Team Woven Training Pants",
		"currenyCode" : "",
		"categories"  : "Men",
		"brand"	: "Nike",
		"price" : "$55.00",
		"productURL" : "cts-sku-1001.html",
		"productImage" : "cts-sku-1001.JPG"
}
product_two = {
	"productName" : "adidas Men's Go-To 5-Pocket Golf Pant",
	"categories"	: "Men",
	"brand"	: "adidas",
	"sku" : "cts-sku-1002",
	"price" : "$89.99",
	"productURL" : "cts-sku-1002.html",
	"productImage" : "cts-sku-1002.JPG"
}
product_three = {
	"productName" : "North Face Men's Half Dome Tri-Blend Short Sleeve Graphic T-Shirt",
	"categories"	: "Men",
	"brand"	: "North Face",
	"sku" : "cts-sku-1003",
	"price" : "$14.99",
	"productURL" : "cts-sku-1003.html",
	"productImage" : "cts-sku-1003.JPG"
}
product_four = {
	"productName" : "Columbia Men's Glennaker Lake Rain Jacket",
	"categories"	: "Men",
	"brand"	: "North Face",
	"sku" : "cts-sku-1004",
	"price" : "$39.99",
	"productURL" : "cts-sku-1004.html",
	"productImage" : "cts-sku-1004.JPG"
}
productData = {
	"products" : {
	"product_1" : product_one, 
	"product_2" : product_two, 
	"product_3" : product_three, 
	"product_4" : product_four
	}
}

console.log("Product Repository : " + JSON.stringify(productData))
console.log("Product One Name : " + productData.products.product_1.productName)

