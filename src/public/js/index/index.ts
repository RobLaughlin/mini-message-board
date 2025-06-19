const messageBox: HTMLTextAreaElement | null =
    document.querySelector("#Message");

console.log(messageBox);
messageBox?.addEventListener("input", handleMessageBoxChanged);

function handleMessageBoxChanged(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    const charMessageElement = document.querySelector("#CharacterCount");

    if (!charMessageElement) {
        return;
    }

    charMessageElement.textContent = `${target.value.length}/1000 Characters`;
}
