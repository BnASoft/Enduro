var yargs = require('yargs')

module.exports = {
	command: 'admin <command>',
	desc: 'handles admin users',
	builder: function (yargs) {
		return yargs
		.commandDir('admin_commands')
	},
	handler: function () {}
}
