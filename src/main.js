import "./style.css";

document.querySelector("#app").innerHTML = `
    <div class="w-[80%] h-screen flex-col items-center justify-center border-black-4">
      <div id="main-box" class="p-2 w-full flex justify-center gap-4 m-auto"> 
        <div class="w-[30%] h-8">
          <input id = "title-task" class="pl-5 w-full h-full bg-[#DBE2F0] text-black placeholder-[#abaeb5] rounded flex" type ="text" id="title"  placeholder="Type Title Of Task">
        </div>
        <div class="w-[60%] h-8">
          <input id = "detail-task" class="pl-5 w-full h-full bg-[#DBE2F0] text-black placeholder-[#abaeb5] rounded" type ="text" id="title"  placeholder="Detail Of Your Task">
        </div>
        <div id = "add-task" class="w-auto h-8 rounded-tr rounded-br bg-[#5C9967] flex">
          <button class="w-full h-full pl-5 pr-5">
            <span class="text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1" fill="white"/></svg>
            </span>
          </button>
        </div>
      </div>
      <div class="flex mt-5 justify-between">
        <div class="flex gap-3 text-sm">
          <div class="flex gap-1 ml-2 bg-[#F0D1A8] w-auto p-1 rounded">
            <p class="">By category</p>
            <select class="bg-transparent" id="category" name="By category">
              <option value="all">All</option>
            </select>
          </div>
          <div class="flex gap-1 ml-2 bg-[#F0D1A8] w-auto p-1">
            <p class="">By priority</p>
            <select class="bg-transparent" id="category" name="By category">
              <option value="all">All</option>
            </select>
          </div>
        </div>
        <div class="border-[#F0D1A8] border-2 rounded w-auto pl-2 pr-2">
          <input type="text" id="search" placeholder="Search by name" class="bg-transparent w-[70px] h-full text-[8px]">
          <button id="search-btn">
            <i class="fa-solid fa-magnifying-glass fa-xs"></i>
          </button>
        </div>
      </div>
      <div id="todo-list"></div>
    </div>
`;
document.querySelector("#add-task").addEventListener("click", todo);

function styleBox(box){
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.backgroundColor = "#F0D1A8"
  box.style.width = "500px"
  box.style.padding = "20px 25px 25px 25px"
  box.style.margin = "20px 0px 0px 10px"
  box.style.borderRadius = "4px"
  box.style.paddingLeft = "50px"
}

function styleTask(task){
  task.style.fontSize = "50px";
  task.style.fontFamily = "Times New Roman"
  task.style.fontStyle = "bold";
}
function todo(event){
  event.preventDefault();
  let title = document.querySelector('#title-task').value;
  let detail = document.querySelector('#detail-task').value;
  // console.log(title)

  if(title == "" || detail == ""){
    alert("Please fill the task details");
    return;
  }
  let box = document.createElement("div");
  let task = document.createElement("h1");
  let discription = document.createElement("p");

  task.innerText = title;
  discription = detail;

  box.append(task, discription);
  document.querySelector("#todo-list").append(box);

  styleBox(box);
  styleTask(task);

  let taskData = {title, detail};
  ls(taskData);


  document.querySelector('#title-task').value=""
  document.querySelector('#detail-task').value=""
}



function ls(taskData){
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskData);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}