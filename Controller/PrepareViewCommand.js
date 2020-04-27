puremvc.define
(
	{
		name: 'demo.controller.command.PrepareViewCommand',
		parent: puremvc.SimpleCommand
	},

	{
		execute: function (note)
		{
			this.facade.registerMediator( new demo.view.mediator.TextComponentMediator );
		}
	}
);				