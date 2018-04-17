<?php
header("Content-Type: application/json; charset=UTF-8");
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $name = filter_var($_GET['name'], FILTER_SANITIZE_STRING);
    if (isset($name) && ($name == 'Courses' || $name == 'Students')) {
        ////
        $dbname = 'codecourse';
        $dbuser = 'root';
        $dbpass = 'root12';
        $dbhost = 'localhost';
        // Create connection
        $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        if ($name == 'Courses') {
            $sql = "SELECT id, description,name,start_date,end_date,created_by FROM courses";
        }
        if ($name == 'Students') {
            $sql = "SELECT id, name,email FROM users";
        }
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $getCoursesArr = array();
            // output data of each row
            while ($row = $result->fetch_assoc()) {
                array_push($getCoursesArr, $row);
            }
            echo json_encode($getCoursesArr);
        } else {
            echo "0 results,table " . $name . " is empty";
        }
        $conn->close();
        ////
    } else {
        echo 'dunno which table is ' . '"' . $name . '"';
    }
} else {
    echo 'go away';
}
