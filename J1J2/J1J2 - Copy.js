
  

var Ordi=false// booleeen pour savoir si on joue contre l'ordi
/*

  /**Fin variables globales */



  var j2= document.getElementById("joueur")// Si il y a un second joueur
    
  
  
  var P1=new Object()
  var P2=new Object()
  
  
   

    P1.signe="X", P2.signe="O" ,
    P1.affichage="Tour du 1er joueur (X)", P2.affichage="Tour du 2eme joueur (O)"
      

  //ordi.addEventListener("click", () =>{ J2=true })
  //j2.addEventListener("click", () =>{ Ordi=true})
  
  
  
  //Determiner si le premier joueur utilise X ou Y
  
  var btn = document.getElementsByClassName("case");

  
  
  
  document.getElementById("tdj").innerText=P1.affichage
  

  
  

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
  
  
    function rules() {

document.getElementById("rules").open=true

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
{ case 'X':l1++; 

break; 


case 'O':l11++;
break; 

}

}




for(a=3;a<6;a++)
{

switch (jeu[a]) 
{ case 'X':l2++; 

break; 


case 'O':l22++;
break; 

}

}

for(a=6;a<9;a++)
{

switch (jeu[a]) // CASE 0
{ case 'X':l3++;

break; 


case 'O':l33++;
break; 

}

}

//Les collonnes

for(let a=0;a<9;a=a+3)
{

switch (jeu[a]) // CASE 0
{ case 'X':co1++; 

break; 


case 'O':co11++;
break; 

}

}




for(a=1;a<9;a=a+3)
{

switch (jeu[a]) 
{ case 'X':co2++; 

break; 


case 'O':co22++;
break; 

}

}

for(a=2;a<9;a=a+3)
{

switch (jeu[a]) // CASE 0
{ case 'X':co3++;

break; 


case 'O':co33++;
break; 

}

}


for(a=0;a<9;a=a+4)
{

switch (jeu[a]) // CASE 0
{ case 'X':d1++;

break; 


case 'O':d11++;
break; 

}

}



for(a=2;a<9;a=a+2)
{

switch (jeu[a]) // CASE 0
{ case 'X':d2++;

break; 


case 'O':d22++;
break; 

}

}




if( (l1===3) || (l11===3) )
  
{

     

      for(let a=0;a<3;a++) {


        document.getElementsByClassName("case")[a].style.backgroundColorolor="#FF5E00"

                           } 

}




if( (l2===3) || (l22===3) )
  
  {
  
       
  
        for(let a=3;a<6;a++) {
  
  
          document.getElementsByClassName("case")[a].style.backgroundColor="#FF5E00";
  
                             } 
  
  }
    



  if( (l3===3) || (l33===3) )
  
    {
    
         
    
          for(let a=3;a<6;a++) {
    
    
            document.getElementsByClassName("case")[a].style.backgroundColor="#FF5E00";
    
                               } 
    
    }





    if( (co1===3) || (co11===3) )
  
      {
      
           
      
            for(let a=0;a<9;a=a+3) {
      
      
              document.getElementsByClassName("case")[a].style.backgroundColor="#FF5E00";
      
                                 } 
      
      }





      if( (co2===3) || (co22===3) )
  
        {
        
             
        
              for(let a=1;a<9;a=a+3) {
        
        
                document.getElementsByClassName("case")[a].style.backgroundColor="#FF5E00";
        
                                   } 
        
        }
  


        if( (co3===3) || (co33===3) )
  
          {
          
               
          
                for(let a=2;a<9;a=a+3) {
          
          
                  document.getElementsByClassName("case")[a].style.backgroundColor="#FF5E00";
          
                                     } 
          
          }
    





          if( (d1===3) || (d11===3) )
  
            {
            
                 
            
                  for(let a=0;a<9;a=a+4) {
            
            
                    document.getElementsByClassName("case")[a].style.backgroundColor="#FF3200";
            
                                       } 
            
            }
      

            if( (d2===3) || (d22===3) )
  
              {
              
                   
              
                    for(let a=2;a<8;a=a+2) {
              
              
                      document.getElementsByClassName("case")[a].style.backgroundColor="#FF3200";
              
                                         } 
              
              }
        


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

  bt.style.backgroundColor="#00FFFF"; 

  bt.style.backgroundColor="#FFFFFF"; 


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
  

 
  
