document.querySelector("#input").addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    const input = document.querySelector("#input");
    addItem(input.value);
  }
    
});

document.querySelector("#add_item").addEventListener("click", () => {
  const input = document.querySelector("#input");
  addItem(input.value);
});

addItem = (input) => {
  const item = document.createElement("div");
  item.setAttribute("class","change");
  const div = document.createElement("div");

  const trashIcon = document.createElement("button");
  trashIcon.setAttribute("class","btn6");
  trashIcon.setAttribute("id","btn2");
  trashIcon.innerText="X"



  const text = document.createElement("p");
  const up=document.createElement("button");
  up.setAttribute("class","btn6");
  up.setAttribute("id","btn2");
  up.innerText="↑"

  const down=document.createElement("button");
  down.setAttribute("class","btn6");
  down.setAttribute("id","btn4");
  down.innerText="↓";

  item.className = "item";
  text.textContent = input;


  
  trashIcon.style.backgroundColor = "red";
  trashIcon.addEventListener("click", () => {
    item.remove();
  })
  item.appendChild(trashIcon);
  item.appendChild(up);
  item.appendChild(down);

  item.appendChild(text);
  item.appendChild(div);
  item.style.textAlign="center";
  item.style.fontSize="18px"

  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";



  up.addEventListener('click',()=>{
    if(item.previousElementSibling){
      item.parentNode.insertBefore(item,item.previousElementSibling);
    }
  })



  down.addEventListener('click',()=>{
    if(item.nextElementSibling){
     item.parentNode.insertBefore(item.nextElementSibling,item);
    }
  })



}
