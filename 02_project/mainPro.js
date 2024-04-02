console.log("Virendra Kumare");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'gray'){
            body.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.backgroundColor = e.target.id;
        }
    });
});
