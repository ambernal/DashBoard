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
        { "name": "4#", "intervalo": "6", "ispart": "0" ,"stroke":"#666600","stroke_width":"3" },
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

var optionsIntervals = [
        { id: 0, index: 0, label: "pintaChachi", weight:'100'},
        { id: 1, index: 1, label: "Acordes Dominantes Desde 4º cuerda" , weight:100},
        { id: 2, index: 2, label: "Acordes Dominantes Desde 5º cuerda" , weight:300},
        { id: 3, index: 3, label: "Acordes Dominantes Desde 6º cuerda" , weight:300},
        { id: 4, index: 4, label: "Arpeggios From Hell" , weight:300},
        { id: 5, index: 5, label: "Clean Dashboard" , weight:300},
     ];

 function paintDashboard() {


var cuerdaTranslateStart= 20;
var cuerdaTranslateSeparator= 40;
var circleTranslateStart= 50;
var circleTranslateSeparator= 70;
var textTranslateStart= 50;
var textTranslateSeparator= 70;
var trasteTranslateStart= 85;
var trasteTranslateSeparator= 70;

svgDashBoard.selectAll("g").remove();

var mastil=  svgDashBoard

var trastes=  mastil.append("g")
for(var traste = 0 ; traste<16 ; traste ++){
 trastes.append("rect")
            .attr("x",trasteTranslateStart +trasteTranslateSeparator*traste)
            .attr("y", 35)
            .attr("width", 5)
            .attr("height", 210)
            .attr("fill",function (i) { 

             
             if(traste == 0){
                 return "black";
            }else{
                return "none";
            }

          })

            .attr("stroke",'grey' )
            .attr("stroke-width",'1' )
}

var signalTraste=  mastil.append("g")

var signalCoordenates = [ 
        { id: 0, x: 260},
        { id: 1, x: 400},
        { id: 2, x: 540},
        { id: 3, x: 680},
        { id: 4, x: 880},
        { id: 5, x: 900},
        { id: 6, x: 1100},

                 ];  

           
            signalTraste.selectAll("circle")
            .data(signalCoordenates)
            .enter()
            .append("circle")
            .attr("cx",function (d) { 
                 return d.x;
       
          })
            .attr("r", 10)
            .attr("cy", 275)
            .attr("fill",'lightgrey')
            .attr("stroke",'none' )


var cuerdasMastil=  mastil.append("g")
for (var cuerda=0; cuerda<6; cuerda++) {

    var intervalStartRoot = getIntervalFromTonicByString(tonica, (cuerda+1))
    var intervalStart= intervalStartRoot;
    //console.log("intervalStart -> " +intervalStart);

    var idGeneratedName = '';



     var line=  cuerdasMastil
            .append("g")
            .attr("id","cuerda"+cuerda)
            .attr("transform", "translate(0, "+ (cuerdaTranslateStart+(cuerda*cuerdaTranslateSeparator))+")")
      


       var cuerdas=  line.append("line")
            .attr("x1",90 )
            .attr("y1", 20)
            .attr("x2", 1160)
            .attr("y2", 20)
            .attr("stroke-width",'2' )
            .attr("stroke",'black' )
  //circles
        var circles =     line.selectAll("circle")
            .data(intervals)
            .enter()
            .append("circle")
             .attr("id",function (d, i) { 
                var idGenerated = '';
                var octava = '';
                idGenerated = (cuerda+1);
                if(intervalStart>11)intervalStart = 0;
                if(i>11) octava= '12-' 
                idGenerated = 'string-'+idGenerated +'-'+ octava +intervalStart
                intervalStart++
               return idGenerated


            })
            .attr("r",15 )
            .attr("cy", 20)
            .attr("cx", function (d, i) {return circleTranslateStart+ (circleTranslateSeparator*i) })
            .attr("fill", 'rgba(255, 255, 255, 0.01)')
            .attr("stroke-width",'0' )
            .attr("stroke",'none' )      
         
//rhombus
 intervalStart= intervalStartRoot;

//var radioSizeCircle=15
var cYOrigen =   parseInt(20);
var cXOrigen =   parseInt(0);
//var radioSizeCircleInt = parseInt(radioSizeCircle)+5;
var radioSizeCircleInt = parseInt(radioSizeCircle);

            var polygons =     line.selectAll("polygon")
            .data(intervals)
            .enter()
            .append("polygon")
             .attr("id",function (d, i) { 
                var idGenerated = '';
                var octava = '';
                idGenerated = (cuerda+1);
                if(intervalStart>11)intervalStart = 0;
                if(i>11) octava= '12-' 
                idGenerated = 'rhombus-string-'+idGenerated +'-'+ octava +intervalStart
                intervalStart++
               return idGenerated
            })

    .attr("points",function (d, i) { 
              cXOrigen =   parseInt(circleTranslateStart+ (circleTranslateSeparator*i));
              var coordenates= cXOrigen.toString() +","+(cYOrigen-radioSizeCircleInt).toString()
                coordenates = coordenates +" "+(cXOrigen-radioSizeCircleInt).toString()+","+cYOrigen.toString()  
                coordenates = coordenates +" "+cXOrigen.toString()+","+(cYOrigen+radioSizeCircleInt).toString()
                coordenates = coordenates +" "+(cXOrigen+(radioSizeCircleInt)).toString()+","+cYOrigen.toString();
               return coordenates

            })
    .attr("stroke","none")
    .attr("stroke-width",0)
    .attr("fill","rgba(255, 255, 255, 0.01)");

         intervalStart= intervalStartRoot;
//texts
         var texts =  line.selectAll("text")
            .data(intervals)
            .enter()
            .append("text")
             .attr("id",function (d, i) {
                var idGenerated = '';
                var octava = '';
                idGenerated = (cuerda+1);
                if(intervalStart>11)intervalStart = 0;
                if(i>11) octava= '12-' 
                idGenerated = 'string-'+idGenerated +'-'+ octava +intervalStart
                 intervalStart++
               return idGenerated + '-text'

                })
            .attr("transform" ,"translate(0, 0) scale(1, 1)" )
            .attr("text-anchor","middle")
            .attr("x", function (d, i) {return textTranslateStart+ (textTranslateSeparator*i) })
            .attr("y", 25)
       
}
}


 function paintSelectModes() {
        var pad = 5;
        var buttonHeight = 25;
      
        svgModes.selectAll("g").remove();

        var modes = svgModes
            .append("g")
            .attr("transform", "translate(0, 20)");
        var gs = modes.selectAll("g")
            .data(modesNames, function (m) { return m.index.toString(); })
            .enter()
            .append("g")
            .attr("transform", function (d, i) { return "translate(0, " + (i * (buttonHeight + pad) + pad) + ")"; });
          
        buttons = gs
            .append("rect")
            .attr("x", pad)
            .attr("rx","10")
            .attr("ry","10")
            .attr("y", 0)
            .attr("strokeWidth", 2)
            .attr("fill",function (d, i) { 

             
             var isModeSelected= 0;

             for(j = 0; j < scalesPainted.length; j++) {
                if (scalesPainted[j].mode ==  i) {
                    isModeSelected=1;
                    break;
                }
            }

             //console.log('isModeSelected'+isModeSelected)
             if(isModeSelected == 1){
                 return "yellow";
            }else{
                return "white";
            }

          })
            
            .attr("stroke","red")
            .attr("width", 150)
            .attr("height", 25)
            .attr("class", "mode-button")
            .on("click", function(d,i) { 

               scale = {}
              scale ["mode"] = i;
              scale ["onlyBoxes"] = 0;
              scale ["name"] = d.name;
              scale ["mayorRelative"] = d.mayorRelative;
              scale ["minorRelative"] = d.minorRelative;
              scalesPainted.push(scale);    
                pintaChachiScale(i); 
           });
        gs
            .append("text")
            .attr("textContent","middle")
            .attr("x", pad + 10)
            .attr("y", 17)
            .text(function (x) { return x.name; })
            .attr("stroke", "#000000")
            .attr("fill", "#00ff00")
            .attr("class", "mode-text");
       // events.modeChange.subscribe(update);
    }

function paintIntervals() {

        var pad = 15;
        var buttonHeight = 25;
        var buttonWeight = 45;
        
        var transalateStr='';
        var y = 0;
        var x = 0;

        svgIntervals.selectAll("g").remove();

          var intervals = svgIntervals
            .append("g")
            .attr("transform", "translate(10, 15)");
        var gs = intervals.selectAll("g")
            .data(currentUsedIntervals)
            .enter()
            .append("g")
            .attr("transform", function (d, i) { 

             if(d.name.endsWith('M') || d.name.endsWith('#') ){
                 return "translate("+ (parseInt(buttonWeight) + (parseInt(pad)*2)) +", " + y + ")";

            }else{
               
                y= x * (buttonHeight + pad);
                 x++;
                return "translate(0, " + y + ")";
            }

       })
            
        buttons = gs
            .append("rect")
            .attr("rx","5")
            .attr("ry","5")
            .attr("x", pad)
            .attr("y", 0)
            .attr("strokeWidth", 4)
            .attr("fill",function (x) {
                 if(x.ispart == "1"){
                return x.stroke; 
                    }else{
                return "white";}
           })
            
            .attr("stroke","black")
            .attr("width", 40)
            .attr("height", 25)
            .attr("class", "mode-button")
            .on("click", function(d) {
                destacaIntervalo(d.intervalo,d.stroke,d.stroke_width,1,0);
        });
        gs
            .append("text")
            .attr("x", pad + pad)
            .attr("y", 17)
            .text(function (x) {return x.name;})
            .attr("stroke", "#000000")
            .attr("class", "mode-text");    

//separador Izquerdo
 svgIntervals
            .append("rect")
            .attr("rx","5")
            .attr("ry","5")
            .attr("x", 0)
            .attr("y", 50)
            .attr("strokeWidth", 4)
            .attr("stroke","black")
            .attr("width", 2)
            .attr("height", 200)
//separador Derecho
 svgIntervals
            .append("rect")
            .attr("rx","5")
            .attr("ry","5")
            .attr("x", 155)
            .attr("y", 50)
            .attr("strokeWidth", 4)
            .attr("stroke","black")
            .attr("width", 2)
            .attr("height", 200)        

////


}

function paintButtons(optionSelected){


       //pintamos botones de acordes
 /*   TODOOOOOO

        var intervalsOptions = svgIntervals.append("g")
        .attr("transform", "translate(20, 100)");
        var gs = intervalsOptions.selectAll("g")
            .data(optionsIntervals)
            .enter()
            .append("g")                               
            .attr("transform", function (d, i) { return "translate(" + (parseInt(d.weight) + (parseInt(pad)*2)) +", 15 )"; });
         buttons = gs
            .append("rect")
            .attr("rx","5")
            .attr("ry","5")
            .attr("x", function (d, i) { return d.weight})
            .attr("y", 0)
            .attr("strokeWidth", 4)
            .attr("fill",'grey')
            .attr("stroke","black")
            .attr("width", 200)
            .attr("height", 25)
            .attr("class", "mode-button")
            .on("click", function(d) {
                pintaChachi();
                ;
        });
        gs
            .append("text")
            .attr("x", parseInt(pad +pad) )
            .attr("y", 17)
            .text(function (x) {return x.label;})
            .attr("stroke", "#000000")
            .attr("class", "mode-text");
*/

}


function paintNotes() {
        var pad = 15;
        var buttonHeight = 25;
        var buttonWeight = 45;
       var svgNotes = d3.select("#notes");

          svgNotes.selectAll("g").remove();

        var tonics = svgNotes.append("g");
        var gs = tonics.selectAll("g")
            .data(naturalNotes)
            .enter()
            .append("g")
            .attr("transform", function (d, i) { return "translate(0, " + (i * (buttonHeight + pad) + pad) + ")"; })
            .selectAll("g")
           // .data(function (d) { return bg(d); }, indexer)
            .data(function (d) { return bg(d.label);})
            .enter()
            .append("g")
            .attr("transform", function (d, i) { return "translate(" + (i * 55) + ", 0)"; });
        buttons = gs
            .append("rect")
            .attr("rx","15")
            .attr("ry","15")
            .attr("x", pad)
            .attr("y", 0)
            .attr("strokeWidth", 2)
            .attr("width", 40)
            .attr("height", 25)
            .attr("fill",function (x) {

                if(tonica == x.text){
                return "yellow"; 
                    }else{
                return "white";}
           })
            
            .attr("stroke","black")
            .on("click", function(d,i) {  cambiaTonalidad(d.text);  });
        gs
            .append("text")
            .attr("x", pad + 10)
            .attr("y", 17)
            .text(function (x) { return x.text; })
            .attr("class", "tonic-text");               
}



//function paintOptions(type, mode) {
   function paintOptions(type) {
    //el mode es la escala usada
             console.log('paintOptions');
    //type= 0 ->notes
    //type= 1-> intervals 
    
        var pad = 15;
        var buttonHeight = 25;
        var buttonWeight = 45;
        var secondColumnStart= 150;

var optionsBoxes =[];
var optionsLabel = [
        { id: 0, operation: 0, label: "Show Notes"},
        { id: 1, operation: 1, label: "Show Intervals"},
 ];

var options_Boxes_Modes=[        
        { id: 1, index: 1, label: "Show Box"},
 ];

var options_Boxes_Pentatonic=[        
        { id: 1, index: 1, label: "Show Box1"},
        { id: 2, index: 2, label: "Show Box2"},
        { id: 3, index: 3, label: "Show Box3"},
        { id: 4, index: 4, label: "Show Box4"},
        { id: 5, index: 5, label: "Show Box5"},
 ];

var onlyBox=false;

        var svgtypeShow = d3.select("#typeShow");
        svgtypeShow.selectAll("g").remove();

        var options = svgtypeShow.append("g").attr("transform", "translate(0, 5)");
        var gs = options.selectAll("g")
            .data(optionsLabel)
            .enter()
            .append("g")
            .attr("transform", function (d, i) { return "translate(0, " + (i * (buttonHeight + pad) + pad) + ")"; })
        buttons = gs
            .append("rect")
            .attr("rx","5")
            .attr("ry","5")
            .attr("x", pad)
            .attr("y", 0)
            .attr("strokeWidth", 2)
            .attr("width", 120)
            .attr("height", 25)
            .attr("fill",function (x) {

                if((type == "0" && x.id == '0') || (type == "1" && x.id == '1')){
                return "yellow"; 
                    }else{
                return "white";}
           })
            .attr("stroke","black")
           .on("click", function(d,i) {  changeNoteIntervalo(d.operation);  });
            
            gs
            .append("text")
            .attr("x", pad + 10)
            .attr("y", 17)
            .text(function (x) { return x.label; })
            .attr("class", "tonic-text");      

            //separador Izquerdo
            svgtypeShow
            .append("rect")
            .attr("rx","5")
            .attr("ry","5")
            .attr("x", 0)
            .attr("y", 50)
            .attr("strokeWidth", 4)
            .attr("stroke","black")
            .attr("width", 2)
            .attr("height", 200)
    


            var columns= 0;

     var svgOptions = d3.select("#options");
         svgOptions.selectAll("g").remove();       

 for(j = 0; j < scalesPainted.length; j++) {
    var modeToPaint =scalesPainted[j].mode;

        if( modeToPaint== 7 || modeToPaint == 8){
            optionsBoxes = options_Boxes_Pentatonic;
        }else{
            optionsBoxes = options_Boxes_Modes;

        }

         //var optionsMode = svgOptions.append("g").attr("transform", "translate("+(columns*140) +",45 )");
          var optionsMode = svgOptions.append("g").attr("transform", "translate("+(columns*secondColumnStart) +", 75)");

        var gsMode = optionsMode.selectAll("g")
            .data(optionsBoxes)
            .enter()
            .append("g")
//.attr("transform", function (d, i) { return "translate("+secondColumnStart +", " + ( (i * (buttonHeight + pad) + pad)) + ")"; }) 
           .attr("transform", function (d, i) { return "translate("+(columns*secondColumnStart) +","  + ( (i * (buttonHeight + pad) + pad)) + ")"; })
        buttons = gsMode
            .append("rect")
            .attr("rx","5")
            .attr("ry","5")
            .attr("x", pad)
            .attr("y", 0)
            .attr("strokeWidth", 2)
            .attr("width", 120)
            .attr("height", 25)
            .attr("fill",function (x) {

                var isModeSelected=0; 
                            switch (x.index) {
                                case 1:
                                    isModeSelected= scalesPainted[j].box1;
                                    break; 
                                case 2:
                                    isModeSelected= scalesPainted[j].box2;
                                    break;  
                                case 3:
                                    isModeSelected= scalesPainted[j].box3;
                                    break; 
                                case 4:
                                    isModeSelected= scalesPainted[j].box4;
                                    break; 
                                case 5:
                                    isModeSelected= scalesPainted[j].box5;
                                    break; 
                        }
            
             if(isModeSelected == 1){
                return "yellow"; 
                    }else{
                return "white";}
           })
            .attr("stroke","black")
            .on("click", function(d) { 

                 showBox(d.index,modeToPaint,type,onlyBox);
            });


            gsMode
            .append("text")
            .attr("x", pad + 10)
            .attr("y", 17)
            .text(function (x) { return x.label; })
            .attr("class", "tonic-text");       

     if( modeToPaint < 7 ){
            
      var showRelatives= scalesPainted[j].showRelatives; 
      
        gsMode 
            .append("rect")
            .attr("rx","5")
            .attr("ry","5")
            .attr("x", 0 )
            .attr("y", 40)
            .attr("strokeWidth", 2)
            .attr("width", buttonHeight)
            .attr("height", 20)
            .attr("fill",function (x) {

                 if(showRelatives == 1){
                return "yellow"; 
                    }else{
                return "white";
                }
           })

            .attr("stroke","black")
            .on("click", function(d,i) {  showRelative(type,modeToPaint,showRelatives );  });
        gsMode
           .append("text")
           .attr("x", pad + buttonHeight)
            .attr("y", buttonHeight*2 +buttonHeight-pad-5)
            .text("Show Relatives")
            .attr("class", "tonic-text");  

        if(showRelatives){
            var stroke_width_Relatives=3;
        for (var cuerda=1; cuerda<7; cuerda++) {
         
            destacaIntervalo(scalesPainted[j].mayorRelative,'#f44b42',stroke_width_Relatives,0,cuerda)
            destacaIntervalo(scalesPainted[j].minorRelative,'#42d4f4',stroke_width_Relatives,0,cuerda)
        
        }   
        
            gsMode.append("text")
            .attr("x", 40+(columns*secondColumnStart))
            .attr("y", buttonHeight*3 +buttonHeight-pad-5 )
            .attr('font-family','Gill Sans MT')
            .attr('font-size','12pt')
            .attr('stroke','#f44b42')
            .text("Relativa Mayor: "+getIntervalName(scalesPainted[j].mayorRelative) )
            .attr("class", "tonic-text");

            gsMode.append("text")
            .attr("x", 40+(columns*secondColumnStart))
            .attr("y", buttonHeight*4 +buttonHeight-pad-5 )
            .attr('font-family','Gill Sans MT')
            .attr('font-size','12pt')
            .attr('stroke','#42d4f4')
            .text("Relativa Menor -> "+getIntervalName(scalesPainted[j].minorRelative) )
            .attr("class", "tonic-text");

        }

     }    

  //opcion de ver solo la caja  
      
    // gsModeOnlyBox= svgOptions.append("g").attr("transform", function (d, i) { return "translate("+(columns*140)+", 20)"; })
    gsModeOnlyBox= svgOptions.append("g").attr("transform", function (d, i) { return "translate("+(columns*secondColumnStart) +", 40)"; })
    gsModeOnlyBox.append("text")
            .attr("x", 0+(columns*secondColumnStart))
            .attr("y", 0 )
             .attr("font-size",35)
            .text(scalesPainted[j].name )
            .attr("class", "tonic-text"); 

      var onlyBoxes= scalesPainted[j].onlyBoxes; 
        buttonsOnlyBox = gsModeOnlyBox
            .append("rect")
            .attr("rx","5")
            .attr("ry","5")
            .attr("x", columns*secondColumnStart )
            .attr("y", buttonHeight -pad)
            .attr("strokeWidth", 2)
            .attr("width", buttonHeight)
            .attr("height", 20)
            .attr("fill",function (x) {

                 if(onlyBoxes == 1){
                return "yellow"; 
                    }else{
                return "white";}
           })

            .attr("stroke","black")
            .on("click", function(d,i) {  showOnlyBox(type,modeToPaint,onlyBoxes );  });
        gsModeOnlyBox
           .append("text")
            .attr("x", columns*secondColumnStart+( pad + buttonHeight))
            .attr("y", buttonHeight*2 -buttonHeight)
            .text("Show only Box")
            .attr("class", "tonic-text");  


            



  
   columns++;
   }

       

}