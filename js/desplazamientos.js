
var posicion = 0;
var cont = 1;

function resetear() {
	posicion = 0;
}


function dado() {
	ocultar_mensajes();
    var num = Math.floor(Math.random() * 6 + 1);
    numero(num)
}

function numero(num){
	$(".n1").delay(100).slideToggle("fast");
	$(".n1").fadeOut(10);
	$(".n2").delay(200).slideToggle("fast");
	$(".n2").fadeOut(10);
	$(".n3").delay(300).slideToggle("fast");
	$(".n3").fadeOut(10);
	$(".n4").delay(400).slideToggle("fast");
	$(".n4").fadeOut(10);
	$(".n5").delay(500).slideToggle("fast");
	$(".n5").fadeOut(10);
	$(".n6").delay(600).slideToggle("fast");
	$(".n6").fadeOut(10);
	if(num == 1){
		$(".n1").fadeIn(10);
	}
	else if(num == 2){
		$(".n2").fadeIn(10);
	}
	else if(num == 3){
		$(".n3").fadeIn(10);
	}
	else if(num == 4){
		$(".n4").fadeIn(10);
	}
	else if(num == 5){
		$(".n5").fadeIn(10);
	}
	else if(num == 6){
		$(".n6").fadeIn(10);
	}
	desplazar(num)
}

function desplazar(num) {
	if(posicion == 0){
		if(num == 1){
			$('div.ficha').animate({left:'255px'}, 2000);
			posicion += num;
			mensajes(1);
		}
		else if(num == 2){
			$('div.ficha').animate({left:'255px'}, 2000);
			$('div.ficha').animate({top:'140px'}, 2000);
			posicion += num;
			mensajes(2);
		}
		else if(num == 3){
			$('div.ficha').animate({left:'255px'}, 2000);
			$('div.ficha').animate({top:'140px'}, 2000);
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion += num;
			mensajes(3);
		}
		else if(num == 4){
			$('div.ficha').animate({left:'255px'}, 2000);
			$('div.ficha').animate({top:'140px'}, 2000);
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion += num;
			mensajes(4);
		}
		else if(num == 5){
			$('div.ficha').animate({left:'255px'}, 2000);
			$('div.ficha').animate({top:'140px'}, 2000);
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion += num;
			setTimeout("retroceder(1);", 3000);
		}
		else if(num == 6){
			$('div.ficha').animate({left:'255px'}, 2000);
			$('div.ficha').animate({top:'140px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion += num;
			setTimeout("retroceder(2);", 3000);
		}
	}
	else if(posicion == 1){
		if(num == 1){
			$('div.ficha').animate({top:'140px'}, 2000);
			posicion += num;
			mensajes(2);
		}
		else if(num == 2){
			$('div.ficha').animate({top:'140px'}, 2000);
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion += num;
			mensajes(3);
		}
		else if(num == 3){
			$('div.ficha').animate({top:'140px'}, 2000);
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion += num;
			mensajes(4);
		}
		else if(num == 4){
			$('div.ficha').animate({top:'140px'}, 2000);
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion += num;
			setTimeout("retroceder(1);", 3000);
		}
		else if(num == 5){
			$('div.ficha').animate({top:'140px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion += num;
			setTimeout("retroceder(2);", 3000);
		}
		else if(num == 6){
			$('div.ficha').animate({top:'140px'}, 2000);
			$('div.ficha').animate({left:'822px'}, 2000);
			posicion += num;
			mensajes(7);
		}
	}
	else if(posicion == 2){
		if(num == 1){
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion += num;
			mensajes(3);
		}
		else if(num == 2){
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion += num;
			mensajes(4);
		}
		else if(num == 3){
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion += num;
			setTimeout("retroceder(1);", 3000);
		}
		else if(num == 4){
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion += num;
			setTimeout("retroceder(2);", 3000);
		}
		else if(num == 5){
			$('div.ficha').animate({left:'822px'}, 2000);
			posicion += num;
			mensajes(7);
		}
		else if(num == 6){
			$('div.ficha').animate({left:'822px'}, 2000);
			$('div.ficha').animate({top:'250px'}, 2000);
			posicion += num;
			mensajes(8);
		}
	}
	else if(posicion == 3){
		if(num == 1){
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion += num;
			mensajes(4);
		}
		else if(num == 2){
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion += num;
			setTimeout("retroceder(1);", 3000);
		}
		else if(num == 3){
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion += num;
			setTimeout("retroceder(2);", 3000);
		}
		else if(num == 4){
			$('div.ficha').animate({left:'822px'}, 2000);
			posicion += num;
			mensajes(7);
		}
		else if(num == 5){
			$('div.ficha').animate({left:'822px'}, 2000);
			$('div.ficha').animate({top:'250px'}, 2000);
			posicion += num;
			mensajes(8);
		}
		else if(num == 6){
			$('div.ficha').animate({left:'822px'}, 2000);
			$('div.ficha').animate({top:'250px'}, 2000);
			$('div.ficha').animate({left:'935px'}, 2000);
			posicion += num;
			mensajes(9);
		}
	}
	else if(posicion == 4){
		if(num == 1){
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion += num;
			setTimeout("retroceder(1);", 3000);
		}
		else if(num == 2){
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion += num;
			setTimeout("retroceder(2);", 3000);
		}
		else if(num == 3){
			$('div.ficha').animate({left:'822px'}, 2000);
			posicion += num;
			mensajes(7);
		}
		else if(num == 4){
			$('div.ficha').animate({left:'822px'}, 2000);
			$('div.ficha').animate({top:'250px'}, 2000);
			posicion += num;
			mensajes(8);
		}
		else if(num == 5){
			$('div.ficha').animate({left:'822px'}, 2000);
			$('div.ficha').animate({top:'250px'}, 2000);
			$('div.ficha').animate({left:'935px'}, 2000);
			posicion += num;
			mensajes(9);
		}
		else if(num == 6){
			$('div.ficha').animate({left:'822px'}, 2000);
			$('div.ficha').animate({top:'250px'}, 2000);
			$('div.ficha').animate({left:'935px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			posicion += num;
			mensajes(10);
		}
	}
	else if(posicion == 7){
		if(num == 1){
			$('div.ficha').animate({top:'250px'}, 2000);
			posicion += num;
			mensajes(8);
		}
		else if(num == 2){
			$('div.ficha').animate({top:'250px'}, 2000);
			$('div.ficha').animate({left:'935px'}, 2000);
			posicion += num;
			mensajes(9);
		}
		else if(num == 3){
			$('div.ficha').animate({top:'250px'}, 2000);
			$('div.ficha').animate({left:'935px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			posicion += num;
			mensajes(10);
		}
		else if(num == 4){
			$('div.ficha').animate({top:'250px'}, 2000);
			$('div.ficha').animate({left:'935px'}, 2000);
			$('div.ficha').animate({top:'475px'}, 2000);
			posicion += num;
			mensajes(11);
		}
		else if(num == 5){
			$('div.ficha').animate({top:'250px'}, 2000);
			$('div.ficha').animate({left:'935px'}, 2000);
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'822px'}, 2000);
			posicion += num;
			setTimeout("retroceder(3);", 3000);
		}
		else if(num == 6){
			$('div.ficha').animate({top:'250px'}, 2000);
			$('div.ficha').animate({left:'935px'}, 2000);
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion += num;
			mensajes(13);
		}
	}
	else if(posicion == 8){
		if(num == 1){
			$('div.ficha').animate({left:'935px'}, 2000);
			posicion += num;
			mensajes(9);
		}
		else if(num == 2){
			$('div.ficha').animate({left:'935px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			posicion += num;
			mensajes(10);
		}
		else if(num == 3){
			$('div.ficha').animate({left:'935px'}, 2000);
			$('div.ficha').animate({top:'475px'}, 2000);
			posicion += num;
			mensajes(11);
		}
		else if(num == 4){
			$('div.ficha').animate({left:'935px'}, 2000);
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'822px'}, 2000);
			posicion += num;
			setTimeout("retroceder(3);", 3000);
		}
		else if(num == 5){
			$('div.ficha').animate({left:'935px'}, 2000);
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion += num;
			mensajes(13);
		}
		else if(num == 6){
			$('div.ficha').animate({left:'935px'}, 2000);
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			posicion += num;
			mensajes(14);
		}
	}
	else if(posicion == 9){
		if(num == 1){
			$('div.ficha').animate({top:'365px'}, 2000);
			posicion += num;
			mensajes(10);
		}
		else if(num == 2){
			$('div.ficha').animate({top:'475px'}, 2000);
			posicion += num;
			mensajes(11);
		}
		else if(num == 3){
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'822px'}, 2000);
			posicion += num;
			setTimeout("retroceder(3);", 3000);
		}
		else if(num == 4){
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion += num;
			mensajes(13);
		}
		else if(num == 5){
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			posicion += num;
			mensajes(14);
		}
		else if(num == 6){
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion += num;
			mensajes(15);
		}
	}
	else if(posicion == 10){
		if(num == 1){
			$('div.ficha').animate({top:'475px'}, 2000);
			posicion += num;
			mensajes(11);
		}
		else if(num == 2){
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'822px'}, 2000);
			posicion += num;
			setTimeout("retroceder(3);", 3000);
		}
		else if(num == 3){
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion += num;
			mensajes(13);
		}
		else if(num == 4){
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			posicion += num;
			mensajes(14);
		}
		else if(num == 5){
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion += num;
			mensajes(15);
		}
		else if(num == 6){
			$('div.ficha').animate({top:'475px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion += num;
			mensajes(16);
		}
	}
	else if(posicion == 11){
		if(num == 1){
			$('div.ficha').animate({left:'822px'}, 2000);
			posicion += num;
			setTimeout("retroceder(3);", 3000);
		}
		else if(num == 2){
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion += num;
			mensajes(13);
		}
		else if(num == 3){
			$('div.ficha').animate({left:'710px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			posicion += num;
			mensajes(14);
		}
		else if(num == 4){
			$('div.ficha').animate({left:'710px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion += num;
			mensajes(15);
		}
		else if(num == 5){
			$('div.ficha').animate({left:'710px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion += num;
			mensajes(16);
		}
		else if(num == 6){
			$('div.ficha').animate({left:'710px'}, 2000);
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion += num;
			setTimeout("retroceder(4);", 3000);
		}
	}
	else if(posicion == 13){
		if(num == 1){
			$('div.ficha').animate({top:'365px'}, 2000);
			posicion += num;
			mensajes(14);
		}
		else if(num == 2){
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion += num;
			mensajes(15);
		}
		else if(num == 3){
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion += num;
			mensajes(16);
		}
		else if(num == 4){
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion += num;
			setTimeout("retroceder(4);", 3000);
		}
		else if(num == 5){
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'255px'}, 2000);
			posicion += num;
			mensajes(18);
		}
		/* Meta */
		else if(num == 6){
			$('div.ficha').animate({top:'365px'}, 2000);
			$('div.ficha').animate({left:'145px'}, 2000);
			posicion += num;
			mensajes(19);
		}
	}
	else if(posicion == 14){
		if(num == 1){
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion += num;
			mensajes(15);
		}
		else if(num == 2){
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion += num;
			mensajes(16);
		}
		else if(num == 3){
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion += num;
			setTimeout("retroceder(4);", 3000);
		}
		else if(num == 4){
			$('div.ficha').animate({left:'255px'}, 2000);
			posicion += num;
			mensajes(18);
		}
		/* Meta */
		else if(num == 5){
			$('div.ficha').animate({left:'145px'}, 2000);
			posicion += num;
			mensajes(19);
		}
		else if(num == 6){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'255px'}, 2000);
			posicion = 18;
			mensajes(18);
		}
	}
	else if(posicion == 15){
		if(num == 1){
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion += num;
			mensajes(16);
		}
		else if(num == 2){
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion += num;
			setTimeout("retroceder(4);", 3000);
		}
		else if(num == 3){
			$('div.ficha').animate({left:'255px'}, 2000);
			posicion += num;
			mensajes(18);
		}
		/* Meta */
		else if(num == 4){
			$('div.ficha').animate({left:'145px'}, 2000);
			posicion += num;
			mensajes(19);
		}
		else if(num == 5){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'255px'}, 2000);
			posicion = 18;
			mensajes(18);
		}
		else if(num == 6){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion = 17;
			setTimeout("retroceder(4);", 3000);
		}
	}
	else if(posicion == 16){
		if(num == 1){
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion = 13;
			setTimeout("retroceder(4);", 3000);
		}
		else if(num == 2){
			$('div.ficha').animate({left:'255px'}, 2000);
			posicion += num;
			mensajes(18);
		}
		/* Meta */
		else if(num == 3){
			$('div.ficha').animate({left:'145px'}, 2000);
			posicion += num;
			mensajes(19);
		}
		else if(num == 4){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'255px'}, 2000);
			posicion = 18;
			mensajes(18);
		}
		else if(num == 5){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion = 17;
			setTimeout("retroceder(4);", 3000);
		}
		else if(num == 6){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion = 16;
			mensajes(16);
		}
	}
	else if(posicion == 18){
		/* Meta */
		if(num == 1){
			$('div.ficha').animate({left:'145px'}, 2000);
			posicion += num;
			mensajes(19);
		}
		else if(num == 2){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'255px'}, 2000);
			posicion = 18;
			mensajes(18);
		}
		else if(num == 3){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'370px'}, 2000);
			posicion = 17;
			setTimeout("retroceder(4);", 3000);
		}
		else if(num == 4){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'482px'}, 2000);
			posicion = 16;
			mensajes(16);
		}
		else if(num == 5){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'595px'}, 2000);
			posicion = 15;
			mensajes(15);
		}
		else if(num == 6){
			$('div.ficha').animate({left:'145px'}, 2000);
			$('div.ficha').animate({left:'710px'}, 2000);
			posicion = 14;
			mensajes(14);
		}
	}
};

function retroceder(cas){
	if(cas == 1){
		$('div.ficha').animate({left:'370px'}, 2000);
		posicion = 3;
		mensajes(3);
	}
	else if(cas == 2){
		$('div.ficha').animate({left:'255px'}, 2000);
		$('div.ficha').animate({top:'30px'}, 2000);
		$('div.ficha').animate({left:'145px'}, 2000);
		posicion = 0;
	}
	else if(cas == 3){
		$('div.ficha').animate({left:'935px'}, 2000);
		$('div.ficha').animate({top:'250px'}, 2000);
		posicion = 9;
		mensajes(9);
	}
	else if(cas = 4){
		$('div.ficha').animate({left:'710px'}, 2000);
		$('div.ficha').animate({top:'475px'}, 2000);
		posicion = 13;
		mensajes(13);
	}
}

function mensajes(pos){
	if(pos == 1){
		$(".mensaje1").show(3000);
	}
	else if(pos == 2){
		$(".mensaje2").show(3000);
	}
	else if(pos == 3){}
	else if(pos == 4){}
	else if(pos == 6){}
	else if(pos == 7){}
	else if(pos == 8){
		$(".mensaje8").show(3000);
	}
	else if(pos == 9){}
	else if(pos == 10){}
	else if(pos == 11){
		$(".mensaje11").show(3000);
	}
	else if(pos == 13){
		$(".mensaje13").show(3000);}
	else if(pos == 14){
		$(".mensaje14").show(3000);
		
	}
	else if(pos == 15){}
	else if(pos == 16){
		$(".mensaje16").show(3000);
	}
	else if(pos == 18){}
	else if(pos == 19){
		$(".bcerrar").show(3000);
		$(".meta").show(3000);
	}
}

function ocultar_mensajes(){
	$(".mensaje1").fadeOut(10);
	$(".mensaje2").fadeOut(10);
	$(".mensaje8").fadeOut(10);
	$(".mensaje11").fadeOut(10);
	$(".mensaje13").fadeOut(10);
	$(".mensaje14").fadeOut(10);
	$(".mensaje16").fadeOut(10);
	$(".meta").fadeOut(10);
}

function mostrar_tablero(){
	$(".instrucciones").fadeOut(1000);
	$(".ficha").show(500);
	$(".cuadro").show(500);
}



