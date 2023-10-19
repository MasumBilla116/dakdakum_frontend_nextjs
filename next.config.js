const fs = require('fs')
module.exports = {
	env:{
		minJquery : fs.readFileSync('public/js/jquery-3.3.1.min.js').toString(),
		sidebarController : fs.readFileSync('public/js/sidebar.controller.js').toString(),
		miniTask : fs.readFileSync('public/js/mini.task.js').toString(),
		togglerMenu : fs.readFileSync('public/js/toggler-menu.js').toString(),
		srcModal : fs.readFileSync('public/js/src_modal.js').toString(),
		zoom : fs.readFileSync('public/js/zoom.js').toString(),
	},
	
}