const add = () => {
    let li = document.createElement("li");
    let input = document.getElementById("input").value;
    let text = document.createTextNode(input);

    if(!input){
        alert("pleas Enter a value")
    }else {
        li.appendChild(text);
        let ul = document.querySelector("ul");
        ul.appendChild(li)
    }
    document.getElementById('input').value = "";
    
    let span = document.createElement("span");
    let x = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(x);
    li.appendChild(span)

    
    for(let i=0; i<deleteBtns.length; i++) {
        deleteBtns[i].onclick = function() {
            let li = this.parentElement;
            li.style.display = "none";
        }
    }
}

let lists = document.getElementsByTagName('li');


for(let i=0; i<lists.length; i++) {
    let span = document.createElement("span");
    let x = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(x);
    lists[i].appendChild(span)
}



let deleteBtns = document.getElementsByClassName('delete');
for(let i=0; i<deleteBtns.length; i++) {
    deleteBtns[i].onclick = function() {
        let li = this.parentElement;
        li.style.display = "none";
    }
}

let list = document.querySelector('ul')
list.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('done');
    }
})