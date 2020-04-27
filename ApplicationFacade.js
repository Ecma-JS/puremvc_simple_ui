puremvc.define
	(
		{
			name: 'demo.ApplicationFacade',
			parent: puremvc.Facade
		},

		{

			startup: function () {
				if (!this.initialized) {
					this.initialized = true;
					this.registerCommand(demo.AppConstants.STARTUP, demo.controller.command.StartupCommand);
					this.sendNotification(demo.AppConstants.STARTUP);
				}
			}
		},


		{

			getInstance: function (multitonKey) {

				var instanceMap = puremvc.Facade.instanceMap;
				instance = instanceMap[multitonKey];

				if (instance)
					return instance;

				return instanceMap[multitonKey] = new demo.ApplicationFacade(multitonKey);
			},

			NAME: 'Myapp'
		}
	)