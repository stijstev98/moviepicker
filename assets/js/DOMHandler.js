class DOMHandler {
    constructor() {
        this.appDOM = document.getElementById("app");
    }
    insertElement(content, into) {
        if (into) {
            document.querySelector(into).innerHTML = content;
        }
        else {
            this.appDOM.innerHTML = content
        }
    }
    updateElement() {

    }
    getElement(query) {
        return document.querySelector(query);
    }
}