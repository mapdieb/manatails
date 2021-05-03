

WA.onEnterZone('note-zone', () => {
    WA.sendChatMessage("Hello!");
})

WA.onLeaveZone('note-zone', () => {
    WA.sendChatMessage("Goodbye!");
})


openPopup(targetObject: notes, message: heyholetsgo, buttons: ButtonDescriptor[]): Popup
