<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$con = mysqli_connect("localhost", "root", "", "bank");
$response = array();
if ($con) {
    $sql = "select * from customer";
    $result = mysqli_query($con, $sql);
    if ($result) {
        header("Content-Type: JSON");
        $i = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $response[$i]['account'] = $row['account'];
            $response[$i]['name'] = $row['name'];
            $response[$i]['gender'] = $row['gender'];
            $response[$i]['contact'] = $row['contact'];
            $response[$i]['balance'] = $row['balance'];
            $i++;
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }
} else {
    echo "Database connection failed.";
}
