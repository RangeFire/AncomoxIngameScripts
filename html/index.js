$(document).ready(function(){
	window.addEventListener('message', function(event) {
		var data = event.data;

		if (data.show == true) {
			document.getElementById('display').style.display = 'block';
		} else {
			document.getElementById('display').style.display = 'none';
		}
	});

	$(document).keydown((event) => {
		if (event.which == 27 || event.which == 77) {
			$.post('http://tablet/close', JSON.stringify({}));
		}
	})
});