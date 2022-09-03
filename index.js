const jugadores = [
    {
        name: "Halaand",
        age: 21,
        position: "DEL",
        value: "75.000.000",
        image: "./img/Haaland.jpg"
    },
    {
        name: "Nkunku",
        age: 24,
        position: "DEL",
        value: "55.000.000",
        image: "./img/Nkunku.jpg"
    },
    {
        name: "Mbappe",
        age: 22,
        position: "DEL",
        value: "90.000.000",
        image: "./img/Mbappe.jpg"
    },
    {
        name: "Vlahovic",
        age: 22,
        position: "DEL",
        value: "60.000.000",
        image: "./img/Vlahovic.jpg"
    },
    {
        name: "Foden",
        age: 22,
        position: "MED",
        value: "70.000.000",
        image: "./img/Foden.jpg"
    },
    {
        name: "Pedri",
        age: 19,
        position: "MED",
        value: "70.000.000",
        image: "./img/Pedri.jpg"
    },
    {  
        name: "Mount",
        age: 23,
        position: "MED",
        value: "65.000.000",
        image: "./img/Mount.jpg"
    },
    {  
        name: "Elliot",
        age: 19,
        position: "MED",
        value: "50.000.000",
        image: "./img/Elliot.jpg"
    },
    {
        name: "koundé",
        age: 23,
        position: "DEF",
        value: "60.000.000",
        image: "./img/Kounde.jpg"
    },
    {
        name: "De ligt",
        age: 22,
        position: "DEF",
        value: "55.000.000",
        image: "./img/DeLigt.jpg"
    },
    {
        name: "Araujo",
        age: 23,
        position: "DEF",
        value: "60.000.000",
        image: "./img/Araujo.jpg"
    },
    {
        name: "Konaté",
        age: 23,
        position: "DEF",
        value: "60.000.000",
        image: "./img/Konate.jpg"
    },
    {
        name: "Allison",
        age: 29,
        position: "POR",
        value: "50.000.000",
        image: "./img/Allison.jpg"
    },
    {
        name: "Ederson",
        age: 28,
        position: "POR",
        value: "40.000.000",
        image: "./img/Ederson.jpg"
    },  
    {
        name: "Martinez",
        age: 29,
        position: "POR",
        value: "45.000.000",
        image: "./img/Dibu.jpg"
    },      
    {
        name: "Mendy",
        age: 30,
        position: "POR",
        value: "60.000.000",
        image: "./img/Mendy.jpg"
    }
    
]
// console.log(jugadores.slice());

// jugadores.forEach(element => console.log(jugadores));

    // var jug = jugadores.map(function(jugador) {
    //     return '<div class="card">' 
    //     + '<img class="card__img" src="'+ jugador.image  + '" >' +
    //     + '<h4>'+ jugador.name +'</h4>' +
    //     '</div>';
    // })



var jug = jugadores.map(function(jugador) {
    return `
    <div class="card"> 
    <img class="card__img" src="${jugador.image}" >
    <h4>${jugador.name}</h4>
    <span>Age:${jugador.age} </span>
    <span>Position:${jugador.position} </span>   
    <p class="value">Value: ${jugador.value} </p> 
    <button class="button">Add</button>
    </div>`;
})

document.getElementById("jug").innerHTML = jug;