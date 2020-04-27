puremvc.define
	(
		{
			name: 'demo.controller.command.PrepareControllerCommand',
			parent: puremvc.SimpleCommand
		},

		{
			execute: function (note) {
				this.facade.registerCommand(demo.AppConstants.PROCESS_TEXT, demo.controller.command.ProcessTextCommand);
			}
		}
	);
