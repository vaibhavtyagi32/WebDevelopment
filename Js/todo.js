let todo=[];

while(true){
    let req=prompt("Please enter your request");
    if(req == "quit")
    {
        console.log("Quitting the app");
        break;
    }
    if(req == "list")
    {
        console.log("------------------");
        for(let i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
    }
    else if(req == "add")
    {
        let task=prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete")
    {
        let idx=prompt("enter the index to delete");
        todo.splice(idx,1);
        console.log("task deleted successfully");
    }
}