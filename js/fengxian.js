//日统计
function myFormatter0(value, row, index) {
	if(index == 0){
		return value;
	}else{
	    return "<a href='#' class='a_text' onclick='tab_mes()' style='color:blue'>" + value + "</a>";		
	}
}
function myFormatter1(value, row, index) {
	if(index == 0){
		return value;
	}else{
	   return "<a href='#' class='a_text' onclick='tab_mes1()' style='color:blue'>" + value + "</a>";
  }
}
function myFormatter2(value, row, index) {
	if(index == 0){
		return value;
	}else{
	return "<a href='#' class='a_text' onclick='tab_mes2()' style='color:blue'>" + value + "</a>";
}
	}
//月统计
function myFormatter_mouth0(value, row, index) {
	if(index == 0){
		return value;
	}else{
	return "<a href='#' class='a_text_mouth' onclick='tab_mes_mouth()' style='color:blue'>" + value + "</a>";
}
	}
function myFormatter_mouth1(value, row, index) {
	if(index == 0){
		return value;
	}else{
	return "<a href='#' class='a_text_mouth' onclick='tab_mes_mouth1()' style='color:blue'>" + value + "</a>";
   }
}
function myFormatter_mouth2(value, row, index) {
	if(index == 0){
		return value;
	}else{
	return "<a href='#' class='a_text_mouth' onclick='tab_mes_mouth2()' style='color:blue'>" + value + "</a>";
}
	}
//年统计
function myFormatter_year0(value, row, index) {
	if(index == 0){
		return value;
	}else{
	return "<a href='#' class='a_text_year' onclick='tab_mes_year()' style='color:blue'>" + value + "</a>";
}
	}
function myFormatter_year1(value, row, index) {
	if(index == 0){
		return value;
	}else{
	return "<a href='#' class='a_text_year' onclick='tab_mes_year1()' style='color:blue'>" + value + "</a>";
}
	}
function myFormatter_year2(value, row, index) {
	if(index == 0){
		return value;
	}else{
	return "<a href='#' class='a_text_year' onclick='tab_mes_year2()' style='color:blue'>" + value + "</a>";
}
	}
//日统计
function tab_mes() {
	$('.div-dg0').hide()
	$('.div-dg1').show()
	$('#dg1').datagrid("reload");
	$('.a_text').each(function() {
		$(this).mouseout(function() {
			var a_text = $(this).html();
			var a = "<a href='#' class='remove1' onclick='remove1()' style='color: dodgerblue;'>/" + a_text + "</a>";
			$('.title').append(a);
		})
	})
}
function tab_mes1() {
	$('.div-dg0').hide()
	$('.div-dg1').hide()
	$('.div-dg2').show()
	$('#dg2').datagrid("reload");
	$('.a_text').each(function() {
		$(this).mouseout(function() {
			var a_text = $(this).html();
			var a ="<a href='#' class='remove2' onclick='remove2()' style='color: dodgerblue;'>/" + a_text + "</a>";
			$('.title').append(a);
		})
	})
}

function tab_mes2() {
	$('.div-dg0').hide()
	$('.div-dg1').hide()
	$('.div-dg2').hide()
	$('.div-dg3').show()
	$('#dg3').datagrid("reload");
	$('.a_text').each(function() {
		$(this).mouseout(function() {
			var a_text = $(this).html();
			var a ="<a href='#' class='remove3' style='color: dodgerblue;'>/" + a_text + "</a>";
			$('.title').append(a);
		})
	})
}

function remove1() {
	$('.remove1').nextAll().remove()
	$('.div-dg1').show();
	$('.div-dg2').hide();
	$('.div-dg3').hide();
	$('#dg1').datagrid("reload");
}

function remove2() {
	$('.remove3').remove()
	$('.div-dg2').show();
	$('.div-dg3').hide();
	$('#dg2').datagrid("reload");
}
//月统计
function tab_mes_mouth() {
	$('.div-dg_mouth0').hide()
	$('.div-dg_mouth1').show()
	$('#dg_mouth1').datagrid("reload");
	$('.a_text_mouth').each(function() {
		$(this).mouseout(function() {
			var a_text = $(this).html();
			var a = "<a href='#' class='remove_mouth1' onclick='remove_mouth1()' style='color: dodgerblue;'>/" + a_text + "</a>";
			$('.title_mouth').append(a);
		})
	})
}
function tab_mes_mouth1() {
	$('.div-dg_mouth0').hide()
	$('.div-dg_mouth1').hide()
	$('.div-dg_mouth2').show()
	$('#dg_mouth2').datagrid("reload");
	$('.a_text_mouth').each(function() {
		$(this).mouseout(function() {
			var a_text = $(this).html();
			var a ="<a href='#' class='remove_mouth2' onclick='remove_mouth2()' style='color: dodgerblue;'>/" + a_text + "</a>";
			$('.title_mouth').append(a);
		})
	})
}

function tab_mes_mouth2() {
	$('.div-dg_mouth0').hide()
	$('.div-dg_mouth1').hide()
	$('.div-dg_mouth2').hide()
	$('.div-dg_mouth3').show()
	$('#dg_mouth3').datagrid("reload");
	$('.a_text_mouth').each(function() {
		$(this).mouseout(function() {
			var a_text = $(this).html();
			var a = "<a href='#' class='remove_mouth3' style='color: dodgerblue;'>/" + a_text + "</a>";
			$('.title_mouth').append(a);
		})
	})
}

function remove_mouth1() {
	$('.remove_mouth1').nextAll().remove()
	$('.div-dg_mouth1').show();
	$('.div-dg_mouth2').hide();
	$('.div-dg_mouth3').hide();
	$('#dg_mouth1').datagrid("reload");
}

function remove_mouth2() {
	$('.remove_mouth3').remove()
	$('.div-dg_mouth2').show();
	$('.div-dg_mouth3').hide();
	$('#dg_mouth2').datagrid("reload");
}
//年统计
function tab_mes_year() {
	$('.div-dg_year0').hide()
	$('.div-dg_year1').show()
	$('#dg_year1').datagrid("reload");
	$('.a_text_year').each(function() {
		$(this).mouseout(function() {
			var a_text = $(this).html();
			var a ="<a href='#' class='remove_year1' onclick='remove_year1()' style='color: dodgerblue;'>/" + a_text + "</a>";
			$('.title_year').append(a);
		})
	})
}
function tab_mes_year1() {
	$('.div-dg_year0').hide()
	$('.div-dg_year1').hide()
	$('.div-dg_year2').show()
	$('#dg_year2').datagrid("reload");
	$('.a_text_year').each(function() {
		$(this).mouseout(function() {
			var a_text = $(this).html();
			var a ="<a href='#' class='remove_year2' onclick='remove_year2()' style='color: dodgerblue;'>/" + a_text + "</a>";
			$('.title_year').append(a);
		})
	})
}

function tab_mes_year2() {
	$('.div-dg_year0').hide()
	$('.div-dg_year1').hide()
	$('.div-dg_year2').hide()
	$('.div-dg_year3').show()
	$('#dg_year3').datagrid("reload");
	$('.a_text_year').each(function() {
		$(this).mouseout(function() {
			var a_text = $(this).html();
			var a = "<a href='#' class='remove_year3' style='color: dodgerblue;'>/" + a_text + "</a>";
			$('.title_year').append(a);
		})
	})
}

function remove_year1() {
	$('.remove_year1').nextAll().remove()
	$('.div-dg_year1').show();
	$('.div-dg_year2').hide();
	$('.div-dg_year3').hide();
	$('#dg_year1').datagrid("reload");
}

function remove_year2() {
	$('.remove_year3').remove()
	$('.div-dg_year2').show();
	$('.div-dg_year3').hide();
	$('#dg_year2').datagrid("reload");
}
$(document).ready(function() {
	$('#tab').tabs({
		tabPosition: "bottom"
	});
//	日统计
	$('.remove').click(function() {
		$('.remove').nextAll().remove()
		$('.div-dg0').show();
		$('.div-dg1').hide();
		$('.div-dg2').hide();
		$('.div-dg3').hide();
		$('#dg0').datagrid("reload");
	})
//	月统计
$('.remove_mouth').click(function() {
		$('.remove_mouth').nextAll().remove()
		$('.div-dg_mouth0').show();
		$('.div-dg_mouth1').hide();
		$('.div-dg_mouth2').hide();
		$('.div-dg_mouth3').hide();
		$('#dg_mouth0').datagrid("reload");
	})
//	年统计
$('.remove_year').click(function() {
		$('.remove_year').nextAll().remove()
		$('.div-dg_year0').show();
		$('.div-dg_year1').hide();
		$('.div-dg_year2').hide();
		$('.div-dg_year3').hide();
		$('#dg_year0').datagrid("reload");
	})
});