const btns = document.querySelectorAll('.btn'); //Variabel, der finder alle elementer med klassen "btn". Tildeler en værdi som er nodelist

const stages = document.querySelectorAll(".stage"); //Variabel, der finder alle elementer med klassen "stage". Tildeler en værdi som er nodelist. Herfra kan man bruge index numrene til at fortælle hvilken scene der vises, og hvilken scene der skjules

const main = document.querySelector("main"); //forælder til .stage


console.log(btns);
console.log(stages);

//klik-funktion

const nextStage = (e) => { //e for event

    console.log(e.target.textContent); //e.target er det element, der udløste eventet, og textContent er den tekst, der er inde i det element. Så når en knap klikkes, vil det logge teksten på den knap.

    switch(e.target.textContent) {

        case "Start scenarie": //forside
            stages[0].classList.remove("active");
            stages[1].classList.add("active");
            break;


            //Scene 1/A/A1/A1A/A1B

        case "Jeg åbner linket for at få det overstået hurtigt": //Scene 1 - Scene A
            stages[1].classList.remove("active");
            stages[2].classList.add("active");
            break;

        case "Jeg logger ind, så jeg kan få afleveret hurtigt": //Scene A - Scene A1
            stages[2].classList.remove("active");
            stages[3].classList.add("active");
            break;

        case "Jeg prøver igen og logger ind igen": //Scene A1 - Scene A1A
            stages[3].classList.remove("active");
            stages[4].classList.add("active");
            break;
        
        case "Jeg går ind på Wiseflow og tjekker det derinde": //Scene A1 - Scene A1B
            stages[3].classList.remove("active");
            stages[5].classList.add("active");
            break;
        
        

            //Scene A/A2/A2A/A2B

        case "Jeg gennemgår lige siden, inden jeg logger ind": //Scene A - Scene A2
            stages[2].classList.remove("active");
            stages[6].classList.add("active");
            break;
        
        case "Jeg kontakter en underviser, for at være sikker": //Scene A2 - Scene A2A
            stages[6].classList.remove("active");
            stages[7].classList.add("active");
            break;

        case "Jeg prøver at logge ind for at se hvad der sker": //Scene A2 - Scene A2B
            stages[6].classList.remove("active");
            stages[8].classList.add("active");
            break;



            //Scene 1/B/B1/B2/B2A/B2AA/B2AB/B2B

        case "Jeg prøver selv at finde ud af det via Wiseflow": //Scene 1 - Scene B
            stages[1].classList.remove("active");
            stages[9].classList.add("active");
            break;

        case "Jeg lukker siden og ignorerer SMSen": //Scene B - Scene B1
            stages[9].classList.remove("active");
            stages[10].classList.add("active");
            break;

        case "Jeg går tilbage til SMSen": //Scene B - Scene B2
            stages[9].classList.remove("active");
            stages[11].classList.add("active");
            break;
        
        case "Jeg trykker på linket og logger ind": //Scene B2 - Scene B2A
            stages[11].classList.remove("active");
            stages[12].classList.add("active");
            break;

         case "Jeg prøver igen igen og logger ind igen": //Scene B2A - Scene B2AA
            stages[12].classList.remove("active");
            stages[13].classList.add("active");
            break;

        case "Jeg går ind på Wiseflow og tjekker det": //Scene B2A - Scene B2AB
            stages[12].classList.remove("active");
            stages[14].classList.add("active");
            break;

        case "Jeg kontakter en underviser": //Scene B2 - Scene B2B
            stages[11].classList.remove("active");
            stages[15].classList.add("active");
            break;

        

            //"Start igen" knap

        case "Start igen":
            stages.forEach(stage => stage.classList.remove("active"));
            stages[0].classList.add("active");
            break;


    }











} 



for(const btn of btns) {
    btn.addEventListener("click", nextStage);
} //Når den finder et element med klassen "btn", tilføjer den en event listener, der lytter efter et klik og derefter kalder funktionen "nextStage". Ved events bruger man ikke (), men ved alle andre funktioner bruges () for at kalde funktionen.
