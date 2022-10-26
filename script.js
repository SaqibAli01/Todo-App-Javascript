  let list = document.getElementById('list');
  

function add(){
    let add = document.getElementById('text');
    // let text = document.getElementById('additem').innerHTML = add.value + "<hr>"
//create li item with text node
    let li = document.createElement('li');
    li.style.fontSize = '2rem';
    let text = document.createTextNode(add.value);
    li.appendChild(text);
//delete button

let delBtn = document.createElement('button');
let delText = document.createTextNode('Delete')
delBtn.appendChild(delText);
//li k under button ko krna ha
li.appendChild(delBtn)

// is delete k button pr onclick function lagna ha
delBtn.setAttribute("class", "btn");
delBtn.setAttribute("onclick", "delitem(this)");
delBtn.appendChild(delText);


// eidt button banany laga hon

//button create
let eidtbtn = document.createElement('button');
//class di ha attribute sy
eidtbtn.setAttribute('class', 'btnedit')
//text create
let eidttext = document.createTextNode('edit');
// edit button ko eidtText me kr dia ha
eidtbtn.appendChild(eidttext);
// li me eidtbtn ko add kr dia 
li.appendChild(eidtbtn);
//onclick ka function bania btn me
eidtbtn.setAttribute('onclick','eidtbtn(this)');

    list.appendChild(li);

    add.value = ""
    console.log(li);
}

// ye del butoon list k under li ka ha
function delitem(paremeter)
{
    
    console.log(paremeter)
    // li ka jo parent ha us ko delte kia ha 
    paremeter.parentNode.remove();
}

// eidtbutton ka function 
function eidtbtn(a)
{
    console.log(a.parentNode.firstChild.nodeValue)
    // alert('ol')
    let val = prompt("Enter Updated Value", a.parentNode.firstChild.nodeValue);
    a.parentNode.firstChild.nodeValue = val;
}

// delete all function

function delAll()
{
    // all list ko empty kr dia ha 
    list.innerHTML = ""
}