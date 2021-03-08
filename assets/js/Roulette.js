class RouletteSpinner {
    constructor (options, spinnerItemAmount) {
        this.items = [];
        this.options = options;
        this.amount;
        if (this.spinnerItemAmount) {
            this.amount = spinnerItemAmount;
        } else {
            this.amount = 30;
        }
        this.populateSpinner();
    }
    populateSpinner () {
        for (let i = this.amount; i >= 0; i--) {
            let random = Math.round(Math.random() * (this.options.length -1));
            console.log(random);
            this.items.push(this.options[random]);
        };
        return this.items;
    }
}