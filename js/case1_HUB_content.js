var Case1_HUB = (function(self){
self.ID = {"text":"Case1_HUB"};
self.preload = {"images":
[	{"url":"bg-case-1.jpg"},
	{"url":"bg4.jpg"},
	{"url":"intro2.jpg"},
	{"url":"1.2.1_macrostatistik.png"},
	{"url":"1.2.2_microstatistik.png"},
	{"url":"1.1.2_bordell.png"},
	{"url":"1.4.2_bild1.png"},
	{"url":"1.4.2_bild2.png"},
	{"url":"1.4.2_bild3.png"},
	{"url":"1.4.2_bild4.png"},
	{"url":"1.4.2_bild5.png"},
	{"url":"1.4.1_blogg2.png"}, 
	{"url":"1.5.1_domen.png"},
	{"url":"1.3.1_insandare.png"},
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
							{"text":"Vad är trafficking?", 
								"ID":"0",
								"lockeduntil":"0", 
								"width":"220px", "height":"175px", 
								"left":"3%", "top":"50%", 
								"paddingtop":"13px",
								"fontsize":"3",
								"analysisLog":"1. Vad är trafficking",
								"callback":"Case1_trafficking"},
							{"text":"Vilka köper sex?", 
								"ID":"1",								
								"lockeduntil":"0", 
								"width":"160px", "height":"130px", 
								"left":"30%", "top":"35%", 
								"paddingtop":"20px",
								"fontsize":"2",
								"analysisLog":"3. Vilka köper sex",
								"callback":"Case1_sexkopare"},
							{"text":"Människorna som säljs", 
								"ID":"2",
								"lockeduntil":"0", 
								"width":"179px", "height":"117px", 
								"left":"53%", "top":"25%",
								"paddingtop":"13px", 
								"fontsize":"1.8",
								"analysisLog":"4. Människorna som säljs",
								"callback":"Case1_manniskorna"},
							{"text":"Polisens arbete", 
								"ID":"3",
								"lockeduntil":"0", 
								"width":"158px", "height":"123px", 
								"left":"71%", "top":"46%",
								"paddingtop":"13px", 
								"fontsize":"1.8",
								"analysisLog":"5. Polisens arbete",
								"callback":"Case1_polisen"},
							{"text":"I lägenheten bredvid", 
								"ID":"4",
								"lockeduntil":"0",
								"width":"140px", "height":"125px", 
								"left":"13%", "top":"19%",
								"paddingtop":"12px", 
								"fontsize":"2",
								"analysisLog":"2. Grannen",
								"callback":"Case1_grannen"},
							{"text":"En vanlig dag", 
								"ID":"5",
								"lockeduntil":"0", 
								"width":"165px", "height":"150px",
								 "left":"49%", "top":"52%", 
								 "paddingtop":"12px",
								 "fontsize":"2.5",
								 "analysisLog":"7. En vanlig dag",
								 "callback":"Case1_envanligdag"},
							{"text":"Vad händer efteråt?", 
								"ID":"6",
								"lockeduntil":"0", 
								"width":"245px", "height":"162px", 
								"left":"65%", "top":"0%", 
								"paddingtop":"13px",
								"fontsize":"2.6",
								"analysisLog":"6. outro case1",
								"callback":"Case1_outro"}
				],
		 "animation":"fade",
		 "showNextButton":"-1"
	}
	

    ]
};


	return self;

})({});
