<?php
if(isset($_GET['length'])) {
  $length = intval($_GET['length']);

  if ($length < 0) {
    $response = json_encode(array('error' => 'length must be non-negative!'));
  } else {
    $fibonacci = fibonacci($length);
    $response = json_encode($fibonacci);
  }
} else {
  $response = json_encode(array('error' => 'provide a length parameter in the GET request.'));
}

function fibonacci($length) {
  $fibonacci = array();
  $x = 0;
  $y = 1;

  for ($i = 0; $i < $length; $i++) {
    $fibonacci[] = $x;

    $temp = $x;
    $x = $y;
    $y = $temp + $x;
  }

  return $fibonacci;
}

header('Content-Type: application/json');
echo $response;
?>
