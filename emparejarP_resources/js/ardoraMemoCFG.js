//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360;timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=4;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#11E3EE"; colorText="#000000"; colorSele="#00FFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Correcto!!!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts="Vuelva a intentarlo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="ZW1wYXJlamFyUA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["Definición ilegal 1","Definición ilegal 2","Definición ilegal 3","Definición legal","","","",""];im1=["","","","","","","",""];mp31=["","","","","","","",""];
var wo2=["","","","","","","",""];im2=["","1_1_.png","3.png","2_1_.png","4.png","","",""];mp32=["","","","","","","",""];
var cols=4; rows=2; items=4; itp=["MTA","MTE","MTI","MTM","MTQ","MTU","MTY","MTc"]; pos=["MjE","MjM","MjI","MjQ","LTE","LTE","LTE","LTE"];
var boardGame=[["","","",""],["","","",""]]; dirMedia="emparejarP_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
