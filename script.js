//NAVAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll',function() {
    const scrollTop = window.pageTOffset ||
     this.document.documentElement.scrollTop;

     if(scrollTop > lastScrollTop){
         navbar.style.top="-50px";
     }  else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
    
});


//type pour le txte qui s'ecrit seul
var typed = new Typed('.typed', {
    strings: ["<strong><em> Salut !!!  </em></strong>",

    "Actuellement étudiant en <strong>INFORMATIQUE DES SCIENCES NUMERIQUES(Bases de Données)</strong> et <strong> DATA IA(Intelligence Artificielle)</strong> respectivement à<strong><em>l'Université Virtuelle de CI</em></strong> et<strong><em>Ivoire Geek School</em></strong>."
     ,
      "je me permets de vous souhaiter la bienvenue",
      "Excusez-moi pour l'etat du site je ne suis qu'à mes début en développement informatique actuellement.",
    
    "<strong>Passionné par la révolution numérique et depuis toujours par le monde informatique</strong>.",
"Je passe environ <strong> 20 heures de <em>CODE</em> par jour</strong>" ],

    typeSpeed: 60,
  });