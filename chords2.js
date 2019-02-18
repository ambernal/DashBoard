
var radio=parseInt(15);
var bajaLinea=parseInt(5);
var centroCircle=  parseInt(3);
var posTraste12 =    parseInt(840);


var chordToPaintLines = "";


function pintaUnionAcordesDinamically(cuerdaBase,nota,scaleType,colour){

    var scaleNotes = getScale(scaleType);
    if(cuerdaBase == 4){

        pintaUnionAcordesFromJSON(chord1from4String, nota,scaleNotes);
        pintaUnionAcordesFromJSON(chord2from4String, nota,scaleNotes);
        pintaUnionAcordesFromJSON(chord3from4String, nota,scaleNotes);
        pintaUnionAcordesFromJSON(chord4from4String, nota,scaleNotes);

    }else if(cuerdaBase == 5){

        pintaUnionAcordesFromJSON(chord1from5String, nota,scaleNotes);
        pintaUnionAcordesFromJSON(chord2from5String, nota,scaleNotes);
        pintaUnionAcordesFromJSON(chord3from5String, nota,scaleNotes);
        pintaUnionAcordesFromJSON(chord4from5String, nota,scaleNotes);

    }else if(cuerdaBase == 6){

        pintaUnionAcordesFromJSON(chord1from6String, nota,scaleNotes);
        pintaUnionAcordesFromJSON(chord2from6String, nota,scaleNotes);
        pintaUnionAcordesFromJSON(chord3from6String, nota,scaleNotes);
        pintaUnionAcordesFromJSON(chord4from6String, nota,scaleNotes);


      }
}



function pintaUnionAcordesFromJSON(chordFromString, nota,scaleNotes){
/*
    console.log("scaleNotes" + JSON.stringify(scaleNotes, null, 2))
    console.log("jsonObj" + JSON.stringify(jsonObj, null, 2))
*/

var useTwelveFrest = hasNotesInFrestZeroAndBefore(chordFromString);
console.log('useTwelveFrest->'+useTwelveFrest)
chordToPaintLines = chordFromString;

var thirdIntervalType = scaleNotes[1];
var sevenIntervalType = scaleNotes[3];
doIntervalArpgioMenorMayor('3', thirdIntervalType);
doIntervalArpgioMenorMayor('7', sevenIntervalType);


$.each(chordToPaintLines,function (index,value){

console.log("============Miramos el indice: " +index +" que es el interavalo: "+this["intervalo"])
var isLastElement = index == chordToPaintLines.length -1;

   if (isLastElement) {
       console.log('last item so we had painted all lines and have to finished')

   }else{
     paintCoordenatesFromOriginToTarget(index, this["origin"], chordToPaintLines,useTwelveFrest)
   }

    });
}

function paintCoordenatesFromOriginToTarget(index, origin, chordToPaintLines,useTwelveFrest){

  var useTwelveOrZeroFretOrigin = paintFrestTwelve(chordToPaintLines[origin].cuerda,chordToPaintLines[origin].intervalo,useTwelveFrest)
  console.log("useTwelveOrZeroFret for origin: "+useTwelveOrZeroFretOrigin );

  var useTwelveOrZeroFretTarget = paintFrestTwelve(chordToPaintLines[index].cuerda,chordToPaintLines[index].intervalo,useTwelveFrest)
  console.log("useTwelveOrZeroFret for target: "+useTwelveOrZeroFretTarget )

  var clockPosition = getClockPosition(chordToPaintLines[origin].intervalo,chordToPaintLines[origin].cuerda,chordToPaintLines[index].intervalo,chordToPaintLines[index].cuerda,useTwelveOrZeroFretOrigin,useTwelveOrZeroFretTarget)
    console.log("clockPosition para index "+index +" y origin" +origin+" : "  +clockPosition)

          var idOriginInterval = '#string-'+chordToPaintLines[origin].cuerda+useTwelveOrZeroFretOrigin+'-'+chordToPaintLines[origin].intervalo+'-text';
          console.log("Origin idCurrentInterval  " +idOriginInterval)
          var xOrigin = $(idOriginInterval).attr('x');
          var yOrigin = $(idOriginInterval).attr('y');
          console.log("xOrigin " +xOrigin)
          console.log("yOrigin " +yOrigin)

          var idTargetInterval = '#string-'+chordToPaintLines[index].cuerda+useTwelveOrZeroFretTarget+'-'+chordToPaintLines[index].intervalo+'-text';
          console.log("Target idNextInterval " +idTargetInterval)
          var xTarget = $(idTargetInterval).attr('x');
          var yTarget = $(idTargetInterval).attr('y');
          console.log("xTarget " +xTarget)
          console.log("yTarget " +yTarget)
          console.log("Comienzan los calculos automatizados ")

          console.log("recalculamos xOrigin con su hora de reloj ")
          var xOrigin =     changeCoordenatesByClockPosition(xOrigin, circleClock[clockPosition].addToXorigin);
          console.log("xOrigin tras aplicarle el reloj: " +xOrigin)

          console.log("recalculamos xTarget con su hora de reloj ")
          var xTarget =     changeCoordenatesByClockPosition(xTarget, circleClock[clockPosition].addToXtarget);
          console.log("xTarget  tras aplicarle el reloj: " +xTarget)

          console.log("aniadimos el padding a yOrigin ")
          var padding_Y = parseInt(0);
          padding_Y =  parseInt(translateCuerda1CoordinateY) + (parseInt(chordToPaintLines[origin].cuerda-1) * parseInt(translateCuerdaPad_Y));
          console.log('padding_Y '+padding_Y);
            yOrigin = parseInt(yOrigin) + padding_Y;
          console.log('yOrigin finalmente es ->'+yOrigin);

          console.log("recalculamos yOrigin con su hora de reloj ")
          var yOrigin =     changeCoordenatesByClockPosition(yOrigin, circleClock[clockPosition].addToYorigin);
          console.log("yOrigin  tras aplicarle el reloj: " +yOrigin)
////////////////////////

          console.log("aniadimos el padding a yTarget ")
           padding_Y = parseInt(0);
          padding_Y =  parseInt(translateCuerda1CoordinateY) + (parseInt(chordToPaintLines[index].cuerda-1) * parseInt(translateCuerdaPad_Y));
          console.log('padding_Y '+padding_Y);
            yTarget=parseInt(yTarget) + padding_Y;
          console.log('yTarget finalmente es ->'+yTarget);

          console.log("recalculamos yTarget con su hora de reloj ")
          var yTarget =     changeCoordenatesByClockPosition(yTarget, circleClock[clockPosition].addToYtarget);
          console.log('yTarget  tras aplicarle el reloj: ->'+yTarget);


          console.log("xOrigin " +xOrigin)
          console.log("xTarget " +xTarget)
          console.log("yOrigin " +yOrigin)
          console.log("yTarget " +yTarget)


          pintaLineaUnion(xOrigin,xTarget,yOrigin,yTarget,colourByString[0].colour);

}

function paintFrestTwelve(cuerda,intervalo,useTwelveFrest){
  var idInterval = '#string-'+cuerda+'-'+intervalo+'-text';
  console.log("paintFrestTwelve START ->"+idInterval+ " fret a pintar->" +$(idInterval).attr('fret'));
  if($(idInterval).attr('fret')< 3 && useTwelveFrest){
    return "-12";
  }else{
    return "";
  }

}

function hasNotesInFrestZeroAndBefore(chordFromString){
 console.log('hasNotesInFrestZeroAndBefore->')
  //if a chord has a note higher than seven chord , we must paint the twelve flet note, no zero flet note.
  //if the notes are from zero to one, tow ,three fret we paint this chord

  var frestZero = false;
  var frestHigherSeven = false;

  $.each(chordFromString,function (index,value){
    var idInterval = '#string-'+chordFromString[index].cuerda+'-'+chordFromString[index].intervalo+'-text';
    if($(idInterval).attr('fret')== 0 ){
      frestZero = true;
      console.log('use frest Zero')
    }

    if($(idInterval).attr('fret')> 7 ){
      frestHigherSeven = true;
        console.log('use frest Higher Seven')
    }

  });

  if(frestZero && frestHigherSeven){
    return true
  }else{
    return false
  }
}

function doIntervalArpgioMenorMayor(interval, type){

  $.each(chordToPaintLines,function (index,value){

    if(this["intervalo"] == interval) {
        this["intervalo"] = type
    }

  });

}


function changeCoordenatesByClockPosition(coordenada, moveCoordenada){

  console.log("changeCoordenatesByClockPosition coordenada " +coordenada +" moveCoordenada " +moveCoordenada)
  if(moveCoordenada == "-radio") return parseInt(coordenada) -10;
  if(moveCoordenada == "-2radio") return coordenada - (2 *10);
  if(moveCoordenada == "+radio") return parseInt(coordenada + 10);
  if(moveCoordenada == "+2radio") return coordenada + (2 *10);
  if(moveCoordenada == "+0") return coordenada;

  if(moveCoordenada == "-MedioRadio") return parseInt(coordenada) -10;
  if(moveCoordenada == "MedioRadio") return parseInt(coordenada) +10;

}

function getClockPosition(intervalOrigin,cuerdaOrigin,intervalTarget,cuerdaTarget,useTwelveOrZeroFretOrigin,useTwelveOrZeroFretTarget){

  console.log("getClockPosition() intervalOrigin " +intervalOrigin)
  console.log("getClockPosition() cuerdaOrigin " +cuerdaOrigin)
  console.log("getClockPosition() intervalTarget " +intervalTarget)
  console.log("getClockPosition() cuerdaTarget " +cuerdaTarget)

  var idOriginInteval = '#string-'+cuerdaOrigin+useTwelveOrZeroFretOrigin+'-'+intervalOrigin +'-text'
  console.log("idOriginInteval: " +idOriginInteval)
  var xOrigin = $(idOriginInteval).attr('x');

var idNextInteval =  '#string-'+cuerdaTarget+useTwelveOrZeroFretTarget+'-'+intervalTarget +'-text'
console.log("idNextInteval: " +idNextInteval)
var xTarget = $(idNextInteval).attr('x');

console.log("getClockPosition xOrigin " +xOrigin)
console.log("getClockPosition xTarget " +xTarget)

if(xOrigin == xTarget && cuerdaOrigin > cuerdaTarget) return 0 //12
if(xOrigin == xTarget && cuerdaOrigin < cuerdaTarget) return 3 //6
if(xOrigin > xTarget && cuerdaOrigin > cuerdaTarget ) return 5;//10
if(xOrigin > xTarget && cuerdaOrigin < cuerdaTarget ) return 4;//8
if(xOrigin < xTarget && cuerdaOrigin > cuerdaTarget ) return 1;//2
if(xOrigin < xTarget && cuerdaOrigin < cuerdaTarget ) return 2;//4
}

//la F siempre primero

function pintaLineaUnion(x1,x2,y1,y2,colour){

var stroke=colour;
/*
if(cuerdaBase_Int==4){
  stroke='#8cf442';
}else if(cuerdaBase_Int==5){
  stroke='#429ef4'
}
*/
   // console.log('Creamos la linea : id' +cuerda+nota+'union : con x-> '+ x1  +' y x2 '+x2  +' e y-> ' +y1 +' e y2-> ' +y2);

    var cof = svgGtr.append("g").append("line")
     .attr('x1', x1)
    .attr('x2', x2)
    .attr('y1', y1)
    .attr('y2', y2)
    .attr('stroke-width', '3')
    .attr('stroke', stroke);


  }
