<?php

    $size = (int)$_POST["size"];

    echo "<table border='1'>";

    echo "<tr>";
    echo "<td></td>"; 
    for ($x = 1; $x <= $size; $x++) {
        echo "<td>$x</td>";
    }
    echo "</tr>";

    for ($x = 1; $x <= $size; $x++) {
        echo "<tr>";

        echo "<td>$x</td>";
        for ($y = 1; $y <= $size; $y++) {
            $product = $x * $y;
            echo "<td>$product</td>";
        }
        echo "</tr>";
    }

    echo "</table>";

?>
