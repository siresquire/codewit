let app = new App()

let a = app.add(2,3)
console.log(a);

let b = app.sub(5,2)
console.log(b);

let name = app.displayName('Aminu')
console.log(name);



var ref = document.getElementById('app')
//ref.innerHTML = '<h1>Hello</h1>'
//ref.innerHTML = '<input type="text" placeholder="Username">'
//ref.innerHTML = `
//    <h1>Login Here</h1>
//    <input type="text" placeholder="Username"><br><br>
//    <input type="password" placeholder="Password"><br><br>
//    <button>Login</button>
//`
let template = new Template()
ref.innerHTML = template.loginView()

let loginButton = document.getElementById('login')
console.log(loginButton);
loginButton.addEventListener('click', function (){
    ref.innerHTML = template.dashboard
})




