puremvc.define
(
	{
		name: 'demo.controller.command.PrepareModelCommand',
		parent: puremvc.SimpleCommand
	},
	
	{
		execute: function (note)
		{
			this.facade.registerProxy( new demo.model.proxy.TextProxy );
		}
	}
)