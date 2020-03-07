// url :请求路径
// fn :  该参数是一个函数，回调函数
// data :  接口的参数

//get方式
function ajaxGet(url,fn,data){
	if(data){
		url=url+"?"+data;
	}
	
	var ajax=null;
	if (window.XMLHttpRequest) {
		ajax=new XMLHttpRequest();
	} else{
		ajax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajax.open('GET',url,true)	
	ajax.send();
	ajax.onreadystatechange=function(){
		if (ajax.status==200&&ajax.readyState==4) {
			fn(ajax.responseText);
		}
	}
}
//post方式
function ajaxPost(url,fn,data){
	if(data){
		url=url+"?"+data;
	}
	
	var ajax=null;
	if (window.XMLHttpRequest) {
		ajax=new XMLHttpRequest();
	} else{
		ajax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajax.open('POST',url,true);
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send(data);
	ajax.onreadystatechange=function(){
		if (ajax.status==200&&ajax.readyState==4) {
			fn(ajax.responseText);
		}
	}
}