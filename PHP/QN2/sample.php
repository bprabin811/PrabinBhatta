<?php

function getFilteredList($items, $threshold) {
  // Initialize an empty array for the filtered list
  $filteredList = array();

  // Loop through the items and add the ones with prices greater than the threshold to the filtered list
  foreach ($items as $item) {
    if ($item['price'] > $threshold) {
      $filteredList[] = $item;
    }
  }

  // Return the filtered list
  return $filteredList;
}

function getTotalSum($items) {
  // Initialize a variable to store the total sum
  $totalSum = 0;

  // Loop through the items and add the prices to the total sum
  foreach ($items as $item) {
    $totalSum += $item['price'];
  }

  // Return the total sum
  return $totalSum;
}

// Example usage:
$items = array(
  array('id' => 1, 'price' => 10),
  array('id' => 2, 'price' => 20),
  array('id' => 3, 'price' => 30),
  array('id' => 4, 'price' => 40),
  array('id' => 5, 'price' => 50)
);

$filteredList = getFilteredList($items, 25);
echo "Filtered list:<br>";
print_r($filteredList);
echo "<br>";

$totalSum = getTotalSum($filteredList);
echo "Total sum: $totalSum";

?>
