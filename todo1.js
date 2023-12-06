const todoList = [{name : '',
                   dueDate : '',
                  }];

renderTodoList();

function renderTodoList()
{
    let todolisthtml='';
    for(let i=1;i<todoList.length;i++)
    {
         const todo = todoList[i];
         const name = todo.name;
         const dueDate = todo.dueDate;
         const html=`
                <div>${name}</div>
                <div>${dueDate}</div>
                <button onclick="
                    todoList.splice(${i},1);
                    renderTodoList();
                " class="delete">Delete
                </button>
            `;
         todolisthtml+=html;
    }
    console.log(todolisthtml);
    document.querySelector('.todo-list').innerHTML=todolisthtml;   
}

function addTodo()
{
    const inputElement = document.querySelector('.list');
    const name = inputElement.value;

    const dateInput = document.querySelector('.dueDate');
    const dueDate = dateInput.value

    todoList.push({name,dueDate});
    console.log(todoList);

    inputElement.value='';
    dateInput.value='';
    renderTodoList();
}



