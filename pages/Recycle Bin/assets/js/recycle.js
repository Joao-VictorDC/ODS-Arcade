const lixeiras = [
    {   name:'Verde',
        type:'vidro'
        },

    {   name:'Amarelo',
        type:'metal'
        },

    {   name:'Azul',
        type:'papel'
        },

    { name:'Vermelho',
        type:'plastico'
        },

    { name:'Marrom',
        type:'organico'
        }

];
let lixos =  [];

/* 
Cach Element by 

document.addEventListener('click', (e) => {
    const check = e.target;

    
    if (check.classList.contains("help")) {
        console.log(true)
    } else {
        console.log(false)
    }
});

*/

function createTrash (){
    let trashNumers = 5 + getRandomInt(4);
    const typeOfTrash = ['vidro', 'plastico', 'papel', 'metal', 'organico']

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }