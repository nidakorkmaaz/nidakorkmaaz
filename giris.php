<?php

session_start();
ob_start();


if(($_POST["user"]=="g201210018@ogr.sakarya.edu.tr") && ($_POST["pass"]=="g201210018"))
{

$_SESSION["login"] = "true";
$_SESSION["user"] = "g201210018@ogr.sakarya.edu.tr";
$_SESSION["pass"] = "g201210018";

echo "Hosgeldiniz g201210018. Giriş basarili. Anasayfaya yonlendiriliyorsunuz. Lütfen bekleyin..";
header("Refresh: 2; url=Hakkımızda.html");

}
elseif(($_POST["user"]==null) && ($_POST["pass"]==null))
{
echo "Kullanici adi veya sifre bos birakilamaz. ";
header("Refresh: 2; url=index2.html");
}
else
{
echo "Kullanici adi veya sifre yanlis. Lütfen kontrol ediniz .";
header("Refresh: 2; url=index2.html");
}


ob_end_flush();
?>