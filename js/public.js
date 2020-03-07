//定义一个函数  功能实现通过id查找页面元素  返回值就是一个页面元素
function $id(id) {
	return document.getElementById(id);
}
//定义一个函数 功能返回创建的元素
function create(ele) {
	return document.createElement(ele);
}

//获取任意区间整数值
function rand(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}
//封装阻止冒泡函数
function stopPro(ev) {
	if(ev.stopPropagation) {
		return ev.stopPropagation();
	} else {
		return ev.cancelBubble = true;
	}
}
//获取随机的颜色值
function getColor() {
	var str = "0123456789abcdef";
	//从字符串中随机取出六个字符 进行拼接
	//下标范围 ： 0--15
	var color = "#";
	for(var i = 1; i <= 6; i++) {
		color += str.charAt(rand(0, 15)); //根据随机下标得到对应的字符
	}
	return color;
}

//自定义日期时间格式  
function dateToString(now) {
	var year = now.getFullYear();
	var month = toTwo(now.getMonth() + 1);
	var d = toTwo(now.getDate());
	var h = toTwo(now.getHours());
	var m = toTwo(now.getMinutes());
	var s = toTwo(now.getSeconds());
	return year + "-" + month + "-" + d + " " + h + ":" + m + ":" + s;
}

function toTwo(str) {
	return str < 10 ? "0" + str : str;
}

//将字符串转成日期时间格式
function stringToDate(str) {
	return new Date(str);
}

//封装时间差函数 ： 
function diff(start, end) {
	return(end.getTime() - start.getTime()) / 1000;
}

//碰撞函数
function pz(obj1, obj2) {
	var L1 = obj1.offsetLeft;
	var R1 = obj1.offsetLeft + obj1.offsetWidth;
	var B1 = obj1.offsetTop + obj1.offsetHeight;
	var T1 = obj1.offsetTop;

	var L2 = obj2.offsetLeft;
	var R2 = obj2.offsetLeft + obj2.offsetWidth;
	var B2 = obj2.offsetTop + obj2.offsetHeight;
	var T2 = obj2.offsetTop;

	//碰上返回true  碰不上返回false
	if(R2 < L1 || R1 < L2 || B1 < T2 || B2 < T1) { // 碰不上条件
		return false;
	} else {
		return true; //碰上了
	}
}

