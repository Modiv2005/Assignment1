<?php

include "db.php";

if(isset($_GET['id']))
{

$id=$_GET['id'];

$sql="DELETE FROM student WHERE id=$id";

mysqli_query($conn,$sql);

header("Location:index.php");

exit;

}

?>