$(document).ready(function(){ 

    $('body').css({
        height:'1500px',
        background:'#555'
    })

    $('#barre-1').css({
        position:'fixed',
        top:'0',
        height:'100%',
        width:'50px',
        background:'#222',
        border:'2px solid #222',
        opacity:'0.70'
    })

    $('#barre-1 .progression').css({
        position:'absolute',
        backgroundColor:'#1c344e',
        width:'100%',
        height:'0%',
        transition: '0.40s',
    })

    $('#barre-1 .pourcentage').css({
        position:'absolute',
        top:'0',
        fontSize:'1em',
        lineHeight:'1.5em',
        textAlign:'center',
        width:'50px',
        color:'#fff'
    }) 

    $('.container-fluid').css({
        margin:'0px',
        padding:'0px',
    })

    $('.entetes').css({
        backgroundColor:'#1c344e',
        color:'white',
        margin:'0',
        padding:'15px',
        textAlign:'center',
        lineHeight:'1em',
    })

    $('.colonnes').css({
        float: 'none',
        margin:'0 auto',
        padding:'50px 0',
        width:'auto',
        backgroundColor:'white',
    })

    $('.colonnes div,h6').css({
        float: 'none',
        margin:'0 auto',
        width:'60%',
        backgroundColor:'white',
    })

    $('.col-sm-2').css({
        margin:'10px 50px',
        padding:'15px'
    })

    $(':input').css({
        padding: '2px',
        border: '1px solid #CCC',
        borderRadius: '2px',
        outline: 'none'
    })

    $('.incorrect').css({
        borderColor:'red',
        display:'none',
    })

    $('.correct').css({
        borderColor:'green',
        display:'none',
    })

    $('#msgErreur').css({
        display:'inline',
        display:'none',
        float: 'none',
        fontSize:'0.7em',
        color:'red',
    })

$('#envoyer').click(function(e){

    var form = $('input, select');
    $('input, select').each(function(){
        e.preventDefault();
    if (form.val() == ''){
        $('#msgErreur').show().text('Veuillez remplir les champs vides');
        $('input, select').show().css('.incorrect');
    }
    else{
        $('#msgErreur').hide();
        $('input, select').show().css('.correct')
    }
});
});
});

/*
$("input,select").keyup(function() {
    var $t = $(this);
    var $e = $(".msgErreurText");
    if (!$t.val()) {
        $(this).focus().next('input').text("le champ login est vide").show();
    } else {
        $e.hide();
    }
}).keyup();
});
*/
/*
$('#mainForm').submit(function() { 
    var form = $('input,select'); 
    if ($(form).val() == ''){
        $(this).next('.msgErreurText').show().text('Veuillez remplir ce champs');
    }
    else{
        $(this).next('.msgErreurText').hide()
    }
});
});
*/

/*
(function() {
	function calculPourcentageHauteur() {
		var hauteurDocument = $(document).height();
		var hauteurFenetre = $(window).height();
		var position = $(window).scrollTop(); 
		var positionDernierEcran = hauteurDocument - hauteurFenetre; 
		var ratioHauteur = position / positionDernierEcran;
		var pourcentageHauteur = Math.floor(ratioHauteur * 100);

		// Affichage de l'évolution du pourcentage de la hauteur dans la console (optionnel)
		console.log("Pourcentage de la hauteur parcourue : " + pourcentageHauteur + "%");

		return pourcentageHauteur;
	}

	// Barre de défilement horizontale en fonction du scroll
	function barreDefilement() {
		
		$("#barre-1 .progression").css({
			"height": calculPourcentageHauteur()+"%"
		});
		$("#barre-1 .pourcentage").html(calculPourcentageHauteur()+"%");
	}
	// Chargement des fonctions lors du chargement et du scroll
	$(window).on("load scroll", function() {
		barreDefilement(); // Barre-1
	});
    })(jQuery);
*/
/*
$(function() {
    $('#envoyer').click(function(){
        valid = true;        
        if ($('#question1,#question3,#question7,#question8,#question9,#question10,#question11,#question12').val() == ""){
            $('#question1,#question3,#question7,#question8,#question9,#question10,#question11,#question12').next('.msgErreurText').fadeIn().text('Veuillez remplir ce champs');
            valid = false;
        }
        else{
            $('#question1,#question3,#question7,#question8,#question9,#question10,#question11,#question12').next('.msgErreurText').fadeOut();
        }

        if( $('input[name=question2check]').is(':checked') ){
            $('.msgErreurCheck:eq(0)').fadeOut();
            valid = false;
        } else {
            $('.msgErreurCheck:eq(0),.msgErreurCheck:eq(1),.msgErreurCheck:eq(2),.msgErreurCheck:eq(3),.msgErreurCheck:eq(4)').fadeIn().text('Veuillez sélectionner une réponse'); 
        }

        if( $('input[name=question2check]').is(':checked') ){
            $('.msgErreurCheck:eq(1)').fadeOut();
            valid = false;
        } else {
            $('.msgErreurCheck:eq(0),.msgErreurCheck:eq(1),.msgErreurCheck:eq(2),.msgErreurCheck:eq(3),.msgErreurCheck:eq(4)').fadeIn().text('Veuillez sélectionner une réponse'); 
        }
    }

      );
});
*/

/*

*/

