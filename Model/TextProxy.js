puremvc.define
(
	{
		name: 'demo.model.proxy.TextProxy',
		parent: puremvc.Proxy
	},
	
	{
		setText: function ( text )
		{
			this.setData( text );
			
			this.sendNotification( demo.model.proxy.TextProxy.TEXT_CHANGED, text );
		}
	},
		
	{
		NAME: 'TextProxy', 
		TEXT_CHANGED: 'textChanged'
	}
);