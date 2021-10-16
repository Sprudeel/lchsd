
if(window.location.hash === "#en") {
    document.getElementById(100).style.display='none';
} else if(window.location.hash === "#de") {
    document.getElementById(101).style.display='none';
} else {
    document.getElementById(100).style.display='none';
}


function reload(lang) {
    
    if(lang === 1) {
        window.location.href = "#en";
    } else if (lang === 2) {
        window.location.href = "#de";
    }

    window.location.reload(true);
}


var language = {
    en: {
        Nav2: "Projects",
        Nav3: "Updates",
        Title1: "Hello,",
        Text1: "You’re probably wondering where you are. Don’t Panic! <br> <br> You’re on lchsd.ch a place where all (at least the majority) of my Projects find a place to be. Most of them are learning apps which can help you in your Studies. If I’ve made you curious, you’re welcome to visit them in the Projects folder, Or don’t It’s your choice!",
        Title2: "Who I am",
        Text2: "I don’t like to share much of my life on the Internet because I don't want everyone to know who I am. Just know one thing: <br><br> <b>If you don’t know who I am, you’re not supposed to.</b>",
        Title3: "About the Website,",
        Text3: "This Website is just plain Vanilla HTML, CSS and Javascript mostly handcoded and hostet by the nice People over at Hostpoint. The entire Source Code is available on my GitHub! <br><br> If you have further Questions please contact me via E-Mail: <b>info@lchsd.ch</b>",
    },
    de: {
        Nav2: "Projekte",
        Nav3: "Neues",
        Title1: "Hallo,",
        Text1: "Du wunderst dich gerade wahrscheinlich wo du bist. Keine Panik! <br> <br> Du bist auf lchsd.ch ein Ort an welchem alle (oder wenigstens die meisten) meine Programmier Projekte einen Platz zum verweilen finden. Die meisten sind Lern Apps, welche dir bei helfen können. Falls ich dich nun neugierig gemacht habe, darfst du gerne alle Projekte im Projekt Folder besuchen gehen, oder nicht ist deine wahl!",
        Title2: "Wer ich bin",
        Text2: "Ich mag es nicht, viel über mein Privat Leben im Netz zu posten, da ich nicht will, dass alle wissen wer ich bin. Merk dich einfach eins: <br><br> <b>Wenn du nicht weisst wer ich bin, dann musst du es auch nicht unbedingt wissen.</b>",
        Title3: "Über diese Website,",
        Text3: "Diese Seite ist normales HTML, CSS und Javascript, der meiste teil davon selbst geschrieben und wird von Hostpoint gehostet. Der ganze Source Code findest du auf GitHub! <br><br> Falls du noch weitere Fragen hast, kannst du mich via E-Mail erreichen:  <b>info@lchsd.ch</b>",
    }
}


if (window.location.hash) {
    if (window.location.hash === "#de") {
        Nav2.textContent = language.de.Nav2;
        Nav3.textContent = language.de.Nav3;
        Title1.textContent = language.de.Title1;
        Text1.innerHTML = language.de.Text1;
        Title2.textContent = language.de.Title2;
        Text2.innerHTML = language.de.Text2;
        Title3.textContent = language.de.Title3;
        Text3.innerHTML = language.de.Text3;
    }
}


