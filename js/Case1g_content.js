var Case1g = (function(self){
self.ID = {"text":"Case1g"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};


self.nodes = {"content": 
	[/*{  "ID": "1.7",
		"type":"chapter", 
		"title":"En vanlig dag",
		"background":{"type":"image","url":"intro1.jpg"},
		 "animation":"fade",
		 "showNextButton":"0"
	},*/
	{  	"ID": "1.7.1",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ *  För att få en större förståelse för prostitution och sex mot ersättning ska du nu få ta del av alla inblandade personers perspektiv. Hur skiljer sig en vanlig dag för de olika personerna? * ~",
		"animation":"fade",
		"showNextButton":"0"
			
	},
	{  	"ID": "1.7.2",
		"type":"comicparallel",
		"background":{"type":"image","url":"bg4.jpg"},
		"comicparallel" : [	{"slide": 
								{"url":"1.5.2_horan1.png",
								"url2":"1.5.2_torsken1.png",
								"url3":"1.5.2_hallicken1.png",
								
								"text":"8.00"}
					},
					{"slide": 
								{"url":"1.5.2_horan2.png",
								"url2":"1.5.2_torsken2.png",
								"url3":"1.5.2_hallicken2.png",
								"text":"9.00"}
					},
					{"slide": 
								{"url":"1.5.2_horan3.png",
								"url2":"1.5.2_torsken3.png",
								"url3":"1.5.2_hallicken3.png",
								"text":"10.30"}
					},
					{"slide": 
								{"url":"1.5.2_horan4.png",
								"url2":"1.5.2_torsken4.png",
								"url3":"1.5.2_hallicken4.png",
								"text":"14.30"}
					},
					{"slide": 
								{"url":"1.5.2_horan5.png",
								"url2":"1.5.2_torsken5.png",
								"url3":"1.5.2_hallicken5.png",
								"text":"17.00"}
								},
					{"slide": 
								{"url":"1.5.2_horan6.png",
								"url2":"1.5.2_torsken6.png",
								"url3":"1.5.2_hallicken6.png",
								"text":"18.30"}
								},
					{"slide": 
								{"url":"1.5.2_horan7.png",
								"url2":"1.5.2_torsken7.png",
								"url3":"1.5.2_hallicken7.png",
								"text":"20.30"}
								},
					{"slide": 
								{"url":"1.5.2_horan8.png",
								"url2":"1.5.2_torsken8.png",
								"url3":"1.5.2_hallicken8.png",
								"text":"23.30"}
					},
					{"slide": 
								{"url":"1.5.2_horan9.png",
								"url2":"1.5.2_torsken9.png",
								"url3":"1.5.2_hallicken9.png",
								"text":"00.00"}
					}
										  	
		],
		"comic_row_height":"221px",
		 "animation":"fade",
		 "showNextButton":"1500",
		"callback":"Case1_HUB"
	},

	{  	"ID": "1.7.3",
		"type":"question", 
		"analysisLog":"1.7.3 Fråga kapitel 5, Case 1",
		"question":"~ * Besvara påståendet: Många som köper sex av traffickerade personer, är inte medvetna om, eller försöker förtränga, att de genom sina handlingar skadar en annan människa.  * ~",
		"background":{"type":"image","url":"intro2.jpg"},
		"answers":[
							{"text":"- JA","analysisLog":"1. JA"},
							{"text":"- NEJ","analysisLog":"2. NEJ"}
				]
		 ,
		 "animation":"left",
		 "showNextButton":"-1"
	},
	
	{  	"ID": "1.1.5",
		"type":"agent",
		"background":{"type":"image","url":"intro2.jpg"},
		"text":"~ * Kvinnor som blivit offer för människohandlarna hotas för att de inte ska rymma eller berätta för någon om sin situation. * ~",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"Case1_HUB"
	}

    ]
};


	return self;

})({});
