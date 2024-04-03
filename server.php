<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

$response = array();

function createDatabaseIfNotExists($connection) {
    $createDbQuery = "CREATE DATABASE IF NOT EXISTS investorcommunity";
    if (mysqli_query($connection, $createDbQuery)) {
        return true;
    } else {
        return false;
    }
}

$connection = mysqli_connect("localhost", "root", "");

if ($connection) {
    if (createDatabaseIfNotExists($connection)) {
        mysqli_select_db($connection, "investorcommunity");

        // Handle login
        if (isset($_POST['email']) && isset($_POST['password'])) {
            $email = $_POST['email'];
            $password = $_POST['password'];

            $query = "SELECT `Email`, `Password` FROM `users` WHERE `Email`='$email' AND `Password`='$password'";
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
    } else {
        $response['success'] = false;
        $response['message'] = "Failed to create database!";
    }
    mysqli_close($connection);
} else {
    $response['success'] = false;
    $response['message'] = "Error connecting to MySQL server!";
}

echo json_encode($response);
?>