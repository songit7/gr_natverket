var Case1_HUB = (function(self){
self.ID = {"text":"Case1_HUB"};
self.preload = {"images":
[	{"url":"bg-case-1.jpg"},
	{"url":"1.5.2_horan1.png"},
	{"url":"1.5.2_torsken1.png"},
	{"url":"1.5.2_hallicken1.png"},
	{"url":"1.5.2_horan2.png"},
	{"url":"1.5.2_torsken2.png"},
	{"url":"1.5.2_hallicken2.png"},
	{"url":"1.5.2_horan3.png"},
	{"url":"1.5.2_torsken3.png"},
	{"url":"1.5.2_hallicken3.png"},
	{"url":"1.5.2_horan4.png"},
	{"url":"1.5.2_torsken4.png"},
	{"url":"1.5.2_hallicken4.png"},
	{"url":"1.5.2_horan5.png"},
	{"url":"1.5.2_torsken5.png"},
	{"url":"1.5.2_hallicken5.png"},
	{"url":"1.5.2_horan6.png"},
	{"url":"1.5.2_torsken6.png"},
	{"url":"1.5.2_hallicken6.png"},
	{"url":"1.5.2_horan7.png"},
	{"url":"1.5.2_torsken7.png"},
	{"url":"1.5.2_hallicken7.png"},
	{"url":"1.5.2_horan8.png"},
	{"url":"1.5.2_torsken8.png"},
	{"url":"1.5.2_hallicken8.png"}
]
};

self.topLeftImage = {"url":""};

self.nodes = {"content": 
	[{  "ID": "CASE1.HUB",
		"type":"hub", 
		"analysisLog":"CASE 1 HUB:",
		"background":{"type":"image","url":"bg-case-1.jpg"},
		"chapters":[
							{"text":"Vem köper sex?", 
								"ID":"0",
								"width":"220px", "height":"175px", 
								"left":"3%", "top":"50%", 
								"paddingtop":"13px",
								"fontsize":"3",
								"analysisLog":"1. Vem köper sex",
								"callback":"Case1a"},
							{"text":"Vem blir såld?", 
								"ID":"1",
								
								"width":"140px", "height":"125px", 
								"left":"16%", "top":"19%",
								"paddingtop":"12px", 
								"fontsize":"2",
								"analysisLog":"2.Vem blir såld",
								"callback":"Case1b"},
							{"text":"Media", 
								"ID":"2",
									"lockeduntil":"1", 
								"width":"160px", "height":"130px", 
								"left":"30%", "top":"35%", 
								"paddingtop":"20px",
								"fontsize":"3.3",
								"analysisLog":"3. Media",
								"callback":"Case1c"},
							{"text":"Polisens arbete", 
								"ID":"3",
									"lockeduntil":"2", 
								"width":"117px", "height":"110px", 
								"left":"53%", "top":"25%",
								"paddingtop":"10px", 
								"fontsize":"1.8",
								"analysisLog":"4. Polisens arbete",
								"callback":"Case1d"},
							{"text":"Granne med trafficking", 
								"ID":"4",
									"lockeduntil":"3", 
								"width":"158px", "height":"123px", 
								"left":"68%", "top":"40%",
								"paddingtop":"13px", 
								"fontsize":"1.8",
								"analysisLog":"5. Granne med trafficking",
								"callback":"Case1e"},
							{"text":"Pengarna och människorna", 
								"ID":"5",
									"lockeduntil":"3", 
								"width":"245px", "height":"162px", 
								"left":"65%", "top":"0%", 
								"paddingtop":"13px",
								"fontsize":"2.6",
								"analysisLog":"6. Pengarna och människorna",
								"callback":"Case1f"},
							{"text":"En vanlig dag", 
								"ID":"6",
								"lockeduntil":"6", 
								"width":"165px", "height":"150px",
								 "left":"49%", "top":"52%", 
								 "paddingtop":"12px",
								 "fontsize":"2.5",
								 "analysisLog":"7. En vanlig dag",
								 "callback":"Case1g"}
				]
		 ,
		 "animation":"fade",
		 "showNextButton":"-1"
	}
	

    ]
};


	return self;

})({});
