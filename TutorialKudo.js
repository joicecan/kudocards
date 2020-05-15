var tour = new Tour({
	name: "tour",
	backdrop: true,
	steps: [
		{
            element: "#Titulo",
            title: "Título do Kudo",
            content: "Altere aqui o título do Kudo que quer enviar."
        },
		{
            element: "#De",
            title: "De:",
            content: "Escreva seu nome, para que saibam que veio de você o Kudo."
        },
		{
            element: "#divPara",
            title: "Para quem será",
            content: "Escolha uma Opção de destinatário, caso queria mandar para alguém específico"
        },
		{
            element: "#Mensagem",
            title: "Mensagem",
            content: "Aqui você manda a mensagem que quiser no Kudo para este CSIer!<br>Ah, não esquece de mandar aquele SHOW!"
        },
		{
            element: "#btn-Preview-Image",
            title: "Url da Imagem",
            content: "Clique para Gerar Url da Imagem.",
			onShown: function (tour) {
				$("#btn-Preview-Image").click();
			}
        },
		{
            element: "#urlImagem",
            title: "Url da Imagem",
            content: "Você pode abrir para ver como ficou."
        }],
	onEnd: function (tour){
		location.reload();
	},
	template: "<div class='popover tour'>    <div class='arrow'></div>    <h3 class='popover-title'></h3>    <div class='popover-content'></div>    <div class='popover-navigation'>        <button class='btn btn-default' data-role='prev'>« voltar</button>        <span data-role='separator'>|</span>        <button class='btn btn-default' data-role='next'>proximo »</button>    </div>    <button class='btn btn-default' data-role='end'>Finalizar Tour</button>  </div>"
}).init().start();

function IniciarTour(){
	tour.restart();
}