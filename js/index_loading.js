var maskWidth = $(window).width();  
var maskHeight = $(window).height();  
var maskHtml = "<div id='maskLoading' class='panel-body' style='z-index:1000;position:absolute;left:0;width:100%;background-color:#1787D1;";  
maskHtml += "height:" + maskHeight + "px;top:0'>";  
maskHtml += "<div style='text-align:center;position:absolute;cursor:wait;left:" + ((maskWidth / 2) - 100) + "px;top:" + (maskHeight / 2 - 50) + "px;width:300px;height:200px;";  
maskHtml += "padding:10px 5px 10px 30px;font-size:30px;color:#FFF;background-color:#1787D1;'>";  
maskHtml += "<span>加载中...</span>";  
maskHtml += "<img src='images/progress.gif'/>";  
maskHtml += "</div>";  
maskHtml += "</div>";  
document.write(maskHtml);  
function CloseMask() {  
    $('#maskLoading').fadeOut('fast', function () {  
        $(this).remove();  
    });  
}  
var loadComplete;  
$.parser.onComplete = function () {  
    if (loadComplete)  
        clearTimeout(loadComplete);  
    loadComplete = setTimeout(CloseMask, 500);  
   }