<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE customer
        SET balance = balance - :amount
        WHERE account = :sender;
        UPDATE customer
        SET balance = balance + :amount
        WHERE account = :recipient;";
        $stat = $conn->prepare($sql);
        $stat->bindParam(':sender', $user->sender);
        $stat->bindParam(':recipient', $user->recipient);
        $stat->bindParam(':amount', $user->amount);

        if($stat->execute()) {
            $response = ['status' => 1, 'message' => 'Transfer Successful.'];
        }
        else {
            $response = ['status' => 0, 'message' => 'Transfer Failed.'];
        }
        echo json_encode($response);

        break;
}

?>