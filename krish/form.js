class Form {

constructor() {

}

display() {
var title = createElement('h2');
title.html("online/car racing");
title.position(250,20);

var input = createInput("Name");
input.position(250,250);

var button = createButton('play');
button.position(250,300);

var greeting = createElement('h3');

button.mousePressed(function() {
input.hide();
button.hide();

var name = input.value();
player.update(name);
player.updateCount(playerCount);

greeting.html("Welcome to our Car racing game" + name);
greeting.position(250,70);

}
)
}
}