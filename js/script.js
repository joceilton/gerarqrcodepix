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
			url: "https://pagmp.com/pix/index.php?valor=10,00&nome=Deivid%20Rothen&cidade=Porto%20Alegre&chave=bc0addbb-5bd1-4726-a962-7e48b4eb33c3&fone=5548991174663",
			method: "GET"
		}).done(function(data) {
			console.log(data)
		})
	})

})
