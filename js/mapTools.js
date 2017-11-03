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
    minZoom: 5
});
map.centerAndZoom(new BMap.Point(103.23, 35.33), 5);
map.enableScrollWheelZoom(true);
// map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //右下角，打开
//获取覆盖物个数
var overlays = [];

//-------------------------功能------------------------------
//获取城市路况
var isCityTraffic = false;
var ctrl = null;
$('#cityTraffic').click(function () {
    clearAll()
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
        $(this).removeClass('select')
        map.removeControl(ctrl);
        // ctrl.hideTraffic(); //隐藏交通图层
        isCityTraffic = false;
    }
})

var isPullBoxOpen = false;
// 获取实时区域
$('#pullBox').click(function () {
    clearAll();
    
   if(!isPullBoxOpen) {
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    var keyword = "车辆";
    var pullBox = new BMapLib.SearchInRectangle(map, keyword, {
        renderOptions: {
            map: map,
            strokeWeight: 3,
            strokeColor: "red",
            fillColor: "white",
            opacity: 0.5,
            followText: "拖拽鼠标搜索" + keyword + "",
            autoClose: true,
            autoViewport: false,
            alwaysShowOverlay: false
        }
    });
    pullBox.setLineStyle("dashed");
    pullBox.open()
    isPullBoxOpen = true;
   }else{
  
    $(this).removeClass('select')
    pullBox.close()
    isPullBoxOpen = false;
   }
})



// 获取历史区域
// $('#historyArea').click(function () {
//     clearAll();
//     var keyword = "车辆";
//     var pullBox = new BMapLib.SearchInRectangle(map, keyword, {
//         renderOptions: {
//             map: map,
//             strokeWeight: 2,
//             strokeColor: "green",
//             fillColor: "white",
//             opacity: 0.5,
//             followText: "拉框搜索历史区域",
//             autoClose: true,
//             autoViewport: false,
//             alwaysShowOverlay: false
//         }
//     });
//     pullBox.setLineStyle("dashed");
//     pullBox.open()
// })

// 拉框放大


var myDrag1 = null;
var myDrag2 = null;

function clearAll() {
    if (myDrag2) {
        myDrag2.close()
    }
    if (myDrag1) {
        myDrag1.close()
    }
    map.clearOverlays();
    $('#w').window('close');
    // isDisOpen = false;
    // isZoomMinOpen = false;
    // isZoomMaxOpen = false;
    if (isCityTraffic) {
        map.removeControl(ctrl)
        isCityTraffic = false;
    };
}

//拉框放大
var isZoomMaxOpen = false;
$('#zoomMax').click(function () {
    clearAll()
    if (!isZoomMaxOpen) {
        myDrag1 = new BMapLib.RectangleZoom(map, {
            followText: "拖拽鼠标进行操作",
            "zoomType": 0,
            "strokeWeight": 2,
            "strokeColor": "red",
            "style": "dotted"
        })
        
        myDrag1.open(); //开启拉框放大
        isZoomMaxOpen = true;
    } else {
        myDrag1.close()
        $(this).removeClass('select')
        isZoomMaxOpen = false;
    }

})
//拉框缩小
var isZoomMinOpen = false;
$('#zoomMin').click(function () {

    clearAll()
    if (!isZoomMinOpen) {
        myDrag2 = new BMapLib.RectangleZoom(map, {
            followText: "拖拽鼠标进行操作",
            "zoomType": 1,
            "strokeWeight": 2,
            "strokeColor": "red",
            "style": "dotted"
        })
       
        myDrag2.open(); //开启拉框放大
        isZoomMinOpen = true;
    } else {
        $(this).removeClass('select')
        myDrag2.close()
        isZoomMinOpen = false;
    }
})

//全局地图
var isFullExtent = false;
$('#fullextent').click(function () {
    clearAll();
    if(!isFullExtent){
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 5);
        isFullExtent = true;
    }else{
        $(this).removeClass('select')
        isFullExtent = false;
    }
    
})


//平移地图
var isDraggingOpen = false;
$("#Dragging").click(function () {
    // console.log("1")
    clearAll();
   if(!isDraggingOpen) {
    map.enableDragging();
    // map.enableInertialDragging();
    isDraggingOpen = true;
   }else{
    $(this).removeClass('select')
    isDraggingOpen = false;
   }

})

//========================================================================
//测距
var myDis = new BMapLib.DistanceTool(map, {
    "followText": "点击测量,双击结束", //测距过程中，提示框文字, 
    "unit": "metric", //测距结果所用的单位制，可接受的属性为"metric"表示米制和"us"表示美国传统单位, 
    "lineColor": "rgb(227, 84, 47)", //折线颜色, 
    "lineStroke": 2, //.. 折线宽度, 
    "opacity": 1, //透明度, 
    "lineStyle": "solid" //折线的样式，只可设置solid和dashed, 
});

var isDisOpen = false;
$('#distance').click(function () {

    clearAll();
    if (!isDisOpen) {
        myDis.open();
        isDisOpen = true;
    } else {
        $(this).removeClass('select')
        myDis.close(); //关闭鼠标测距
        isDisOpen = false;
    }
})

//=======================================================================

//测量面积
var isMeasureAreaOpen = false;
$('#measureArea').click(function () {

    clearAll()
    if(!isMeasureAreaOpen){
        draw(BMAP_DRAWING_POLYGON);
        isMeasureAreaOpen = true;
    }else{
        $(this).removeClass('select')
        isMeasureAreaOpen  = false;
    }
})
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
    // enableDrawingTool: true, //是否显示工具栏    
    drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置    
        offset: new BMap.Size(5, 5), //偏离值    
    },
    circleOptions: styleOptions, //圆的样式    
    polylineOptions: styleOptions, //线的样式    
    polygonOptions: styleOptions, //多边形的样式    
    rectangleOptions: styleOptions //矩形的样式    
});

//添加鼠标绘制工具监听事件，用于获取绘制结果    
drawingManager.addEventListener('overlaycomplete', overlaycomplete);

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
        $("resultShape").innerHTML = '';
        //地图上覆盖物的个数
        for (var i = count - 1; i < overlays.length; i++) {
            var overlay = overlays[i].getPath();
            $("resultShape").innerHTML = $("resultShape").innerHTML + overlay.length + '边形:<br/>';
            //每个覆盖物的点数
            for (var j = 0; j < overlay.length; j++) {
                var grid = overlay[j];
                var arr = [];
                arr.push(Number(grid.lng), Number(grid.lat));
                pointsArr.push(arr);
                $("resultShape").innerHTML = $("resultShape").innerHTML + (j + 1) + "个点:(" + grid.lng +
                    "," + grid.lat +
                    ");<br/>";

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
    // 弹框显示面积
    var opts = {
        width: 80, // 信息窗口宽度
        height: 10 // 信息窗口高度
    }


    if (points.length > 2) {
        var areaMeters2 = PlanarPolygonAreaMeters2(points);
        if (areaMeters2 > 1000000.0) {
            areaMeters2 = SphericalPolygonAreaMeters2(points);
            var infoWindow = new BMap.InfoWindow("面积为" + areaMeters2 + "平方米", opts); // 创建信息窗口对象 
            map.openInfoWindow(infoWindow, point); //开启信息窗口
            // console.log("面积为" + areaMeters2 + "平方米");
        } else {
            // console.log("面积为" + areaMeters2 + "平方米");
            var infoWindow = new BMap.InfoWindow("面积为" + areaMeters2 + "平方米", opts); // 创建信息窗口对象 
            map.openInfoWindow(infoWindow, point); //开启信息窗口
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
var isQueryOpen = true;
$('#query').click(function () {
    if (isQueryOpen) {
        $('#w5').window('open');
        isQueryOpen = false;
    } else {
        $('#w5').window('close');
        $(this).removeClass('select')
        isQueryOpen = true;
    }
})
//业务点
var isBusinessOpen = true;
$('#business').click(function () {
    if (isBusinessOpen) {
        $('#e').window('open');
        isBusinessOpen = false;
    } else {
        $('#e').window('close');
        $(this).removeClass('select')
        isBusinessOpen = true;
    }
})
