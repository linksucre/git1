        function formatter(value, row, index) {
        	return "<a href='#' class='a_text' onclick='tab_mes(this," + '"#dg"' + "," + '".title"' + ")' style='color:blue'>" + value + "</a>";
        }

        function formatter1(value, row, index) {
        	return "<a href='#' onclick='tab_mes1(this," + '"#dg1"' + "," + '".title_mouth"' + ")' style='color:blue'>" + value + "</a>";
        }

        function formatter2(value, row, index) {
        	return "<a href='#' onclick='tab_mes2(this," + '"#dg2"' + "," + '".title_year"' + ")' style='color:blue'>" + value + "</a>";
        }
        var i = 1;
        var j = 1;
        var h = 1;
        function tab_mes(text, dg, title) {
        	i++
        	var length = arr.length+1;
        	if(i == length) {
        		dg1(dg)
        	}
        	$(dg).datagrid({
        		url: "../../json/" + hideShow[0] + "" + i + ".json"
        	})
        	var a_text = $(text).html();
        	console.log(a_text)
        	var a = "<a href='#' class='remove0" + i + "' onclick='clickA(" + '"../../json/' + hideShow[0] + '' + i + '.json"' + "," + '".remove0' + i + '"' + "," + '"#dg"' + ")' style='color: dodgerblue;'>/" + a_text + "</a>";
        	$(title).append(a);
        }

        function tab_mes1(text, dg, title) {
        	j++
        	var length = arr.length+1
        	if(j == length) {
        		dg1(dg)
        	}
        	$(dg).datagrid({
        		url: "../../json/" + hideShow[0] + "" + j + ".json"
        	})
        	var a_text = $(text).html();
        	var a = "<a href='#' class='remove1" + j + "' onclick='clickA1(" + '"../../json/' + hideShow[0] + '' + j + '.json"' + "," + '".remove1' + j + '"' + "," + '"#dg1"' + ")' style='color: dodgerblue;'>/" + a_text + "</a>";
        	$(title).append(a);
        }

        function tab_mes2(text, dg, title) {
        	h++
        	var length = arr.length+1
        	if(h == length) {
        		dg1(dg)
        	}
        	$(dg).datagrid({
        		url: "../../json/" + hideShow[0] + "" + h + ".json"
        	})
        	var a_text = $(text).html();
        	var a = "<a href='#' class='remove2" + h + "' onclick='clickA2(" + '"../../json/' + hideShow[0] + '' + h + '.json"' + "," + '".remove2' + h + '"' + "," + '"#dg2"' + ")' style='color: dodgerblue;'>/" + a_text + "</a>";
        	$(title).append(a);
        }

        function clickA(url, removeClass, dg) {
        	if(url == arr[0]) {
        		dg2(dg)
        		i = 2
        	} else if(url == arr[1]) {
        		dg2(dg)
        		i = 3
        	} else if(url == arr[2]) {
        		dg1(dg)
        	}
        	$(dg).datagrid({
        		url: url
        	})
        	$(removeClass).nextAll().remove();
        }

        function clickA1(url, removeClass, dg) {
        	if(url == arr[0]) {
        		dg2(dg)
        		j = 2
        	} else if(url == arr[1]) {
        		dg2(dg)
        		j = 3
        	} else if(url == arr[2]) {
        		dg1(dg)
        	}
        	$(dg).datagrid({
        		url: url
        	})
        	$(removeClass).nextAll().remove();
        }

        function clickA2(url, removeClass, dg) {
        	if(url == arr[0]) {
        		dg2(dg)
        		h = 2
        	} else if(url == arr[1]) {
        		dg2(dg)
        		h = 3
        	} else if(url == arr[2]) {
        		dg1(dg)
        	}
        	$(dg).datagrid({
        		url: url
        	})
        	$(removeClass).nextAll().remove();
        }
        $(function() {
        	$('.remove_first').click(function() {
        		i = 1;
        	})
        	$('.remove_mouth').click(function() {
        		j = 1;
        	})
        	$('.remove_year').click(function() {
        		h = 1;
        	})
        })

        function remove_first(dg, pClass, url) {
        	$(dg).datagrid({
        		url: url
        	})
        	$(pClass).nextAll().remove();
        	dg2(dg);
        }

        function dg1(dg) {
        	$(dg).datagrid("hideColumn", hideShow[1]);
        	$(dg).datagrid("showColumn", hideShow[2]);
        }

        function dg2(dg) {
        	$(dg).datagrid("hideColumn", hideShow[2]);
        	$(dg).datagrid("showColumn", hideShow[1]);
        }
  
        $(function(){

 //	表图切换1
	 $('.report_box').click(function() {
			if($(this).attr('class') == 'report_box') {
				$(this).attr('class', 'chart_box');
				$('.title').show();
	 	        $('.title_day').hide();
				$('#main').hide();
				$('.hide_dg').show();
				$("#dg").datagrid('reload');  
			} else if($(this).attr('class') == 'chart_box') {
				$(this).attr('class', 'report_box');
				$('.title').hide();
	 	        $('.title_day').show();
				$('.hide_dg').hide();
				$('.hide_dg').nextAll().hide();
				$('#main').show();
				
			}
		});		
	 $('.report_box1').click(function() {
			if($(this).attr('class') == 'report_box1') {
				$(this).attr('class', 'chart_box1');
				$('.title_mouth').show();
	 	        $('.title_mouth_mo').hide();
				$('#main1').hide();
				$('.hide_dg1').show();
				$("#dg1").datagrid('reload');  
			} else if($(this).attr('class') == 'chart_box1') {
				$(this).attr('class', 'report_box1');
				$('.title_mouth').hide();
	 	        $('.title_mouth_mo').show();
				$('.hide_dg1').hide();
				$('.hide_dg1').nextAll().hide();
				$('#main1').show();
				
			}
		})
	 $('.report_box2').click(function() {
			if($(this).attr('class') == 'report_box2') {
				$(this).attr('class', 'chart_box2');
				$('.title_year').show();
	 	        $('.title_year_ye').hide();
				$('#main2').hide();
				$('.hide_dg2').show();
				$("#dg2").datagrid('reload');  
			} else if($(this).attr('class') == 'chart_box2') {
				$(this).attr('class', 'report_box2');
				$('.title_year').hide();
	 	        $('.title_year_ye').show();
				$('.hide_dg2').hide();
				$('.hide_dg2').nextAll().hide();
				$('#main2').show();
				
			}
		})
		$(document).ready(function() {
			$('#tab').tabs({
				tabPosition: "bottom"
			})
		});

})