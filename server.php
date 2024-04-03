<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$response = array();

// Establish database connection
$connection = mysqli_connect("localhost", "root", "", "investorcommunity");

if ($connection) {
    // Handle login
    if (!isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $query = "SELECT * FROM `users` WHERE `Email`='$email' AND `Password`='$password'";
        $connectionQuery = mysqli_query($connection, $query);

        if ($connectionQuery && mysqli_num_rows($connectionQuery) > 0) {
            $response['success'] = true;
            $response['message'] = "Login successful!";
        } else {
            $response['success'] = false;
            $response['message'] = "Incorrect email or password!";
        }
    }
    
    // Handle registration
    elseif (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $query = "INSERT INTO `users` (Name, Email, Password) VALUES ('$name', '$email', '$password')";
        $connectionQuery = mysqli_query($connection, $query);

        if ($connectionQuery) {
            $response['success'] = true;
            $response['message'] = "Added successfully!";
        } else {
            $response['success'] = false;
            $response['message'] = "Error occurred, try again.";
        }
    } else {
        $response['success'] = false;
        $response['message'] = "Invalid request!";
    }   
    mysqli_close($connection);
} else {
    $response['success'] = false;
    $response['message'] = "Error connecting to MySQL server!";
}

echo json_encode($response);
?>
