var svgGtr = d3.select("#gtr");
var svgModes = d3.select("#modes");
var svgDashBoard = d3.select("#dashboard");
var svgIntervals = d3.select("#intervals");


//DashboardSize
var dashboardWidth='1500';
var dashboardHeight='300';
//translate que se aplican a cada g
var translateCuerda1CoordinateX='0';
var translateCuerda1CoordinateY='20';
var translateCuerdaPad_X='0';
var translateCuerdaPad_Y=parseInt(40);

//posicion y tamano de las cuerdas
var line_x1='90';
var line_x2='1160';
var line_y1='20';
var line_y2='20';
//posicion y tamano de los trastes y su pad
var trasteX='85';
var trasteY='35';
var trasteWidth='5';
var trasteFill='black';
var trasteStroke='grey';
var trasteStroke_width='1';
var trastePad_X='70';
//posicion de las marcas del mastil
//la x se calcula restando la var trastePadX a la pos del traste
var trastePadX='35'
var trasteY='275'
//en los que se quiere marcar doble usar estas medidaas
var trasteDoblePadX_1='75'
var trasteDoblePadX_2='55'



//Elementos dinamicos
//posicion y tamano de las circles y cuando pintar el siguiente (pad)
var circleX='50'
var circleY='20'
var circleR='15'
var circlePad_X=parseInt(70);
//posicion y tamano de los textos de los circles y cuando pintar el siguiente (pad)
var circleTextX='50'
var circleTextY='25'
var circleTextPad_X=parseInt(70);


//se usan
var radioSizeCircle=15;
var strokeWidthCircle=4;
//F 2m 2M 3m 3M 4J 4# 5J 6m 6M 7b 7M
//0 1  2  3  4  5  6  7  8  9  10 11

// F 2M 3M 5J 6M
var pentatonicaMayor = ["F","2M","3M","5J","6M"]
// F 3m 4J 5J 7m
var pentatonicaMenor = ["F","3m","4J","5J","7b"]
// F 2M 3M 4J 5J 6M 7M
var ionian = ["F","2M","3M","4J","5J","6M","7M"]
// F 2M 3b 4J 5J 6M 7M
var dorian = ["F","2M","3m","4J","5J","6M","7b"]
// F 2M 3b 4J 5J 6b 7b
var phrygian = ["F","2M","3M","4J","5J","6m","7b"]
// F 2M 3M 4# 5J 6M
var lydian = ["F","2M","3M","4aum","5J","6M","7M"]
// F 2M 3M 4J 5J 6M 7b
var mixolydian = ["F","2M","3M","4J","5J","6M","7b"]
// F 2M 3b 4J 5J 6b 7b
var aeolian = ["F","2M","3m","4J","5J","6m","7b"]
// F 2b 3b 4J 4#/5b 6b 7b
var locrian = ["F","2m","3m","4J","4aum","6m","7b"]

//F 3M 5J 7b
var acordesDominantes = ["F","3M","5J","7b"]

var arpeggios= [];

var tonica= 'A';

jsonObj = [];
jsonUnionNotasAcordes=[];

var  isAScalePaint=0;

var scalesPainted=[];
//mode-onlyBoxes-Box1/box2/..box5

 // fixed index:
    // 0  1  2  3  4  5  6  7  8  9  10 11
    // A     B  C     D     E  F     G
var	notes = [
        { id: 0, index: 0, label: "A" , text:"A" },
        { id: 1, index: 1, label: "B♭" , text:"A#"},
        { id: 2, index: 2, label: "B" ,text:"B"},
        { id: 3, index: 3, label: "C" , text:"C"},
        { id: 4, index: 4, label: "D♭" , text:"C#"},
        { id: 5, index: 5, label: "D" , text:"D"},
        { id: 6, index: 6, label: "E♭" , text:"D#"},
        { id: 7, index: 7, label: "E" , text:"E"},
        { id: 8, index: 8, label: "F" , text:"F"},
        { id: 9, index: 9, label: "G♭" , text:"F#"},
        { id: 10, index: 10, label: "G" , text:"G"},
	     { id: 11, index: 11, label: "A♭" , text:"G#"},
         ];

//notes with index with the tonic choose :Example index:0 label:"C"
var notesWithCurrentTonicOrderByIndex=[];


$( document ).ready( function() {
  console.log("readyToRock");
/*
    paintDashboard();
    paintSelectModes();
    paintIntervals();
    paintNotes();
    paintButtons(0);
   // paintOptions(0,-1);
   paintOptions(0);
*/
});

function pintaChachiScale(index){pintaChachi(index);}
function pintaChachi(index){

var radioSizeCircle=15;
var strokeWidthCircle=2;
var stroke='grey';

if(isAScalePaint==1){
  console.log("ya hay una escala pitnada");
  stroke='red';
}
createJSON(tonica, notes,index);

$.each(jsonObj,function() {

for (var cuerda=1; cuerda<7; cuerda++) {

    var colour = 'white';
    if(this['note'] == tonica)colour='yellow';
    pintaNote(cuerda,colour,this['note'],radioSizeCircle,strokeWidthCircle,stroke,this["interval"]);



}
usedintervals(this["interval"]);
});

paintIntervals();

console.log("Pintamos las opciones para el modo "+index);


//con el scalesPainted updated volvemos a pintar el panel

paintSelectModes();
//paintOptions(0, index);
paintOptions(0);

jsonObj = [];
  //pongo a uno que hay una escala ya pintada
  isAScalePaint=1;
}


function pintaAcordesDominantes(cuerdaBase){

//console.log('Desde cuerda->' +cuerdaBase);
var cuerdaBase_Int = parseInt(cuerdaBase);

var stroke='';

if(cuerdaBase_Int==4){
  stroke='#8cf442';
}else if(cuerdaBase_Int==5){
  stroke='#429ef4'
}else if(cuerdaBase_Int==6){
  stroke='purple'
}

//createJSON(tonica, notes,acordesDominantes);
createJSON(tonica, notes,9);

$.each(jsonObj,function() {

for (var cuerda=cuerdaBase_Int-3; cuerda<cuerdaBase_Int+1; cuerda++) {

    var colour = 'white';
    if(this['note'] == tonica)colour='yellow';

    pintaNote(cuerda,colour,this['note'],radioSizeCircle,strokeWidthCircle,stroke,this["interval"]);

    if(this['note'] == tonica) {
        var noteTextId = '#'+'string-'+cuerda+'-'+this["interval"]+'-text';
      getCoordenatesUnion(cuerda,noteTextId);// solo llamo cuando es una tonica porque es desde la que monte la linea de union del acorde
    }
    usedintervals(this["interval"]);

}


 });
  // como es acorde ahora hay que pintar la union entre notas
     pintaUnionAcordes(cuerdaBase,this['note'],acordesDominantes,stroke);
    // pintaUnionAcordes(cuerdaBase_Int,this['note'],acordesDominantes,radioSizeCircle,strokeWidthCircle,stroke);

 console.log("volvemos a pintar los intervalos");
    paintIntervals();
    //lo vacio para que al pulsar otro boton no salgan las notas anteriores
    jsonObj = [];


}
