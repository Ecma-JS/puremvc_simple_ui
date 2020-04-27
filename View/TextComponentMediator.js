puremvc.define
  (
    {
      name: 'demo.view.mediator.TextComponentMediator',
      parent: puremvc.Mediator
    },

    {
      listNotificationInterests: function () {
        return [
          demo.model.proxy.TextProxy.TEXT_CHANGED,
        ]
      },

      handleNotification: function (note) {
        this.viewComponent.setOutputText(note.getBody());
      },

      onRegister: function () {
        this.setViewComponent(new demo.view.component.TextComponent);

        this.viewComponent.addEventListener(demo.view.component.TextComponent.TEXT_CHANGED, this);
      },

      onRemove: function () {
        this.viewComponent.removeEventListener(demo.view.component.TextComponent.TEXT_CHANGED, this);
        this.setViewComponent(null);
      },

      handleEvent: function (textChangedEvent) {
        this.sendNotification(demo.AppConstants.PROCESS_TEXT, textChangedEvent.text);
      }
    },

    {
      NAME: 'TextComponentMediator'
    }
  );