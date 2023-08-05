/*function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value ,
    };
    const serviceID = "service_c5ui81f";
    const templateID = "template_qs13y7f";

    emailjs
        .sendForm(serviceID, templateID, params)
        .then(function (res) {
            alert("Your message sent successfully");
        })
        .catch((err) => console.log(err));
}

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "3kBxsX7tiVRIF-ajY";
const serviceID = "service_c5ui81f";
const templateID = "template_qs13y7f";

emailjs.init("3kBxsX7tiVRIF-ajY");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }
    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
        }, (error) => {
            console.log(error);
        });
});*/