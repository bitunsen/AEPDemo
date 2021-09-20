function invokeIdentityService() {
	
	alloy("getIdentity")
	  .then(function(result) {
	    // The command succeeded.
		var ecid = result.identity.ECID;
		localStorage.setItem("CURRENT_ECID", ecid);
	    console.log("[invokeEvents script] ECID:", result.identity.ECID);
	    //console.log("RegionId:", result.edge.regionId);
	  })
	  .catch(function(error) {
	    // The command failed.
	    // "error" will be an error object with additional information.
	  });
}
function sendDummyProductViewEvent() {
	//invokeIdentityService();
	
	if(digitalData.category.pageType !== "Media"){
		localStorage.removeItem("currentProductView");
		var currentProductView = [];
		var currency = "$";
		var channel = "Desktop";
		var price = Number(digitalData.productInfo.productPrice);
		var productName = digitalData.productInfo.productName;
		var productSKU = digitalData.productInfo.productSKU;
		var productUrl = digitalData.productInfo.productURL;
		
		var qty = 1;
		
		var thisProductViewP = {};

		thisProductViewP = {
				"SKU": productSKU, 
				"priceTotal": price, 
				"quantity": qty, 
				"name": productName, 
				"product": productUrl, 
				"productAddMethod": channel
		};
		
		//consolle.og("Current ECID : " + Visitor.getInstance("D1D7123F524450A60A490D45@AdobeOrg")._fields.MCMID);

		currentProductView.push(thisProductViewP);
		
		localStorage.setItem("currentProductView", JSON.stringify(currentProductView));
		console.log("Current Product Details : " + JSON.stringify(currentProductView));
		
		var ecid =  localStorage.getItem("CURRENT_ECID");
		if (null == ecid || typeof ecid === 'undefined') {
			invokeIdentityService();
			ecid =  localStorage.getItem("CURRENT_ECID");
		}
		console.log("Current ECID : " + ecid);
		/*
		var identityMap = {
			"ECID": [
				{
					"id": ecid,
					"authenticatedState": "ambiguous",
					"primary": true
				}
			],
			"Email" : [
				{
					"id": "max.robinson@att.com",
					"authenticatedState": "ambiguous",
					"primary": false
				}
			]
		};
		*/
		var identityMap = {
				"Email" : [
					{
						"id": "max.robinson@att.com",
						"authenticatedState": "ambiguous",
						"primary": false
					}
				]
			};
		localStorage.setItem("currentIdentityMap", JSON.stringify(identityMap));
		console.log("Current IdentityMap : " + localStorage.getItem("currentIdentityMap"));
		_satellite.track('productview');
	}
}