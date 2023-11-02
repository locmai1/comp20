<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php
  $officehours = array(
    'Monday' => '9am - 4pm',
    'Tuesday' => '9am - 4pm',
    'Wednesday' => '9am - 4pm',
    'Thursday' => '9am - 4pm',
    'Friday' => '9am - 4pm',
    'Saturday' => '9am - 4pm',
    'Sunday' => '9am - 4pm'
  );

  foreach ($officehours as $day => $hours) {
    echo "<div class='OfficeHoursContainer'>";
    echo "<h1>$day:</h1>";
    echo "<p>$hours</p>";
    echo "</div>";
  }
  ?>
</body>
<style>
  .OfficeHoursContainer {
    background-color: lightgray;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    box-shadow: 3px 3px 5px gray;
  }

  h1 {
    color: black;
    font-size: 32px;
    margin: 0;
  }

  p {
    color: gray;
    font-size: 20px;
    margin: 5px 0;
  }
</style>
</html>
