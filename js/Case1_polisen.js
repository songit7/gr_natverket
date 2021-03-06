var Case1_polisen = (function(self){
self.ID = {"text":"Case1_polisen"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	/*{  	"ID": "Case1_polisen_intervju",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[

			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"http://player.vimeo.com/video/68434439",
			 	 "gotoID":"1"
			},
			{
				"sequenceID":"1",
				"type":"question",
				"text":"Vad vill du veta om polisens arbete mot trafficking?",
				"answers":[
							{"text":"Hur arbetar polisen för att förhindra trafficking?", "gotoID":"2"},
							//{"text":"Vad kan man göra som privatperson?", "gotoID":"3"},
							{"text":"Hur stort är problemet med trafficking i Sverige?", "gotoID":"4"},
							{"text":"Varför är det olagligt att köpa sex från vanliga prostituerade som inte är offer för trafficking?", "gotoID":"5"},
							{"text":"Avsluta", "gotoID":"-1"}
				]
			},
			{	
				"sequenceID":"2",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434440",
			 	 "gotoID":"1"
			},
			{	
				"sequenceID":"3",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434441",
			 	 "gotoID":"1"
			},
			{	
				"sequenceID":"4",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434442",
			 	 "gotoID":"1"
			},
			{
				"sequenceID":"5",
				"type":"video",
			 	"url":"http://player.vimeo.com/video/68434443",
			 	"gotoID":"1"		 	
			},
			],
     	"animation":"left",
		 "showNextButton":"0"
	},*/
	{  	"ID": "Case1_polisen_1",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"case1_bg2.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"case1_polisen1.png"} 
		],
		 "animation":"down",
		  "showNextButton":"0"			
	}, 
	{  	"ID": "Case1_polisen_2",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"case1_bg2.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"case1_polisen2.png"} 
		],
		 "animation":"down",
		  "showNextButton":"0"			
	},  
	{  	"ID": "Case1_polisen_3",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"case1_bg2.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"case1_polisen3.png"} 
		],
		 "animation":"down",
		  "showNextButton":"0"			
	}, 
	{  	"ID": "Case1_polisen_4",
		"type":"info",
		"size":"twelve",
		"background":{"type":"image","url":"case1_bg2.jpg"},
		"pretext":"<br/>",
		"posttext":"<br/>",
		"image": [
			{"url":"case1_polisen4.png"} 
		],
		 "animation":"down",
		  "showNextButton":"0"			
	}, 
	{  	"ID": "Case1_polisen_fraga",
		"type":"question", 
		"analysisLog":"polisen_fraga",
		"question":"Kim: Hur tror du att människors attityder påverkas av sexköpslagen?",
		"background":{"type":"image","url":"case1_bg4.jpg"},
		"answers":[
							{"text":"Inte alls.","analysisLog":"1. Inte alls"},
							{"text":"Delvis. Det blir svårare och mer riskfyllt att köpa sex.","analysisLog":"2. Delvis"},
							{"text":"Mycket. På längre sikt påverkar lagstiftningen människors val och beteende.","analysisLog":"3. Mycket"}
				],
		 "animation":"left",
		 "showNextButton":"-1",
		 "callback":"Case1_HUB"
	}

    ]
};


	return self;

})({});
