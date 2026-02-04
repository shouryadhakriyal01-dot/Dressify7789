function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Sab fields bharo");
        return;
    }

    let user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful 🎉");
    window.location.href = "login.html";
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Account nahi mila");
        return;
    }

    if (email === user.email && password === user.password) {
        alert("Login successful ✅");
        window.location.href = "index.html";
    } else {
        alert("Wrong email or password ❌");
    }
}