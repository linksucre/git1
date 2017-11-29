//   分页   
$(function() {
//	function pagerFilter(data) {
//		if(typeof data.length == 'number' && typeof data.splice == 'function') { // is array  
//			data = {
//				total: data.length,
//				rows: data
//			}
//		}
//		var dg = $(this);
//		var opts = dg.datagrid('options');
//		var pager = dg.datagrid('getPager');
//		pager.pagination({
//			onSelectPage: function(pageNum, pageSize) {
//				opts.pageNumber = pageNum;
//				opts.pageSize = pageSize;
//				pager.pagination('refresh', {
//					pageNumber: pageNum,
//					pageSize: pageSize
//				});
//				dg.datagrid('loadData', data);
//			}
//		});
//		if(!data.originalRows) {
//			data.originalRows = (data.rows);
//		}
//		var start = (opts.pageNumber - 1) * parseInt(opts.pageSize);
//		var end = start + parseInt(opts.pageSize);
//		data.rows = (data.originalRows.slice(start, end));
//		return data;
//	}
//	$('#dg').datagrid({
//		loadFilter: pagerFilter
//	});
//	$('#dg1').datagrid({
//		loadFilter: pagerFilter
//	});
//	$('#dg2').datagrid({
//		loadFilter: pagerFilter
//	});
//	$('#dg3').datagrid({
//		loadFilter: pagerFilter
//	});
	//	tree点击文字展开关闭
	$('#tree_open').tree({
		onClick: function (node) {  
		    $(this).tree(node.state === 'closed' ? 'expand' : 'collapse', node.target);  
		    node.state = node.state === 'closed' ? 'open' : 'closed';  
		}  
	})
// west搜索框点击清除里面的内容

	$('.search').mouseenter(function() {
		$('.qingchu').show();
	})
	$('.search').mouseleave(function() {
		$('.qingchu').hide();
	})
	$('.qingchu').click(function() {
		$('.combo-text').val('');      
	})
	
	
	$('.clear_mes').mouseenter(function() {
		$('.clearMess').show();
	})
	$('.clear_mes').mouseleave(function() {
		$('.clearMess').hide();
	})
	$('.clearMess').click(function() {
		$('.easyui-combotree').combotree("clear")
	})
//重置树
	$('.treeReflshBtn').click(function() {
		$(".tree").tree('reload');
     });
//设置列表显示隐藏
     $('.tree_show_set .filter').click(function() {
		if($(this).attr('class') == 'filter') {
			$(this).attr('class', 'dui');
			$('.tree_show_set').hide();
		} else if($(this).attr('class') == 'dui') {
			$(this).attr('class', 'filter');
			$('.tree_show_set').hide();
		}
	})
	$('.treeShowSet').mouseenter(function() {
		$('.tree_show_set').show();
	})
	$('.tree_show_set').mouseleave(function() {
		$('.tree_show_set').hide();
	})
});	

//查询
function refreshbtn(dg) {
	$(dg).datagrid("reload");
}
//模态框
function alert(w) {
	$(w).window('open');
}
//点击清空按钮出发事件
function clearSearch(dg) {
    $(dg).datagrid("load", {});//重新加载数据，无填写数据，向后台传递值则为空
    $(".clear_box").find("input").val("");//找到form表单下的所有input标签并清空
  }
//删除表格数据	
function deleteRows(dg) {
		  var deletedData = $(dg).datagrid('getChecked');
		  for (var i = deletedData.length - 1; i >= 0; i--) {
		   var rowIndex = $(dg).datagrid('getRowIndex', deletedData[i]);
		  if (deletedData.length>0) {  
            	$(dg).datagrid('deleteRow', rowIndex)
		    }
		  }
}
//easyui导出
window.onload = function() {
	var tableToExcel = (function() {
		var uri = 'data:application/vnd.ms-excel;base64,',
			template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">' +
			'<head><meta http-equiv="Content-type" content="text/html;charset=UTF-8" /><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' +
			'</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
			base64 = function(s) {
				return window.btoa(unescape(encodeURIComponent(s)))
			},
			format = function(s, c) {
				return s.replace(/{(\w+)}/g, function(m, p) {
					return c[p];
				})
			};

		return function(table, name) {
			var ctx = {
				worksheet: name || 'Worksheet',
				table: table.innerHTML
			}
			return uri + base64(format(template, ctx));
		}
	})();

	$(function() {
		$('#exportExcel').on('click', function() {
			var $this = $(this);
			//设定下载的文件名及后缀
			$this.attr('download', '报警记录.xls');
			//设定下载内容
			$this.attr('href', tableToExcel($('.datagrid-view2')[0], '报警记录'));
		});
	});
}
