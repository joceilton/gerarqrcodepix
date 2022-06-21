$(function() {
	
	var formgerarqrcodepix, qrcodesgerados;

	formgerarqrcodepix = $(".formgerarqrcodepix")
	qrcodesgerados     = $(".qrcodesgerados")

	formgerarqrcodepix.find("button").on("click", function() {
		targetOffset = $(this).offset().top;
		$('html, body').animate({ 
			scrollTop: targetOffset - 100
		}, 500);
	})

	$(".form-get-qrcode-pix").on("submit", function(e) {
		e.preventDefault()
		$.ajax({
			url: "https://pagmp.com/pix/index.php?",
			method: "GET",
			data: { valor: $(".valor").val(), nome: $(".nome").val(), cidade: $(".cidade").val(), chave: $(".chave").val(), fone: $(".fone").val() }
		}).done(function(data) {
			console.log(data)
		})
	})

})