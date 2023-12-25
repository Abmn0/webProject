const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

/* İletişim Sayfası*/

const nameInput = document.querySelector("#name"); /*Verileri alma kısmı */
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");




function validateForm() {    
    clearMessages();
    let errorFlag = false;



    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Lütfen isminizi giriniz";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Lütfen mail adresinizi giriniz";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if (message.value.length < 1) {
        errorNodes[2].innerText = "Lütfen mesajınızı giriniz";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "Mesajınız Başarıyla Gönderildi"

        setTimeout(function () {
            alert("Mesajınız Başarıyla Gönderildi");
        }, .1);
        for (let i = 0; i < 3; i++) {
            label.text = "";
        }
    }

}

function clearMessages() {   

    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email) {  /*Email doğruluğu kontrol kısmı */
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

/* Email fonksiyonunu ve message sil fonksiyonunu ortak kullanıyoruz */



function validateFormSurvey() {    /* Verileri doğrulama kısmı*/
    clearMessages();
    let errorFlag = false;


    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Lütfen isminizi ve soyisminizi giriniz";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Lütfen mail adresinizi giriniz";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if (!radioGroupIsValid("designRating")) {

        errorNodes[2].innerText = "Lütfen tasarım değerlendirmenizi seçiniz";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!radioGroupIsValid("easeOfUse")) {

        errorNodes[3].innerText = "Lütfen sitede dolaşırken zorlandınız mı seçiniz";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!radioGroupIsValid("graphicsSatisfaction")) {

        errorNodes[4].innerText = "Lütfen görsellerimizin yeterliliğini değerlendiriniz";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (message.value.length < 1) {
        errorNodes[5].innerText = "Lütfen mesajınızı giriniz";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "Anket Başarıyla Gönderildi"

        setTimeout(function () {
            alert("Bizi Değerlendirdiğiniz İçin Teşekkür Ederiz, Mesai Saatlerimiz İçinde Mağazamıza Gelerek Sürpriz Hediyenizi Talep Edebilirsiniz");
        }, .1);
        for (let i = 0; i < 3; i++) {
            label.text = "";
        }
    }

}
function radioGroupIsValid(designRating) {
    const radioButtons = document.getElementsByName(designRating);

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            return true; // En az bir tanesi işaretlenmişse true döndür
        }
    }

    return false; // Hiçbiri işaretlenmemişse false döndür
}




function saatKontrol() {
    // Anlık tarih ve saat bilgisini al
    var anlikSaat = new Date();

    // İşletme açılış ve kapanış saatleri
    var acilisSaat = 7; // Sabah 7:00
    var kapanisSaat = 18; // Akşam 19:00

    // İşletme durumunu kontrol et
    var isletmeAcik = anlikSaat.getHours() >= acilisSaat && anlikSaat.getHours() < kapanisSaat;

    // Anlık saati göster
    var saatElementi = document.getElementById('saat');
    saatElementi.innerHTML = 'Anlık Saat: ' + anlikSaat.toLocaleTimeString();

    var durumElementi = document.getElementById('durum');
    durumElementi.style.background = 'white';
    durumElementi.style.width = '150px';
    if (isletmeAcik) {
        durumElementi.innerHTML = 'İşletmemiz Açık';
        durumElementi.style.color = 'green'; 
    } else {
        durumElementi.innerHTML = 'İşletmemiz Kapalı';
        durumElementi.style.color = 'red'; 
    }
}


window.onload = function () {
    setInterval(saatKontrol, 1000);
};