var element = $("#html-content-holder"); // global variable
var getCanvas; // global variable

$("#Tipo,#Para").on('change',function(){
	var tipo = $("#Tipo").val();
	if(tipo == "time"){
		$("#divPara").css("display","none");
	}else{
		$("#divPara").css("display","inline-block");
	}
	FormatarMensagem();
});

$("#btn-Preview-Image").on('click', function () {
	gerarUrl();
});

$("#Ajuda").on("click", function(){
IniciarTour();
});

$(".editavel").on("keydown keyup", function(e){
	if(($(this).attr("Enter") != event.which && event.which == 13) ||  /[!'^+%&/()=?_\-~`;#$½{[\]}\\|<>@,]/gi.test(event.data) && $(this).text().length > $(this).attr("maxlength"))
	{
		//$(this).text($(this).text().substring(0, $(this).attr("maxlength")));
		e.preventDefault();
	}
});

function FormatarMensagem(){
	var tipo = $("#Para").val();
	if(tipo == "time"){
		$("#Mensagem").css("top","95px");
		$("#Mensagem").css("width","615");
		$("#Mensagem").attr("maxlength","273");
	}else{
		$("#Mensagem").css("top","114px");
		$("#Mensagem").css("width","465");
		$("#Mensagem").attr("maxlength","215");
	}
	$(element).css('background-image', "url(img/para/"+$("#Para").val()+".png");
	//$("#Quando").html(new Date(Date.now()).toLocaleDateString());
}

function gerarUrl(){
	try{
	var t = ConverterParaEnvio("Título", $("#Titulo").html());
	var d = ConverterParaEnvio("De", $("#De").html());
	var p = ConverterParaEnvio("Para", $("#Para").val());
	var m = ConverterParaEnvio("Mensagem", $("#Mensagem").html());
	//var q = ConverterParaEnvio("Quando", $("#Quando").html());
	//var l = ConverterParaEnvio("Título", Date.now());	
	
	var url = window.location.href.substring(0,window.location.href.lastIndexOf("/")+1) + "img.html?t=" + t + "&d=" + d + "&p=" + p + "&m=" + m;// + "&q=" + q;
	var url = encodeURI(url);
	$("#urlImagem").attr("href", url);
	$("#urlImagem").html(url);
	$("#inputUrlImagem").css("display","block");
	$("#inputUrlImagem").val(url);
	$("#inputUrlImagem").select();
	document.execCommand("copy");
	$("#inputUrlImagem").css("display","none");
	alert("Url copiado para area de transferência");
	} catch(e){
		alert(e.message);
	}
}

function ConverterParaEnvio(nome, valor){	
	try {
		var convertido = window.btoa(valor);		
		var retornado = window.atob(convertido);
		
		if(retornado != valor){
			throw "";
		}
		return convertido;
	}
	catch (e) {
		throw "Erro ao preparar "+nome+" para url. Verifique os caracteres especiais utilizados e tente novamente. Não deixe de reportar para o administrador do sistema sobre o erro.";
	}
}

function PreencherNomes(){
	var nomes = [{valor:'adilson', descricao: 'Adilson'},
				{valor:'anaLuiza', descricao: 'Ana Luiza'},
				{valor:'anaPaula', descricao: 'Ana Paula'},
				{valor:'andre', descricao: 'André de Souza'},
				{valor:'carol', descricao: 'Carol'},
				{valor:'daniel', descricao: 'Daniel'},
				{valor:'fernando', descricao: 'Fernando'},
				{valor:'gabi', descricao: 'Gabi'},
				{valor:'gustavo', descricao: 'Gustavo'},
				{valor:'jessica', descricao: 'Jéssica'},
				{valor:'mateus', descricao: 'Mateus Gomes'},
				{valor:'matheus', descricao: 'Matheus Alves'},
				{valor:'pedro', descricao: 'Pedro Rosa'},
				{valor:'thiago', descricao: 'Thiago'}];
	nomes.forEach(function(nome){
		var o = new Option(nome.descricao, nome.valor);
		$(o).html(nome.descricao);
		$("#Para").append(o);
	});
}

PreencherNomes();
FormatarMensagem();