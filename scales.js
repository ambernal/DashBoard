function showOnlyBox(type, scale,onlyBoxes){

console.log("actualizamos para el  scale-> "+scale +"  onlyBoxes-> " +onlyBoxes);
var boxToPaint=0;

 for(j = 0; j < scalesPainted.length; j++) {
        if (scalesPainted[j].mode ==  scale) {
            var onlyBoxedUpdate=0;
             if(onlyBoxes==0 || onlyBoxes == null || onlyBoxes === undefined){
                onlyBoxedUpdate = 1
              }else {
                onlyBoxedUpdate= 0  
              }  
              scalesPainted[j].onlyBoxes= onlyBoxedUpdate;

              boxToPaint= scalesPainted[j].box1
              if(boxToPaint=== undefined)boxToPaint =1;
              console.log("su box es -> "+boxToPaint );
            }
        break;     
 }   



//TODO ver la escala, recorrer todos sus circulos y borrarlos y pintar solo esa caja.


showBox(boxToPaint,scale,type,true)

}


function showRelative(type,index,showRelatives){

console.log("actualizamos el showRelatives index-> "+index);

 for(j = 0; j < scalesPainted.length; j++) {
        if (scalesPainted[j].mode ==  index) {
         var showRelativesUpdate=0;
            if(showRelatives==0 || showRelatives == null || showRelatives === undefined){    
                showRelativesUpdate = 1
              }else{
                 showRelativesUpdate = 0  
              }  
            scalesPainted[j].showRelatives = showRelativesUpdate
                   
        }
        break;
 }       
//TODO ver la escala, recorrer todos sus circulos y borrarlos y pintar solo esa caja.

 paintOptions(type)
}



function showBox(boxToPaint,scale,type,onlyBox) {

console.log("scale "+scale)
console.log("boxToPaint "+boxToPaint)


 for(j = 0; j < scalesPainted.length; j++) {


        if (scalesPainted[j].mode ==  scale) {

               switch (boxToPaint) {
                    case 1:
                         scalesPainted[j].box1 =1;
                        break; 
                    case 2:
                        scalesPainted[j].box1 =2;
                        break;  
                    case 3:
                        scalesPainted[j].box1 =3;
                        break; 
                    case 4:
                        scalesPainted[j].box1 =4;
                        break; 
                    case 5:
                        scalesPainted[j].box1 =5;
                        break; 
            }
             break;
        }
}
//F 2m 2M 3m 3M 4J 4# 5J 6m 6M 7b 7M
//0 1  2  3  4  5  6  7  8  9  10 11
/*

*/
var box_interval=[];
// F 2M 3M 4J 5J 6M 7M
//var ionian = ["0","2","4","5","7","9","11"]
var box_Ionian=[        
        { id: 0, cuerda: 1, intervalo: "11"},{ id: 1, cuerda: 1, intervalo: "0"},{ id: 2, cuerda: 1, intervalo: "2"},
        { id: 3, cuerda: 2, intervalo: "7"},{ id: 4, cuerda: 2, intervalo: "9"},
        { id: 5, cuerda: 3, intervalo: "2"},{ id: 6, cuerda: 3, intervalo: "4"},{ id: 7, cuerda: 3, intervalo: "5"},
        { id: 8, cuerda: 4, intervalo: "9"},{ id: 9, cuerda: 4, intervalo: "11"},{ id: 10, cuerda: 4, intervalo: "0"},
        { id: 11, cuerda: 5, intervalo: "4"},{ id: 12, cuerda: 5, intervalo: "5"},{ id: 13, cuerda: 5, intervalo: "7"},
        { id: 14, cuerda: 6, intervalo: "0"},{ id: 15, cuerda: 6, intervalo: "2"}
 ];
// F 2M 3b 4J 5J 6M 7M
//var dorian = ["0","2","3","5","7","9","10"]
var box_Dorian=[        
        { id: 0, cuerda: 1, intervalo: "0"},{ id: 1, cuerda: 1, intervalo: "2"},{ id: 2, cuerda: 1, intervalo: "3"},
        { id: 3, cuerda: 2, intervalo: "7"},{ id: 4, cuerda: 2, intervalo: "9"},{ id: 5, cuerda: 2, intervalo: "10"},
        { id: 6, cuerda: 3, intervalo: "2"},{ id: 7, cuerda: 3, intervalo: "3"},{ id: 8, cuerda: 3, intervalo: "5"},
        { id: 9, cuerda: 4, intervalo: "9"},{ id: 10, cuerda: 4, intervalo: "10"},{ id: 11, cuerda: 4, intervalo: "0"},
        { id: 12, cuerda: 5, intervalo: "5"},{ id: 13, cuerda: 5, intervalo: "7"},
        { id: 14, cuerda: 6, intervalo: "0"},{ id: 15, cuerda: 6, intervalo: "2"},{ id: 16, cuerda: 6, intervalo: "3"}
 ];
// F 2M 3b 4J 5J 6b 7b
//var phrygian = ["0","2","4","5","7","8","10"]
var box_Phrygian=[        
        { id: 0, cuerda: 1, intervalo: "0"},{ id: 1, cuerda: 1, intervalo: "2"},{ id: 2, cuerda: 1, intervalo: "3"},
        { id: 3, cuerda: 2, intervalo: "7"},{ id: 4, cuerda: 2, intervalo: "8"},{ id: 5, cuerda: 2, intervalo: "10"},
        { id: 6, cuerda: 3, intervalo: "4"},{ id: 7, cuerda: 3, intervalo: "5"},
        { id: 8, cuerda: 4, intervalo: "10"},{ id: 9, cuerda: 4, intervalo: "0"},{ id: 10, cuerda: 4, intervalo: "2"},
        { id: 12, cuerda: 5, intervalo: "5"},{ id: 13, cuerda: 5, intervalo: "7"},{ id: 11, cuerda: 5, intervalo: "8"},
        { id: 14, cuerda: 6, intervalo: "0"},{ id: 15, cuerda: 6, intervalo: "2"},{ id: 16, cuerda: 6, intervalo: "3"}
 ];
// F 2M 3M 4# 5J 6M
//var lydian = ["0","2","4","6","7","9","11"]
var box_Lydian=[        
      /*  { id: 0, cuerda: 1, intervalo: "0"},{ id: 1, cuerda: 1, intervalo: "2"},{ id: 2, cuerda: 1, intervalo: "3"},
        { id: 3, cuerda: 2, intervalo: "7"},{ id: 4, cuerda: 2, intervalo: "8"},{ id: 5, cuerda: 2, intervalo: "10"},
        { id: 6, cuerda: 3, intervalo: "4"},{ id: 7, cuerda: 3, intervalo: "5"},
        { id: 8, cuerda: 4, intervalo: "10"},{ id: 9, cuerda: 4, intervalo: "0"},{ id: 10, cuerda: 4, intervalo: "2"},
        { id: 12, cuerda: 5, intervalo: "5"},{ id: 13, cuerda: 5, intervalo: "7"},{ id: 11, cuerda: 5, intervalo: "8"},
        { id: 14, cuerda: 6, intervalo: "0"},{ id: 15, cuerda: 6, intervalo: "2"},{ id: 16, cuerda: 6, intervalo: "3"}*/
 ];
 // F 2M 3M 4J 5J 6M 7b
//var mixolydian = ["0","2","4","5","7","9","10"]
var box_Mixolydian=[        
        { id: 0, cuerda: 1, intervalo: "0"},{ id: 1, cuerda: 1, intervalo: "2"},
        { id: 2, cuerda: 2, intervalo: "7"},{ id: 3, cuerda: 2, intervalo: "9"},{ id: 4, cuerda: 2, intervalo: "10"},
        { id: 5, cuerda: 3, intervalo: "2"},{ id: 6, cuerda: 3, intervalo: "4"},{ id: 7, cuerda: 3, intervalo: "5"},
        { id: 8, cuerda: 4, intervalo: "9"},{ id: 9, cuerda: 4, intervalo: "10"},{ id: 10, cuerda: 4, intervalo: "0"},
        { id: 11, cuerda: 5, intervalo: "4"},{ id: 12, cuerda: 5, intervalo: "5"},{ id: 13, cuerda: 5, intervalo: "7"},
        { id: 14, cuerda: 6, intervalo: "0"},{ id: 15, cuerda: 6, intervalo: "2"}
 ];
// F 2M 3b 4J 5J 6b 7b
//var aeolian = ["0","2","3","5","7","8","10"]
var box_Aeolian=[        
        { id: 0, cuerda: 1, intervalo: "0"},{ id: 1, cuerda: 1, intervalo: "2"},{ id: 2, cuerda: 1, intervalo: "3"},
        { id: 3, cuerda: 2, intervalo: "7"},{ id: 4, cuerda: 2, intervalo: "8"},{ id: 5, cuerda: 2, intervalo: "10"},
        { id: 6, cuerda: 3, intervalo: "2"},{ id: 7, cuerda: 3, intervalo: "3"},{ id: 8, cuerda: 3, intervalo: "5"},
        { id: 9, cuerda: 4, intervalo: "10"},{ id: 10, cuerda: 4, intervalo: "0"},
        { id: 11, cuerda: 5, intervalo: "5"},{ id: 12, cuerda: 5, intervalo: "7"},{ id: 13, cuerda: 5, intervalo: "8"},
        { id: 14, cuerda: 6, intervalo: "0"},{ id: 15, cuerda: 6, intervalo: "2"},{ id: 16, cuerda: 6, intervalo: "3"}
 ];
// F 2b 3b 4J 4#/5b 6b 7b
//var locrian = ["0","1","3","5","6","8","10"]
var box_Locrian=[        
        { id: 0, cuerda: 1, intervalo: "0"},{ id: 1, cuerda: 1, intervalo: "2"},{ id: 2, cuerda: 1, intervalo: "3"},
        { id: 3, cuerda: 2, intervalo: "7"},{ id: 4, cuerda: 2, intervalo: "8"},{ id: 5, cuerda: 2, intervalo: "10"},
        { id: 6, cuerda: 3, intervalo: "2"},{ id: 7, cuerda: 3, intervalo: "3"},{ id: 8, cuerda: 3, intervalo: "5"},
        { id: 9, cuerda: 4, intervalo: "10"},{ id: 10, cuerda: 4, intervalo: "0"},
        { id: 11, cuerda: 5, intervalo: "5"},{ id: 12, cuerda: 5, intervalo: "7"},{ id: 13, cuerda: 5, intervalo: "9"},
        { id: 14, cuerda: 6, intervalo: "0"},{ id: 15, cuerda: 6, intervalo: "2"},{ id: 16, cuerda: 6, intervalo: "3"}
 ];

// F 2M 3M 5J 6M
//var pentatonicaMayor = ["0","2","4","7","9"]
 var box1_Pent_Mayor=[        
        { id: 0, cuerda: 1, intervalo: "0"},{ id: 1, cuerda: 1, intervalo: "2"},
        { id: 2, cuerda: 2, intervalo: "7"},{ id: 3, cuerda: 2, intervalo: "9"},
        { id: 4, cuerda: 3, intervalo: "2"},{ id: 5, cuerda: 3, intervalo: "4"},
        { id: 6, cuerda: 4, intervalo: "9"},{ id: 7, cuerda: 4, intervalo: "0"},
        { id: 8, cuerda: 5, intervalo: "4"},{ id: 9, cuerda: 5, intervalo: "7"},
        { id: 10, cuerda: 6, intervalo: "0"},{ id: 11, cuerda: 6, intervalo: "2"},
 ];

 var box2_Pent_Mayor=[        
        { id: 0, cuerda: 1, intervalo: "2"},{ id: 1, cuerda: 1, intervalo: "4"},
        { id: 2, cuerda: 2, intervalo: "9"},{ id: 3, cuerda: 2, intervalo: "0"},
        { id: 4, cuerda: 3, intervalo: "4"},{ id: 5, cuerda: 3, intervalo: "7"},
        { id: 6, cuerda: 4, intervalo: "0"},{ id: 7, cuerda: 4, intervalo: "2"},
        { id: 8, cuerda: 5, intervalo: "7"},{ id: 9, cuerda: 5, intervalo: "9"},
        { id: 10, cuerda: 6, intervalo: "2"},{ id: 11, cuerda: 6, intervalo: "4"},
 ];



// F 2M 3M 5J 6M
//var pentatonicaMenor = ["0","3","5","7","10"]

 var box1_Pent_Menor=[        
        { id: 0, cuerda: 1, intervalo: "0"},{ id: 1, cuerda: 1, intervalo: "3"},
        { id: 2, cuerda: 2, intervalo: "7"},{ id: 3, cuerda: 2, intervalo: "10"},
        { id: 4, cuerda: 3, intervalo: "3"},{ id: 5, cuerda: 3, intervalo: "5"},
        { id: 6, cuerda: 4, intervalo: "10"},{ id: 7, cuerda: 4, intervalo: "0"},
        { id: 8, cuerda: 5, intervalo: "5"},{ id: 9, cuerda: 5, intervalo: "7"},
        { id: 10, cuerda: 6, intervalo: "0"},{ id: 11, cuerda: 6, intervalo: "3"},
 ];
 var box2_Pent_Menor=[        
        { id: 0, cuerda: 1, intervalo: "3"},{ id: 1, cuerda: 1, intervalo: "5"},
        { id: 2, cuerda: 2, intervalo: "10"},{ id: 3, cuerda: 2, intervalo: "0"},
        { id: 4, cuerda: 3, intervalo: "5"},{ id: 5, cuerda: 3, intervalo: "7"},
        { id: 6, cuerda: 4, intervalo: "0"},{ id: 7, cuerda: 4, intervalo: "3"},
        { id: 8, cuerda: 5, intervalo: "7"},{ id: 9, cuerda: 5, intervalo: "10"},
        { id: 10, cuerda: 6, intervalo: "3"},{ id: 11, cuerda: 6, intervalo: "5"},
 ];

var boxToPaint_int=parseInt(boxToPaint);
if(scale<7){
        switch (scale) {
            case 0:
                console.log('box_Ionian');
                box_interval= box_Ionian;
                break; 
            case 1:
                console.log('box_Dorian');
                box_interval= box_Dorian;
                break;  
            case 2:
                console.log('box_Phrygian');
                box_interval= box_Phrygian;
                break; 
            case 3:
                 console.log('box_Lydian');
                box_interval= box_Lydian;
                break; 
            case 4:
                console.log('box_Mixolydian');
                box_interval= box_Mixolydian;
                break; 
            case 5:
                console.log('box_Aeolian');
                box_interval= box_Aeolian;
                break; 
            case 6:
                console.log('box_Locrian');
                box_interval= box_Locrian;
                break; 
                
        }

}else if(scale == 7 ){
        switch (boxToPaint_int) {
            case 1:
                console.log('box1_Pent_Mayor');
                box_interval= box1_Pent_Mayor;
                break; 
            case 2:
                console.log('box2_Pent_Mayor');
                box_interval= box2_Pent_Mayor;
                break;  
            case 3:
                box_interval= box3_Pent_Mayor;
                break; 
            case 4:
                box_interval= box4_Pent_Mayor;
                break; 
            case 5:
                box_interval= box5_Pent_Mayor;
                break; 

        }
 }else  if(scale == 8 ){
    switch (boxToPaint_int) {
        case 1:
            console.log('box1_Pent_Menor')
            box_interval= box1_Pent_Menor;
            break; 
        case 2:
            box_interval= box2_Pent_Menor;
            break;  
        case 3:
            box_interval= box3_Pent_Menor;
            break; 
        case 4:
            box_interval= box4_Pent_Menor;
            break; 
        case 5:
            box_interval= box5_Pent_Menor;
            break; 

    }    
}

var colour= "#b20000";
var stroke_width= "4";
var stroke="#b20000"

if(onlyBox){

    cleanAll(false);
 
for (var cuerda=1; cuerda<7; cuerda++) {
   // console.log('cuerda onlyBox'+cuerda);
    $.each(box_interval,function() {

        if(this['cuerda']==cuerda){
            
        var noteName= notesWithCurrentTonicOrderByIndex[this["intervalo"]].text
       // console.log('destacamos el intervalo '+this["intervalo"]);
        //console.log('destacamos el noteName '+noteName);
        var colour = 'white';
        if(noteName== tonica)colour='yellow';
        pintaNote(cuerda,colour,noteName,radioSizeCircle,stroke_width,stroke,this["intervalo"]);
        usedintervals(this["intervalo"]);
         }   
    });
    
}


paintIntervals();
paintSelectModes();

}else{
    console.log('false onlyBox');
    $.each(box_interval,function() {
      
       //console.log("destacamos el intervalo "+this['intervalo'] +" y cuerda " +this['cuerda'])
      
      destacaIntervalo(this['intervalo'],colour,stroke_width,0,this['cuerda'])


    });
    paintOptions(type);

 }
}