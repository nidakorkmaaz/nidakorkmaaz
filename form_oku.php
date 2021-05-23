<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Oku</title>
</head>
<body>

<?php 


  $_isim=$_POST['isimsoyisim']; 
  $_email=$_POST['email']; 
  $_mesaj=$_POST['Mesajkonu'];
  $_cinsiyet=$_POST['cinsiyet']; 
  $_mesaj2=$_POST['mesaj']; 


  echo "Adınız ve Soyadınız :". $_isim;
  echo "<br>";
  echo "E-mail Adresiniz :". $_email;
  echo "<br>";
  echo "Mesaj Konusu :". $_mesaj;
  echo "<br>";
  echo "Cinsiyet :" . $_cinsiyet;
  echo "<br>";
  echo "Mesaj İçerik :" . $_mesaj2;




?>




  
</body>
</html>






