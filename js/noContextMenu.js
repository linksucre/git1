$(function() {
	//屏蔽右键菜单
	$(document).bind("contextmenu", function(e) {
		return false;
	});
//绑定tabs的右键菜单
	$("#mainContainer").tabs({
		onContextMenu : function(e, title) {
			e.preventDefault();
			$('#tabsMenu').menu('show', {
				left : e.pageX,
				top : e.pageY
			}).data("tabTitle", title);
		}
	});

	//实例化menu的onClick事件
	$("#tabsMenu").menu({
		onClick : function(item) {
			CloseTab(this, item.name);
		}
	});
	//tabs关闭事件的实现
	function CloseTab(menu, type) {
		var curTabTitle = $(menu).data("tabTitle");
		var tabs = $("#tabs");

		if (type === "close" && curTabTitle != '主页') {
			$('#mainContainer').tabs("close", curTabTitle);
			return;
		} else if (type === "Other") {
			var currtab_title = $('#tabsMenu').data("tabTitle");
			$('.tabs-inner span').each(function(i, n) {
				var t = $(n).text();
				if (t != currtab_title && t != '主页') {
					$('#mainContainer').tabs('close', t);
				}
			});
			$('#mainContainer').tabs('select', currtab_title);
			return;
		} else if (type === "All") {
			$('.tabs-inner span').each(function(i, n) {
				var t = $(n).text();
				if (t != '主页') {
					$('#mainContainer').tabs('close', t);
				}
			});
			return;
		}
	}
});



