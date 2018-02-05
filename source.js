(function(){
	d3.csv("death_pen.csv", function(error, data) {
		var svg = d3.select("body").append("svg")
			.attr("width", 960)
			.attr("height", 600)
			.attr("id", "statesvg");
		var sampleData ={};	/* Sample random data. */	
		console.log(data);
		data.forEach(function(d) {
			d.id = d.id;
			d.pun = d.pun;

		});

  		var selector = d3.select("#selector");

  		var punishments = ["No Death Penalty", "Lethal Injection", "Electricution", "Gas Chamber", "Hanging", "Firing Squad"]
  		selector
    		.selectAll("option")
    		.data(punishments)
    		.enter()
    		.append("option")
    	    .text(function(d){ return d; })
        	.attr("value", function(d){ return d; });

    	function draw(){
			var low=Math.round(100*Math.random()), 
				mid=Math.round(100*Math.random()), 
				high=Math.round(100*Math.random());
			var color = "white";
			console.log(selector.property("value"));
			var value = selector.property("value");
			for(i = 0; i < data.length; i ++){
				var color = "white";
				if(value == "No Death Penalty"){
					if(data[i].pun.includes("0")){
						color = "#8ca8d4";
						// console.log(data[i].id, "has No Death Penalty");
					}
				} else if(value == "Lethal Injection"){
					if(data[i].pun.includes("1")){
						color = "#d48ca9";
						// console.log(data[i].id, "practices the Death Penalty using Lethal Injection");
					}
				} else if(value == "Electricution"){
					if(data[i].pun.includes("2")){
						color = "#d48ca9";
						// console.log(data[i].id, "practices the Death Penalty using Electricution");
					}
				} else if(value == "Gas Chamber"){
					if(data[i].pun.includes("3")){
						color = "#d48ca9";
						// console.log(data[i].id, "practices the Death Penalty using Gas Chamber");
					}
				} else if(value == "Hanging"){	
					if(data[i].pun.includes("4")){
						color = "#d48ca9";
						// console.log(data[i].id, "practices the Death Penalty using Hanging");
					}
				} else if(value == "Firing Squad"){
					if(data[i].pun.includes("5")){
						color = "#d48ca9";
						// console.log(data[i].id, "practices the Death Penalty using Firing Squad");
					}
				}
				sampleData[data[i].id]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
				avg:Math.round((low+mid+high)/3), color:d3.interpolate(color, "#800026")(0/100)}; 
			}
			uStates.draw("#statesvg", sampleData, tooltipHtml);
		}

		draw();
        selector
    		.on("change", function(){
    			svg.remove();
        		var value = selector.property("value");
        		if(value == "No Death Penalty"){
        			svg = d3.select("body").append("svg")
		    			.attr("width", 960)
		   				.attr("height", 600)
		   				.attr("id", "statesvg");
    				draw();
    			} else if(value == "Lethal Injection"){
    				svg = d3.select("body").append("svg")
		    			.attr("width", 960)
		   				.attr("height", 600)
		   				.attr("id", "statesvg");
    				draw();
    			} else if(value == "Electricution"){
    				svg = d3.select("body").append("svg")
		    			.attr("width", 960)
		   				.attr("height", 600)
		   				.attr("id", "statesvg");
    				draw();
    			} else if(value == "Gas Chamber"){
    				svg = d3.select("body").append("svg")
		    			.attr("width", 960)
		   				.attr("height", 600)
		   				.attr("id", "statesvg");
    				draw();
    			} else if(value == "Hanging"){
    				svg = d3.select("body").append("svg")
		    			.attr("width", 960)
		   				.attr("height", 600)
		   				.attr("id", "statesvg");
    				draw();
    			} else if(value == "Firing Squad"){
    				svg = d3.select("body").append("svg")
		    			.attr("width", 960)
		   				.attr("height", 600)
		   				.attr("id", "statesvg");
    				draw();
    			}
    		});
		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4>";
		}

		
		/* draw states on id #statesvg */	
		d3.select(self.frameElement).style("height", "600px"); 
	});
})();