let tabletCEF = mp.browsers.new('package://tablet/index.html');
let visible = false

mp.keys.bind(0x4D, false, function () {
	if (!visible) {
		visible = true
		mp.game.controls.disableAllControlActions()
		mp.gui.cursor.visible = true;
		tabletCEF.active = true
		tabletCEF.execute(`open()`)
		playAnimation()
	} else {
		close()
	}
});

mp.keys.bind(0x1B, false, function () {
	if (visible) {
		close()
	}
});

function close () {
	visible = false
	tabletCEF.execute(`close()`)
	mp.gui.cursor.visible = false;
	mp.game.controls.enableAllControlActions()
	mp.players.local.stopAnimTask()
}

function playAnimation () {
	if (mp.players.local.getVehicleIsIn(false)) {
		return
	}
	let dict = "amb@world_human_tourist_map@male@base"
	let anim = "base"

	mp.game.streaming.requestAnimDict(dict)
	mp.players.local.taskPlayAnim(dict, anim, 2.0, 2.0, -1, 1, 0, false, false, false)
}