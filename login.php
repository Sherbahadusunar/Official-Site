<?php
      // Check if the form has been submitted
      if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        // Retrieve the values from the form
        $username = $_GET['username'];
        $password = $_GET['password'];

        // Validate the form data
        $errors = array();
        if (empty($username)) {
          $errors[] = 'Please enter a username.';
        }
        if (empty($password)) {
          $errors[] = 'Please enter a password.';
        }

        // Authenticate the user
       
          // Replace these values with your own authentication code
      
          if ($username == 'myusername' && $password == 'mypassword') {
            // Redirect the user to the home page or another protected page
            header('Location: index.html');
            exit();
          } else {
            $errors[] = 'Invalid username or password.';
          }
        

        // Display any error messages
        if (!empty($errors)) {
          echo '<div class="error">' . implode('<br>', $errors) . '</div>';
        }
      }
    ?>
