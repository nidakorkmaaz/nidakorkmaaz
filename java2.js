var resimler=[
    "download.jpg",
    "balkabakli-ekmek.jpg",
    "sakarya-manav-corbalari.jpg",
    "kopuk-helvasi-696x696.jpg"

];
var Yemekler=[

  "Sakarya'nın en meşhur yemeği olan ıslama köfteyi her an her yerde bulabilrsiniz. Esnaf lokantasından en lüks restorana kadar her yerde, 7'den 70'e tüm Sakarya halkının en sevdiği yemek olan bu köfte, Sakarya'nın yaylalarında beslenmiş hayvanların etiyle yapılır, altına serilen çıtır ekmek özel bir sosla yumuşatılır ve ortaya bu harika lezzet çıkarılır. Kaynak: Sakarya'nın neyi meşhur? Sakarya'da ne yenir? Nereler gezilir? ",
  "Balkabağı dendi mi akla ilk gelen yer olan Sakarya'da bu bitkiyle yapılan bir çok yiyecek mevcut. Ekmek, tatlı, turşu, börek, reçel... Biz ekmekle başlayalım dedik. Tazeliğini günlerce koruyabilen bu pofuduk ekmek, balkabağının rendelenerek suyunun ekmek hamuruna konması sonucu ortaya çıkmış. Kaynak: Sakarya'nın neyi meşhur? Sakarya'da ne yenir? Nereler gezilir? ",
  "Dışarıdan gelenlerin Köpük Helva ismini verdiği köpük kıvamındaki bu lezzetli tatlı, adını Sakarya'nın Taraklı ilçesinden alıyor. Helvaya bu köpük köpük kıvamını veren şeyse çöğen kökü. Kaynak: Sakarya'nın neyi meşhur? Sakarya'da ne yenir? Nereler gezilir? ",
  "Adı kadar kendi de güzel olan bu çorba, Sakarya'nın en sık tüketilen lezzetlerinden. Öyle ki oldukça hafif olmasına rağmen zaman zaman ana yemek olarak da çıkabilir karşınıza.  Kaynak: Sakarya'nın neyi meşhur? Sakarya'da ne yenir? Nereler gezilir?"

];
var kofte=$("#Kofte");
var balkabak=$("#Balkabak");
var helva=$("#Helva");
var corba=$("#Corba");

var index=0;
var mevcutresim=document.getElementById("SliderResim");

function OncekiResim() {

    index=index-1;
    if (index<0) {
        index=resimler.length -1 ;
        mevcutresim.src=resimler[index];
    }
    else{
        mevcutresim.src=resimler[index];
    }

    kofte.css("display","none");      
    balkabak.css("display","none");     
    helva.css("display","none");    
    corba.css("display","none");  
    
}
function SonrakiResim() {

    
   
        index=index+1;
      
        if (index>=resimler.length) {
            index=0
            mevcutresim.src=resimler[index];
        }
        else{
            mevcutresim.src=resimler[index];

     
     
        

            

    
}


kofte.css("display","none");      
balkabak.css("display","none");     
helva.css("display","none");    
corba.css("display","none"); 

};



$("#SliderResim").click(function(){
  
  if (index==0) 
  {
    kofte.toggle(1000);
  }
  if (index==1) 
  {
    balkabak.toggle(1000);
  }
  if (index==2) 
  {
    helva.toggle(1000);
  }
  if (index==3) 
  {
    corba.toggle(1000);
  }
  
 
    
 
});










var spor=document.getElementById("resim2");
var film=document.getElementById("resim3");
var kitap=document.getElementById("resim4");

spor.onmouseover=function(){
  spor.style.height="140%";

};
spor.onmouseout=function(){

    spor.style.height="120%";
};

film.onmouseover=function(){
    film.style.height="140%";
  
  };
  film.onmouseout=function(){
  
    film.style.height="120%";
  };
  kitap.onmouseover=function(){
    kitap.style.height="140%";
  
  };
  kitap.onmouseout=function(){
  
    kitap.style.height="120%";
  };
 

  var erkek=document.getElementById("erkek");
  var kadın=document.getElementById("kadın");
  var button=document.getElementById("btn1");
  var cinsiyet=document.getElementById("cins");
  
  var sayı=0;
  
 

    function Selam() {
      document.getElementById("kadın").disabled = true;

  
      
    }
    function Selam2() {
      document.getElementById("erkek").disabled = true;


    }

    function Selam3() {

      document.getElementById("kadın").disabled = false;
      document.getElementById("erkek").disabled = false;
    }
