(function(){
		var methods = {
						init : function(userOptions)	{
								var drillDiv = options['container'];
								$.each(userOptions, function(key,value){
									if(options[key] !== undefined) {
										options[key] = value;
									} 
								});
								
								$(document).click(function(){
									var drillDiv = options['container'];
									if(options.animation) {
										methods.hideAnimated();
									}
									else	{
										methods.hideNoAnimation();
									}
								}); 
						},
						
						buildHTML : function(listParam)	{
							var drillDiv = options['container'];
							var obj = $.parseJSON(listParam);
							var HTML = "";
							$.each(obj,function(key,value){
								HTML += "<li data='"+value+"' class='drillItem'>"+value+"</li>";
							});
							return HTML;
						},
						
						showAnimated : function()	{
							var drillDiv = options['container'];
							$(drillDiv).slideDown("slow");
						},
						
						showNoAnimation : function()	{
							var drillDiv = options['container'];
							$(drillDiv).show();
						},
						hideAnimated : function()	{
							var drillDiv = options['container'];
							$(drillDiv).slideUp("slow");
						},
						hideNoAnimation : function() {
							var drillDiv = options['container'];
							$(drillDiv).hide();
						},
						
						applyVerticalCSS : function(x,y)	{
							var drillDiv = options['container'];
							$(drillDiv).css({"position":"absolute","top":y,"left":x,"z-index":"100"});
							$(drillDiv+" li").css({"cursor":"pointer","list-style-type":"none"});
						},
						applyHorizontalCSS : function(x, y)	{
							var drillDiv = options['container'];
							$(drillDiv).css({"position":"absolute","top":y,"left":x,"z-index":"100"});
							$(drillDiv+" li").css({"display":"inline","margin":"5px","cursor":"pointer"});
						}
					}
		var options = {
						animation : true,
						listParam : "list",
						callBack  : null,
						direction : 0,
						container : null
					}
		$.fn.drillDown = function(userOptions)	{
			
			var HTML="";
			
			if(userOptions !== undefined)	{
					methods.init(userOptions);
				}
			
			this.bind('click',function(event){
				var $this = $(this);
				HTML = methods.buildHTML($this.attr(options['listParam']));
				var drillDiv = options['container'];
				$(drillDiv).html(HTML);
				if(options['direction']==0)	{
					methods.applyVerticalCSS(event.pageX,event.pageY);
				}
				else	{
					methods.applyHorizontalCSS(event.pageX,event.pageY);
				}
				if(options['animation'])	{
					methods.showAnimated();
				}
				else	{
					methods.showNoAnimation();
				}
				return false;
			});
			
			$(".drillItem").live('click',function(event){
				return options['callBack']($(this).attr("data"));
			});			
		}		
})(jQuery);