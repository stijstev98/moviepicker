let DOM = new DOMHandler();
let spinner = new RouletteSpinner(movies);
let roulette = new RouletteComponent(spinner.items, DOM.getElement("#rouletteContainer"), "roulette");
roulette.update();

let rouletteSpinner = DOM.getElement("#rouletteContainer ul");

rouletteSpinner.style.transform = `translateY(-${rouletteSpinner.offsetHeight - DOM.getElement("#rouletteContainer li").offsetHeight * 1.8}px)`;

