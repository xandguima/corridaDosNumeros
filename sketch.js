//telas
var tela=1;
var largura=200;
var altura=50;
var xMenu=50;
//iniciar
var yMenu1=105;
//informações
var yMenu2=165;
//instruções
var yMenu3=225;
//creditos
var yMenu4=285;
//score
var score=0;
var nivel=1;
var scoreNivel=500;
//velocidade do jogo
var velDoJogo=parseFloat(1);




//varivel loop casas
let xPos = 0;
let xPos1 = 112;
let xPos2 = 278;
let xPos3 = 370;
let xPos4 = 476;

//numeros aleatorios fila 1
var x=0;
var y=0;
var z=0;
var w=0;
//n aleatorios fila 2
var xFila2=0;
var yFila2=0;
var zFila2=0;
var wFila2=0;



//variaveis personagem 
let xPerson =parseFloat(20.0);
let yPerson=parseFloat(300.0);

//variaveis loop piso
var xPiso=0;
var xPiso1=100;
var xPiso2=200;
var xPiso3=300;
var xPiso4=400;
var xPiso5=500;

// variaveis da caixa
var xBox=parseFloat(0.0);
var xBox1=parseFloat(300.0);
var y1=350;
var y2=300;
var y3=250;
var y4=200;


//botão voltar 
var xVoltar=10;
var yVoltar=10;
var altuVoltar=20;
var largVoltar=70;


//imagens
let img;
let chao;
let chaoLiso;
let chao18;
let casa1;
let casa2;
let casa3;
let casa4;
let casa5;
let casa6;
let person=[];
let person0;
//caixa
let box1;
// imagem creditos
let minha;

//personagem
//var contFrame=0;
//var paraFrame=0;



function preload(){
  //cenario
  img=loadImage('background1.png');
  chao=loadImage('land_10.png');
  chaoLiso=loadImage('land_18 (2).png');
  chao18=loadImage('land_18.png');
  //casas
  casa1=loadImage('building_1.png');
  casa2=loadImage('building_2.png');
  casa3=loadImage('building_3.png');
  casa4=loadImage('building_2 (2).png');
  casa5=loadImage('building_4.png');
  
  //personagem
  person0=loadImage('Cowboy4_walk without gun_0.png');
  person1=loadImage('Cowboy4_walk without gun_1.png');
  person2=loadImage('Cowboy4_walk without gun_2.png');
  person[3]=loadImage('Cowboy4_walk without gun_3.png');
  //caixa
  box1=loadImage('Crate.png');
  //creditos
  minha=loadImage('WhatsApp Image 2020-06-15 at 8.22.03 PM (2).jpeg');

}
  
function setup() {
  createCanvas(400, 400);
  //numeros aleatorios da fila 1 das caixas
  x=parseInt(random(99));
  y=parseInt(random(99));
  w=parseInt(random(99));
  z=parseInt(random(99));
  //fila 2 caixas
  xFila2=parseInt(random(99));
  yFila2=parseInt(random(99));
  wFila2=parseInt(random(99));
  zFila2=parseInt(random(99));
}


function draw() {
  textStyle(NORMAL);
  //tela menu
  if(tela==1){
    background(20);
    image(img, 0, 0,400,400);  
    textSize(40);
    fill(50);
    text("Corrida dos números",200,50);
//menu com tres opções
//iniciar o jogo
    textAlign(CENTER);
    textSize(26);
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu1 &&         mouseY<yMenu1+altura){
        stroke(200);
        fill(20);
        rect(xMenu,yMenu1,largura,altura,35);
        if(mouseIsPressed){
          tela=2;
        }
    }
    fill(240);
    noStroke();
    text("Iniciar",150,140);
    
    //informaçoes do jogo
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu2 && mouseY<yMenu2+altura){
    stroke(200);
    fill(20);
    rect(xMenu,yMenu2,largura,altura,35);
      if(mouseIsPressed){
      tela=3;
      }
    }
    fill(240);
    noStroke();
    text("Informações",150,200);
    //instruções
       if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu3 && mouseY<yMenu3+altura){
    stroke(200);
    fill(20);
    rect(xMenu,yMenu3,largura,altura,35);
          if(mouseIsPressed){
          tela=4;
          }
   }
    fill(240);
    noStroke();
    text("Instruções",150,260);
    
    //Creditos
    if(mouseX>xMenu && mouseX<xMenu+largura && mouseY>yMenu4&& mouseY<yMenu4+altura){
    stroke(200);
    fill(20);
    rect(xMenu,yMenu4,largura,altura,35);
      if(mouseIsPressed){
      tela=6;
      }
    }
    fill(240);
    noStroke();
    text("Créditos",150,320);
    
    
  }
  //tela de inicio
  else if(tela==2){
    background(220);
//MOVIMENTO DAS CASAS
  //loop casa5
     xPos4 = xPos4 -1;
   if (xPos4 < -190) {
    xPos4 = height;
   }
    //loop casa4
    xPos3 = xPos3 -1;
   if (xPos3 < -190) {
    xPos3 = height;
   }
    //loop casa3
     xPos2 = xPos2 -1;
   if (xPos2 < -190) {
    xPos2 = height;
   }
    //loop casa2
     xPos1 = xPos1 -1;
   if (xPos1 < -190) {
    xPos1 = height;
   }
    //loop casa1
   xPos = xPos -1;
   if (xPos < -190) {
   xPos = height;
    }
//MOVIMENTO DO PISO 
     //loop piso0
   xPiso = xPiso -1;
   if (xPiso < -190) {
  xPiso = height;
    }
      //loop piso1
   xPiso1 = xPiso1 -1;
   if (xPiso1 < -190) {
   xPiso1 = height;
    }
      //loop piso2
   xPiso2 = xPiso2 -1;
   if (xPiso2 < -190) {
   xPiso2 = height;
    }
      //loop piso3
   xPiso3 = xPiso3 -1;
   if (xPiso3 < -190) {
   xPiso3 = height;
    }
     //loop piso4
   xPiso4 = xPiso4 -1;
   if (xPiso4 < -190) {
   xPiso4 = height;
    }
     //loop piso5
   xPiso5 = xPiso5 -1;
   if (xPiso5 < -190) {
   xPiso5 = height;
    }
//MOVIMENTO CAIXAS
    //loop Box
   xBox = xBox-velDoJogo;
   if (xBox < -190) {
     x=parseInt(random(99));
     y=parseInt(random(99));
     z=parseInt(random(99));
     w=parseInt(random(99));
   xBox = height;
    }
    //loop Box1
   xBox1 = xBox1 -velDoJogo;
   if (xBox1 < -190) {
    xFila2=parseInt(random(99));
    yFila2=parseInt(random(99));
    wFila2=parseInt(random(99));
    zFila2=parseInt(random(99));
   xBox1 = height;
    }
    
  
//FUNDO
    image(img,0,0,400,300);
//PISO
    //baixo
    image(chao,xPiso5,300,100,100);
    image(chao18,xPiso4,300,100,100);
    image(chao,xPiso3,300,100,100);
    image(chao18,xPiso2,300,100,100);
    image(chao,xPiso1,300,100,100);
    image(chao18,xPiso,300,100,100);
    //cima
    image(chaoLiso,xPiso5,200,100,100);
    image(chaoLiso,xPiso4,200,100,100);
    image(chaoLiso,xPiso3,200,100,100);
    image(chaoLiso,xPiso2,200,100,100);
    image(chaoLiso,xPiso1,200,100,100);
    image(chaoLiso,xPiso,200,100,100);
//CASAS
   image(casa2,xPos1,118,200,100);
   image(casa4,xPos3,120,140,100);
   image(casa3,xPos2,10,120,210);
   image(casa1,xPos,110,130,100);
   image(casa5,xPos4,20,130,200);
    
//CAIXAS
    
    image(box1,xBox,y2,50,50);
    image(box1,xBox1,y2,50,50);
    image(box1,xBox,y4,50,50);
    image(box1,xBox1,y4,50,50);
    image(box1,xBox,y3,50,50);
    image(box1,xBox1,y3,50,50);
    image(box1,xBox,y1,50,50);
   image(box1,xBox1,y1,50,50);
    // numeros aleatorios fila 1 caixas
    textSize(20);
    
    //caixa 1 de cima pra baixo
    text(x,xBox+20,230);
    //caixa 2
   text(y,xBox+20,283);
    text(z,xBox+20,330);
    text(w,xBox+20,383);
    //numeros aleatorios fila 2 caixas
    //caixa 1 de cima pra baixo
    text(xFila2,xBox1+20,230);
    //caixa2
    text(yFila2,xBox1+20,283);
    text(zFila2,xBox1+20,330);
    text(wFila2,xBox1+20,383);
    
    //score
    fill(20);
    text("PONTOS: "+score,250,20,100,100);
    text("NÍVEL: "+nivel,20,60,50,50);
    
    
    
//colisão
    if(xPerson==xBox){
      if(yPerson>=150 && yPerson<200){
        if(x>y && x>z && x>w){
           score=score+100;
          
      }else{
        tela =5;
         score=0;
        nivel=1;
        scoreNivel=500;
        velDoJogo=1;
      }
      }
      if(yPerson>200 && yPerson<250){
        if(y>x && y>z && y>w){
           score=score+100;
        
        }else{
        tela=5;
        score=0;
        nivel=1;
        scoreNivel=500;
        velDoJogo=1;
        }
      }
      if(yPerson>250 && yPerson<300){
        if(z>x &&z>y && z>w){
           score=score+100;
          
        }else{
        tela=5;
        score=0;
        nivel=1;
        scoreNivel=500;
        velDoJogo=190;
        }
      
      }
      if(yPerson>300 && yPerson<=350){
       if(w>x && w>y && w>z){
          score=score+100;
       
       }else{
       tela=5;
          score=0;
        nivel=1;
        scoreNivel=500;
        velDoJogo=1;
       } 
      }
    } 
    
    if(xPerson==xBox1){
      if(yPerson>=150 && yPerson<200){
        if(xFila2>yFila2 && xFila2>zFila2 && xFila2>wFila2){
           score=score+100;
           
          
      }else{
        tela =5;
         score=0;
        nivel=1;
        scoreNivel=500;
        velDoJogo=1;
      }
      }
      if(yPerson>200 && yPerson<250){
        if(yFila2>xFila2 && yFila2>zFila2 && yFila2>wFila2){
           score=score+100;
        
        }else{
        tela=5;
           score=0;
        nivel=1;
        scoreNivel=500;
        velDoJogo=1;
        }
      }
      if(yPerson>250 && yPerson<300){
        if(zFila2>xFila2 &&zFila2>yFila2 && zFila2>wFila2){
           score=score+100;
          
        }else{
        tela=5;
           score=0;
        nivel=1;
        scoreNivel=500;
        velDoJogo=1;
        }
      
      }
      if(yPerson>300 && yPerson<=350){
       if(wFila2>xFila2 && wFila2>yFila2 && wFila2>zFila2){
          score=score+100;
       
       }else{
       tela=5;
          score=0;
        nivel=1;
        scoreNivel=500;
        velDoJogo=1;
       } 
      }
    } 
      
    //NIVEIS
    if(score>scoreNivel){
    
      scoreNivel=scoreNivel+530;
      nivel++;
    }
    
    
//PERSONAGEM
    
     contFrame++;
    if(contFrame>5){
      contFrame=0;
    }
  image(person0,xPerson,yPerson,50,50);    
 
    //personagem MOVIMENTO
 if (keyIsDown(UP_ARROW)) {
    if(yPerson>170){
        yPerson -= 3;
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    if(yPerson<330){
      yPerson += 3;
    }
  }
    //voltar ao menu
    if(mouseX>xVoltar && mouseX<xVoltar+largVoltar && mouseY>yVoltar      && mouseY<yVoltar+altuVoltar){
        stroke(200);
        fill(20);
        rect(xVoltar,yVoltar,largVoltar,altuVoltar,35);
        if(mouseIsPressed){
            tela=1;
        }
    }
    fill(240);
    textSize(15);
    text("Voltar",43,25);
    
  }
  //tela de Informações
  else if(tela==3){
    background(10);
     image(img, 0, 0,400,400);
    fill(240);
    textSize(20);
    noStroke();
    textAlign(LEFT);
    text("Mantenha seu personagem atingindo sempre o obstáculo com maior valor.\n IMPORTANTE: sua referencia é sempre o pé do boneco.",10,40,260,260);
    //voltar ao menu
    if(mouseX>xVoltar && mouseX<xVoltar+largVoltar && mouseY>yVoltar && mouseY<yVoltar+altuVoltar){
    stroke(200);
    fill(20);
    rect(xVoltar,yVoltar,largVoltar,altuVoltar,35);
      if(mouseIsPressed){
      tela=1;
      }
    }
      fill(240);
    textSize(15);
    text("Voltar",25,25);
    
    
  }
  //Instruções
  else if(tela==4){
    background(20);
     image(img, 0, 0,400,400);
    fill(240);
    textSize(20);
    textAlign(CENTER);
    text("⬆ é para movimentar o personagem para cima.\n⬇ para movimentam o personagem para baixo. ",3,50,400,260);
    //voltar ao menu
    if(mouseX>xVoltar && mouseX<xVoltar+largVoltar && mouseY>yVoltar && mouseY<yVoltar+altuVoltar){
    stroke(200);
    fill(20);
    rect(xVoltar,yVoltar,largVoltar,altuVoltar,35);
      if(mouseIsPressed){
      tela=1;
      }
    }
      fill(240);
    textSize(15);
    text("Voltar",43,25);
    
    
  }
  //tela de game over
  else if(tela==5){
    background(20);
    image(img, 0, 0,400,400);
    fill(0);
    textSize(40);
    textAlign(CENTER);
    text("GAME OVER. ",3,50,400,400);
    if(keyIsPressed){
      tela=1;
    }
  }
  //tela creditos
  else if(tela==6){
     background(20);
     image(img, 0, 0,400,400);
    fill(40);
    textSize(20);
    textAlign(CENTER);
    text(" Programador e Idealizador: Alexandre Guimarães Filho ",3,50,400,260);
    //voltar ao menu
    if(mouseX>xVoltar && mouseX<xVoltar+largVoltar && mouseY>yVoltar && mouseY<yVoltar+altuVoltar){
    stroke(200);
    fill(20);
    rect(xVoltar,yVoltar,largVoltar,altuVoltar,35);
      if(mouseIsPressed){
      tela=1;
      }
    }
      fill(240);
    textSize(15);
    text("Voltar",43,25);
    image(minha,100,100,230,200);
  
  }
  
}
