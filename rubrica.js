
let indic = 0;
let indice = 0;
function save() {
  indic++;
  let tel = document.getElementById("tel");
  let cardSparisci = document.getElementById("cardSparisci");
  let cita = document.getElementById("cita");
  let nome = document.getElementById("nome");
  let cogn = document.getElementById("cogn");
  let inputLL = document.getElementById("kakaa2");
  let imgLL = document.getElementById("kaka");
  imgLL.src = inputLL.value;
  save2();
 
  function save2() {
    indice++;
    let tel = document.getElementById("tel");
    let baby = document.getElementById("baby");
    let email = document.getElementById("email");
    let cita = document.getElementById("cita");
    let note = document.getElementById("NOTE");
    let nome = document.getElementById("nome");
    let cogn = document.getElementById("cogn");
    let inputLL = document.getElementById("kakaa2");
    let imgLL = document.getElementById("kaka");
    imgLL.src = inputLL.value;

    baby.innerHTML += ` 
    <div id="xbox">
    <div  id="${indice}"   class="baby">
    <div id="baby" class="baby2">
   <div class="profile">
       <h2 class="babo">${cogn.value} ${nome.value}</h2>
       <img  id="ben" style="border-radius:100% ; border: 2px solid #23232399;object-fit: cover;" src="${imgLL.src}"
           width="170px" height="170px" alt="">
       <div style="display: flex; margin-top: 10px;">
           <button class="call">Call</button>
           <button class="message">Message</button>
       </div>
       <div
           style="display: flex; justify-content: center;flex-direction: column; margin-top: 10px; width: 100%; margin-left: 15px">
           <h6 style="margin: 0px; padding: 5px 0px;">Tel: ${tel.value}</h6>
           <h6 style="margin: 0px; padding: 5px 0px;">Email: ${email.value}</h6>
           <h6 style="margin: 0px; padding: 5px 0px;">Cita: ${cita.value}</h6>
       </div>
       <h6 style="color: #2d313a; "><strong>Note</strong>:</h6>
       <div class="note">
       <p type="text" style="color: #2d313a;  ;padding: 0px;">${note.value}
       </p>
       </div>
       <button onclick="hideImperatore2(),hideImperatore()"  style="color: black;border: none; border: 1px solid black;">Edit</button>
       </div>
       </div> 
       </div>
 </div>
    `;
    baby.innerHTML += `
   <div id="xaxa" 
        <div  id="${indice}" style="display: none;"   class="baby">
        <div id="baby" class="baby2">
       <div class="profile">
           <h2 class="babo">
           <input style=" width: 120px;  " placeholder="${nome.value}" id="nome"  type="text" name="Nome">
           <input style=" width: 120px; " placeholder="${cogn.value}" id="cogn"  type="text" name="Cognome"></h2>
           <img  id="ben" style="border-radius:100% ; border: 2px solid #23232399;object-fit: cover;" src="${imgLL.src}"
               width="170px" height="170px" alt="">
           <div style="display: flex; margin-top: 10px;">
               <button class="call">Call</button>
               <button class="message">Message</button>
           </div>
           <div
               style="display: flex; justify-content: center;flex-direction: column; margin-top: 10px; width: 100%; margin-left: 15px">
               <h6 style="margin: 0px; padding: 5px 0px;">Tel: 
               <input style=" width: 239px; " placeholder="${tel.value}" id="tel"  type="text" name="Tel">
               </h6>
               <h6 style="margin: 0px; padding: 5px 0px;">Email: 
               <input style=" width: 188px; " placeholder="${email.value}" id="email"  type="text" name="Email">
               </h6>
               <h6 style="margin: 0px; padding: 5px 0px;">Cita:
                <input style=" width: 200px; " placeholder="${cita.value}" id="cita"  type="text" name="Cita">
                </h6>
           </div>
           <h6 style="color: #2d313a; "><strong>Note</strong>:</h6>
               <div class="note">
                  <textarea placeholder="${note.value}" id="NOTE" type="text"
             style="color: #2d313a; background-color: rgba(255, 255, 255, 0);height: 80px;width: 100%; resize: none;"></textarea>
                 
           <button onclick="amet()" style="color: black;border: none; border: 1px solid black;margin:0px;position: relative;left: 80px;">Save</button>
               </div>
       </div>
      </div> 
      </div>
   </div>
`;
  }

  cardSparisci.innerHTML += `
  <div onclick="Mondo()" id="BOU${indice}" class="card2"  >
 <div onclick="Mondo()" class="tombola">
    <a class="ttt" onclick="Mondo()" href="#${indic}"><span class="cat" >${cogn.value }</span><span class="cat"> ${nome.value}</span></a>
 </div>
<div style="width: 100%;height: 100%;" onclick="sparizione3(),Mondo()">
    <img onclick="Mondo()" id="kaka2" class="imgCard2" src="${
      document.getElementById("kakaa2").value
    }" alt="">
        <div style="margin-right: 190px;">
          <div class="name"> 
         
          </div>
          <p class="pCard2"> ${cita.value}</p> 
        </div>
        <h3 class="h3Card2"> ${tel.value}</h3>
        
       <button id="esJ" class="Esc"> <i  onclick="removeDivs(this)"   id="esc${indice}" class="bi bi-x-circle"></i></button>
</div>
      </div>
    `;
    
  
    alert("Contatto aggiunto con successo");
  clearInputs();
  bab();
  function bab() {
    const kol = document.getElementById("poter");
    kol.innerHTML = `<img id="kaka" class="imgCardL" src="./A/person_circle_icon_159926.png" alt="">`;
  }
  toggleDisplay(cardSparisci, test);

  
  }









  function nascondiDiv(id) {
    let divs = document.querySelectorAll(`[id="${id}"]`);
    divs.forEach(function(div) {
      if (div.style.display === "none") {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  }
  
  function hideImperatore() {
    let element = document.getElementById('xaxa');
    if (element) {
      element.style.display = 'block';
    }
  }
  let ko=0
  function hideImperatore2() {

    let element = document.getElementById('xbox');
    if (element) {
      element.style.display = 'none';
    }
  }
  
  
  

function clearInputs() {
  ["tel", "cita", "nome", "cogn", "kakaa2","email","NOTE"].forEach(
    (id) => (document.getElementById(id).value = "")
  );
}

function setImg2() {
  var img2 = document.getElementById("kaka");
  if (input2.value) {
    img2.src = input2.value;
    clearInputs2();
    function clearInputs2() {
      img2.src = "./A/person_circle_icon_159926.png";
    }
  }
}

function show() {
  var input = document.getElementById("kakaa2");
  var img = document.getElementById("kaka");
  img.src = input.value;
}

function toggleDisplay(elem1, elem2) {
  if (elem1.style.display === "none") {
    elem1.style.display = "block";
    elem2.style.display = "none";
  } else {
    elem1.style.display = "none";
    elem2.style.display = "flex";
  }
}

function sparizione() {
  let AllContact1 = document.getElementById("cardSparisci");
  let Allcontact2 = document.getElementById("test");
  let baby = document.getElementById("baby");

  if (AllContact1.style.display === "none") {
    AllContact1.style.display = "block";
    Allcontact2.style.display = "none";
    baby.style.display = "none";
  } else {
    baby.style.display = "none";
    AllContact1.style.display = "none";
    Allcontact2.style.display = "flex";
  }
}

function sparizione3() {
  let baby = document.getElementById("baby");
  if (baby.style.display === "none") {
    baby.style.display = "none";
  } else {
    baby.style.display = "none";
  }
}

function Mondo() {
  let mondo2 = document.getElementById("SP");

  if (mondo2.style.display === "none") {
    mondo2.style.display = "block";
  } else {
    mondo2.style.display = "none";
  }
}




function sparizione2() {
  let esc = document.getElementById("esJ");
  let paragrafi = document.querySelectorAll(".bi.bi-x-circle");
  paragrafi.forEach(paragrafo => {
    if (paragrafo.style.display === "none") {
      paragrafo.style.display = "block";
      esc.style.display = "block";
    } else {
      paragrafo.style.display = "none";
      esc.style.display = "none";
    }
  });
}



function Mondo() {
  let mondo2 = document.getElementById("baby");

  if (mondo2.style.display === "none") {
    mondo2.style.display = "block";
  } else {
    mondo2.style.display = "none";
  }
}

function sortCards() {
  let cards = document.querySelectorAll(".card2");
  let names = Array.from(cards).map(
    (card) => card.querySelector("card2").textContent
  );
  names.sort();
  cards.forEach((card, index) => {
    card.querySelector(".card2").textContent = names[index];
  });
}




let Alloha = document.getElementById("cardSparisci");
let AllohaNON = document.getElementById("test");

function setMenuTextAndDisplay(text) {
  let h1 = document.getElementById("MenuKeri");
  h1.textContent = text;
  Alloha.style.display = "block";
  AllohaNON.style.display = "none";
}






function removeDivs(element) {
  let id = element.id.replace("esc", "BOU");
  let div = document.getElementById(id);
  if (div) {
    div.parentNode.removeChild(div);
  }
}





function blad() {
  const divs = document.querySelectorAll('.Esc');
  divs.forEach(div => {
    if (div.style.display === 'block') {
      div.style.display = 'none';
    } 
  });
}


function blad2() {
  const divs = document.querySelectorAll('.Esc');
  divs.forEach(div => {
    if (div.style.display === 'none') {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}


function AllContacts() {
  let h1 = document.getElementById("MenuKeri");
  h1.textContent = "All Contacts";
  Alloha.style.display = "block";
  AllohaNON.style.display = "none";
}
function Friends() {
  let h1 = document.getElementById("MenuKeri");
  h1.textContent = "Friends";
  Alloha.style.display = "block";
  AllohaNON.style.display = "none";
}

function CoWorkers() {
  let h1 = document.getElementById("MenuKeri");
  h1.textContent = "Co-Workers";
  Alloha.style.display = "block";
  AllohaNON.style.display = "none";
}

function Designers() {
  let h1 = document.getElementById("MenuKeri");
  h1.textContent = "Designers";
  Alloha.style.display = "block";
  AllohaNON.style.display = "none";
}

function Developers() {
  let h1 = document.getElementById("MenuKeri");
  h1.textContent = "Developers";
  Alloha.style.display = "block";
  AllohaNON.style.display = "none";
}

function Family() {
  let h1 = document.getElementById("MenuKeri");
  h1.textContent = "Family";
  Alloha.style.display = "block";
  AllohaNON.style.display = "none";
}









function Edit() {
  let elements = document.querySelectorAll('[id^="esJ"]');
  elements.forEach((element) => {
    element.style.display = "block";
  });
}

function DizESC() {
  let elements = document.querySelectorAll('[id^="esJ"]');
  elements.forEach((element) => {
    element.style.display = "none";
  });
}



let toggle = false;

function doom() {
  if (toggle) {
    Edit();
  } else {
    DizESC();
  }
  toggle = !toggle;
}

