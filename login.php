<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","root");
	mysql_select_db("shop",$db);
	mysql_query("set names utf8");
	//接收数据
	$username = $_POST["uname"];
	$userpwd = $_POST["psw"];
	$sql = "select * from users where uname='$username'";
	$res =  mysql_query( $sql );//返回一个结果集
	//mysql_fetch_array() 取出结果集中的一条数据  返回值是一个数组
	$arr = mysql_fetch_array( $res );	
	
	//返回结果
	// 如果数组中有数据  说明用户名存在的 否则用户名出错
	if( $arr ){  //表示数组中有数据
		//判断密码是否相等  如果不相等，说明密码出错了
		//$arr["upwd"] 数据库中的密码
		if( $arr["upwd"] == $userpwd ){
			echo "<script>location.href='judge.html?name=successLog&user=$username'</script>";
		}else{
			echo "<script>location.href='judge.html?name=errLpsw'</script>";
		}
	}else{
		echo "<script>location.href='judge.html?name=errLname'</script>";
	}
?>