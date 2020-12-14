<?php
$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbname = "userdata";

$conn = mysqli_connect($host, $dbUsername, $dbPassword, $dbname);

$name = $_POST['name'];
$email = $_POST['email'];
$username = $_POST['username'];
$password =  $_POST['password'];

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$usernames = "SELECT USERNAME FROM registeredusers WHERE USERNAME = '" . $username . "'";

$usernameresult = $conn->query($usernames);

if ($usernameresult->num_rows > 0){
    die("Sorry! Username is already taken!");

}

$sql = "INSERT INTO registeredusers (NAME, EMAIL, USERNAME, PASSWORD)
VALUES ('$name','$email','$username','$password')";

if($conn->query($sql) === TRUE) {
	echo "Registration successful! You are now logged in!";
	echo "<a href='assessments.html'>Go to assessments!</a>";
}

?>
