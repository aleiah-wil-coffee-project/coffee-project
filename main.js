"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee float-left d-flex justify-content">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<h2 class="container my-auto">' + coffee.name + '</h2>';
    html += '<p class="my-auto">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// var e = document.getElementById('roast-selection');
// var strUser = e.options[]
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// var search = document.querySelector('#coffees'); //search bar
tbody.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);
// var searchBar = document.getElementById('search');
// searchBar.addEventListener('onkeyup', search());

function searchCoffee() {
    var i, filter, roastSelect;
    var filteredRoast = [];
    var filteredCoffees = [];
    filter = document.getElementById('mySearch').value.toLowerCase();
    roastSelect = document.getElementById('roast-selection').value;

    for (i = 0; i < coffees.length; i++) {
        var coffee = coffees[i];
        // console.log(i);
        // console.log(input);
        console.log(filter);
        // if (coffee.name.toLowerCase().indexOf(filter)> -1){
        if (coffee.roast === roastSelect ){
            console.log(coffee.name);
            filteredRoast.push(coffee);
        }

    }

    // input = document.getElementById('mySearch');

        for (i = 0; i < filteredRoast.length; i++) {
        var coffee = coffees[i];
        // console.log(i);
        // console.log(input);
        console.log(filter);
        // if (coffee.name.toLowerCase().indexOf(filter)> -1){
        if (coffee.name.toLowerCase().search(filter) != -1){
            console.log(coffee.name);
            filteredCoffees.push(coffee);
        }

    } tbody.innerHTML = renderCoffees(filteredCoffees);
}

//     var input = document.querySelector('#mySearch');
//         var indexOfLetter = coffees.name.toLowerCase().indexOf(input.value.toLowerCase());
// //         if (coffees.name === input){
// //             return coffees[i].name;
// //         };
// //
// //     });
// coffees.forEach(function(){
//     if (indexOfLetter > -1) {
//
// //             if (indexOfLetter > -1) {
//
//                     filteredCoffees.push(coffee.name);
//
//
//
// //     // }
// //     // // coffees.forEach(function(coffee) {
// //     //     var indexOfLetter = coffee.name.toLowerCase().indexOf(input.value.toLowerCase());
// //     //     // filteredCoffees.push(coffee.find(input));
// //     //
// //     //     //         filteredCoffees.push(coffee);
// //         }});
document.getElementById("mySearch").addEventListener("keyup", searchCoffee);
document.getElementById('roast-selection').addEventListener('click', searchCoffee);
