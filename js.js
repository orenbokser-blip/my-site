const form = document.querySelector("#submitBtn");

form.addEventListener("click", function(e) {
    e.preventDefault(); 
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const age = document.querySelector("#age").value;
    const tel = document.querySelector("#tel").value;
    const message = document.querySelector("#message").value;

    if(username.length < 3){
        document.querySelector("#username").style.border = "2px solid red"
        alert("השם לא יכול להיות פחות מ3 תווים!")
        return
    }
    else{
        document.querySelector("#username").style.border = "2px solid black"
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("כתובת אימייל לא חוקית");
        document.querySelector("#email").style.border = "2px solid red"
        return
    }
    else{
        document.querySelector("#email").style.border = "2px solid black"
    }

    if(age > 120 || age < 1){
        alert("הגיל לא יכול להיות קטן מ1 או יותר גדול מ120")
        document.querySelector("#age").style.border = "2px solid red"
        return
    }
    else{
        document.querySelector("#age").style.border = "2px solid black"
    }

    const isNum = /^\d+$/;
    if (!isNum.test(tel) || tel.length < 10){
        alert("מספר טלפון לא תקין!")
        document.querySelector("#tel").style.border = "2px solid red"
        return
    }
    else{
        document.querySelector("#tel").style.border = "2px solid black"
    }
    
    if(message.length < 10){
        alert("ההודעה לא יכולה להיות פחות מ10 אותיות")
        document.querySelector("#message").style.border = "2px solid red"
        return
    }
    else{
        document.querySelector("#message").style.border = "2px solid black"
    }

    fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name: username, 
            email: email, 
            age: age, 
            phonenumber: tel, 
            message: message 
        })
    })
    .then(res => res.text())
    .then(data => {
        console.log(username)
        console.log(email)    
        console.log(age)
        console.log(tel)
        console.log(message)
        alert("הנתונים נשלחו בהצלחה! תשובת השרת: " + data);
    })
    .catch(err => {
        console.error("שגיאה בשליחה:", err);
        alert("קרתה שגיאה בשליחת הנתונים לשרת.");
    });
})
