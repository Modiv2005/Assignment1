<?php

$host="localhost";
$user="root";
$password="";
$db="studentdb";

$conn=mysqli_connect($host,$user,$password,$db);

if(!$conn)
{
die("Connection failed");
}

?>