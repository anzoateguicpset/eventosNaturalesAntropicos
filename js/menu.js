
function Inicio(){
	$("#logoMenu").delay(600).slideDown();
	$("#botonDiversidad").delay(1100).slideToggle();
	$("#botonEventosNatu").delay(1400).slideToggle();
	$("#botonMedidasPrev").delay(1700).slideToggle();
	$("#botonOrientaciones").delay(2000).slideToggle();
	$("#bton_Lect").delay(2000).slideToggle();
	
}

function Aparecer(opcion){
	switch(opcion){
		case 1:
			$("#linea1Diversidad").delay(100).fadeIn(100);
			$("#linea2Diversidad").delay(200).fadeIn(100);
			$("#linea3Diversidad").delay(300).fadeIn(100);
			$("#linea4Diversidad").delay(400).fadeIn(100);
			$("#linea5Diversidad").delay(500).fadeIn(100);
			$("#linea6Diversidad").delay(600).fadeIn(100);
			$("#Periodico4Diversidad").delay(700).fadeIn(1000);
			$("#Periodico3Diversidad").delay(1000).fadeIn(1000);
			$("#Periodico2Diversidad").delay(1300).fadeIn(1000);
			$("#Periodico1Diversidad").delay(1600).fadeIn(1000);
			$("#globoVerdeDiversidad").delay(800).fadeIn(1000);
			$("#globoAzulDiversidad").delay(1100).fadeIn(1000);
			$("#globoMarronDiversidad").delay(1400).fadeIn(1000);
			$("#globoNaranjaDiversidad").delay(2000).fadeIn(1000);
			$("#linea1ActividadDiv").delay(1500).slideToggle("fast");
			$("#linea2ActividadDiv").delay(2000).slideToggle("fast");
			$("#botonActividadDiv").delay(2500).slideToggle("fast");
			$("#botonActividadDiv2").delay(2500).slideToggle("fast");
			$("#botonCerrarDiv").delay(2000).fadeIn(1000);
			$("#bton_Lect").delay(10).fadeOut(10);
			break;
		case 2:
			$("#linea1Eventos").delay(100).fadeIn(100);
			$("#TexNatu").delay(500).fadeIn(50);
			$("#TexAnt").delay(500).fadeIn(50);
			$("#linea4Eventos").delay(500).fadeIn(100);
			$("#CurioEvent").delay(500).fadeIn(100);
			$("#PestñPreg").delay(100).fadeIn(100);
			$("#textoEventos").slideDown(500).fadeIn(100);
			$("#evento_naturales").delay(2000).fadeIn(1000);
			$("#eventos_antropicos").delay(2000).fadeIn(1000);
			$("#linea1ActividadEve").delay(1000).slideToggle("fast");
			$("#linea2ActividadEve").delay(1500).slideToggle("fast");
			$("#botonActividadEve").delay(2000).slideToggle("fast");
			$("#botonCerrarEve").delay(2000).fadeIn(1000);
			$("#bton_Lect").delay(10).fadeOut(10);
			break;
		case 3:
			$("#linea1Medidas").delay(100).fadeIn(100);
			$("#BotEmerg").show(1000).fadeIn(100);
			$("#BotPrev").show(1500).fadeIn(100);			
			$("#BotCiclo").show(2000).fadeIn(100);
			$("#BarCiclo").slideToggle(2000).fadeIn(1000);
			$("#BarPrev").slideToggle(1500).fadeIn(1000);
			$("#PlanEmerg").slideToggle(1000).fadeIn(1000);
			$("#PestñPregMed").delay(100).fadeIn(100);
			$("#BotCurMed").delay(1000).slideToggle("fast");			
			$("#linea1ActividadMed").delay(1000).slideToggle("fast");
			$("#linea2ActividadMed").delay(1500).slideToggle("fast");
			$("#botonActividadMed").delay(2000).slideToggle("fast");
			$("#botonActividadMed2").delay(2000).slideToggle("fast");
			$("#botonCerrarMed").delay(2000).fadeIn(1000);
			$("#bton_Lect").delay(10).fadeOut(10);
			
			break;
		case 4:
			$("#botonSP").delay(100).fadeIn(100);
			$("#botonSugPed").delay(200).fadeIn(100);
			$("#botonAD").delay(300).fadeIn(100);
			$("#botonOriAdul").delay(400).fadeIn(100);
			$("#botonON").delay(500).fadeIn(100);
			$("#botonOriNi").delay(600).fadeIn(100);
			$("#botonCerrarOri").delay(700).slideToggle("fast");
			$("#bton_Lect").delay(10).fadeOut(10);
			break;
			
		case 5:			
			$("#textoPedagogicas").show(1000).fadeIn(500);
			$("#textoAdultos").delay(1000).fadeOut(250);
			$("#textoNinos").delay(1000).fadeOut(250);	
			break;
						
		case 6:		
			$("#textoAdultos").show(1000).fadeIn(500);
			$("#textoPedagogicas").delay(1000).fadeOut(250);
			$("#textoNinos").delay(1000).fadeOut(250);
			break;
			
		case 7:		
			$("#textoNinos").show(1000).fadeIn(500);
			$("#textoAdultos").delay(1000).fadeOut(250);			
			$("#textoPedagogicas").delay(1000).fadeOut(250);
			break;
					
		case 8:
			$("#textoDeslizamiento").delay(1000).fadeIn(500);
			break;
		case 9:
			$("#textoInundaciones").delay(1000).fadeIn(500);
			break;
		case 10:
			$("#textoCalorExtremo").delay(1000).fadeIn(500);
			break;
		case 11:
			$("#textoIncendiosForestales").delay(1000).fadeIn(500);
			break;
		case 12:
			$("#MensajeNat").delay(100).fadeIn(1000);
			break;
		case 13:
			$("#MensajeAnt").delay(100).fadeIn(1000);
			break;
			
		case 14:
			$("#CuriEvet").delay(100).fadeIn(1000);
			break;
			
	    case 15:
			$("#PregtGen").delay(10).fadeIn(10);
			break;
			
		case 16:
			$("#TextPlanEmer").delay(100).fadeIn(1000);
			$("#BotDCer").delay(100).fadeIn(1000);
			break;
		case 17:
			$("#TexCurMed").delay(100).fadeIn(1000);
			break;
		case 18:
			$("#IntrucDeJueg").delay(100).fadeIn(1000);
			$("#BotJuegCerr").delay(100).fadeIn(1000);
			break;
		case 19:
			$("#fondCiclo").delay(100).fadeIn(1000);
			$("#Cicl2").delay(100).fadeIn(1000);
			$("#BotPre").delay(100).fadeIn(1000);
			$("#BotMitgc").delay(100).fadeIn(1000);
			$("#BotPrepr").delay(100).fadeIn(1000);
			$("#BotAlerta").delay(100).fadeIn(1000);
			$("#BotRepuest").delay(100).fadeIn(1000);
			$("#BotRehab").delay(100).fadeIn(1000);
			$("#BotReconst").delay(100).fadeIn(1000);
			$("#BotCerrCiclo").delay(100).fadeIn(1000);
			break;
		case 20:
			$("#PrevTex").delay(100).fadeIn(1000);
			break;
		case 21:
			$("#Mitgac").delay(100).fadeIn(1000);
			break;
		case 22:
			$("#Preparac").delay(100).fadeIn(1000);
			break;
		case 23:
			$("#TexAlerta").delay(100).fadeIn(1000);
			break;
		case 24:
			$("#TexRepuest").delay(100).fadeIn(1000);
			break;
		case 25:
			$("#TexRehab").delay(100).fadeIn(1000);
			break;
		case 26:
			$("#TexReconst").delay(100).fadeIn(1000);
			break;
		case 27:
			$("#Text_Prevc").delay(100).fadeIn(1000);
			$("#BotDCerPrevII").delay(100).fadeIn(1000);
			break;
		case 28:
			$("#PregtGenMed").delay(10).fadeIn(10);
			break;
		case 29:
			$("#Text_Lec").delay(100).fadeIn(1000);
			$("#BotDCer_Lec").delay(100).fadeIn(1000);
			break;
		}
}

function Desaparecer(opcion){
	switch(opcion){
		case 1:
			$("#Periodico1Diversidad").delay(10).fadeOut(10);
			$("#Periodico2Diversidad").delay(10).fadeOut(10);
			$("#Periodico3Diversidad").delay(10).fadeOut(10);
			$("#Periodico4Diversidad").delay(10).fadeOut(10);
			$("#globoVerdeDiversidad").delay(10).fadeOut(10);
			$("#globoAzulDiversidad").delay(10).fadeOut(10);
			$("#globoMarronDiversidad").delay(10).fadeOut(10);
			$("#globoNaranjaDiversidad").delay(10).fadeOut(10);
			$("#linea1ActividadDiv").delay(100).fadeOut(100);
			$("#linea2ActividadDiv").delay(100).fadeOut(100);
			$("#botonActividadDiv").delay(100).fadeOut(100);
			$("#botonActividadDiv2").delay(100).fadeOut(100);
			$("#botonCerrarDiv").delay(100).fadeOut(100);
			$("#linea6Diversidad").delay(200).fadeOut(100);
			$("#linea5Diversidad").delay(300).fadeOut(100);
			$("#linea4Diversidad").delay(400).fadeOut(100);
			$("#linea3Diversidad").delay(500).fadeOut(100);
			$("#linea2Diversidad").delay(600).fadeOut(100);
			$("#linea1Diversidad").delay(700).fadeOut(100);
			$("#bton_Lect").delay(1000).fadeIn(100);
		case 2:
			$("#textoEventos").delay(10).fadeOut(10);
			$("#TexAnt").delay(10).fadeOut(10);
			$("#TexNatu").delay(10).fadeOut(10);
			$("#linea1ActividadEve").delay(100).fadeOut(100);
			$("#linea2ActividadEve").delay(100).fadeOut(100);
			$("#botonActividadEve").delay(100).fadeOut(100);
			$("#botonCerrarEve").delay(100).fadeOut(100);
			$("#PestñPreg").delay(100).fadeOut(100);
			$("#CurioEvent").delay(10).fadeOut(10);
			$("#linea1Eventos").delay(200).fadeOut(100);
			$("#bton_Lect").delay(1000).fadeIn(100);
		case 3:		
			$("#BotCurMed").delay(100).fadeOut(100);
			$("#linea1ActividadMed").delay(100).fadeOut(100);
			$("#linea2ActividadMed").delay(100).fadeOut(100);
			$("#botonActividadMed").delay(100).fadeOut(100);
			$("#botonActividadMed2").delay(100).fadeOut(100);			
			$("#botonCerrarMed").delay(100).fadeOut(100);
			$("#PestñPregMed").delay(700).fadeOut(100);
			$("#BotPrev").delay(400).fadeOut(100);
			$("#BarPrev").delay(400).fadeOut(100);
			$("#BarCiclo").delay(400).fadeOut(100);
			$("#BotEmerg").delay(400).fadeOut(100);
			$("#PlanEmerg").delay(400).fadeOut(100);
			$("#BotCiclo").delay(400).fadeOut(100);
			$("#linea1Medidas").delay(700).fadeOut(100);
			$("#bton_Lect").delay(1000).fadeIn(100);
		case 4:
			$("#textoPedagogicas").delay(10).fadeOut(100);
			$("#textoAdultos").delay(10).fadeOut(100);
			$("#textoNinos").delay(10).fadeOut(100);
			$("#botonCerrarOri").delay(100).fadeOut(100);
			$("#botonOriNi").delay(200).fadeOut(100);
			$("#botonON").delay(300).fadeOut(100);
			$("#botonOriAdul").delay(400).fadeOut(100);
			$("#botonAD").delay(500).fadeOut(100);
			$("#botonSugPed").delay(600).fadeOut(100);
			$("#botonSP").delay(700).fadeOut(100);
			$("#bton_Lect").delay(1000).fadeIn(100);
		case 5:
			$("#textoPedagogicas").delay(10).fadeOut(100);
			$("#textoAdultos").delay(10).fadeOut(100);
			$("#textoNinos").delay(10).fadeOut(100);
		case 6:
			$("#textoIncendiosForestales").delay(10).fadeOut(100);
			$("#textoDeslizamiento").delay(10).fadeOut(100);
			$("#textoInundaciones").delay(10).fadeOut(100);
			$("#textoCalorExtremo").delay(10).fadeOut(100);
			
		case 7:
			$("#MensajeNat").delay(100).fadeOut(500);
		case 8:
			$("#MensajeAnt").delay(100).fadeOut(500);
		
		case 9:
			$("#CuriEvet").delay(100).fadeOut(500);
		case 10:
			$("#PregtGen").delay(10).fadeOut(10);


		case 11:
			$("#BotDCer").delay(10).fadeOut(10);
			


		case 12:
			$("#TexCurMed").delay(100).fadeOut(500);
		case 13:	
			$("#TextPlanEmer").delay(10).fadeOut(10);
		case 14:	
			$("#dfg").delay(10).fadeOut(10);
		case 15:
			$("#IntrucDeJueg").delay(10).fadeOut(10);
			$("#BotJuegCerr").delay(10).fadeOut(10);
		case 16:
			
			
			$("#fondCiclo").delay(100).fadeOut(500);
			$("#Cicl2").delay(100).fadeOut(500);
			$("#BotPre").delay(100).fadeOut(500);
			$("#BotMitgc").delay(100).fadeOut(500);
			$("#BotPrepr").delay(100).fadeOut(500);
			$("#BotAlerta").delay(100).fadeOut(500);
			$("#BotRepuest").delay(100).fadeOut(500);
			$("#BotRehab").delay(100).fadeOut(500);
			$("#BotReconst").delay(100).fadeOut(500);
			$("#BotCerrCiclo").delay(100).fadeOut(500);
		case 17:
			$("#PrevTex").delay(100).fadeOut(500);
			
		case 18:
			$("#Mitgac").delay(100).fadeOut(500);
			
		case 19:
			$("#Preparac").delay(100).fadeOut(500);
		
		case 20:
			$("#TexAlerta").delay(100).fadeOut(500);
		
		case 21:
			$("#TexRepuest").delay(100).fadeOut(500);
		
		case 22:
			$("#TexRehab").delay(100).fadeOut(500);
		
		case 23:
			$("#TexReconst").delay(100).fadeOut(500);
			
		case 24:
			$("#PregtGenMed").delay(10).fadeOut(10);
			
		case 25:
			$("#Text_Lec").delay(10).fadeOut(10);
			$("#BotDCer_Lec").delay(10).fadeOut(10);

		case 26:
			$("#Text_Prevc").delay(10).fadeOut(10);
			$("#BotDCerPrevII").delay(10).fadeOut(10);
			
		
	}
}

function Ver(){
	$('div.logo').slideDown(700);
}
