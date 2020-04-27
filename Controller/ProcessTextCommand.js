puremvc.define
(
	{
		name: 'demo.controller.command.ProcessTextCommand',
		parent:puremvc.SimpleCommand
	},

	{  			
		execute: function (note)
		{
			var text = note.getBody();
			
			var output = 'Hello, ' + text;
			
			var proxy = this.facade.retrieveProxy( demo.model.proxy.TextProxy.NAME );
			
			proxy.setText( output );
			
		}	
	}
);