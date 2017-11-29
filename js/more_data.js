//      function formatter(value, row, index) {
//      	return "<a href='#' onclick='tab_mes(this," + '"#dg"' + "," + '".title"' + ")' style='color:blue'>" + value + "</a>";
//      }
//
//      function formatter1(value, row, index) {
//      	return "<a href='#' onclick='tab_mes1(this," + '"#dg1"' + "," + '".title_mouth"' + ")' style='color:blue'>" + value + "</a>";
//      }
//
//      function formatter2(value, row, index) {
//      	return "<a href='#' onclick='tab_mes2(this," + '"#dg2"' + "," + '".title_year"' + ")' style='color:blue'>" + value + "</a>";
//      }

function formatter(value, row, index) {
			if(index == 0){
				return value;
			}else{
			    return "<a href=' ' onclick='tab_mes(this," + '"#dg"' + "," + '".title"' + ")' style='color:blue'>" + value + "</a>";		
			}
		} 
		function formatter1(value, row, index) {
			if(index == 0){
				return value;
			}else{
			    return "<a href=' ' onclick='tab_mes1(this," + '"#dg1"' + "," + '".title_mouth"' + ")' style='color:blue'>" + value + "</a>";		
			}
		} 
		function formatter2(value, row, index) {
			if(index == 0){
				return value;
			}else{
			    return "<a href=' ' onclick='tab_mes2(this," + '"#dg2"' + "," + '".title_year"' + ")' style='color:blue'>" + value + "</a>";		
			}
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
        	var a = "<a href='#' class='remove" + i + "' onclick='clickA(" + '"../../json/' + hideShow[0] + '' + i + '.json"' + "," + '".remove' + i + '"' + "," + '"#dg"' + ")' style='color: dodgerblue;'>/" + a_text + "</a>";
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
        	var a = "<a href='#' class='remove" + j + "' onclick='clickA1(" + '"../../json/' + hideShow[0] + '' + j + '.json"' + "," + '".remove' + j + '"' + "," + '"#dg1"' + ")' style='color: dodgerblue;'>/" + a_text + "</a>";
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
        	var a = "<a href='#' class='remove" + h + "' onclick='clickA2(" + '"../../json/' + hideShow[0] + '' + h + '.json"' + "," + '".remove' + h + '"' + "," + '"#dg2"' + ")' style='color: dodgerblue;'>/" + a_text + "</a>";
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
        	dg2(dg)
        }

        function dg1(dg) {
        	$(dg).datagrid("hideColumn", hideShow[1]);
        	$(dg).datagrid("showColumn", hideShow[2]);
        }

        function dg2(dg) {
        	$(dg).datagrid("hideColumn", hideShow[2]);
        	$(dg).datagrid("showColumn", hideShow[1]);
        }