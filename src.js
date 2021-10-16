
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

    },
    de: {
        Nav2: "Projekte",
        Nav3: "Neues",
        Title1: "Hallo,",
        Text1: "Du wunderst dich gerade wahrscheinlich wo du bist. Keine Panik! <br> <br> Du bist auf lchsd.ch ein Ort an welchem alle (oder wenigstens die meisten) meine Programmier Projekte einen Platz zum verweilen finden. Die meisten sind Lern Apps, welche dir bei helfen können. Falls ich dich nun neugierig gemacht habe, darfst du gerne alle Projekte im Projekts Folder besuchen gehen, oder nicht ist deine wahl!"
    }
}


if (window.location.hash) {
    if (window.location.hash === "#de") {
        Nav2.textContent = language.de.Nav2;
        Nav3.textContent = language.de.Nav3;
        Title1.textContent = language.de.Title1;
        Text1.innerHTML = language.de.Text1;
    }
}


