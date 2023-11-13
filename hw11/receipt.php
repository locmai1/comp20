<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Receipt</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
  <header>
    <h1>Two Owls Cafe</h1>
    <p>Order Receipt</p>
  </header>

  <?php
    $firstName = isset($_POST['first_name']) ? $_POST['first_name'] : '';
    $lastName = isset($_POST['last_name']) ? $_POST['last_name'] : '';
    $specialInstructions = isset($_POST['special_instructions']) ? $_POST['special_instructions'] : '';

    $db_host = 'locm4.sg-host.com';
    $db_user = 'urazhmgmvgp9f';
    $db_password = 'fi62zfgiahfc';
    $db_name = 'dbbjirdsl05pi9';

    $conn = new mysqli($db_host, $db_user, $db_password, $db_name);

    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $menuItems = array();

    if (isset($_POST['quantity'])) {
      $quantities = $_POST['quantity'];
      foreach ($quantities as $itemId => $quantity) {
        $sql = "SELECT name, price FROM menu WHERE id = $itemId";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
          $row = $result->fetch_assoc();
          $menuItems[$itemId] = array(
            'name' => $row['name'],
            'quantity' => $quantity,
            'price' => $row['price']
          );
        } else {
          echo "No results for item ID: $itemId";
        }
      }
    } else {
      echo "No quantity or item ID";
    }

    echo '<h2>Order Details</h2>';
    echo '<p>Name: ' . $firstName . ' ' . $lastName . '</p>';
    echo '<p>Special Instructions: ' . $specialInstructions . '</p>';

    $subtotal = 0;
    foreach ($menuItems as $itemId => $menuItem) {
      $itemName = $menuItem['name'];
      $quantity = $menuItem['quantity'];
      $price = $menuItem['price'];
      $totalItemCost = $quantity * $price;

      echo '<p>' . $itemName . ': ' . $quantity . ' x $' . $price . ' = $' . $totalItemCost . '</p>';
      $subtotal += $totalItemCost;
    }

    $taxRate = 0.0625;
    $tax = $subtotal * $taxRate;
    $total = $subtotal + $tax;
    echo '<p style="font-weight: bold">Subtotal: $' . $subtotal . '</p>';
    echo '<p style="font-weight: bold">Tax (6.25%): $' . number_format($tax, 2) . '</p>';
    echo '<p style="font-weight: bold">Total: $' . number_format($total, 2) . '</p>';

    date_default_timezone_set('America/New_York');
    $localTime = time();
    $deliveryTime = $localTime + (20 * 60);
    $deliveryTimeFormatted = date("H:i A", $deliveryTime);

    echo '<p style="font-weight: bold">Pickup Time: ' . $deliveryTimeFormatted . '</p>';

    $conn->close();
  ?>
</body>

</html>
