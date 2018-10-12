//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#FFFF00"; colorText="#000000"; colorSele="#00FF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Correcto!!!"; messageTime=""; messageError="Vuelva a Intentarlo"; messageErrorG="Vuelva a Intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["RVhQUkVTSU9OIFNFVCE","RVhQUkVTSU9OIEJFR0lO","REUgRVNUQURP","SU5JQ0lBTElaQURPUg"];var cp_ima=["","","",""];var cp_mp3=["","","",""];var cp_ogg=["","","",""];var cp_que=["RXMgYXF1ZWxsYSBxdWUgdGllbmUgY29tbyBwcm9w83NpdG8gY2FtYmlhciB1bmEgZGVmaW5pY2nzbiB5IG5vIGdlbmVyYXIgdW4gdmFsb3Iu","UGVybWl0ZSBldmFsdWFyIGV4cHJlc2lvbmVzIGVuIHVuIG9yZGVuIHBhcnRpY3VsYXIu","VmFyaWFibGVzIHF1ZSBpbXBsZW1lbnRhbiBsYSBtZW1vcmlhLg","RXMgbGEgcHJpbWVyYSBmdW5jafNuIHF1ZSBzZSB1dGlsaXphIGR1cmFudGUgdW5hIGVqZWN1Y2nzbi4"];var cp_num=[14,15,9,13];
var wordsGame="Y29uc1BhbGFicmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
