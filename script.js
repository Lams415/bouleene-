
var a = "1234";
var b = "5678";

var personne = [{
    nom : "Dupont",
    mdp : "1234"
  },
  
    {
        nom : "Dupond",
        mdp : "5678"  
    },
    {
        nom : "Doe",
        mdp : "0000"
    },
    {
        nom : "Doe",
        mdp : "1111"
    },
    {
        nom : "Doe",
        mdp : "2222"
    
 }];
/*
if (personne[].mdp  === a || personne[].mdp === b ) {

    console.log("vous avez trouvé le bon code");
};
*/
console.log(personne[0].mdp  === a && personne[0].mdp === b );