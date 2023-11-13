<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
  <header>
    <h1>Two Owls Cafe</h1>
    <p>Hours of Operation: Monday to Sunday, 8:00 AM - 10:00 PM</p>
  </header>

  <div class="MenuContainer">
    <?php
      $db_host = 'locm4.sg-host.com';
      $db_user = 'urazhmgmvgp9f';
      $db_password = 'fi62zfgiahfc';
      $db_name = 'dbbjirdsl05pi9';

      $conn = new mysqli($db_host, $db_user, $db_password, $db_name);

      if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }

      $sql = "SELECT * FROM menu";
      $result = $conn->query($sql);

      if ($result->num_rows > 0) {
        echo '<form action="receipt.php" method="post" onsubmit="return validateForm()">';
        while ($row = $result->fetch_assoc()) {
          echo '<div class="MenuItems">';
          echo '<h2>' . $row['name'] . '</h2>';
          echo '<p>' . $row['description'] . '</p>';
          echo '<p>Price: $' . $row['price'] . '</p>';
          echo '<img src="img/' . $row['image'] . '" alt="' . $row['name'] . '">';
          echo '<br>';
          echo '<br>';
          echo '<label for="' . $row['id'] . '">Quantity:</label>';
          echo '<select class="quantity" name="quantity[' . $row['id'] . ']">';
          for ($i = 0; $i <= 10; $i++) {
              echo '<option value="' . $i . '">' . $i . '</option>';
          }
          echo '</select>';
          echo '</div>';
        }

        echo '<div class="OrderForm">';
        echo '<h2>Order Information</h2>';
        $formFields = array(
          'first_name' => 'First Name',
          'last_name' => 'Last Name',
          'special_instructions' => 'Special Instructions'
        );
        foreach ($formFields as $fieldName => $label) {
          echo '<label for="' . $fieldName . '">' . $label . ':</label>';
          if ($fieldName == 'special_instructions') {
            echo '<textarea name="' . $fieldName . '" rows="4" cols="50"></textarea>';
          } else {
            echo '<input type="text" name="' . $fieldName . '">';
          }
          echo '<br>';
        }
        echo '<input type="submit" value="Submit Order">';
        echo '</div>';
        echo '</form>';
      } else {
        echo 'No results for menu items';
      }

      $conn->close();
    ?>
  </div>

  <script src="script.js"></script>
</body>

</html>
