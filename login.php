<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';

    $errors = array();

    if (empty($username)) {
        $errors[] = 'Please enter a username.';
    }
    if (empty($password)) {
        $errors[] = 'Please enter a password.';
    }

    // Perform proper authentication here
    // Replace this with your secure authentication logic

    $valid_username = 'myusername';
    $valid_password = password_hash('mypassword', PASSWORD_DEFAULT);

    if ($username == $valid_username && password_verify($password, $valid_password)) {
        // Redirect the user to the home page or another protected page
        header('Location: index.html');
        exit();
    } else {
        $errors[] = 'Invalid username or password.';
    }

    if (!empty($errors)) {
        echo '<div class="error">' . implode('<br>', $errors) . '</div>';
    }
}
?>
