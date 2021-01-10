document.getElementById("myBtn1").disabled = true;
document.getElementById("mdp2").addEventListener("input", function() {
	var paragrapheErreur = document.getElementById("erreur");
  if (this.value != document.getElementById("mdp").value) {
		paragrapheErreur.innerHTML = "Les deux Mot de passe ne correspondent pas";
	} else {
		paragrapheErreur.innerHTML = "";
	}
});
document.getElementById("verif").addEventListener("click", function() {
  var verifErreur = document.getElementById("verifErreur");
  var dateErreur = document.getElementById("dateErreur");
  var inputs=document.forms["form"].getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
      document.getElementById("verif").checked=false;
			verifErreur.innerHTML = "Veuillez renseigner tous les champs";
			break;
		}
  }
  verifErreur.innerHTML = "";

 checkDate()? dateErreur.innerHTML="" : dateErreur.innerHTML="champ date invalid"
 
});
 
function testNom(){
  var nomErreur = document.getElementById("erreurNom");
  var nom = document.getElementById("nom");
 
	if (nom.value == "") {
		nomErreur.innerHTML = "Champ nom manquant";
	} else {
		nomErreur.innerHTML = "";
  }
 
}
function testPrenom(){
  var prenomErreur = document.getElementById("erreurPrenom");
  var prenom = document.getElementById("prenom"); if (prenom.value == "") {
		prenomErreur.innerHTML = "Champ prenom manquant";
	} else {
		prenomErreur.innerHTML = "";
  }
}
function testEmail(){
  var emailErreur = document.getElementById("erreurEmail");
  var at = document.getElementById("email").value.indexOf("@");
  var email = document.getElementById("email");
   if ((email.value == "")|| (at==-1)) {
		emailErreur.innerHTML = "Champ email invalide";
	} else {
		emailErreur.innerHTML = "";
  }

}
function testPseudo(){
  var pseudo = document.getElementById("pseudo");
  var pseudoErreur = document.getElementById("erreurPseudo");
  if (pseudo.value == "") {
		pseudoErreur.innerHTML = "Champ pseudo manquant";
	} else {
		pseudoErreur.innerHTML = "";
	}
}
function testPwd(){
  var pwdErreur = document.getElementById("erreurPwd");
  var mdp = document.getElementById("mdp");
  if (mdp.value == "") {
		pwdErreur.innerHTML = "Champ Mot de passe manquant";
	} else {
		pwdErreur.innerHTML = "";
  }
}
function testPwdC(){
  var pwdCErreur = document.getElementById("erreurPwdC");
  if (mdp2.value == "") {
		pwdCErreur.innerHTML = "Champ Mot de passe manquant";
	} else {
		pwdCErreur.innerHTML = "";
  }
}
document.getElementById("img").addEventListener("input", function() {
    var paragrapheErreur = document.getElementById("erreur");
    const file = this.files[0];
const  fileType = file['type'];
const validImageTypes = ['image/gif', 'image/jpeg', 'image/png','image/jpg'];
 
	if (this.value != document.getElementById("img").value) {
        if(!validImageTypes.includes(fileType)){
            paragrapheErreur.innerHTML = "L'image invalid";
        }
	} else {
        paragrapheErreur.innerHTML = "";
	}
});
function checkDate()
  {
    var day = document.getElementById("day");
    var  year= document.getElementById("year");
    var month = document.getElementById("month");
    re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    var date=day.value+"/"+month.value+"/"+year.value;
console.log(date);
    if(date != '' && !date.match(re)) {
      return false;
    }
    return true;
  }
  document.getElementById("myBtn").addEventListener("click", function(event){
    event.preventDefault();
    test();
  });
function test(){
 var nom = document.getElementById("nom");
 var prenom = document.getElementById("prenom");
 var email = document.getElementById("email");
 var mdp = document.getElementById("mdp");
 var mdp2 = document.getElementById("mdp2");
 var pseudo = document.getElementById("pseudo");
 var homme=document.getElementById("homme");
 var femme=document.getElementById("femme");
 var verif=document.getElementById("verif");

var at = document.getElementById("email").value.indexOf("@");
var t=(homme.checked)||(femme.checked);
    if((nom.value!="")&&(pseudo.value!="")&&(prenom.value!="")&&(mdp.value!="")&&(mdp2.value!="")&&(mdp.value==mdp2.value)&&(at!=-1)&&(t)&&(checkDate())&&(verif.checked))
    {
        checkDate();
         document.getElementById("myBtn1").disabled = false ;
         }
         
    else{
        document.getElementById("myBtn1").disabled = true;
    } 
}
function testReset(){
    document.getElementById("form").reset();

}
function fermer(){
    
    window.close();
}
function affiche(){
    alert("Information envoyé");
}
document.getElementById("myBtn2").addEventListener("click", function(event){
    event.preventDefault();
    testReset();

  });
  document.getElementById("myBtn1").addEventListener("click", function(event){
    event.preventDefault();
affiche();    
  });
  document.getElementById("myBtn3").addEventListener("click", function(event){
    event.preventDefault();
fermer();    
  });