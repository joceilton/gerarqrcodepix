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
		    crossDomain: true,
		    data: $(".form-get-qrcode-pix").serialize(),
		    dataType: 'json',
		    success: function(data) {
		        console.log(data);
		    },
		    type: 'POST'
		});
	})

})
