import * as alt from 'alt';
import * as native from 'natives'

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
			playAnimation()
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
	native.clearPedTasks(alt.Player.local.scriptID)
}

function playAnimation () {
	let dict = "amb@world_human_tourist_map@male@base"
	let anim = "base"

	let interval = alt.setInterval(() => {
		if (native.hasAnimDictLoaded(dict)) {
			alt.clearInterval(interval)
			native.taskPlayAnim(alt.Player.local.scriptID, dict, anim, 2.0, 2.0, -1, 1, 0, false, false, false)
		}	
	}, 1)
}