let text = ["First item", "Second item", "Third item"];
for (let i=0; i < text.length ; i++){
    let li = document.createElement("li");
    console.log(`${text[i]}`);
    //li.innerHTML = text[i];
    li.append(document.createTextNode(text[i]));
    document.getElementById("target").appendChild(li);
    if (i == 1){
        li.setAttribute('class', 'my-item');
    }
}