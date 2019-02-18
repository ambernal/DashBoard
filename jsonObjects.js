//////////////////////////
//// Scale ///////////////
//// Dashboard.js ////////
/////////////////////////

//F 2m 2M 3m 3M 4J 4Aum 5J 6m 6M 7b 7M
//0 1  2  3  4  5  6    7  8  9  10 11

// F 2M 3M 5J 6M
var pentatonicaMayor = ["F","2M","3M","5J","6M"]
// F 3m 4J 5J 7m
var pentatonicaMenor = ["F","3m","4J","5J","7m"]
// F 2M 3M 4J 5J 6M 7M
var ionian = ["F","2M","3M","4J","5J","6M","7M"]
// F 2M 3b 4J 5J 6M 7M
var dorian = ["F","2M","3m","4J","5J","6M","7m"]
// F 2M 3b 4J 5J 6b 7b
var phrygian = ["F","2M","3M","4J","5J","6m","7m"]
// F 2M 3M 4# 5J 6M
var lydian = ["F","2M","3M","4Aum","5J","6M","7M"]
// F 2M 3M 4J 5J 6M 7b
var mixolydian = ["F","2M","3M","4J","5J","6M","7m"]
// F 2M 3b 4J 5J 6b 7b
var aeolian = ["F","2M","3m","4J","5J","6m","7m"]
// F 2b 3b 4J 4#/5b 6b 7b
var locrian = ["F","2m","3m","4J","4Aum","6m","7m"]

//F 3M 5J 7b
var acordesDominantes = ["F","3M","5J","7m"]

//F 3m 5J 7b
var acordesm7 = ["F","3m","5J","7m"]

//F 3M 5J 7b
var acordesMayor7mayor = ["F","3M","5J","7M"]

var arpeggios= [];

var tonica= 'A';

jsonObj = [];

/////////////////
///Buttons //////
/// paint.js ////
////////////////

var modesNames = [

       { name: 'Major / Ionian', index: 1 , mayorRelative : 0, minorRelative: 9},
       { name: 'Dorian', index: 2 , mayorRelative : 10, minorRelative: 7},
       { name: 'Phrygian', index: 3 , mayorRelative : 8, minorRelative: 5},
       { name: 'Lydian', index: 4 , mayorRelative : 7, minorRelative: 4},
       { name: 'Mixolydian', index: 5 , mayorRelative : 5, minorRelative: 2},
       { name: 'N Minor / Aeolian', index: 6 , mayorRelative : 0, minorRelative: 0},
       { name: 'Locrian', index: 7 , mayorRelative : 1, minorRelative: 10},
       { name: 'Pentatonic Mayor', index: 8 , mayorRelative : 0, minorRelative: 0},
       { name: 'Pentatonic Menor', index: 9 , mayorRelative : 0, minorRelative: 0},
   ];

 var currentUsedIntervals = [
       { "name": "F",  "intervalo": "0", "ispart": "0" ,"stroke":"#C6BD41","stroke_width":"4" },
       { "name": "2b", "intervalo": "1", "ispart": "0" ,"stroke":"#ff8000","stroke_width":"3" },
       { "name": "2M", "intervalo": "2",  "ispart": "0" ,"stroke":"#F08E0D","stroke_width":"3" },
       { "name": "3m", "intervalo": "3", "ispart": "0" ,"stroke":"#00e573","stroke_width":"3" },
       { "name": "3M", "intervalo": "4", "ispart": "0" ,"stroke":"#98388B","stroke_width":"3" },
       { "name": "4J", "intervalo": "5", "ispart": "0" ,"stroke":"#193ADF","stroke_width":"3" },
       { "name": "4Aum", "intervalo": "6", "ispart": "0" ,"stroke":"#666600","stroke_width":"3" },
       { "name": "5J", "intervalo": "7", "ispart": "0" ,"stroke":"#2D5A55","stroke_width":"3" },
       { "name": "6m", "intervalo": "8", "ispart": "0" ,"stroke":"#a64cff","stroke_width":"3" },
       { "name": "6M", "intervalo": "9", "ispart": "0" ,"stroke":"#48CEE2","stroke_width":"3" },
       { "name": "7m", "intervalo": "10", "ispart": "0" ,"stroke":"#2AAC44","stroke_width":"3" },
       { "name": "7M", "intervalo": "11", "ispart": "0" ,"stroke":"#cc6600","stroke_width":"3" }

       ];


var intervals = ['0','1','2','3','4','5','6','7','8','9','10','11','12-1','12-2','12-3','12-4'];
var naturalNotes = [
       { id: 0, index: 0, label: "A"},
       { id: 1, index: 1, label: "B"},
       { id: 2, index: 2, label: "C"},
       { id: 3, index: 3, label: "D"},
       { id: 4, index: 4, label: "E"},
       { id: 5, index: 5, label: "F"},
       { id: 6, index: 6, label: "G"},
                ];

  /////////////////
  ///Notes //////
  /// utils.js ////
  ////////////////
//F 2m 2M 3m 3M 4J 4Aum 5J 6m 6M 7b 7M
//0 1  2  3  4  5  6     7  8  9  10 11
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
              { id: 1,  label: "E"},
              { id: 2,  label: "B"},
              { id: 3,  label: "G"},
              { id: 4,  label: "D"},
              { id: 5,  label: "A"},
              { id: 6,  label: "E"}
           ];

//////////////////////
//////Union  Chord///
//// Chord2.js //////
////////////////////


// valores que habra que poner o quitar a la x y a la (que es donde está el texto de la nota)
//según desde donde se pinten las uniones de esa nota con la siguiente
var circleClock = [

       { id: 0, hora: 12, addToXorigin: 0 , addToYorigin : "-2radio", addToXtarget: 0 , addToYtarget :"+radio" },
       { id: 1,hora: 2, addToXorigin: "MedioRadio" , addToYorigin : "-MedioRadio", addToXtarget: "-MedioRadio" , addToYtarget :"-MedioRadio" },
       { id: 2,hora: 4, addToXorigin: "MedioRadio" , addToYorigin : "-MedioRadio", addToXtarget: "MedioRadio" , addToYtarget :"-MedioRadio" },
       { id: 3, hora: 6, addToXorigin: 0 , addToYorigin : "MedioRadio", addToXtarget: 0 , addToYtarget :"-2radio" },
       { id: 4, hora: 8, addToXorigin: 1 , addToYorigin : 0, addToXtarget: 1 , addToYtarget :1 },
       { id: 5,hora: 10, addToXorigin: "-MedioRadio" , addToYorigin : "-MedioRadio", addToXtarget: "MedioRadio" , addToYtarget :"MedioRadio" },
];


//como se pintaran las uniones de las notas en los acordes. Desde una cuerda base salen 4 cajas por acorde
//origin es desde que intervalo de los ya pintados  sale la linea que lo unira al intervalo qeu se esta consultando

var chord1from4String = [
  { cuerda: 1 , intervalo : "7" , origin : 1},
  { cuerda: 2 , intervalo : "3" , origin : 3},
  { cuerda: 4 , intervalo : "5J" , origin : 3},
  { cuerda: 3 , intervalo : "F" , origin : 0},
];

var chord2from4String = [
  { cuerda: 1 , intervalo : "F" , origin : 1},
  { cuerda: 2 , intervalo : "5J" , origin : 2},
  { cuerda: 3 , intervalo : "3" , origin : 3},
  { cuerda: 4 , intervalo : "7" , origin : 0},
];

var chord3from4String = [
  { cuerda: 1 , intervalo : "3" , origin : 1},
  { cuerda: 2 , intervalo : "7" , origin : 3},
  { cuerda: 3 , intervalo : "5J" , origin : 3},
  { cuerda: 4 , intervalo : "F" , origin : 0},
];

var chord4from4String = [
  { cuerda: 1 , intervalo : "5J" , origin : 3},
  { cuerda: 3 , intervalo : "7" , origin : 3},
  { cuerda: 4 , intervalo : "3" , origin : 3},
  { cuerda: 2 , intervalo : "F" , origin : 0},
];

var chord1from5String = [
  { cuerda: 2 , intervalo : "3" , origin : 1},
  { cuerda: 3 , intervalo : "7" , origin : 3},
  { cuerda: 4 , intervalo : "5J" , origin : 3},
  { cuerda: 5 , intervalo : "F" , origin : 0},
];

var chord2from5String = [
  { cuerda: 2 , intervalo : "3" , origin : 1},
  { cuerda: 3 , intervalo : "7" , origin : 3},
  { cuerda: 4 , intervalo : "5J" , origin : 3},
  { cuerda: 5 , intervalo : "F" , origin : 0},
];

var chord3from5String = [
  { cuerda: 2 , intervalo : "3" , origin : 1},
  { cuerda: 3 , intervalo : "7" , origin : 3},
  { cuerda: 4 , intervalo : "5J" , origin : 3},
  { cuerda: 5 , intervalo : "F" , origin : 0},
];

var chord4from5String = [
  { cuerda: 2 , intervalo : "3" , origin : 1},
  { cuerda: 3 , intervalo : "7" , origin : 3},
  { cuerda: 4 , intervalo : "5J" , origin : 3},
  { cuerda: 5 , intervalo : "F" , origin : 0},
];

var chord1from6String = [
  { cuerda: 3 , intervalo : "3" , origin : 1},
  { cuerda: 4 , intervalo : "7" , origin : 3},
  { cuerda: 5 , intervalo : "5J" , origin : 3},
  { cuerda: 6 , intervalo : "F" , origin : 0},
];

var chord2from6String = [
  { cuerda: 3 , intervalo : "3" , origin : 1},
  { cuerda: 4 , intervalo : "7" , origin : 3},
  { cuerda: 5 , intervalo : "5J" , origin : 3},
  { cuerda: 6 , intervalo : "F" , origin : 0},
];

var chord3from6String = [
  { cuerda: 3 , intervalo : "3" , origin : 1},
  { cuerda: 4 , intervalo : "7" , origin : 3},
  { cuerda: 5 , intervalo : "5J" , origin : 3},
  { cuerda: 6 , intervalo : "F" , origin : 0},
];

var chord4from6String = [
  { cuerda: 3 , intervalo : "3" , origin : 1},
  { cuerda: 4 , intervalo : "7" , origin : 3},
  { cuerda: 5 , intervalo : "5J" , origin : 3},
  { cuerda: 6 , intervalo : "F" , origin : 0},
];

// union lines between notes in chords union
var colourByString = [

  {string: 4, colour: '#596900' },
  {string: 5, colour: '#ffb500' },
  {string: 6, colour: '#596954' },
]
