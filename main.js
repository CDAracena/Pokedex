let deliBirdApi = "http://pokeapi.co/api/v2/pokemon/225/";

let squirtleApi = "http://pokeapi.co/api/v2/pokemon/7/";

let loudredAPI = "http://pokeapi.co/api/v2/pokemon/294/";

let delibirdIntro = document.querySelector('.deliBirdGif');


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
    document.querySelector('.deliTalk').classList.add('col-lg-8');


    let delibird = new Pokemon(response);

    console.log(delibird.defense)

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

    document.querySelector('.deliStats').innerHTML = delibird.defense;


  })
})



// axios.get(squirtleApi)
// .then (function(response){
//   console.log(response);
// })
//
// axios.get(loudredAPI)
// .then (function(response){
//   console.log(response);
// })
