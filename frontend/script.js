const searchWrapper = document.querySelector(".BarraPesquisa");
const inputBox = searchWrapper.querySelector("input");
const sugestBox = searchWrapper.querySelector(".list");
const icon = searchWrapper.querySelector(".lupa");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    userData = userData.toLowerCase();

    if (e.key === "Enter") {
        console.log(userData)
        if (sugestoes[0].includes(userData)) {
            window.open(`http://127.0.0.1:5500/instituições.html`, "blank");
        }
        if (sugestoes[1].includes(userData)) {
            window.open(`http://127.0.0.1:5500/instituições2.html`, "blank");
        }
    }
}
function addLembrete(){
    var lembrete = document.querySelector('.perfilLembreteInnerDiv');
    lembrete.insertAdjacentHTML('beforeend' ,'<div class="lembrete" contenteditable="true"> Lembrete1</div>');
} 

function removeLembrete(){
    var lembrete = document.querySelector('.perfilLembreteInnerDiv');
    ultimo_elemento = lembrete.lastChild
    lembrete.removeChild(ultimo_elemento)
}

    /*if (userData) {
        icon.onclick = () => {
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = sugestoes.filter((data) =>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        /*emptyArray = emptyArray.map((data) =>{
            return `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active");
        ShowSuggestions(emptyArray);
        let allList = sugestBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }*/


/*function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    webLink = `https://www.google.com/search?q=${selectData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
    searchWrapper.classList.remove("active");
}

function ShowSuggestions(list) {
    let listData;
    if (!list.length) {
        let userData = inputBox.value;
        listData = `<li>${userData}</li>`;
    } else {
        listData = list.join("");
    }
    sugestBox.innerHTML = listData;
}*/
