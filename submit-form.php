<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $service = $_POST['service'];
    $to = 'your-email@gmail.com';
    $subject = 'New quote request';
    $message = "Name: $name\nEmail: $email\nService: $service";
    $headers = "From: $email";
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
}
