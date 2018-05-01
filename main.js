let deliBirdApi = "http://pokeapi.co/api/v2/pokemon/225/";

let squirtleApi = "http://pokeapi.co/api/v2/pokemon/7/";

let loudredAPI = "http://pokeapi.co/api/v2/pokemon/294/";

let delibirdIntro = document.querySelector('.deliBirdGif');

let squirtleIntro = document.querySelector('.squirtleGif');

let loudredIntro = document.querySelector('.loudredGif');

let pokeBallIntro = document.querySelector('.myPokeBall');

let searchTask = document.querySelector('input');

searchTask.addEventListener('keyup', function(){
  if(searchTask.value === "delibird" || searchTask.value === "Delibird") {
    alert('Delibird Type:Ice & Flying')
  } else if (searchTask.value === "squirtle" || searchTask.value === "Squirtle") {
    alert('Squirtle Type: Water')
  } else if (searchTask.value === "loudred" || searchTask.value === "Loudred") {
    alert('Loudred Type: Normal')
  } else if (searchTask.value === "kiko" || searchTask.value === "Kiko") {
    alert("Kiko's Pokemons: Delibird, Squirtle & Loudred");
  }
})

pokeBallIntro.addEventListener('click', function(){
  document.querySelector('.DeliContainer').style.visibility="visible";
  document.querySelector('.SquirtleContainer').style.visibility="visible";
  document.querySelector('.LoudredContainer').style.visibility="visible";
  document.querySelector('.DeliContainer').classList.add('loadCharacters');
  document.querySelector('.SquirtleContainer').classList.add('loadCharacters');
  document.querySelector('.LoudredContainer').classList.add('loadCharacters');
  pokeBallIntro.style.display="none";
})

class Pokemon {
  constructor(response) {
    this.hp = response.data.stats[5].base_stat;
    this.attack = response.data.stats[4].base_stat;
    this.defense = response.data.stats[3].base_stat;
    this.abilities = response.data.abilities;
  }
}

delibirdIntro.addEventListener('click',function(){

  axios.get(deliBirdApi)
  .then(function(response) {
    console.log(response);

    document.querySelector('.deliTalk').innerText = "Nice to meet you! What would you like to know?"
    document.querySelector('.deliTalk').classList.remove('col-lg-4');
    document.querySelector('.deliTalk').classList.add('col-lg-6');


    let delibird = new Pokemon(response);


    let deliSelect = document.createElement("select");

    let deliInput1 = document.createElement("option");
    deliInput1.value = "HP";

    let deliInput2 = document.createElement("option");
    deliInput2.value = "ATK";

    let deliInput3 = document.createElement("option");
    deliInput3.value = "DEF";

    let deliInput4 = document.createElement("option");
    deliInput4.value = "ABILITIES";

    let deliHp = document.createTextNode("HP");
    let deliAtk = document.createTextNode("ATK");
    let deliDef = document.createTextNode("DEF");
    let deliAbi = document.createTextNode("ABILITIES");

    document.querySelector('.deliTalk').appendChild(deliSelect);
    deliSelect.appendChild(deliInput1);
    deliSelect.appendChild(deliInput2);
    deliSelect.appendChild(deliInput3);
    deliSelect.appendChild(deliInput4);
    deliInput1.appendChild(deliHp);
    deliInput2.appendChild(deliAtk);
    deliInput3.appendChild(deliDef);
    deliInput4.appendChild(deliAbi);

      deliSelect.addEventListener('change', function(){
        if (deliSelect.value === "HP") {
          document.querySelector('.deliStats').style.backgroundColor="white";
          document.querySelector('.deliStats').innerText="My HP is: " + delibird.hp;
        } else if (deliSelect.value ==="ATK") {
          document.querySelector('.deliStats').style.backgroundColor="white";
          document.querySelector('.deliStats').innerText = "My Attack level: " + delibird.attack;
        } else if (deliSelect.value === "DEF") {
          document.querySelector('.deliStats').style.backgroundColor="white";
          document.querySelector('.deliStats').innerText = "My defense level: " + delibird.defense;
        } else if (deliSelect.value === "ABILITIES") {
          document.querySelector('.deliStats').style.backgroundColor="white";
          let abilityArr = delibird.abilities;
          let text=[""];
          for (let i = 0; i < abilityArr.length; i++) {
            text += abilityArr[i].ability.name + "<br>";
          document.querySelector('.deliStats').innerHTML = "My abilities are: " + text;
        }
      }
     })

  })
})


squirtleIntro.addEventListener('click', function(){


 axios.get(squirtleApi)
 .then (function(response){
   console.log(response);

   document.querySelector('.squirtleTalk').innerText = "Nice to meet you! What would you like to know?"
   document.querySelector('.squirtleTalk').classList.remove('col-lg-4');
   document.querySelector('.squirtleTalk').classList.add('col-lg-8');

   let squirtle = new Pokemon(response);
   let squirtleSelect = document.createElement("select");
   squirtleSelect.classList.add('squirtleSelects');

   let squirtleInput1 = document.createElement("option");
   squirtleInput1.value = "HP";

   let squirtleInput2 = document.createElement("option");
   squirtleInput2.value = "ATK";

   let squirtleInput3 = document.createElement("option");
   squirtleInput3.value = "DEF";

   let squirtleInput4 = document.createElement("option");
   squirtleInput4.value = "ABILITIES";

   let squirtleHp = document.createTextNode("HP");
   let squirtleAtk = document.createTextNode("ATK");
   let squirtleDef = document.createTextNode("DEF");
   let squirtleAbi = document.createTextNode("ABILITIES");

   document.querySelector('.squirtleTalk').appendChild(squirtleSelect);
   squirtleSelect.appendChild(squirtleInput1);
   squirtleSelect.appendChild(squirtleInput2);
   squirtleSelect.appendChild(squirtleInput3);
   squirtleSelect.appendChild(squirtleInput4);
   squirtleInput1.appendChild(squirtleHp);
   squirtleInput2.appendChild(squirtleAtk);
   squirtleInput3.appendChild(squirtleDef);
   squirtleInput4.appendChild(squirtleAbi);
//
     squirtleSelect.addEventListener('change', function(){
       if (squirtleSelect.value === "HP") {
         document.querySelector('.squirtleStats').style.backgroundColor="white";
         document.querySelector('.squirtleStats').innerText="My HP is: " + squirtle.hp;
       } else if (squirtleSelect.value ==="ATK") {
         document.querySelector('.squirtleStats').style.backgroundColor="white";
         document.querySelector('.squirtleStats').innerText = "My Attack level: " + squirtle.attack;
       } else if (squirtleSelect.value === "DEF") {
         document.querySelector('.squirtleStats').style.backgroundColor="white";
         document.querySelector('.squirtleStats').innerText = "My defense level: " + squirtle.defense;
       } else if (squirtleSelect.value === "ABILITIES") {
         document.querySelector('.squirtleStats').style.backgroundColor="white";
         let abilityArr = squirtle.abilities;
         let text=[""];
         for (let i = 0; i < abilityArr.length; i++) {
           text += abilityArr[i].ability.name + "<br>";
         document.querySelector('.squirtleStats').innerHTML = "My abilities are: " + text;
       }
       }
    })
 })

})

loudredIntro.addEventListener('click', function(){
  axios.get(loudredAPI)
  .then (function(response){
    console.log(response);

    document.querySelector('.loudredTalk').innerText = "Eh....I guess I can tell ya...make it fast!!"
    document.querySelector('.loudredTalk').classList.remove('col-lg-4');
    document.querySelector('.loudredTalk').classList.add('col-lg-8');

    let loudred = new Pokemon(response);
    let loudredSelect = document.createElement("select");
    loudredSelect.classList.add('loudredSelects');

    let loudredInput1 = document.createElement("option");
    loudredInput1.value = "HP";

    let loudredInput2 = document.createElement("option");
    loudredInput2.value = "ATK";

    let loudredInput3 = document.createElement("option");
    loudredInput3.value = "DEF";

    let loudredInput4 = document.createElement("option");
    loudredInput4.value = "ABILITIES";

    let loudredHp = document.createTextNode("HP");
    let loudredAtk = document.createTextNode("ATK");
    let loudredDef = document.createTextNode("DEF");
    let loudredAbi = document.createTextNode("ABILITIES");

    document.querySelector('.loudredTalk').appendChild(loudredSelect);
    loudredSelect.appendChild(loudredInput1);
    loudredSelect.appendChild(loudredInput2);
    loudredSelect.appendChild(loudredInput3);
    loudredSelect.appendChild(loudredInput4);
    loudredInput1.appendChild(loudredHp);
    loudredInput2.appendChild(loudredAtk);
    loudredInput3.appendChild(loudredDef);
    loudredInput4.appendChild(loudredAbi);

    loudredSelect.addEventListener('change', function(){
      if (loudredSelect.value === "HP") {
        document.querySelector('.loudredStats').style.backgroundColor="white";
        document.querySelector('.loudredStats').innerText="My HP is: " + loudred.hp;
      } else if (loudredSelect.value ==="ATK") {
        document.querySelector('.loudredStats').style.backgroundColor="white";
        document.querySelector('.loudredStats').innerText = "My Attack level: " + loudred.attack;
      } else if (loudredSelect.value === "DEF") {
        document.querySelector('.loudredStats').style.backgroundColor="white";
        document.querySelector('.loudredStats').innerText = "My defense level: " + loudred.defense;
      } else if (loudredSelect.value === "ABILITIES") {
        document.querySelector('.loudredStats').style.backgroundColor="white";
        let abilityArr = loudred.abilities;
        let text=[""];
        for (let i = 0; i < abilityArr.length; i++) {
          text += abilityArr[i].ability.name + "<br>";
        document.querySelector('.loudredStats').innerHTML = "My abilities are: " + text;
      }
      }
   })

 })
})
