//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0000FF"; colorText="#000000"; colorSele="#FFFF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Arial Black', Gadget, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fResp="'Arial Black', Gadget, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=2; messageOk="Bien hecho!"; messageTime=""; messageError="Vuelve a intentarlo."; messageErrorG="Vuelve a intentarlo."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="dGVzdDI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Diseñar funciones con memoria requiere tres pasos importantes, uno de estos es:"];
var answers1=["MUlkZW50aWZpY2FyIGxvcyBkYXRvcyBxdWUgdmFuIGVuIGxhIG1lbW9yaWEu","MElkZW50aWZpY2FyIHF1ZSB1biBwcm9ncmFtYSBicmluZGEgbeFzIGRlIHVuIHNlcnZpY2lvIGEgbG9zIHVzdWFyaW9zLg","MFJlY29ub2NlciBxdWUgdW4gcHJvZ3JhbWEgc2UgaW1wbGVtZW50YSBjb24gdW5hIHNvbGEgZnVuY2nzbiBkZSBuaXZlbCBkZSB1c3VhcmlvLg","MEVzdGFibGVjZXIgbGFzIGRlZmluaWNpb25lcyBkZSB2YXJpYWJsZXMu"];
var ans=[answers1];
var err=["Vuelve a intentarlo."];
var ima=[""];
var mp4=[""];
var ogv=[""];
var indexTag=0; actualAnswers=[]; dirMedia="test2_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
