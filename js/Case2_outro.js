var Case2_outro = (function(self){
self.ID = {"text":"Case2_outro"};

self.preload = {"images":
[{"url":""}
]
};

self.topLeftImage = {"url":"img/case_color_splash.png"};

self.nodes = {"content": 
	[
	{  	"ID": "Case2_outro_film",
		"type":"video_seq",
		"background":{"type":"image","url":"bg4.jpg"},
		"sequences":[
			{
				"sequenceID":"0",
			 	"type":"video",
			 	"url":"https://www.youtube.com/watch?v=A4bLeY2xwtg"
			 }],
			 "animation":"fade",
			  "showNextButton":"0"
	},
	{  	"ID": "Case2_outro_kim",
		"type":"agent",
		"background":{"type":"image","url":"bg4.jpg"},
		"text":"(placeholder)Att man nu har gått igenom träningsprogrammet och är redo att agera som agent – i verkligeheten. <br><br>//Kim",
		"animation":"fade",
		"showNextButton":"0",
		"callback":"OUTRO"
	}
]
};


	return self;

})({});
