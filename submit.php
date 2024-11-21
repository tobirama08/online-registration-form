<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $gender = htmlspecialchars($_POST['gender']);
    $dob = htmlspecialchars($_POST['dob']);

    echo "<div style='font-family: Arial, sans-serif; padding: 20px;'>";
    echo "<h1>Registration Details</h1>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Phone:</strong> $phone</p>";
    echo "<p><strong>Gender:</strong> $gender</p>";
    echo "<p><strong>Date of Birth:</strong> $dob</p>";
    echo "<a href='index.html' style='color: blue;'>Go Back</a>";
    echo "</div>";
}
?>
