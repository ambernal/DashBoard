 //F 2m 2M 3m 3M 4J 4# 5J 6m 6M 7b 7M
//0 1  2  3  4  5  6  7  8  9  10 11
 var mastilNotes = [
        { id: 0,  label: "A"},
        { id: 1,  label: "A#"},
        { id: 2,  label: "B"},
        { id: 3,  label: "C"},
        { id: 4,  label: "C#"},
        { id: 5,  label: "D"},
        { id: 6,  label: "D#"},
        { id: 7,  label: "E"},
        { id: 8,  label: "F"},
        { id: 9,  label: "F#"},
        { id: 10, label: "G"},
        { id: 11, label: "G#"},
     ];

  var afinacion = [
         { id: 1,  label: "A"},
         { id: 2,  label: "B"},
         { id: 3,  label: "G"},
         { id: 4,  label: "D"},
         { id: 5,  label: "A"},
         { id: 6,  label: "E"}
      ];
function getIntervalFromTonicByString(tonica, cuerda){

    var noteZero ='';
    switch (cuerda) {

        case 1:
            noteZero= afinacion[0].label;
            break;
        case 2:
            noteZero= afinacion[1].label;
            break;
        case 3:
            noteZero= afinacion[2].label;
            break;
        case 4:
            noteZero= afinacion[3].label;
            break;
        case 5:
            noteZero= afinacion[4].label;
            break;
        case 6:
            noteZero= afinacion[5].label;
            break;
    }
    var diferencia=0;
    var tonicaBoolean=false

    console.log('noteZero '+noteZero );
    console.log('tonica '+tonica );
     for(j = 0; j < mastilNotes.length; j++) {
    console.log('-------------mastilNotes '+mastilNotes[j].label );

        if (mastilNotes[j].label ==  noteZero) {
         // console.log('noteZero true');
            noteZero=true;
            break;
        }else
        if (mastilNotes[j].label ==  tonica) {
            // console.log('tonica true ');
            diferencia++;
            tonicaBoolean=true;

        }else  if (noteZero && mastilNotes[j].label !=  tonica) {
         // console.log('diferencia');
                diferencia++;
        }
    }
    // TODO porque se repite

    if(!tonicaBoolean){
     // console.log('como no se ha llegado a la tonica volvemos a recorrer');

      //si no se ha encontrado la tonica aun volvemos a recorrer el array desde el ppio para ver el num de notas que faltan
        for(j = 0; j < mastilNotes.length; j++) {
     // console.log('====================mastilNotes !tonica '+mastilNotes[j].label );
            if (mastilNotes[j].label ===  tonica) {
              // console.log('tonica true ');
                tonicaBoolean=true;
                break;
            }else if (mastilNotes[j].label !=  tonica) {
             // console.log('diferencia');
                    diferencia++;
             }

        }

    }
    
    console.log('noteZero ' +noteZero);
    console.log('diferencia ' +diferencia);
return diferencia;

}
function createJSON(tonica, notes,scaleType) {

    var root_id = 0;
    //console.log("crreamos el json para scaleType->" +scaleType);
var scaleNotes = getScale(scaleType);


getNotesFromCurrentTonic(tonica,scaleNotes);


 //console.log('createJson desde la tonica:->'+tonica );

   $.each(scaleNotes,function(index, value) {

         //console.log('index'+index + ': ' + value);
          var root_id_Int = parseInt(root_id);
          var value_int = parseInt(value);
          var interval = root_id_Int + value_int;
          //console.log('interval->' +interval);
          //console.log('value->' +value);

          var currentNoteName = notesWithCurrentTonicOrderByIndex[value].label;
          //console.log('aniadimos a jsonOBj la note->'+currentNoteName +' intervalo ->' +value);
          item = {}
          item ["note"] = currentNoteName;
         item ["interval"] = value;

        jsonObj.push(item);
      });

    }


function getScale(index){

var scaleNotes ='';
switch (index) {
    case 0:
        scaleNotes= ionian;
        break;
    case 1:
        scaleNotes= dorian;
        break;
    case 2:
        scaleNotes= phrygian;
        break;
    case 3:
        scaleNotes= lydian;
        break;
    case 4:
        scaleNotes= mixolydian;
        break;
    case 5:
        scaleNotes= aeolian;
        break;
    case 6:
        scaleNotes= locrian;
        break;
    case 7:
        scaleNotes= pentatonicaMayor;
        break;
    case 8:
        scaleNotes= pentatonicaMenor;
        break;
    case 9:
        scaleNotes= acordesDominantes;
        break;
    case 10:
        scaleNotes= arpegios;
        break;

    default:
        scaleNotes= '';
}

return scaleNotes;
}



function pintaNote(cuerda,colour,noteText,radioSizeCircle,strokeWidthCircle,stroke,interval){


   var typeForm = 'string-';
   if(scalesPainted.length>=2)typeForm='rhombus-string-'

   var noteId = '#'+typeForm+cuerda+'-'+interval;
   var noteTextId = '#'+'string-'+cuerda+'-'+interval+'-text';
   var noteOctaveId = '#'+typeForm+cuerda+'-12-'+interval;
   var noteOctaveText = '#'+'string-'+cuerda+'-12-'+interval+'-text';

//como primero se pintan los circulos busco que circulos estan pintados ya
  typeFormRepe = 'string-';
 var circleIdUsed = ''
   if(scalesPainted.length>=2) circleIdUsed = '#'+typeFormRepe+cuerda+'-'+interval;


//console.log('pintaNote noteId ->' +circleIdUsed);
//console.log('pintaNote noteTextId ->' +noteTextId);
//console.log('pintaNote colour ->' +colour);
//console.log('pintaNote noteText ->' +noteText);




  if ($(circleIdUsed).attr('data-intervalo')){

    // console.log('ya está relleno==============================================================='+circleIdUsed);


/*
     var notaRepetida =  $(noteId).clone();
     notaRepetida.attr('id', noteId+'repeat');
     $(noteId).attr('stroke',stroke);
     $(noteId).attr('stroke-width',strokeWidthCircle);
     notaRepetida.attr('r', radioSizeCircle-5);
     //pintamos el segundo circulo despues para que no lo tape
     $(noteId).after(notaRepetida);
*/


    var notaRepetida =  $(circleIdUsed)
    // console.log('notaRepetida== ' +notaRepetida);
     notaRepetida.attr('r', radioSizeCircle+5);
     $(notaRepetida).after(noteId);
     //pintamos el segundo circulo despues para que no lo tape
    // $(noteId).after(notaRepetida);
 //console.log('Ahora vamos al rhombus '+noteId);
      var rombhusRepetida =  $(noteId)
    rombhusRepetida.attr('stroke', stroke);
    rombhusRepetida.attr('stroke-width', strokeWidthCircle);


    //console.log('ya está relleno en el 12');
     var notaRepetida12 =  $(noteOctaveId).clone();
     notaRepetida12.attr('id', noteOctaveId+'repeat');
     $(noteOctaveId).attr('stroke',stroke);
     $(noteOctaveId).attr('stroke-width',strokeWidthCircle);
     notaRepetida12.attr('r', radioSizeCircle-5);
     //pintamos el segundo circulo despues para que no lo tape
     $(noteOctaveId).after(notaRepetida12);

  }else{


     //pinto los círculos
     $(noteId).attr('fill', colour);
     $(noteId).attr('r', radioSizeCircle);
     $(noteId).attr('stroke',stroke);
     $(noteId).attr('stroke-width',strokeWidthCircle);
     $(noteId).attr('data-intervalo',interval);


     $(noteOctaveId).attr('fill', colour);
     $(noteOctaveId).attr('r', radioSizeCircle);
     $(noteOctaveId).attr('stroke',stroke);
     $(noteOctaveId).attr('stroke-width',strokeWidthCircle);
     $(noteOctaveId).attr('data-intervalo',interval);

     $(noteTextId).html(noteText);
     $(noteTextId).attr('data-intervalo-name', getIntervalName(interval));
     $(noteOctaveText).html(noteText);
     $(noteOctaveText).attr('data-intervalo-name', getIntervalName(interval));

   }
 }


function getCoordenatesUnion(cuerda,noteTextId){

  //pintamos lineas para ver los acordes
    //console.log('obtenemos la coordenada del traste donde estamos pintando el texto de la nota '+noteTextId +' en la cuerda '+cuerda);
    //console.log('x '+$(noteTextId).attr('x'));
    //console.log('y '+$(noteTextId).attr('y'));

       var noteGlobalX= parseInt($(noteTextId).attr('x'));
       var noteGlobalY= parseInt($(noteTextId).attr('y'));
       var padding_Y = parseInt(0);

        padding_Y =  parseInt(translateCuerda1CoordinateY) + (parseInt(cuerda-1) * parseInt(translateCuerdaPad_Y));
        //console.log('padding_Y '+padding_Y);
        noteGlobalY= noteGlobalY+ padding_Y;
        //console.log('y finalmente es ->'+noteGlobalY);


      coordenada = {}
      coordenada ["x"] = noteGlobalX;
      coordenada ["y"] = noteGlobalY;
      coordenada ["cuerda"] = cuerda;
      coordenada ["noteTextId"] = noteTextId;
      jsonUnionNotasAcordes.push(coordenada);

}



function getIntervalName(interval){

//F 2m 2M 3m 3M 4 4# 5J 6m 6M 7b 7M
//0 1  2  3  4  5 6  7  8  9  10 11
var interav_name ='';
var interval_int=parseInt(interval);
switch (interval_int) {
    case 0:
        interav_name= 'F';
        break;
    case 1:
        interav_name= '2m';
        break;
    case 2:
        interav_name= '2M';
        break;
    case 3:
        interav_name= '3b';
        break;
    case 4:
        interav_name= '3M';
        break;
    case 5:
        interav_name= '4J';
        break;
    case 6:
        interav_name= '4#';
        break;
    case 7:
        interav_name= '5J';
        break;
    case 8:
        interav_name= '6m';
        break;
    case 9:
        interav_name= '6M';
        break;
    case 10:
        interav_name= '7b';
        break;
    case 11:
        interav_name= '7M';
        break;
    default:
        interav_name= '';
}
//console.log('interav_name->'+interav_name);
return interav_name;
}


function usedintervals(currentInterval){

$.each(currentUsedIntervals,function() {
  //console.log('se activa el intervalo->'+currentInterval );

     if(this['intervalo'] == currentInterval){
      //console.log("pintamos intervalo activado " + this['name']);
      this['ispart'] = "1";

    }

});
}


function getNotesFromCurrentTonic(tonica,scaleNotes){
var tonicaUsed= '0';
var tonicaIndex= parseInt(0);
notesWithCurrentTonicOrderByIndex=[];
var notesWithCurrentTonic =[];
var contador = parseInt(0);


           $.each(notes,function(index, value) {
          // console.log("nota que viene del array notes->"+this['label']);
         //   if(this['label'] == value){
         //       console.log("nota se usa en esta escala y esta tonica luego la recolocamos con el index que le corresponde segun la nueva tonica");
                 if(this['label'] == tonica){
            //    console.log("es la tonica luego pongo index = 0 y pongo tonicaUsed =1 y lo meto en el array notesWithCurrentTonic");
                      contador = '0';
                      tonicaUsed='1';
                      tonicaIndex=this['index'];
                      item = {}
                      item ["id"] = 0;
                      item ["index"] = 0;
                      item ["label"] = this['label'];
                      item ["text"] = this['text'];
                      notesWithCurrentTonicOrderByIndex.push(item);

                 }else if (tonicaUsed=='1'){
              //      console.log("el indice de la tonica ya lo hemos pasado asi que calculamos la formula para calcular su nuevo indice y lo meto en el array notesWithCurrentTonic");
              //      console.log("contador->" +contador);
              //      console.log("index->" +this['index']);
                    contador++;
                   // var newIndex= this['index']-contador;
                      item = {}
                      item ["id"] = contador;
                      item ["index"] = contador;
                      item ["label"] = this['label'];
                      item ["text"] = this['text'];
                      notesWithCurrentTonicOrderByIndex.push(item);

                 }

         });

//ahora lo recorremos otra vez para poner las notas que no hemos metido

 $.each(notes,function(index, value) {
                  if (this['index']<tonicaIndex){
                  //  console.log("el indice de la tonica aun no lo hemos pasado asi que metemos las notas que no habian entrado en la primera pasada");
                    contador++;
                    //var newIndex= 11 -8 +(this['index']+1);
                      item = {}
                      item ["id"] = contador;
                      item ["index"] = contador;
                      item ["label"] = this['label'];
                      item ["text"] = this['text'];
                      notesWithCurrentTonicOrderByIndex.push(item);
            }

 });



}


 function bg(naturalNote) {

      // console.log("calculamos para la nota natural" +naturalNote);

       if(naturalNote == 'B' || naturalNote == 'C' || naturalNote == 'F' ){
            return [
                    { id: 0 ,text: naturalNote},
            ];
        }else{
            return [
                { id: 0 ,text: naturalNote+"♭" },
                { id: 1 ,text: naturalNote},



                ];
        }
}

function destacaIntervalo(intervalo,colour,stroke_width,onlyThisInterval,cuerda,onlyBox) {
    //console.log("intervalo a destacar -> "+intervalo);

    var defaultStroke='none';
    var defatultStroke_Width='0';

  svgDashBoard.selectAll('circle').filter(function() {

        if(d3.select(this).attr("data-intervalo") !=null && cuerda !='0'){
              if(d3.select(this).attr("id").startsWith('string-'+cuerda)){
                    return true
                }else return false

        }else   return d3.select(this).attr("data-intervalo") !=null;

 }).each(function(d, i){
  if(intervalo == d3.select(this).attr("data-intervalo")){
  //console.log('data-intervalo  recuperado-> ' +d3.select(this).attr("data-intervalo"));
  //console.log('id recuperado -> ' +d3.select(this).attr("id"));
    d3.select(this).attr("stroke",colour);
    d3.select(this).attr("stroke-width",stroke_width);
    //como hemos limpiado el mastil en onlyBox hay que volver a poner el texto
    if(onlyBox){
      /*
svgDashBoard.selectAll('circle').each(function(d, i){
         d3.select(this).attr("fill","rgba(255, 255, 255, 0.01)");
            d3.select(this).attr("stroke","none");
            d3.select(this).attr("stroke-width","none");
             d3.select(this).attr("data-intervalo",null);
    });

    svgDashBoard.selectAll('text').each(function(d, i){
         d3.select(this).attr("data-intervalo-name",null);
           d3.select(this).text('');
            d3.select(this).attr("stroke-width","none");
    });

*/
    }

  }

 /* if(intervalo != d3.select(this).attr("data-intervalo") && onlyThisInterval==1){
        d3.select(this).attr("stroke",defaultStroke);
        d3.select(this).attr("stroke-width",defatultStroke_Width);
  }
  */
});

}

//function changeNoteIntervalo(type,mode) {
function changeNoteIntervalo(type) {
   // 0 -> show notes
   //1 -> show inerval

svgDashBoard.selectAll('text').filter(function() {
    return d3.select(this).attr("data-intervalo-name") !=null;
}).each(function(d, i){
  var intervaloName=d3.select(this).attr("data-intervalo-name");
   var noteName=  d3.select(this).html();
   d3.select(this).text(intervaloName);
    d3.select(this).attr("data-intervalo-name",noteName);

 });


  //paintOptions(type,mode);
  paintOptions(type);
}



function cambiaTonalidad(tonalidad) {

    console.log("cambiaTonalidad -> "+tonalidad);
     tonica = tonalidad;
    paintNotes();
    cleanAll(true);

}


function cleanAll(cleanScales) {

    svgDashBoard.selectAll('circle').each(function(d, i){
         d3.select(this).attr("fill","rgba(255, 255, 255, 0.01)");
            d3.select(this).attr("stroke","none");
            d3.select(this).attr("stroke-width","none");
             d3.select(this).attr("data-intervalo",null);
    });

    svgDashBoard.selectAll('text').each(function(d, i){
         d3.select(this).attr("data-intervalo-name",null);
           d3.select(this).text('');
            d3.select(this).attr("stroke-width","none");
    });

    $.each(currentUsedIntervals,function() {
        this["ispart"]='0';
    });


   if(cleanScales) scalesPainted=[];
    paintSelectModes();
    paintIntervals();
    paintOptions(0, -1);



}
