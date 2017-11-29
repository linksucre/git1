//获取信息
	function infor(dg,formId,url,alertId){
		 var row = $(dg).datagrid('getSelected'); 
         $(formId).form("load", row);
         var url = url+row.id 
         $(alertId).window('close');
         console.log(row)
	}
//添加 input添加数据
	function addMes(formId,dg,alertId,url){
		$(alertId).window('open');
		$(formId).form({
			url:url,
			success: function(date) {
				$(dg).datagrid('reload');
				$(alertId).window('close');
			}
		});
		$(formId).form("clear");
	}
//表格添加数据
//function addTab(dg,formId,url){
//	 var row = $(dg).datagrid('getSelected');
//	 $(formId).form({
//			url:url,
//			success: function(date) {
//				$(dg).datagrid('reload');
//				$(alertId).window('close');
//			}
//	});
//	$(formId).form("clear");
//}
//查询 
	function query(dgName,formId){
		$(dgName).datagrid("load", sy.serializeObject($(formId).form()));
	}
// 删除   
	function delData(dg,alertId1,alertId2,sureBtn,url){
		var rows = $(dg).datagrid('getSelected');
		if(rows == null){
			alert(alertId1)
		}else{
			alert(alertId2)
			$(sureBtn).click(function(){
				  var deletedData = $(dg).datagrid('getChecked');
				  var arr=[]
				  for (var i = deletedData.length - 1; i >= 0; i--) {
				   var rowIndex =deletedData[i].id
				     arr.push(rowIndex)
				  }
		  		 $.ajax({
					method: 'POST',
					contentType: "application/json",
					url:url+arr,
					success: function(data){
                       deleteRows(dg)  //前端删除数据
                       $(dg).datagrid('reload');
					},
					error: function() {
						alert('error');
					}
				});
			})
		}
	}
//修改     可以修改数据
 function updateData(dg,alertId1,alertId2,alertId3,formId,url,modifyBtn){
	 var list = $(dg).datagrid('getSelections');
	  if(list.length==0){
	  	alert(alertId1)
	  }else if(list.length==1){
	  	alert(alertId2)
	  }else if(list.length>1){
	  	alert(alertId3)
	  }
	var row = $(dg).datagrid('getSelected'); 
	$(formId).form("load", row);
	if(row){
		var new_url = url + row.id  
	}            
	$(modifyBtn).click(function(){
		$(formId).form({
            url: new_url,
            success: function(data) {
				$(alertId2).window('close')
				$(dg).datagrid('reload');
			}
          })
	})
 }
//离职/修改    不能修改数据
    function windowData(nameClass,alertClass){
   	  	var list = $('#dg').datagrid('getSelections');
	  	if(list.length==0){
	  		 alert('#w4')
	  	}else if(list.length>=1){
	  		var name = [];
			for(var i=0; i<list.length; i++){		
				name.push(list[i].userNameRel)	
			}
			var str = "<span>"+name+"</span>"
			$(nameClass).append(str);
			alert(alertClass)
	  	}
    }
    function closeBtn(alertId,formClass){
   	  $(alertId).window('close');
	  $(formClass).html('');
    }
