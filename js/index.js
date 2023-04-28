window.addEventListener("DOMContentLoaded", () => {

    let arrowRight = document.querySelector(".arrow-right"),
        arrowLeft = document.querySelector(".arrow-left"),
        cards = document.querySelector(".cards"),
        counter = 184;

    arrowRight.addEventListener("click", (e) => {
        let scrollLeftNow = cards.scrollLeft;
        scrollLeftNow += counter;
        cards.scrollLeft = scrollLeftNow;
    }, false);

    arrowLeft.addEventListener("click", (e) => {
        let scrollLeftNow = cards.scrollLeft;
        scrollLeftNow -= counter;
        cards.scrollLeft = scrollLeftNow;
    }, false);

let characters = {
    jonSnow : "https://anapioficeandfire.com/api/characters/583",
    syrioForel : "https://anapioficeandfire.com/api/characters/1979",
    lyannaStark : "https://anapioficeandfire.com/api/characters/1650",
    sansaStark : "https://anapioficeandfire.com/api/characters/957",
    rickonStark : "https://anapioficeandfire.com/api/characters/891",
    eddardStark : "https://anapioficeandfire.com/api/characters/339",
    catelynStark : "https://anapioficeandfire.com/api/characters/232",
    brienneOfTarth : "https://anapioficeandfire.com/api/characters/216",
    brandonStark : "https://anapioficeandfire.com/api/characters/208",
    aryaStark : "https://anapioficeandfire.com/api/characters/148",
    tywinLannister : "https://anapioficeandfire.com/api/characters/27",
    cerseiLannister : "https://anapioficeandfire.com/api/characters/238",
    jaimeLannister : "https://anapioficeandfire.com/api/characters/529",
    sandorClegane : "https://anapioficeandfire.com/api/characters/955",
    gregorClegane : "https://anapioficeandfire.com/api/characters/1442",
    tyrionLannister : "https://anapioficeandfire.com/api/characters/1052",
    daenerysTargaryen : "https://anapioficeandfire.com/api/characters/1303",
    jorahMormont : "https://anapioficeandfire.com/api/characters/1560",
    missandei : "https://anapioficeandfire.com/api/characters/1709",
    petyrBaelish : "https://www.anapioficeandfire.com/api/characters/823",

    dStark : "https://anapioficeandfire.com/api/houses/362",
    dMartell : "https://anapioficeandfire.com/api/houses/285",
    dLannister : "https://anapioficeandfire.com/api/houses/229",
    dTargaryen : "https://anapioficeandfire.com/api/houses/378",
    dBaratheon : "https://anapioficeandfire.com/api/houses/17"

}

let req = async function (url){
    let data = await fetch (url);
    return data.json();
}

let info = document.querySelector(".info"),
    loader = document.querySelector(".loader"),
    [...card] = document.querySelectorAll(".card");

card.forEach((card) =>{
    card.addEventListener("click", () =>{

        let [...cardCheked] = document.querySelectorAll(".card");
            cardCheked.forEach((cardChekedOne) =>{
                cardChekedOne.classList.remove("cardActive");
        });

        card.classList.add("cardActive");
        loader.classList.remove("hide");
        info.classList.add("infoShow");
            switch (card.dataset.person){
            case "jonSnow" : req(characters.jonSnow)
                            .then((data) => show(data))
                            .catch(error => console.error(error));
            break
            case "syrioForel" : req(characters.syrioForel)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "lyannaStark" : req(characters.lyannaStark)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "sansaStark" : req(characters.sansaStark)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "rickonStark" : req(characters.rickonStark)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "eddardStark" : req(characters.eddardStark)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "catelynStark" : req(characters.catelynStark)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "brienneOfTarth" : req(characters.brienneOfTarth)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "brandonStark" : req(characters.brandonStark)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "tywinLannister" : req(characters.tywinLannister)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "aryaStark" : req(characters.aryaStark)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "cerseiLannister" : req(characters.cerseiLannister)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "jaimeLannister" : req(characters.jaimeLannister)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "sandorClegane" : req(characters.sandorClegane)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "gregorClegane" : req(characters.gregorClegane)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "tyrionLannister" : req(characters.tyrionLannister)
                                .then((data) => show(data))
                                .catch(error => console.error(error));
            break
            case "daenerysTargaryen" : req(characters.daenerysTargaryen)
                                    .then((data) => show(data))
                                    .catch(error => console.error(error));
            break
            case "jorahMormont" : req(characters.jorahMormont)
                                    .then((data) => show(data))
                                    .catch(error => console.error(error));
            break
            case "missandei" : req(characters.missandei)
                                    .then((data) => show(data))
                                    .catch(error => console.error(error));
            break
            case "petyrBaelish" : req(characters.petyrBaelish)
                                    .then((data) => show(data))
                                    .catch(error => console.error(error));
            break
            default : console.error("error");
        }
    });
});

let personName = document.querySelector(".personName"),
    personBorn = document.querySelector(".personBorn"),
    personActor = document.querySelector(".personActor"),
    personCulture = document.querySelector(".personCulture"),
    personGender = document.querySelector(".personGender"),
    personTitle = document.querySelector(".personTitle"),
    personAliases = document.querySelector(".personAliases");

function show (data){
    loader.classList.add("hide");
    info.classList.remove("infoShow");

    personName.textContent = personBorn.textContent = personActor.textContent = personCulture.textContent = personGender.textContent = personTitle.textContent = personAliases.textContent = "";
    personName.textContent = data.name;
    personBorn.textContent = data.born;

    (function(){
        if(Array.isArray(data.playedBy)){
            data.playedBy.forEach((item) => {
                personActor.innerHTML += `<p>${item}</p>`;
            })
        }
    })();

    personCulture.textContent = data.culture;
    personGender.textContent = data.gender;

    (function(){
        if(Array.isArray(data.titles)){
            data.titles.forEach((item) => {
                personTitle.innerHTML += `<p>${item}</p>`;
            })
        }
    })();

    (function(){
        if(Array.isArray(data.aliases)){
            data.aliases.forEach((item) => {
                personAliases.innerHTML += `<p>${item}</p>`;
            })
        }
    })();
}

}, false);