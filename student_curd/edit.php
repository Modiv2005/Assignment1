<?php

include "db.php";

error_reporting(E_ALL);
ini_set('display_errors',1);

if(isset($_GET['id']))
{

$id=$_GET['id'];

$sql="SELECT * FROM student WHERE id='$id'";

$result=mysqli_query($conn,$sql);

$row=mysqli_fetch_assoc($result);

}

if(isset($_POST['update']))
{

$id=$_GET['id'];

$name=$_POST['name'];

$email=$_POST['email'];

$mobile=$_POST['mobile'];

$department=$_POST['department'];

$sql="UPDATE student SET

name='$name',
email='$email',
mobile='$mobile',
department='$department'

WHERE id='$id'";

if(mysqli_query($conn,$sql))
{

header("Location:index.php");

exit;

}

}

?>

<!DOCTYPE html>

<html>

<head>

<title>Edit Student</title>

<style>

body{

font-family:Segoe UI;

background:linear-gradient(135deg,#e6d6ff,#f8f4ff);

text-align:center;

}

.container{

width:400px;

margin:auto;

margin-top:60px;

background:white;

padding:25px;

border-radius:15px;

box-shadow:0 5px 20px rgba(106,13,173,0.15);

}

h2{

color:#6a0dad;

}

input{

width:90%;

padding:10px;

margin:8px;

border-radius:8px;

border:1px solid #d0b3ff;

background:#faf7ff;

}

button{

background:#9d4edd;

color:white;

border:none;

padding:10px 25px;

border-radius:20px;

cursor:pointer;

}

button:hover{

background:#7b2cbf;

}

</style>

</head>

<body>

<div class="container">

<h2>Edit Student</h2>

<form method="POST">

<input type="text" value="<?php echo $row['prn']; ?>" disabled>

<input type="text" name="name" value="<?php echo $row['name']; ?>" required>

<input type="email" name="email" value="<?php echo $row['email']; ?>" required>

<input type="text" name="mobile" value="<?php echo $row['mobile']; ?>" required>

<input type="text" name="department" value="<?php echo $row['department']; ?>" required>

<br><br>

<button name="update">Update</button>

</form>

</div>

</body>

</html>