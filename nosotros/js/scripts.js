$(document).ready(function(){
	
	$('#bannerMaster img').hover(function(){
		texto = $(this).attr('alt');
		$('#bannerOut span').html(texto);
		$('#bannerOut span').show();
	},function(){
		$('#bannerOut span').hide();
	});
	
	//inicializamos a vari�vel do intervalo	
	t = null;
	// instanciamos o intervalo no qual ser� acionada a fun��o
	t = setInterval(function(){
		// Conta quantas imagens existem na div que armazena as <img>
		imagens = $('#bannerMaster img').length;
			//verifica a imagem que est� vis�vel, esconde ela, e pega o numero de ordem da mesma
		$('#bannerMaster img').each(function(){
			if($(this).hasClass('visivel')){
				$(this).removeClass('visivel');
				$(this).addClass('escondido');
				indix = $(this).index();
				//acrescentamos 1 ao numero de ordem para que a pr�xima imagem seja mostrada.
				indix++;
			}			
		});
		//verifica se � a ultima imagem, ou seja, se o numero de ordem for igual ao total
		if(indix == imagens){
			//ent�o zeramos o numero de ordem, para podermos reexibir a primeira imagem
			indix = (imagens - indix);
		}
		//exibe a pr�xima imagem
		$('#bannerMaster img').eq(indix).removeClass('escondido');
		$('#bannerMaster img').eq(indix).addClass('visivel');
			
	},2000);
		
		
});


