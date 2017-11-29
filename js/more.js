

         function formatter1(value, row, index) {
			if(index == 0){
				return value;
			}else{
			
			    return "<a href='#' class='a_text' onclick='tab_mes(this,arrObj"+arrIndex1+",arrIndex1)'  style='color:blue'>" + value + "</a>";		
			}
		} 

		 function formatter2(value, row, index) {
			if(index == 0){
				return value;
			}else{
			
			    return "<a href='#' class='a_text' onclick='tab_mes(this,arrObj"+arrIndex2+",arrIndex2)'  style='color:blue'>" + value + "</a>";		
			}
		} 
	function formatter3(value, row, index) {
				if(index == 0){
					return value;
				}else{

				    return "<a href='#' class='a_text' onclick='tab_mes(this,arrObj"+arrIndex3+",arrIndex3)'  style='color:blue'>" + value + "</a>";		
				}
			} 


	function tab_mes(text,textobj,arrIndex){
			$(textobj[1]).append("<a href='#' class='remove' data-do=true onclick='remove1(this,arrObj"+arrIndex+")' style='color: blue;'>/" +$(text).html() + "</a>");	
			for(var k = 0;k<$(textobj[1]).find("a").length;k++){
				$(textobj[1]).find("a")[k].setAttribute('data-do','true')
			}
			textobj[2]++;
			
			if(textobj[3]>1){
				$(textobj[0]).datagrid({  
					 url:arr[textobj[2]-textobj[3]]
				})
				textobj[2] = textobj[3]
				
				textobj[3] = 0
			}else{
				$(textobj[0]).datagrid({  
					 url:arr[textobj[2]-1]
					})
			}
			
		}

		function remove1(hide,hideObj) {
				var Num = parseInt($(hideObj[1]).find("a").length)-1;
				$(hideObj[1]).find("a")[Num].setAttribute('data-do','false')

				if($(hide).attr("data-do")=="true"){
					hideObj[2]--
						var a = $(hideObj[1]).find("a").length
						$(hide).nextAll().remove();
						$(hide).attr("data-do","false")
						var b = $(hideObj[1]).find("a").length
						hideObj[3]=a-b
						if(hideObj[3]>1){
						$(hideObj[0]).datagrid({  
							 	url:arr[hideObj[2]-hideObj[3]]
						})
						}else{
							$(hideObj[0]).datagrid({  
							 	url:arr[hideObj[2]-1]
							})
						}
						
				}
				
			}
		
		function remove_first(hideObj,dg,remove_first){
			$(dg).datagrid({  
				 url:'../../json/risk_early_warning1.json'
			})
			$(remove_first).nextAll().remove();
			hideObj[2]=0
			hideObj[3]=0
		}
 