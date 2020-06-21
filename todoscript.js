
//task count
var count =0;


//selectors
const taskCount = document.getElementById("#tasknumber");
const todoInput = document.getElementById("add-item");
const todoButton = document.getElementById("add-button");
const todoList = document.getElementById("list");


// event listners

todoButton.addEventListener("click",addTodo);

todoList.addEventListener("click",checkDelete);





// functions

function addTodo(){
	if(todoInput.value==""){
		alert("Empty task");
	}
	else{

const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');


	const completedButton = document.createElement('input');
    completedButton.type = "checkbox";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); 

	                     
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item'); 
	todoDiv.appendChild(newTodo);

    

    const deleteButton = document.createElement('span');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("trash-btn");
    todoDiv.appendChild(deleteButton);


    todoList.appendChild(todoDiv);
    count++;
    tasknumber.innerText = count+" tasks left";

// clear input value
}
    todoInput.value = "";

}

var check;

function checkDelete(e){
	const item = e.target;
	
	// console.log(item.classList);

	if(item.classList[1]=="fa-trash"){
		console.log(item.parentElement);
		const todo = item.parentElement.parentElement;
		todo.remove();
		if(check!=true){
		count--;
	}
		tasknumber.innerHTML = count+" tasks left";
	}

if(item.classList[0]=="complete-btn"){
		const todo = item.parentElement;
		
		 check = todo.classList.toggle("done");
	
		if(check==true){
			count--;
		}
		else{
			count++;
		}
		tasknumber.innerHTML = count+" tasks left";
	}




	
	
}