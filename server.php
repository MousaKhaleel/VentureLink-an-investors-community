<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$response = array();

// Establish database connection
$connection = mysqli_connect("localhost", "root", "", "investorcommunity");

// Check connection
if (!$connection) {
    $response['success'] = false;
    $response['message'] = "Error connecting to MySQL server!";
    echo json_encode($response);
    exit; // Stop further execution
}

// Handle register
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])) {
        $name = mysqli_real_escape_string($connection, $_POST['name']);
        $email = mysqli_real_escape_string($connection, $_POST['email']);
        $password = mysqli_real_escape_string($connection, $_POST['password']);

        // Validate password complexity if needed

        // Hash password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Prepare and execute statement
        $query = "INSERT INTO `users` (Name, Email, Password) VALUES (?, ?, ?)";
        $stmt = mysqli_prepare($connection, $query);
        mysqli_stmt_bind_param($stmt, 'sss', $name, $email, $hashedPassword);
        if (mysqli_stmt_execute($stmt)) {
            $response['success'] = true;
            $response['message'] = "Registered successfully!";
        } else {
            $response['success'] = false;
            $response['message'] = "Error occurred, try again.";
        }
        mysqli_stmt_close($stmt);
    } else {
        $response['success'] = false;
        $response['message'] = "Invalid request!";
    }
} else {
    $response['success'] = false;
    $response['message'] = "Invalid request method!";
}

echo json_encode($response);

mysqli_close($connection);
?>
