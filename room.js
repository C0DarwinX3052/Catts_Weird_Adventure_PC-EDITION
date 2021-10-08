var eUpdt = 'no';
function Room(){
    if (room === 0){
        //Vertical
        o1.x = 0;
        o1.y = 0;
        o2.x = 0;
        o2.y = 0;
        o3.x = 0;
        o3.y = 0;
        o4.x = 0;
        o4.y = 0;
        //Horizontal
        o5.x = 0;
        o5.y = 0;
        o6.x = 0;
        o6.y = 0;
        o7.x = 0;
        o7.y = 0;
        o8.x = 0;
        o8.y = 0;

        //Doors
        d1.x = 0;
        d1.y = 0;
        d2.x = 0;
        d2.y = 0;
        d3.x = 0;
        d3.y = 0;

        d1.shapeColor = "grey";
        d2.shapeColor = "grey";
        d3.shapeColor = "grey";
    }
    if (room === 1){
        //Vertical
        o1.x = 1125;
        o1.y = 500;
        o2.x = 500;
        o2.y = 400;
        o3.x = 550;
        o3.y = 400;
        o4.x = 200;
        o4.y = 200;

        o1.shapeColor = "orange";
        o2.shapeColor = "brown";
        o3.shapeColor = "red";
        o4.shapeColor = "green";
        //Horizontal
        o5.x = 200;
        o5.y = 200;
        o6.x = 700;
        o6.y = 200;
        o7.x = 700;
        o7.y = 150;
        o8.x = 150;
        o8.y = 500;
        o5.shapeColor = "green";
        o6.shapeColor = "red";
        o7.shapeColor = "brown";
        o8.shapeColor = "green";

        //Doors
        d1.x = 150;
        d1.y = 470;
        d2.x = 575;
        d2.y = 400;
        d3.x = 1100;
        d3.y = 500;

        d1.shapeColor = "brown";
        d2.shapeColor = "brown";
        d3.shapeColor = "brown";

        if (p1.isTouching(d1)){
            p1.x = 700;
            p1.y = 200;
            room = 3;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d2)){
            p1.x = 1100;
            p1.y = 400;
            room = 4;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d3) && level >= 10){
            p1.x = 700;
            p1.y = 200;
            room = 6;
            bosslife = 14;
            eUpdt = 'yes';
            splay = 'yes';
            l1.stop();
            l2.stop();
            l3.stop();
            bsl.stop();
            if (splay === 'yes'){
                bsl.play();
                splay = 'no'
            }
        }
    }
    if (room === 2){
        //Vertical
        o1.x = 300;
        o1.y = 500;
        o2.x = 800;
        o2.y = 400;
        o3.x = 500;
        o3.y = 200;
        o4.x = 200;
        o4.y = 200;

        o1.shapeColor = "green";
        o2.shapeColor = "green";
        o3.shapeColor = "green";
        o4.shapeColor = "green";
        //Horizontal
        o5.x = 600;
        o5.y = 200;
        o6.x = 200;
        o6.y = 300;
        o7.x = 700;
        o7.y = 200;
        o8.x = 800;
        o8.y = 600;
        o5.shapeColor = "green";
        o6.shapeColor = "green";
        o7.shapeColor = "green";
        o8.shapeColor = "green";

        //Doors
        d1.x = 200;
        d1.y = 325;
        d2.x = 775;
        d2.y = 400;
        d3.x = 0;
        d3.y = 0;

        d1.shapeColor = "brown";
        d2.shapeColor = "brown";
        d3.shapeColor = "grey";

        if (p1.isTouching(d1)){
            p1.x = 700;
            p1.y = 200;
            room = 5;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d2)){
            p1.x = 1100;
            p1.y = 400;
            room = 3;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d3)){
            p1.x = 700;
            p1.y = 200;
            room = 1;
            eUpdt = 'yes';
        }
    }
    if (room === 3){
        //Vertical
        o1.x = 150;
        o1.y = 400;
        o2.x = 400;
        o2.y = 500;
        o3.x = 800;
        o3.y = 200;
        o4.x = 600;
        o4.y = 300;

        o1.shapeColor = "grey";
        o2.shapeColor = "green";
        o3.shapeColor = "orange";
        o4.shapeColor = "green";
        //Horizontal
        o5.x = 800;
        o5.y = 300;
        o6.x = 300;
        o6.y = 200;
        o7.x = 900;
        o7.y = 500;
        o8.x = 200;
        o8.y = 300;
        o5.shapeColor = "orange";
        o6.shapeColor = "red";
        o7.shapeColor = "red";
        o8.shapeColor = "grey";

        //Doors
        d1.x = 300;
        d1.y = 175;
        d2.x = 425;
        d2.y = 500;
        d3.x = 825;
        d3.y = 200;

        d1.shapeColor = "brown";
        d2.shapeColor = "brown";
        d3.shapeColor = "brown";

        if (p1.isTouching(d1)){
            p1.x = 700;
            p1.y = 200;
            room = 8;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d2)){
            p1.x = 1100;
            p1.y = 400;
            room = 2;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d3)){
            p1.x = 700;
            p1.y = 200;
            room = 1;
            eUpdt = 'yes';
        }
    }
    if (room === 4){
        //Vertical
        o1.x = 700;
        o1.y = 500;
        o2.x = 300;
        o2.y = 500;
        o3.x = 500;
        o3.y = 300;
        o4.x = 900;
        o4.y = 300;

        o1.shapeColor = "red";
        o2.shapeColor = "green";
        o3.shapeColor = "orange";
        o4.shapeColor = "lightblue";
        //Horizontal
        o5.x = 300;
        o5.y = 200;
        o6.x = 500;
        o6.y = 600;
        o7.x = 700;
        o7.y = 200;
        o8.x = 900;
        o8.y = 600;
        o5.shapeColor = "pink";
        o6.shapeColor = "green";
        o7.shapeColor = "yellow";
        o8.shapeColor = "purple";

        //Doors
        d1.x = 300;
        d1.y = 225;
        d2.x = 525;
        d2.y = 300;
        d3.x = 1150;
        d3.y = 500;

        d1.shapeColor = "brown";
        d2.shapeColor = "brown";
        d3.shapeColor = "brown";

        if (p1.isTouching(d1)){
            p1.x = 700;
            p1.y = 200;
            room = 7;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d2)){
            p1.x = 1100;
            p1.y = 400;
            room = 1;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d3)){
            p1.x = 700;
            p1.y = 200;
            room = 5;
            eUpdt = 'yes';
        }
    }
    if (room === 5){
        //Vertical
        o1.x = 500;
        o1.y = 200;
        o2.x = 600;
        o2.y = 500;
        o3.x = 200;
        o3.y = 400;
        o4.x = 900;
        o4.y = 300;

        o1.shapeColor = "green";
        o2.shapeColor = "green";
        o3.shapeColor = "brown";
        o4.shapeColor = "brown";
        //Horizontal
        o5.x = 800;
        o5.y = 300;
        o6.x = 1000;
        o6.y = 500;
        o7.x = 900;
        o7.y = 400;
        o8.x = 200;
        o8.y = 300;
        o5.shapeColor = "brown";
        o6.shapeColor = "brown";
        o7.shapeColor = "green";
        o8.shapeColor = "green";

        //Doors
        d1.x = 200;
        d1.y = 275;
        d2.x = 575;
        d2.y = 500;
        d3.x = 0;
        d3.y = 0;

        d1.shapeColor = "brown";
        d2.shapeColor = "brown";
        d3.shapeColor = "grey";

        if (p1.isTouching(d1)){
            p1.x = 700;
            p1.y = 200;
            room = 2;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d2)){
            p1.x = 1100;
            p1.y = 400;
            room = 4;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d3)){
            p1.x = 700;
            p1.y = 200;
            room = 1;
            eUpdt = 'yes';
        }
    }
    if (room === 6){
        l1.stop();
        l2.stop();
        //Vertical
        o1.x = 0;
        o1.y = 0;
        o2.x = 0;
        o2.y = 0;
        o3.x = 0;
        o3.y = 0;
        o4.x = 0;
        o4.y = 0;

        o1.shapeColor = "grey";
        o2.shapeColor = "grey";
        o3.shapeColor = "grey";
        o4.shapeColor = "grey";
        //Horizontal
        o5.x = 0;
        o5.y = 0;
        o6.x = 0;
        o6.y = 0;
        o7.x = 0;
        o7.y = 0;
        o8.x = 0;
        o8.y = 0;
        o5.shapeColor = "grey";
        o6.shapeColor = "grey";
        o7.shapeColor = "grey";
        o8.shapeColor = "grey";

        //Doors
        d1.x = 600;
        d1.y = 650;
        d2.x = 50;
        d2.y = 400;
        d3.x = 0;
        d3.y = 0;

        d1.shapeColor = "brown";
        d2.shapeColor = "brown";
        d3.shapeColor = "grey";

        if (p1.isTouching(d1) && level > 25){
            p1.x = 700;
            p1.y = 200;
            room = 9;
            bosslife = 28;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d2)){
            p1.x = 1100;
            p1.y = 400;
            room = 1;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d3)){
            p1.x = 700;
            p1.y = 200;
            room = 1;
            eUpdt = 'yes';
        }
    }





    //Extra Rooms
    if (room === 7){
        //Vertical
        o1.x = 500;
        o1.y = 100;
        o2.x = 800;
        o2.y = 600;
        o3.x = 200;
        o3.y = 300;
        o4.x = 400;
        o4.y = 500;

        o1.shapeColor = "green";
        o2.shapeColor = "green";
        o3.shapeColor = "green";
        o4.shapeColor = "blue";
        //Horizontal
        o5.x = 400;
        o5.y = 400;
        o6.x = 300;
        o6.y = 100;
        o7.x = 800;
        o7.y = 400;
        o8.x = 200;
        o8.y = 600;
        o5.shapeColor = "blue";
        o6.shapeColor = "green";
        o7.shapeColor = "blue";
        o8.shapeColor = "green";

        //Doors
        d1.x = 300;
        d1.y = 125;
        d2.x = 525;
        d2.y = 103;
        d3.x = 0;
        d3.y = 0;

        d1.shapeColor = "brown";
        d2.shapeColor = "brown";
        d3.shapeColor = "grey";

        if (p1.isTouching(d1)){
            p1.x = 700;
            p1.y = 200;
            room = 4;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d2)){
            p1.x = 1100;
            p1.y = 400;
            room = 2;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d3)){
            p1.x = 700;
            p1.y = 200;
            room = 1;
            eUpdt = 'yes';
        }
    }
    if (room === 8){
        //Vertical
        o1.x = 600;
        o1.y = 300;
        o2.x = 400;
        o2.y = 150;
        o3.x = 100;
        o3.y = 500;
        o4.x = 400;
        o4.y = 550;

        o1.shapeColor = "orange";
        o2.shapeColor = "green";
        o3.shapeColor = "blue";
        o4.shapeColor = "green";
        //Horizontal
        o5.x = 100;
        o5.y = 600;
        o6.x = 600;
        o6.y = 200;
        o7.x = 700;
        o7.y = 300;
        o8.x = 1000;
        o8.y = 500;
        o5.shapeColor = "blue";
        o6.shapeColor = "orange";
        o7.shapeColor = "orange";
        o8.shapeColor = "blue";

        //Doors
        d1.x = 700;
        d1.y = 275;
        d2.x = 62;
        d2.y = 525;
        d3.x = 0;
        d3.y = 0;

        d1.shapeColor = "brown";
        d2.shapeColor = "brown";
        d3.shapeColor = "grey";

        if (p1.isTouching(d1)){
            p1.x = 700;
            p1.y = 200;
            room = 3;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d2)){
            p1.x = 1100;
            p1.y = 400;
            room = 7;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d3)){
            p1.x = 700;
            p1.y = 200;
            room = 1;
            eUpdt = 'yes';
        }
    }
    if (room === 9){
        //Vertical
        o1.x = 0;
        o1.y = 0;
        o2.x = 0;
        o2.y = 0;
        o3.x = 0;
        o3.y = 0;
        o4.x = 0;
        o4.y = 0;

        o1.shapeColor = "grey";
        o2.shapeColor = "grey";
        o3.shapeColor = "grey";
        o4.shapeColor = "grey";
        //Horizontal
        o5.x = 0;
        o5.y = 0;
        o6.x = 0;
        o6.y = 0;
        o7.x = 0;
        o7.y = 0;
        o8.x = 0;
        o8.y = 0;
        o5.shapeColor = "grey";
        o6.shapeColor = "grey";
        o7.shapeColor = "grey";
        o8.shapeColor = "grey";

        //Doors
        d1.x = 0;
        d1.y = 0;
        d2.x = 50;
        d2.y = 400;
        d3.x = 0;
        d3.y = 0;

        d1.shapeColor = "grey";
        d2.shapeColor = "brown";
        d3.shapeColor = "grey";

        if (p1.isTouching(d1)){
            p1.x = 700;
            p1.y = 200;
            room = 1;
            bosslife = 14;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d2)){
            p1.x = 1100;
            p1.y = 400;
            room = 6;
            eUpdt = 'yes';
        }
        if (p1.isTouching(d3)){
            p1.x = 700;
            p1.y = 200;
            room = 1;
            eUpdt = 'yes';
        }
    }
}