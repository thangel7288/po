// let palabra = `"   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, veritatis ipsam minus itaque nam quisquam 
// aliquam minima ipsum harum dolor rum, quia cupiditate vero sit animi error. 
// Voluptates iusto numquam eveniet delectus, aperiam saepe explicabo deserunt non quo, enim vitae reiciendis repellat voluptatibus ea, 
// n dolor em. Quasi perferendis suscipit quos voluptate."`
 
// // let exprecion = /asd/gi;
// let exprecion = /error[1,3]/gi;
// console.log(exprecion.test(palabra));


let correo = "jfbecerra@sena.edu.co";

let exp = /[a-zA-Z0-9-_:]+@[a-zA-Z0-9-_:]+\.([a-zA-z]{2,4}){1,2}/;

console.log(exp.test(correo));

let show = function () { }

(function() { } )( 
    console.log("anonima")
    );

    (function(d, w, c) {
        console.log(d);
        
    })(document, window, console);