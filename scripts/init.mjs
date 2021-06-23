Hooks.on("chatCommandsReady", function (chatCommands) {
    chatCommands.registerCommand(chatCommands.createCommandFromData({
        commandKey: "/img ",
        shouldDisplayToChat: true,
        iconClass: "fa-image",
        description: "Display an image to chat",
        gmOnly: false,
        invokeOnCommand: (chatlog, messageText, chatdata) => {
            messageText = '<div class="dukes-chat-image-container"><a href="' + messageText + '" target="_blank"><img src="' + messageText + '"></a></div>';
            return messageText;
        }
    }));
    chatCommands.registerCommand(chatCommands.createCommandFromData({
        commandKey: "/reply ",
        shouldDisplayToChat: false,
        iconClass: "fa-reply",
        description: "Reply to last whisper",
        gmOnly: false,
        invokeOnCommand: (chatlog, messageText, chatdata) => {
            if (chatlog._lastWhisper != null) {
                var name = chatlog._lastWhisper.user.name;
                chatlog.parse('/w ' + name + ' ' + messageText);
            }
        }
    }));
    chatCommands.registerCommand(chatCommands.createCommandFromData({
        commandKey: "/clear",
        shouldDisplayToChat: false,
        iconClass: "fa-eraser",
        description: "Clears your local chat",
        gmOnly: false,
        invokeOnCommand: (chatlog, messageText, chatdata) => {
            chatlog.deleteAll();
        }
    }));
});