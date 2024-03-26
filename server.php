<?php
$email = $_POST['email'];
$password = $_POST['password'];
$connect = mysqli_connect("localhost", "root", "", "venturelink");


//login
if (mysqli_connect_errno()) {
    echo "Failed to connect";
} else {
    $query = "SELECT * FROM users WHERE Email = '$email' AND Password = '$password'";
    $result = mysqli_query($connect, $query);

    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            // echo "Logged in successfully";
        } else {
            // echo "False password or email";
        }
    } else {
        // echo "Query failed";
    }

    mysqli_close($connect);
}


//register
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

$connect = mysqli_connect("localhost", "root", "", "venturelink");

if (mysqli_connect_errno()) {
    echo "Failed to connect to DB";
} else {

    $query = "INSERT INTO users (Email, First_name, Last_name, Password) VALUES ('$email', '$fname', '$lname', '$password')";

    if (mysqli_query($connect, $query)) {
        echo "Record added successfully";
    } else {
        echo "Error";
    }

    mysqli_close($connect);
}

?>