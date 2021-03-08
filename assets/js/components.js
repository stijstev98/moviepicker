class Component {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id
        this.content;
    }
    update() {
        this.parent.innerHTML = this.content;
    }
}

class RouletteComponent extends Component {
    constructor(rouletteItems, parent, id) {
        super(parent, id);
        this.rouletteItems = rouletteItems;
        this.populateRoulette();
    }
    populateRoulette() {
        let tempItems = [];

        this.rouletteItems.forEach(function(item) {
            console.log(item);
            tempItems.push(`<li>${item}</li>`);
        }, this);

        let tempString = tempItems.join('');
        this.content = `<ul>${tempString}</ul>`;
    }
}