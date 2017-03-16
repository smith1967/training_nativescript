const Observable = require("data/observable").Observable;
const frameModule = require("ui/frame");
var page;
var email;
let password;
let user = new Observable({
    // email: "user@domain.com",
    // password: "password",
    email: "",
    password: "",
});

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
};

exports.checkLogin = () => {
    fetch('http://192.168.8.179:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: user.email,
            pass: user.password,
        })
    }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log('Ok');
        console.dump(data);
    }).catch((err) => {
        console.log('error');
    })
    console.log('test');
};

// exports.signIn = function() {
//     email = page.getViewById("email");
//     console.log(email.text);
//     // setTimeout(function(){ 
//     //     email.text = 'user@domain.com' ; 
//     // }, 5000);
//     // setTimeout(() => { 
//     //     email.text = 'user@domain.com' ; 
//     // }, 5000);

// };

exports.gotoRegister = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};

