// console.log("Virendra Kumare");
// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector('body');

// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click', function(e){
//         console.log(e);
//         console.log(e.target);
//         if(e.target.id === 'gray'){
//             body.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'white'){
//             body.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'blue'){
//             body.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'yellow'){
//             body.backgroundColor = e.target.id;
//         }
//     });
// });

// uper wala nhi likhna h

// console.log("Virendra Kumar");
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
// console.log(body);

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    });
});
