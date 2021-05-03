WA.sendChatMessage('Hello world', 'Mr Robot');

WA.onEnterZone('note-zone', () => {
    WA.sendChatMessage("Hello!");
})

WA.onLeaveZone('note-zone', () => {
    WA.sendChatMessage("Goodbye!");
})


openPopup(targetObject: note-zone, message: heyholetsgo, buttons: ButtonDescriptor[]): Popup
