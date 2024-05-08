
  

var Ordi=false// booleeen pour savoir si on joue contre l'ordi
/*
  function rang () {

    var dialogue =document.getElementById("rang") 

dialogue.open=true

Ordi=true


 /*
 // dialogue.open=true;
  
  
  var para = document.createElement("p")
  
  para.innerText="Voulez-vous etre 1er ou 2eme ?"
  
  
  var  form=document.createElement("form")
  
  form.method="dialog"
  
  var b1er =document.createElement("button")
  b1er.innerText="1er"
  
  var b2eme =document.createElement("button")
  b1er.innerText="2eme"
  
  
  dialogue.appendChild(para)
  
  form.appendChild(b1er)
  
  form.appendChild(b2eme)
  
  
  dialogue.appendChild(form)

  

  }
*/  
  



function J()
{  

  var j2= document.getElementById("joueur")// Si il y a un second joueur
    
  
  
  var P1=new Object()
  var P2=new Object()
  
  
   

    P1.signe="X", P2.signe="O" ,
    P1.affichage="Tour du 1er joueur (X)", P2.affichage="Tour du 2eme joueur (O)"
      

  //ordi.addEventListener("click", () =>{ J2=true })
  //j2.addEventListener("click", () =>{ Ordi=true})
  
  
  
  //Determiner si le premier joueur utilise X ou Y
  
  var btn = document.getElementsByClassName("case");

  
  
  //Si on joue contre l'ordi  
  




 
  /*
  x.addEventListener("click", () =>{ P2.signe="X", P1.signe="O" ,
  P2.affichage="C'est votre tour" })
  
  y.addEventListener("click", () =>{ P2.signe="O", P1.signe="X",
  
  P2.affichage="C'est votre tour"

  })
*/

  

  
  /*
  if(Ordi===false)
  {
  
  
  x.addEventListener("click", () =>{ P1.signe="X", P2.signe="O" ,
  P1.affichage="Tour du 1er joueur", P2.affichage="Tour du 2eme joueur"})
  
  y.addEventListener("click", () =>{ P1.signe="O", P2.signe="X",
  
  P1.affichage="Tour du 1er joueur", P2.affichage="Tour du 2eme joueur"
  
  })
  
  }
  //Si on joue contre l'ordi
  if(Ordi===true)
  {
  
  
  x.addEventListener("click", () =>{ P1.signe="X", P2.signe="O" ,
  P1.affichage="C'est votre tour" })
  
  y.addEventListener("click", () =>{ P1.signe="O", P2.signe="X",
  
  P1.affichage="C'est votre tour"
  
  })
  
  /** */
  
  
  
  document.getElementById("tdj").innerText=P1.affichage
  

  
  
  /*  Fin */ 
  

var reset = document.createElement("button")



  
  
  
  function collecter ()
  
  {
  //btns boutton local
  
  var source = [];
  
  
    var btns = document.getElementsByClassName("case");
  
    for (let a = 0; a < btns.length; a++) {
      source[a] = btns[a].innerText;
      
     }
  
     return source;
  
  
    }
  
  
      
  // Les variables globales
  
  var ensemble=[90], ipartie=0;
  
  var count=0,l1=0, l11=0, l2=0, l22=0, l3=0, l33=0, co1=0, co11=0, co2=0, co22=0, co3=0, co33=0, d1=0, d11=0, d2=0, d22=0
  var  j=0
  
  /**Fin variables globales */
  
  var btn = document.getElementsByClassName("case");
  
  
  
    /**Partie ou l'utilisateur joue*/

    for (const bt of btn) {
  
        bt.addEventListener("click", jouer)
      
      } 


    


  var jeu, n=0
  
  jeu=collecter()
  
  //Comptage et sauvegarde

  //Voir comment integrer ca dans le second vu qu'il depend
  //de l'event listener
  
  for( ipartie; n< jeu.length; n++) {
    
    ensemble[ipartie] = jeu[n]
  ipartie=ipartie+1//sert d''index pour l'enregistrement du jeu dans le tableau ensemble
  
  }
  
  n=0;
  
  /**Fin comptage */


  function jouer (){


  /**1er et second joueur */
    count++;
  
    jeu=collecter();    
  
    this.innerText=P1.signe
  
    console.log("Ce que je cherche :"+P1.signe)
  
    this.disabled=true
  
    jeu=collecter();   
  
    for( ipartie; n< jeu.length; n++) {
    
      ensemble[ipartie] = jeu[n]
    ipartie=ipartie+1//sert d''index pour l'enregistrement du jeu dans le tableau ensemble
    
    }
    n=0;
  
  
    console.log(ipartie)
  
    console.log(jeu)
    
    console.log(ensemble)
    
    var tp //tempon pour echanger
    
    tp=P1 
    P1=P2
    P2=tp
    
    document.getElementById("tdj").innerHTML=P1.affichage
    
win();

    console.log(tdj)
    
  }




    //secong ordre : L'ordi joue en premier
  
  /*
  }*/
  
  
  
  /**Fin partie de l'ordinateur */
  
  
  /*Sauvegarde de jeu*/
  
  

  
  
  
  /***Fin */
  
  
  /**Parite de retour en arriere */
  
  var arriere=document.getElementById("arriere")
  var reset=document.getElementById("reset")    

  
  
  arriere.addEventListener("click", Arrier)
  
  reset.addEventListener("click", Inijeu)


function win () {

jeu=collecter()
l1=0;co1=0,d1=0;l11=0;co11=0;d11=0;l2=0;co2=0,d2=0;l22=0;co22=0;d22=0;l3=0;co3=0;l33=0;co33=0;
let a=0

for(let a=0;a<3;a++)
{

switch (jeu[a]) // CASE 0
{ case 'X':l1++; co1++; d1++;

break; 


case 'O':l11++;co11++;d11++;
break; 

}

}




for(a=3;a<6;a++)
{

switch (jeu[a]) 
{ case 'X':l2++; co2++; 

break; 


case 'O':l22++;co22++;
break; 

}

}

for(a=6;a<9;a++)
{

switch (jeu[a]) // CASE 0
{ case 'X':l3++; co3++; d2++;d1++;

break; 


case 'O':l33++;co33++;d11++;d22;
break; 

}

}


/*
    switch (jeu[a]) // CASE 0
    { case 'X':l1++; co1++; d1++;

    break; 


    case 'O':l11++;co11++;d11++;
    break; 


    }
a++

switch (jeu[a])// CASE 1
{ case 'X':l1++; co2++;

break; 


case 'O':l11++;co22++;
break; 


}
a++

switch (jeu[a])// CASE 2
{ case 'X':l1++; co3++; d2++;

break; 


case 'O':l11++;co33++;d22++;
break; 

}//Fin ligne 1

a++

    switch (jeu[a])// CASE 3
    { case 'X':l2++; co1++; 

    break; 


    case 'O':l22++;co11++;
    break; 

    }

a++

    switch (jeu[a])// CASE 4
    { case 'X':l2++; co2++; d1++;d2++

    break; 


    case 'O':l22++;co22++;d11++;d22++
    break; 

    }


a++

    switch (jeu[a])// CASE 5
    { case 'X':l2++; co3++;

    break; 


    case 'O':l22++;co33++;
    break; 

    } // FIN ligne 2


a++

    switch (jeu[a])
    { case 'X':l3++; co1++;d2++;// CASE 6

    break; 


    case 'O':l33++;co11++;d22++;
    break; 

    }

a++

    switch (jeu[a])// CASE 7
    { case 'X':l3++; co2++;

    break; 


    case 'O':l33++;co22++;
    break; 

    }

a++

    switch (jeu[a])// CASE 8
    { case 'X':l3++; co3++;d1++;

    break; 


    case 'O':l33++;co33++;d11++;
    break; 

    } // FIN ligne 3
*/
//console.log(l1+" "+ co1 )

if( (  (l1===3)||(l2===3)||(l3===3)// Si le 1er joueur gagne
    || (co1===3)||(co2===3)||(co3===3)
   ||(d1===3)||(d2===3)
    )
  
  )

{

    for (const bt of btn) {
  
        bt.disabled=true
                           } 

if(Ordi===true)// Si on joue contre l'ordi
{
document.getElementById("tdj").innerText="Vous avez gagné"
}


if(Ordi===false)// Si on joue contre le 2eme joueur
{
document.getElementById("tdj").innerText="Le 1er joueur a gagné"
}


}





if( (  (l11===3)||(l22===3)||(l33===3)
   || (co11===3)||(co22===3)||(co33===3)
   ||(d11===3)||(d22===3)
    )
  )

{

    for (const bt of btn) {
  
        bt.disabled=true
                           } 

if(Ordi===true)// Si l'ordinateur gagne
{
document.getElementById("tdj").innerText="L'odinateur a gagne"
}


if(Ordi===false)// Si Le 2eme joueur gagne
{
document.getElementById("tdj").innerText="Le 2eme joueur a gagné"
}


}




}

  function Inijeu()
  


  {
  count=0;

  l1=0, l11=0, l2=0, l22=0, l3=0, l33=0,
   co1=0, co11=0, co2=0, co22=0, co3=0, co33=0,
    d1=0, d11=0, d2=0, d22=0

  j=0;
  k=0

  for (const bt of btn) {
  
  bt.innerText=""// Les cases sont vides
  bt.disabled=false// Les case sont clickable
  
  } 

  ipartie=0
  n=0
ensemble=[]

ensemble[90]

var jeu, n=0
  
jeu=collecter()


for( ipartie; n< jeu.length; n++) {
  
  ensemble[ipartie] = jeu[n]
ipartie=ipartie+1//sert d''index pour l'enregistrement du jeu dans le tableau ensemble

}

n=0;
 

var tp

tp=P1// Revenir au joueur initial 
P1=P2
P2=tp

  }




  //Fonction de retour en arriere
  function Arrier() {
  
    console.log("C'est bon")
    var source = [];
  
  
  if(count>0)
  {
   
    k=count
 
//Si on joue contre le second joueur

    count--;

    j=(k*9)-9;


  //revenir en arriere dans le comptage
  

  //Je creer la variable j qui permet d'indexer la sauvegarde
  
    
  
    var btns = document.getElementsByClassName("case");
  
    for (let a = 0; a <9; a++) {
      btns[a].innerText=ensemble[j]
  
      if(btns[a].innerText==="")
      {
  btns[a].disabled=false
  
      }
      
      console.log("button nun "+a +" text "+btns[a].innerText+" ensemble :"+ensemble[j]+" index de la sauvegarde "+j)
  
  j++;
  
     }

     
   
        ipartie=ipartie-9;  //ipartie la variable inpliquees dans l'action de jouer 

        
        // qui permet de faire reculer le jeu puisque

        tp=P1 
        P1=P2
        P2=tp  // pour faire joueur le second joueur


     
  
        
  /*
    if(Ordi===true)// Si on joue contre l'ordinateur

    {

 
        ipartie=ipartie-18;  //ipartie la variable inpliquees dans l'action de jouer 



      }
    
      */

/*
      if( (ordre===1) && (count===9 ) ){
     ipartie=ipartie-9
    }
*/

/*

    if( (ordre===1)  ){ // Lorsque le seul joueur joue en dernier
        
        
        if(count===9)
{       
ipartie=ipartie-9
    
    }




    if(count<=8)
    {       
 ipartie=ipartie-18       
        }


    }*/




/*
    
    if( (ordre===1) && (count<9 ) ){
        ipartie=ipartie-18
       }
  */ 
      

  
   document.getElementById("tdj").innerHTML=P1.affichage
   
  
     //console.log("ipartie "+ipartie)
  
  /*
  for ( var i =9; i> 0; i--) {
  ca[i]=ensemble[(j)]
  
  j--;
  
  }
  
  console.log(ca)
  */
  
  }
  
  }
  

  
  
  
}  
  
  
  /*
  for (let a = 0; a < btn.length; a++) {
    source[a] = btn[a].getAttribute("src");
    console.log(source[a]);
  
    if (source[a] === "case.png") {
      btn[a].addEventListener("click", jouer);
      console.log(source);
    }
  }
  
  var source2 = [];
  
  for (let a = 0; a < btn.length; a++) {
    source2[a] = btn[a].getAttribute("src");
    console.log(source2[a]);
  
    if (source2[a] !== "case.png") {
      btn[a].removeEventListener("click", jouer);
      console.log(source2);
    }
  }
  
  
  
  function jouer(){
    this.setAttribute("src","x.png")
  
  
    var ran
  
    var count=0
    var l1=0
    var l2=0
    var l3=0
    var co1=0
    var co2=0
    var co3=0
    var dia1=0
    var dia2=0
    
    var ordi=0
    
  
  
  do{
  ran = Math.floor(Math.random() * 9);
  
  //alert(ran)
  
  var source=btn[ran].getAttribute("src")
  
  //alert(source)
  
  for(var j=0;j<btn.length;j++)
  {
  
  var vf=btn[j].getAttribute("src")//verifie si
  
  if(vf==="case.png")//la case est vide
  count=count+1
  
  }
  
  
  
  
  
  }
  while(source!=="case.png"&& count!==0 )
  
  if(count!==0){
  btn[ran].setAttribute("src","o.png")
  }
  
  
  //verif les lignes l1; l2; l3
  
  for(var j=0;j<3;j++)
  {
  
  var vf=btn[j].getAttribute("src")//verifie si
  
  if(vf==="x.png")
  {
  l1=l1+1
  }
  alert(l1)
  }
  
  
  
  for(var j=3;j<6;j++)
  {
  
  var vf=btn[j].getAttribute("src")//verifie si
  
  if(vf==="x.png")//la case est vide
  {l2=l2+1}
  
  }
  
  for(var j=6;j<9;j++)
  {
  
  var vf=btn[j].getAttribute("src")//verifie si
  
  if(vf==="x.png")//la case est vide
  {l3=l3+1}
  
  }
  
  if(l1===3||l2===3||l3===3)
  {
  this.removeEventListener("click", jouer)
  
  alert("Vous avez gagné")
  
  
  }
  
  
  
  }
  
  */
  
  
  
  
  /*var btn= document.getElementsByTagName("img")
  let fin=0;
  
  var source =[];
  
  for(let a=0;a<btn.length;a++){
    source[a]=btn[a].getAttribute("src");
  
  console.log(source[a])
  
  }
  
  
  for(let a=0;a<btn.length;a++){
  if(source[a]==="case.png")
  
  {  btn[a].addEventListener("click",  jouer )
  
  console.log(source)
  
  }
  
  
  
  var source2 =[];
  
  
  for(let a=0;a<btn.length;a++){
    source2[a]=btn[a].getAttribute("src");
  
  console.log(source2[a])
  
  }
  
  
  if(source2[a]!=="case.png")
  
  {  btn[a].removeEventListener("click",  jouer )
  console.log(source2)
  
  }
  */
  
  
  
  /*
  
  for(var i=0;i<btn.length;i++){
      caseActu=btn[i]
  
      if(source[i]==="case.png"){
  
      caseActu.removeEventListener("click",  jouer )
  }
  
  }
   */
  
      
  
  
  /*
  var btn = document.getElementsByTagName("img");
  
  for (var i = 0; i < btn.length; i++) {
    var caseActu = btn[i];
    caseActu.addEventListener("click", jouer);
  }
  
  function jouer() {
    this.setAttribute("src", "x.png");
  
    var ran;
    var count = 0;
    var l1 = 0;
    var l2 = 0;
    var l3 = 0;
    var co1 = 0;
    var co2 = 0;
    var co3 = 0;
    var dia1 = 0;
    var dia2 = 0;
    var ordi = 0;
  
    do {
      ran = Math.floor(Math.random() * 9);
  
      var source = btn[ran].getAttribute("src");
  
      for (var j = 0; j < btn.length; j++) {
        var vf = btn[j].getAttribute("src");
        if (vf === "case.png") {
          count = count + 1;
        }
      }
    } while (source !== "case.png" || count !== 0);
  */
    /*btn[ran].setAttribute("src", "o.PNG");
  
    // Verification of lines l1, l2, l3
    for (var j = 0; j < 3; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l1 = l1 + 1
  
  console.log(l1)
  
      }
    }
  
    for (var j = 3; j < 6; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l2 = l2 + 1;
      }
    }
  
    for (var j = 6; j < 9; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l3 = l3 + 1;
      }
    }
  
    if (l1 === 3 || l2 === 3 || l3 === 3) {
      this.removeEventListener("click", jouer);
    }*/
  
  
  
  
  /*
  
  var btn = document.getElementsByTagName("img");
  
  for (var i = 0; i < btn.length; i++) {
    var caseActu = btn[i];
    caseActu.addEventListener("click", function jouer() {
    this.setAttribute("src", "x.png");
  
    var ran;
    var count = 0;
    var l1 = 0;
    var l2 = 0;
    var l3 = 0;
    var co1 = 0;
    var co2 = 0;
    var co3 = 0;
    var dia1 = 0;
    var dia2 = 0;
    var ordi = 0;
  
    do {
      ran = Math.floor(Math.random() * 9);
  
      var source = btn[ran].getAttribute("src");
  
      for (var j = 0; j < btn.length; j++) {
        var vf = btn[j].getAttribute("src");
        if (vf === "case.PNG") {
          count = count + 1;
        }
      }
    } while (source !== "case.PNG" || count !== 0);
  
    btn[ran].setAttribute("src", "o.PNG");
  
    // Verification of lines l1, l2, l3
    for (var j = 0; j < 3; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l1 = l1 + 1;
        console.log(l1);
      }
    }
  
    for (var j = 3; j < 6; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l2 = l2 + 1;
      }
    }
  
    for (var j = 6; j < 9; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l3 = l3 + 1;
      }
    }
  
    if (l1 === 3 || l2 === 3 || l3 === 3) {
      this.removeEventListener("click", jouer);
    }
  }
  )
  
  }
  
  */