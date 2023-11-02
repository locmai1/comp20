<?php
if(isset($_GET['n'])) {
  $n = intval($_GET['n']);
  for ($i = 1; $i <= 12; $i++) {
    $result = $i * $n;
    echo "$i x $n = $result<br>";
  }
} else {
  echo "you must provide a parameter n.";
}
?>
