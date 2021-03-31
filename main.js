var canvas=new fabric.Canvas("myCanvas");
block_height=30;
block_width=30;
player_x=10;
player_y=10;
var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("superhero.png",function(Img){
        player_object=Img;
        player_object.setToWidth(100);
        player_object.setToHeight(170);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });  
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.setToWidth(30);
        block_object.setToHeight(30);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}