/**
 * created by phy yeung 
 * at 2017-10-17
 */



//  点击功能修改样式
$('.box1_ul').find('a').click(function () {
    $(this).addClass('select').parent().siblings().children('a').removeClass('select')
    $(this).parent().parent().parent().addClass('active')
})

// 百度地图API功能
var map = new BMap.Map("allmap", {
    minZoom: 5,
    enableMapClick: false
});
map.centerAndZoom(new BMap.Point(103.23, 35.33), 5);
map.enableScrollWheelZoom(true);
map.addControl(new BMap.OverviewMapControl({
    isOpen: true,
    anchor: BMAP_ANCHOR_BOTTOM_RIGHT
})); //右下角，打开
var menu = new BMap.ContextMenu();
var txtMenuItem = [{
        text: '放大',
        callback: function () {
            map.zoomIn()
        }
    },
    {
        text: '缩小',
        callback: function () {
            map.zoomOut()
        }
    }
];
for (var i = 0; i < txtMenuItem.length; i++) {
    menu.addItem(new BMap.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100));
}
map.addContextMenu(menu);

//-------------------------功能------------------------------
var isCityTraffic = false;
var isPullBoxOpen = false;
var isHistoryAreaOpen = false;
var isZoomMaxOpen = false;
var isZoomMinOpen = false;
var isFullExtent = false;
var isDraggingOpen = false;
var isDisOpen = false;
var isMeasureAreaOpen = false;
var isQueryOpen = false;
var isBusinessOpen = false;
var ctrl = null;
var myDrag1 = null;
var myDrag2 = null;
var pullBox = null;
var pullBox1 = null;

//获取城市路况
$('#cityTraffic').click(function () {
    clearAll("cityTraffic")
    if (!isCityTraffic) {
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        ctrl = new BMapLib.TrafficControl();
        map.addControl(ctrl);
        ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);
        ctrl.showTraffic({
            predictDate: {
                hour: 15,
                weekday: 5
            }
        })
        isCityTraffic = true;

    } else {
        //移除控件及图层
        $(this).removeClass('select');
        map.removeControl(ctrl);
        ctrl.hideTraffic();
        isCityTraffic = false;
    }
})


// 获取实时区域
$('#pullBox').click(function () {
    clearAll("pullBox");

    if (!isPullBoxOpen) {
        // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        var keyword = "车辆";
        pullBox = new BMapLib.SearchInRectangle(map, keyword, {
            renderOptions: {
                map: map,
                strokeWeight: 3,
                strokeColor: "red",
                fillColor: "white",
                opacity: 0.5,
                followText: "拖拽鼠标搜索实时" + keyword + "",
                autoClose: true,
                autoViewport: false,
                alwaysShowOverlay: false
            }
        });
        pullBox.setLineStyle("dashed");
        pullBox.open();
        isPullBoxOpen = true;
    } else {

        $(this).removeClass('select')
        if (pullBox) {
            pullBox.close();
        }
        isPullBoxOpen = false;
    }
})

// 获取历史区域

$('#historyArea').click(function () {
    clearAll("pullBox1");
    if (!isHistoryAreaOpen) {
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        var keyword = "车辆";
        pullBox1 = new BMapLib.SearchInRectangle(map, keyword, {
            renderOptions: {
                map: map,
                strokeWeight: 3,
                strokeColor: "red",
                fillColor: "white",
                opacity: 0.5,
                followText: "拖拽鼠标搜索历史" + keyword + "",
                autoClose: true,
                autoViewport: false,
                alwaysShowOverlay: false
            }
        });
        pullBox1.setLineStyle("solid");
        pullBox1.open();
        isHistoryAreaOpen = true;
    } else {
        $(this).removeClass('select');
        if (pullBox1) {
            pullBox1.close();
        }
        isHistoryAreaOpen = false;
    }
})


//拉框放大

$('#zoomMax').click(function () {

    clearAll("zoomMax")
    if (!isZoomMaxOpen) {
        myDrag1 = new BMapLib.RectangleZoom(map, {
            followText: "拖拽鼠标进行放大",
            "zoomType": 0,
            "strokeWeight": 2,
            "strokeColor": "red",
            "style": "dotted"
        })

        myDrag1.open();
        isZoomMaxOpen = true;
    } else {
        myDrag1.close();
        $(this).removeClass('select');
        isZoomMaxOpen = false;
    }

})
//拉框缩小

$('#zoomMin').click(function () {

    clearAll("zoomMin")
    if (!isZoomMinOpen) {
        myDrag2 = new BMapLib.RectangleZoom(map, {
            followText: "拖拽鼠标进行缩小",
            "zoomType": 1,
            "strokeWeight": 2,
            "strokeColor": "red",
            "style": "dotted"
        })

        myDrag2.open();
        isZoomMinOpen = true;
    } else {
        $(this).removeClass('select');
        myDrag2.close();
        isZoomMinOpen = false;
    }
})

//全局地图

$('#fullextent').click(function () {
    clearAll("fullextent");
    if (!isFullExtent) {
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 5);
        isFullExtent = true;
    } else {
        $(this).removeClass('select');
        isFullExtent = false;
    }

})


//前后视图

var arrs = [];
var centerSpots = [];
var centerSpot = ""
var u = map.getZoom()
//实时获取地图级别    
var scrollFunc = function (e) {
    e = e || window.event;
    var u = map.getZoom(); /*地图级别*/
    for (var i = 1; i < 18; i++) {
        if (u == i) {
            arrs.push(u)
            $.unique(arrs);
            // console.log(arrs)
        }
    }
}

map.addEventListener("dragstart", function (evt) {　
    var cp = map.getCenter();
    centerSpot = {
        lng: cp.lng,
        lat: cp.lat
    }
    centerSpots.push(centerSpot);
    // console.log(centerSpots)
});
$("#preview").click(function () {
    i++;
    if (centerSpots.length - i <= 0) {
        map.panTo(new BMap.Point(centerSpots[0].lng, centerSpots[0].lat));
        i = centerSpots.length
        //			 return;
    } else if (centerSpots.length - i >= centerSpots.length) {
        console.log(centerSpots.length - i)
        map.panTo(new BMap.Point(centerSpots[centerSpots.length - 1].lng, centerSpots[centerSpots.length - 1].lat));
    } else {
        map.panTo(new BMap.Point(centerSpots[centerSpots.length - i].lng, centerSpots[centerSpots.length - i].lat));
    }

})
$("#nextview").click(function () {
    i--;
    if (centerSpots.length - i >= centerSpots.length) {
        map.panTo(new BMap.Point(centerSpots[centerSpots.length - 1].lng, centerSpots[centerSpots.length - 1].lat));
        i = 0
        //			 return;
    } else if (centerSpots.length - i <= 0) {
        map.panTo(new BMap.Point(centerSpots[0].lng, centerSpots[0].lat));

    } else {
        map.panTo(new BMap.Point(centerSpots[centerSpots.length - i].lng, centerSpots[centerSpots.length - i].lat));
    }
    console.log(centerSpots.length - i)
})


/*注册事件*/
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome


//平移地图

$("#Dragging").click(function () {
    clearAll("Dragging");
    if (!isDraggingOpen) {
        map.enableDragging();
        // map.enableInertialDragging();
        isDraggingOpen = true;
    } else {
        $(this).removeClass('select');
        isDraggingOpen = false;
    }

})

//获取覆盖物个数
var overlays = [];
var overlaycomplete = function (e) {
    overlays.push(e.overlay);
    //绘完图后 调用 获取点坐标函数
    getPoint()
};
var styleOptions = {
    strokeColor: "red", //边线颜色。    
    fillColor: "red", //填充颜色。当参数为空时，圆形将没有填充效果。    
    strokeWeight: 3, //边线的宽度，以像素为单位。    
    strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。    
    fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。    
    strokeStyle: 'dashed' //边线的样式，solid或dashed。    
}

//实例化鼠标绘制工具    
var drawingManager = new BMapLib.DrawingManager(map, {
    isOpen: false, //是否开启绘制模式     
    drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置    
        offset: new BMap.Size(5, 5), //偏离值    
    },
    circleOptions: styleOptions, //圆的样式    
    polylineOptions: styleOptions, //线的样式    
    polygonOptions: styleOptions, //多边形的样式    
    rectangleOptions: styleOptions //矩形的样式    
});
//测距
var myDis = new BMapLib.DistanceTool(map, {
    "followText": "点击测量,双击结束", //测距过程中，提示框文字, 
    "unit": "metric", //测距结果所用的单位制，可接受的属性为"metric"表示米制和"us"表示美国传统单位, 
    "lineColor": "rgb(227, 84, 47)", //折线颜色, 
    "lineStroke": 2, //.. 折线宽度, 
    "opacity": 1, //透明度, 
    "lineStyle": "solid" //折线的样式，只可设置solid和dashed, 
});

//测量面积

$('#distance').click(function () {
    clearAll("myDis");
    if (!isDisOpen) {
        myDis.open();
        isDisOpen = true;
    } else {
        $(this).removeClass('select');
        isDisOpen = false;
        myDis.close();
    }
})

//添加鼠标绘制工具监听事件，用于获取绘制结果    
drawingManager.addEventListener('overlaycomplete', overlaycomplete);
$('#measureArea').click(function () {
    clearAll('measureArea');
    if (!isMeasureAreaOpen) {
        draw(BMAP_DRAWING_POLYGON);
        isMeasureAreaOpen = true;
    } else {
        $(this).removeClass('select');
        isMeasureAreaOpen = false;
        drawingManager.close();
    }

})

function draw(type) {
    drawingManager.open();
    drawingManager.setDrawingMode(type);
}
var count = 0;
var getPoint = (function () {
    count = 0
    return function () {
        count++;
        var pointsArr = [];
        // $("resultShape").innerHTML = '';
        //地图上覆盖物的个数
        for (var i = count - 1; i < overlays.length; i++) {
            var overlay = overlays[i].getPath();
            // $("resultShape").innerHTML = $("resultShape").innerHTML + overlay.length + '边形:<br/>';
            //每个覆盖物的点数
            for (var j = 0; j < overlay.length; j++) {
                var grid = overlay[j];
                var arr = [];
                arr.push(Number(grid.lng), Number(grid.lat));
                pointsArr.push(arr);
                // $("resultShape").innerHTML = $("resultShape").innerHTML + (j + 1) + "个点:(" + grid.lng +
                // "," + grid.lat +
                // ");<br/>";

            }
        }
        // console.log(pointsArr);
        calculateArea(pointsArr);
    }

})()

//---------------计算面积公式----------------------------

var earthRadiusMeters = 6371000.0;
var metersPerDegree = 2.0 * Math.PI * earthRadiusMeters / 360.0;
var radiansPerDegree = Math.PI / 180.0;
var degreesPerRadian = 180.0 / Math.PI;

function calculateArea(points) {
    if (points.length > 2) {
        var areaMeters2 = PlanarPolygonAreaMeters2(points);
        // 测量结束后显示label信息
        var label = new BMap.Label("总面积:" + areaMeters2 + "平方米", {
            offset: new BMap.Size(-5),
            position: point
        });

        label.setStyle({
            width: "200px",
            height: "22px",
            lineHeight: "25px",
            color: '#ff6319',
            border: '1px solid rgb(255, 1, 3)',
            textAlign: "center",
        });
        // 设置关闭label信息框按钮
        var labelClose = new BMap.Label('x', {
            offset: new BMap.Size(5, -20),
            position: point
        });

        labelClose.setStyle({
            width: "10px",
            height: "10px",
            lineHeight: "10px",
            color: '#ff6319',
            border: '1px solid rgb(255, 1, 3)',
            textAlign: "center",
            cursor: "pointer"
        });
        labelClose.addEventListener('click', function () {
            map.clearOverlays();
        })
        if (areaMeters2 > 1000000.0) {
            areaMeters2 = SphericalPolygonAreaMeters2(points);
            map.addOverlay(label); //为标注添加一个标签
            map.addOverlay(labelClose); //关闭按钮
        } else {
            map.addOverlay(label); //为标注添加一个标签
            map.addOverlay(labelClose); //关闭按钮
        }


    }
}

/*球面多边形面积计算*/
function SphericalPolygonAreaMeters2(points) {
    var totalAngle = 0;
    for (var i = 0; i < points.length; i++) {
        var j = (i + 1) % points.length;
        var k = (i + 2) % points.length;
        totalAngle += Angle(points[i], points[j], points[k]);
    }
    var planarTotalAngle = (points.length - 2) * 180.0;
    var sphericalExcess = totalAngle - planarTotalAngle;
    if (sphericalExcess > 420.0) {
        totalAngle = points.length * 360.0 - totalAngle;
        sphericalExcess = totalAngle - planarTotalAngle;
    } else if (sphericalExcess > 300.0 && sphericalExcess < 420.0) {
        sphericalExcess = Math.abs(360.0 - sphericalExcess);
    }
    return sphericalExcess * radiansPerDegree * earthRadiusMeters * earthRadiusMeters;
}

/*角度*/
function Angle(p1, p2, p3) {
    var bearing21 = Bearing(p2, p1);
    var bearing23 = Bearing(p2, p3);
    var angle = bearing21 - bearing23;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
/*方向*/
function Bearing(from, to) {
    var lat1 = from[1] * radiansPerDegree;
    var lon1 = from[0] * radiansPerDegree;
    var lat2 = to[1] * radiansPerDegree;
    var lon2 = to[0] * radiansPerDegree;
    var angle = -Math.atan2(Math.sin(lon1 - lon2) * Math.cos(lat2), Math.cos(lat1) * Math.sin(lat2) - Math.sin(
        lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));
    if (angle < 0) {
        angle += Math.PI * 2.0;
    }
    angle = angle * degreesPerRadian;
    return angle;
}

/*平面多边形面积*/
function PlanarPolygonAreaMeters2(points) {
    var a = 0;
    for (var i = 0; i < points.length; ++i) {
        var j = (i + 1) % points.length;
        var xi = points[i][0] * metersPerDegree * Math.cos(points[i][1] * radiansPerDegree);
        var yi = points[i][1] * metersPerDegree;
        var xj = points[j][0] * metersPerDegree * Math.cos(points[j][1] * radiansPerDegree);
        var yj = points[j][1] * metersPerDegree;
        a += xi * yj - xj * yi;
    }
    return Math.abs(a / 2);
}


//查询
var isQueryOpen = false;
$('#query').click(function () {
    clearAll('query')
    if (!isQueryOpen) {
        $('#w5').window('open');
        isQueryOpen = true;
    } else {
        $('#w5').window('close');
        $(this).removeClass('select')
        isQueryOpen = false;
    }
})

$('#search1').click(function () {
    $('#w5').window('close');
    $("#query").removeClass('select');
    isQueryOpen = false;
})


//业务点
$('#business').click(function () {
    if (!isBusinessOpen) {
        $('#e').window('open');
        isBusinessOpen = true;
    } else {
        $('#e').window('close');
        $(this).removeClass('select')
        isBusinessOpen = false;
    }
})
// 业务点全选效果
$("#selectAll").click(function () {
    $("#e input:checkbox").prop("checked", true);
});

$("#unselect").click(function () {
    $("#e input:checkbox").prop("checked", false);
});
$("#sure").click(function () {
    $("#e").window('close');
    $("#business").removeClass('select');
    isBusinessOpen = false;
})

//清除所有覆盖物
function clearAll(type) {
    if (isCityTraffic && type != "cityTraffic") {
        map.removeControl(ctrl);
        ctrl.hideTraffic();
        isCityTraffic = false;
    };
    if (isPullBoxOpen && type != "pullBox") {
        pullBox.close();
        isPullBoxOpen = false;
    }

    if (isHistoryAreaOpen && type != "pullBox1") {
        pullBox1.close();
        isHistoryAreaOpen = false;
    }
    if (isZoomMaxOpen && type != "zoomMax") {
        myDrag1.close();
        isZoomMaxOpen = false;
    }
    if (isZoomMinOpen && type != "zoomMin") {
        myDrag2.close();
        isZoomMinOpen = false;
    }

    if (isFullExtent && type != "FullExtent") {

        isFullExtent = false;
    }
    if (isDraggingOpen && type != "Dragging") {
        isDraggingOpen = false;
    }
    if (isDisOpen && type != "myDis") {
        myDis.close();
        isDisOpen = false;
    }

    if (isMeasureAreaOpen && type != "measureArea") {
        drawingManager.close();
        isMeasureAreaOpen = false;
    }
    if (isQueryOpen && type != "query") {
        isQueryOpen = false;
    }
    map.clearOverlays();
    $('#w').window('close');
}