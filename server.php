<?php
    mysql_connect("localhost", "root", "") or die (mysql_error ());
    mysql_select_db("chatphp") or die(mysql_error());

    $name = $_POST['z'];
    $message = $_POST['inp'];
    // $dtime = $_POST['action'];
  

    switch($_POST['action']){ 
        case "message" ://если меседж то сохраняем в базу 
            mysql_query("INSERT INTO svik(name,message) VALUES('$name','$message')");
        break;

        case "load" :
            $sqlres = mysql_query("SELECT * FROM svik");
            while ($row = mysql_fetch_object($sqlres)) {
                echo json_encode($row);
            }//проходимся по строкам сортируем и отправляем клиенту
        break;
    }

?>