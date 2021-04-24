$(document).ready(function(){
	window.addEventListener('message', function(event) {
		var data = event.data;

		if (data.show == true) {
			document.getElementById('display').style.display = 'block';
		} else {
			document.getElementById('display').style.display = 'none';
		}
	});

	document.onkeydown = function (data) {
		if (data.which == 27 || data.which == 77) {
			$.post('http://tablet/close', JSON.stringify({}));
		}
	};
});