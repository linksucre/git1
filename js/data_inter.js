//获取信息
	function infor(dg,formId,url,alertId){
		 var row = $(dg).datagrid('getSelected'); 
         $(formId).form("load", row);
         var url = url+row.id 
         $(alertId).window('close');
	}
//添加
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
				console.log("ok")
				  var deletedData = $(dg).datagrid('getChecked');
				  for (var i = deletedData.length - 1; i >= 0; i--) {
				   var rowIndex =deletedData[i].id
				   if (deletedData.length>0) {  
				  		 $.ajax({
							method: 'GET',
							contentType: "application/json",
							url:url+rowIndex,
							success: function(data) {
		                          deleteRows(dg)  //前端删除数据
		                          $(dg).datagrid('reload');
		                          
							},
							error: function() {
								alert('error');
							}
						});
				    }
				  }
			})
		}
	}
	
	//删除2之假删除
	function del(dg,alertId1,alertId2) {
		var deletedData = $(dg).datagrid('getChecked');
		  if(deletedData.length==0){//选中
		  		$(alertId1).window('open');
		  	
		  }else{
		  	$(alertId2).window('open');
		 
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
//离职/修改    不能修改数据1
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
   
 	// 不能修改数据2  弹框提示固定   
		function xiugai(dg,alertId1,alertId2,alertId3) {
			//判断是否选中了一条数据
			var rowIndex = $(dg).datagrid('getSelected');
			if(rowIndex == null) { //没选中
				$(alertId1).window('open');
			} else if(rowIndex != null) { //选中
				//是否选中单元格中的未处理
				var ids = [];
				var rows = $(dg).datagrid('getSelections');
				for(var i = 0; i < rows.length; i++) {
					ids.push(rows[i].id);
				}
				if(ids.length == 1) {
					alert(alertId2)
				} else {
					alert(alertId3)
				}
				
			}
		}
   function closeBtn(alertId,formClass){
   	  $(alertId).window('close');
	  $(formClass).html('');
   }
	