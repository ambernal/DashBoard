function pintaUnionAcordes(cuerdaBase,nota,acordesDominantes,colour){
     console.log('pintaUnionAcordes START para cuerdaBase' +cuerdaBase + 'con color' +colour);
     console.log("jsonUnionNotasAcordes" + JSON.stringify(jsonUnionNotasAcordes, null, 2))
     console.log("acordesDominantes" + JSON.stringify(acordesDominantes, null, 2))
     console.log("jsonObj" + JSON.stringify(jsonObj, null, 2))


var cuerdaBase_Int = parseInt(cuerdaBase);
    $.each(jsonUnionNotasAcordes, function(i, item) {
      x1= parseInt(0);
      x2= parseInt(0);
      y1= parseInt(0);
      y2= parseInt(0);
      x1= jsonUnionNotasAcordes[i].x;
      y1= jsonUnionNotasAcordes[i].y;
var radio=parseInt(15);
var bajaLinea=parseInt(5);
var centroCircle=  parseInt(3);
var posTraste12 =    parseInt(840);
       //console.log('tengo la posición ->'+jsonUnionNotasAcordes[i].noteTextId + 'para la cuerda ' +jsonUnionNotasAcordes[i].cuerda);

        $.each(jsonObj,function() {
          if(cuerdaBase_Int==5){
           if(this["interval"] == "3m"){
               console.log('el acorde tiene 3m');
           }else if(this["interval"] == "3M"){
              console.log('el acorde tiene 3M');
              if(jsonUnionNotasAcordes[i].cuerda==2){
                 var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}
                //como el acorde tiene una nota hacia atras no se pinta en el traste 0 si la tonica cae ahi, solo en 12
               // console.log('empezamos a construir las uniones desde cuerda 2');
                x1=x1-radio
                if(paint12)x1=x1+posTraste12
                x2=x1-circleTextPad_X+(radio*2);
                y1=y1+centroCircle;
                y2=y1+ translateCuerdaPad_Y -(centroCircle*2);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //3M

                x1= jsonUnionNotasAcordes[i].x;
                if(paint12)x1=x1+posTraste12
                x2=x1;
                y1=jsonUnionNotasAcordes[i].y+radio-centroCircle;
                y2=y1+ (translateCuerdaPad_Y*3)-(2*radio);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M

                x1=jsonUnionNotasAcordes[i].x+radio
                if(paint12)x1=x1+posTraste12
                x2=x1+circleTextPad_X-(radio*2);
                y1=jsonUnionNotasAcordes[i].y+centroCircle;
                y2= y1 + translateCuerdaPad_Y*2 -(centroCircle*2);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //5J

              }else if(jsonUnionNotasAcordes[i].cuerda==3){
                //console.log('empezamos a construir las uniones desde cuerda 3');
                var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}
                x1=x1+radio
                x2=x1+(circleTextPad_X*3)-(2*radio);
                y1=y1-centroCircle;
                y2=y1- translateCuerdaPad_Y;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //5J
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                x2=x1+(circleTextPad_X*3)-(2*radio);
                y2= y1 + (translateCuerdaPad_Y);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                x2=x1+(circleTextPad_X*2)-(2*radio);
                y2= y1 + (translateCuerdaPad_Y*2);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //3M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)


              }else if(jsonUnionNotasAcordes[i].cuerda==4){
               // console.log('empezamos a construir las uniones desde cuerda 4');
                var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}
                //como el acorde tiene una nota hacia atras no se pinta en el traste 0 si la tonica cae ahi, solo en 12
                if(paint12)x1=x1+posTraste12
                x2=x1
                y1=jsonUnionNotasAcordes[i].y+(bajaLinea*2);
                y2=y1 + radio-centroCircle;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //5J

                x1=x1-radio
                x2=x1-circleTextPad_X+(radio*2);
                y1=jsonUnionNotasAcordes[i].y-(bajaLinea*3);
                y2=y1 - radio- bajaLinea;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //3M

                x1=jsonUnionNotasAcordes[i].x +radio
                if(paint12)x1=x1+posTraste12
                x2=x1 + circleTextPad_X-(bajaLinea*3);
                y1=jsonUnionNotasAcordes[i].y - (bajaLinea*3);
                y2= y1 - (translateCuerdaPad_Y*2) +radio+(bajaLinea*2);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M

              }else if(jsonUnionNotasAcordes[i].cuerda==5){
                var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}
               // console.log('empezamos a construir las uniones desde cuerda 5');
                x1=jsonUnionNotasAcordes[i].x +radio
                x2=x1+ (circleTextPad_X*2)-(radio*2);
                y1=jsonUnionNotasAcordes[i].y - (bajaLinea*3);
                y2=y1- translateCuerdaPad_Y +radio;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)
                x1=jsonUnionNotasAcordes[i].x
                x2=x1
                y1=jsonUnionNotasAcordes[i].y - radio -bajaLinea
                y2=y1- (translateCuerdaPad_Y*2) +(radio*2);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //5J
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)
                x1 = x1 + (bajaLinea*2)
                x2= x1+ (circleTextPad_X*2)-(radio*2);
                y1=jsonUnionNotasAcordes[i].y - radio
                y2= y1 - (3*translateCuerdaPad_Y) +radio;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //3M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

              }

           }
         }else  if(cuerdaBase_Int==4){

           if(this["interval"] == 3){
               console.log('el acorde tiene 3m');
           }else if(this["interval"] == 4){
             // console.log('el acorde tiene 3M');
              if(jsonUnionNotasAcordes[i].cuerda==1){
                var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}
              //  console.log('empezamos a construir las uniones desde cuerda 1');
                x2=x1;
                y1=y1+bajaLinea;
                y2=y1+ translateCuerdaPad_Y -(bajaLinea*2);
              //y2=y1 +30;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //5J
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                x2=x1+circleTextPad_X-radio;
                y1=y2+(bajaLinea*2);
                y2=y1+ translateCuerdaPad_Y-(bajaLinea*2);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //3M
               if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                x1=x2 +centroCircle;
                x2=x1 - circleTextPad_X +(radio*2)-centroCircle;
                y1=y2+(bajaLinea*2);
                y2= y1 + translateCuerdaPad_Y-(bajaLinea*2);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

              }else if(jsonUnionNotasAcordes[i].cuerda==2){
                var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}

                x2=x1+(circleTextPad_X*2);
                y2=y1- translateCuerdaPad_Y;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //5J
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                y2=y1+ translateCuerdaPad_Y;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                x2=x1 + circleTextPad_X;
                y2= y1 + (translateCuerdaPad_Y*2);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)


              }else if(jsonUnionNotasAcordes[i].cuerda==3){
              //  console.log('empezamos a construir las uniones desde cuerda 3');
                 var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}

                x2=x1;
                y2=y1+ translateCuerdaPad_Y;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //5J
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                x2=x1;
                y2=y1- translateCuerdaPad_Y;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //3M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                x2=x1 + circleTextPad_X;
                y1=y2;
                y2= y1 - translateCuerdaPad_Y;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)


              }else if(jsonUnionNotasAcordes[i].cuerda==4){

               // console.log('empezamos a construir las uniones desde cuerda 4');
                var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}
                x1= x1
                x2=x1+ circleTextPad_X ;
                y2=y1- (translateCuerdaPad_Y*2);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                x1=x2
                x2=x1+circleTextPad_X;
                y1=y2;
                y2=y1- translateCuerdaPad_Y;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //5J
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                y2= y1 + translateCuerdaPad_Y;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //3M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

              }
         }
        }else if(cuerdaBase_Int==6){

           if(this["interval"] == 3){
               console.log('el acorde tiene 3m');
           }else if(this["interval"] == 4){
             // console.log('el acorde tiene 3M');
              if(jsonUnionNotasAcordes[i].cuerda==3){
                var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}
              //  console.log('empezamos a construir las uniones desde cuerda 1');
                x2=x1;
                y1=y1+bajaLinea+centroCircle;
                y2=y1+ translateCuerdaPad_Y -(radio*2);

                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //5J
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)
                x1=x1+radio
                x2=x1+circleTextPad_X-radio;
                y1=y1 -bajaLinea
                y2=y1+ (translateCuerdaPad_Y*3)-(radio*2) + bajaLinea
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //3M
               if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                //x1=x2 +centroCircle;
                x2=x1 + (circleTextPad_X*2) -(radio*2)+centroCircle;
                //y1=y2+(bajaLinea*2);
                y1=y1 -bajaLinea
                y2= y1 + (translateCuerdaPad_Y*2)-(bajaLinea*2);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

              }else if(jsonUnionNotasAcordes[i].cuerda==4){
                var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}
                x1=x1+radio
                x2=x1+(circleTextPad_X*2) -(radio*2);
				y1=y1 -bajaLinea
                y2=y1- translateCuerdaPad_Y;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //5J
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                y2=y1+ translateCuerdaPad_Y*2;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

                x2=x1+(circleTextPad_X*3) -(radio*2);
                y2= y1 + (translateCuerdaPad_Y);
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)


              }else if(jsonUnionNotasAcordes[i].cuerda==5){
                 var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}
                //como el acorde tiene una nota hacia atras no se pinta en el traste 0 si la tonica cae ahi, solo en 12
                if(paint12)x1=x1+posTraste12

                x2=x1;
				y1=y1+bajaLinea+centroCircle;
                y2=y1+ translateCuerdaPad_Y -radio*2;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //5J

                x2=x1-circleTextPad_X+radio
                y1=y1-radio*2
                y2=y1- translateCuerdaPad_Y +(bajaLinea*2)+centroCircle;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //3M

                x2=x1
                y2= y1 - translateCuerdaPad_Y*2 + radio*2;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)


              }else if(jsonUnionNotasAcordes[i].cuerda==6){

               // console.log('empezamos a construir las uniones desde cuerda 4');
                var paint12= false;
                if(jsonUnionNotasAcordes[i].x==50){  paint12=true}
                x2=x1
                y1=y1-radio-centroCircle;
                y2=y1- (translateCuerdaPad_Y*2)+(radio*2)-bajaLinea;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour) //7M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

				x2=x1+ circleTextPad_X -bajaLinea ;
                y2=y1- (translateCuerdaPad_Y*3)+radio*2 - centroCircle;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //5J
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

               	x2=x1+ (circleTextPad_X*2) -(bajaLinea*2) -centroCircle ;
                y2= y1 - translateCuerdaPad_Y +bajaLinea ;
                pintaLineaUnion(x1,x2,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)  //3M
                if (Boolean(paint12)) pintaLineaUnion(x1+posTraste12,x2+posTraste12,y1,y2,jsonUnionNotasAcordes[i].cuerda,jsonUnionNotasAcordes[i].noteTextId,cuerdaBase_Int,colour)

              }
         }


//
        }
        });
      });
    jsonUnionNotasAcordes = [];
}

function pintaLineaUnion(x1,x2,y1,y2,cuerda,nota,cuerdaBase,colour){

var cuerdaBase_Int = parseInt(cuerdaBase);
var stroke=colour;
 console.log('Creamos la linea con color-> '+stroke);
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
