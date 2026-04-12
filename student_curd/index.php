<?php

include "db.php";

if(isset($_POST['submit']))
{

$prn=$_POST['prn'];
$name=$_POST['name'];
$email=$_POST['email'];
$mobile=$_POST['mobile'];
$department=$_POST['department'];

$check="select * from student where prn='$prn'";

$result=mysqli_query($conn,$check);

if(mysqli_num_rows($result)>0)
{
echo "<script>alert('PRN already exists');</script>";
}
else
{

$sql="insert into student(prn,name,email,mobile,department)

values('$prn','$name','$email','$mobile','$department')";

mysqli_query($conn,$sql);

}

}

?>

<!DOCTYPE html>

<html>

<head>

<title>Student Management System</title>

<style>

body{

font-family: 'Poppins', sans-serif;

background:linear-gradient(135deg,#e6d6ff,#f8f4ff);

text-align:center;

}

h1{

color:#6a0dad;

letter-spacing:2px;

margin-top:20px;

}

.container{

width:420px;

margin:auto;

margin-top:20px;

background:white;

padding:25px;

border-radius:15px;

box-shadow:0 5px 20px rgba(106,13,173,0.15);

}

h2{

color:#7b2cbf;

}

input{

width:90%;

padding:10px;

margin:8px;

border-radius:8px;

border:1px solid #d0b3ff;

background:#faf7ff;

}

input:focus{

outline:none;

border:1px solid #7b2cbf;

box-shadow:0 0 6px #c77dff;

}

button{

background:linear-gradient(90deg,#c77dff,#7b2cbf);

color:white;

border:none;

padding:10px 25px;

border-radius:20px;

cursor:pointer;

font-weight:bold;

}

button:hover{

background:linear-gradient(90deg,#b5179e,#7209b7);

}

table{

width:90%;

margin:auto;

margin-top:25px;

border-collapse:collapse;

background:white;

border-radius:10px;

overflow:hidden;

box-shadow:0 5px 15px rgba(106,13,173,0.15);

}

th{

background:#c77dff;

color:white;

padding:12px;

}

td{

padding:10px;

border-bottom:1px solid #eee;

color:#333;

}

tr:hover{

background:#f5edff;

}

a{

text-decoration:none;

padding:6px 14px;

border-radius:15px;

color:white;

font-size:14px;

}

.edit{

background:#9d4edd;

}

.delete{

background:#ff4d6d;

}

.edit:hover{

background:#7b2cbf;

}

.delete:hover{

background:#e63946;

}

</style>

</head>

<body>

<h1>Student Management System</h1>

<div class="container">

<h2>Add Student</h2>

<form method="POST">

<input type="text" name="prn" placeholder="PRN" required>

<input type="text" name="name" placeholder="Full Name" required>

<input type="email" name="email" placeholder="Email" required>

<input type="text" name="mobile" placeholder="Mobile" required>

<input type="text" name="department" placeholder="Department" required>

<br><br>

<button name="submit">Add Student</button>

</form>

</div>

<h2 style="color:#6a0dad;">Student Records</h2>

<table>

<tr>

<th>ID</th>
<th>PRN</th>
<th>NAME</th>
<th>EMAIL</th>
<th>MOBILE</th>
<th>DEPARTMENT</th>
<th>EDIT</th>
<th>DELETE</th>

</tr>

<?php

$sql="select * from student";

$result=mysqli_query($conn,$sql);

while($row=mysqli_fetch_assoc($result))
{

echo "<tr>";

echo "<td>".$row['id']."</td>";

echo "<td>".$row['prn']."</td>";

echo "<td>".$row['name']."</td>";

echo "<td>".$row['email']."</td>";

echo "<td>".$row['mobile']."</td>";

echo "<td>".$row['department']."</td>";


echo "<td><a class='delete' href='delete.php?id=".$row['id']."' onclick='return confirm(\"Delete record?\")'>Delete</a></td>";
echo "<td><a class='edit' href='edit.php?id=".$row['id']."'>Edit</a></td>"; 
echo "</tr>";

}

?>

</table>

</body>

</html>