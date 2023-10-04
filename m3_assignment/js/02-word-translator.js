function langSelect(langCode) {
    if (langCode == "es") {
        console.log("Hello World tranlated into Spanish is: Hola Mundo.");
        document.write("<p>Hello World tranlated into Spanish is: Hola Mundo.</p>");
    } else if (langCode == "de") {
        console.log("Hello World tranlated into German is: Hallo Welt.");
        document.write("<p>Hello World tranlated into German is: Hallo Welt.</p>");
    } else if (langCode == "en") {
        console.log("Hello World tranlated into British English is: Top of the morning!");
        document.write("<p>Hello World tranlated into British English is: Top of the morning!</p>");
    } else if (langCode == "fr") {
        console.log("Hello World tranlated into French is: Bonjour le monde.");
        document.write("<p>Hello World tranlated into French is: Bonjour le monde.</p>");
    } else {
        console.log("Hello World tranlated into American English is: Sup, Dude?");
        document.write("<p>Hello World tranlated into American English is: Sup, Dude?</p>");
    }
}

let langInput = prompt("Choose a language (enter 'es', 'de', 'fr', or 'en')");

langSelect(langInput);