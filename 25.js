// write a java script function that creates a <p> element with th text "Hello World" and appends it to the <body>//

function createElement() {
    var p = document.createElement("p"); 
    var innertext = 'Hello World';
    p.innerText = innertext; 
    var body = document.body; 
    body.appendChild(p);
} 
createElement();
document.writeln('<hr>')

// create a div element and append it to the body using classname box//

function createDiv() {
    var div = document.createElement("div");
    div.className = "box";
    document.body.appendChild(div);
}
createDiv();
//create a button element with text "Click Me" and append it to the container div//

function createButton() {
    var button = document.createElement("button");
    button.innerText = "Click Me";
    button.classList.add('btn', 'btn-primary');
    var dispaly = document.getElementById('container');
    dispaly.appendChild(button);
}
createButton();
document.writeln('<hr>')

// create an unordered list (<ul>) then create and  append 3 list items 
// (<li>) to the list dyanamically using javascript each <li> should have a different class "list-item" and contain a some sample text .append the entiner list to a div//

function createList() {
    const unorderedList = document.createElement('ul'); 
    for (let i = 0; i <4; i++) { 
        const listItem = document.createElement('li');
        listItem.innerText = `Item ${i}`;
        unorderedList.appendChild(listItem); 
    }
    document.body.appendChild(unorderedList); 
}

createList();
document.writeln('<hr>')
