<?php
	//接收数据
	$phone=$_POST['uname'];
	$pwd=$_POST['upsw'];
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","root");
	mysql_select_db("lijiagouwu",$db);
	mysql_query("set names utf8");
	//首先 根据接收email取邮箱中查询  
	// $sqlSel = "select * from users where uname='$phone'";
	//如果能够从数据库中查出数据 说明该邮箱是存在
	 $res = mysqli_query($db, 'INSERT INTO `users` VALUES(null, "郭翔2", 20, "男", "1906")');
	// print '1111';
	var_dump ($res)
	// $arr = mysql_fetch_array( $res );
	// if( $arr ){ //数组中有数据  提示该邮箱已被注册
	// 	echo "<script>location.href='judge.html?name=failemail'</script>";
	// }else{
	// 	//数据库中没有当前接收的邮箱  将这个邮箱存入到数据中
	// 	$sqlIns = "insert into users(uname,upwd) values('$phone','$pwd')";
	// 	$row = mysql_query( $sqlIns );
	// 	// echo $row ;
	// 	// if( $row ){
	// 	// 	echo "<script>location.href='judge.html?name=success&user=$phone';</script>";
	// 	// }else{
	// 	// 	echo "<script>alert('注册失败');location.href='register.html';</script>";
	// 	// }
	// }
?>