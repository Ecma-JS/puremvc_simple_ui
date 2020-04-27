puremvc.define
(
	{
		name: 'demo.controller.command.StartupCommand',
		parent: puremvc.MacroCommand
	},

	{
		initializeMacroCommand: function ()
		{
			this.addSubCommand( demo.controller.command.PrepareControllerCommand );
			
			this.addSubCommand( demo.controller.command.PrepareViewCommand );
			
			this.addSubCommand( demo.controller.command.PrepareModelCommand );
		}
	}
)