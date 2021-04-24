import * as alt from 'alt';

let tabletCEF = new alt.WebView('http://resource/client/index.html')
let visible = false

alt.on('keydown', (key) => {
	if (key === 77) {
		if (!visible) {
			tabletCEF.focus();
			tabletCEF.emit('open')
			alt.showCursor(true)
			alt.toggleGameControls(false)
			visible = true
		} else {
			close()
		}
	} else if (key === 27) {
		close()
	}
});

function close () {
	visible = false
	tabletCEF.unfocus()
	tabletCEF.emit('close')
	alt.showCursor(false)
	alt.toggleGameControls(true)
}