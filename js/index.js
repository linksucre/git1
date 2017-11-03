$(document).ready(function() {
	//center城市路况点击伸缩
	$('.box1 .p1').click(function() {
		$('.box1_float').toggle();
		if($('.box1 .p1').attr('class') == 'p1') {
			$('.box1 .p1').attr('class', 'p2');
		} else if($('.box1 .p2').attr('class') == 'p2') {
			$('.box1 .p2').attr('class', 'p1');
		}
	})
	//城市路况 提示框
	$('.box1_ul li a').tooltip({
		onShow: function() {
			var t = $(this);
			t.tooltip('tip').unbind().bind('mouseenter', function() {
				t.tooltip('show');
			}).bind('mouseleave', function() {
				t.tooltip('hide');
			}).css({
				backgroundColor: '#F0F0F0',
				borderColor: '#7EABCD',
				height: '21px'
			});
		}
	});
	//指令回馈信息
	$('.box2 a').tooltip({
		position: 'left',
		deltaY: 145,
		onUpdate: function(content) {
			content.panel({
				width: 260,
				height: 270,
				border: false,
				title: '指令回馈信息'
			});
		},
		onShow: function() {
			var t = $(this);
			t.tooltip('tip').unbind().bind('mouseenter', function() {
				t.tooltip('show');
			}).bind('mouseleave', function() {
				t.tooltip('hide');
			});
		},
		content: function() {
			return $('#toolbar');
		}
	});
	//报警声音开关
	$('.tool_box').tooltip({
		position: 'left',
	});
	$('.top').tooltip({
		position: 'top',
	});
	//报警弹框
	$('.baojing').click(function() {
		$('.box3_float').toggle();
	})
	//图例
	$('.topbox_table tr td:nth-child(1) span').click(function() {
		$('.car_mes').toggle();
	})
	//夜间行车
	$('.box4').click(function() {
		$('.box4_float').toggle();
	})
})

//	 上下左右 点击收缩
function northClose() {
		$('#container_head').layout('collapse', 'north');
	}
function southClose() {
	$('#container_head').layout('collapse', 'south');
}
//点击添加选项卡
function addPanel(url, tabTitle) {
	$('.easyui-accordion li div').removeClass("selected");
	addTab(tabTitle, url);
	$(this).parent().addClass("selected");
}
function addTab(subtitle, url) {
	if(!$('#mainContainer').tabs('exists', subtitle)) {
		$('#mainContainer').tabs('add', {
			title: subtitle,
			content: createFrame(url),
			closable: true,
			width: $('#mainPanle').width() - 10,
			height: $('#mainPanle').height() - 26
		});
//		tabClose();
	} else {
		$('#mainContainer').tabs('select', subtitle);
	}
}

function createFrame(url) {
	var s = '<iframe name="mainFrame" scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;overflow-y:hidden;"></iframe>';
	return s;
}