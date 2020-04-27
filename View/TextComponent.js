puremvc.define
(
	{
		name: 'demo.view.component.TextComponent',
	
		constructor: function ()
		{

			this.textForm			= document.querySelector('#textForm');
			this.textInput			= this.textForm.querySelector('#inputText');
			this.textOutput			= this.textForm.querySelector('#outputText');
			this.reverseButton 		= this.textForm.querySelector('button[type=submit]');
			
			this.reverseButton.addEventListener( 'click', this );	
			this.textInput.addEventListener( 'keyup', this );	
		}
	},

	{

		textInput: null,

		textOutput: null,

		reverseButton: null,

		setOutputText: function (value)
		{
			this.textOutput.value = value;
		},
		
		getInputText: function ()
		{
			return this.textInput.value;
		},

		addEventListener: function ( type, listener, useCapture )
		{
			this.textForm.addEventListener( type, listener, useCapture );
		},
		
		handleEvent: function (domEvent)
		{
			if(domEvent.type == 'click') {
				domEvent.preventDefault();
				this.dispatchTextChangedEvent();
			}
		},

		dispatchTextChangedEvent: function ()
		{
			var textChangedEvent= document.createEvent( "Events" );
			textChangedEvent.initEvent(this.constructor.TEXT_CHANGED, false, false);
			textChangedEvent.text= this.getInputText();
			this.textForm.dispatchEvent( textChangedEvent );
		}
	},
	
	{
		TEXT_CHANGED: 'textChanged'
	}
);
