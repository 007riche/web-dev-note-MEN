console.log("Todo console");
let userPromp = "";
let todo = [];
let prevProm = "";
while (userPromp != "quit") {

    userPromp = prompt("what would you like to do?");

    if (userPromp === "new") {
        if (prevProm != userPromp && prevProm != "")
            console.log("************************************************");
        let newtodo = "";
        newtodo = prompt("Enter new todo");
        console.log(`${newtodo} added to list`);
        todo.push(newtodo);
        // todo 
        // userPromp = "";

    }
    if (userPromp === "list") {
        for (let index = 0; index < todo.length; index++) {
            console.log(`${index}: ${todo[index]}`)
        }
        console.log("************************************************");
        // userPromp = "";
    }
    if (userPromp === "delete") {
        let indexDel = 0;
        indexDel = parseInt(prompt("Enter index of todo to delete"));
        let toDel = todo[indexDel];
        if (indexDel == 0) {
            todo.shift();
        } else if (indexDel == todo.length - 1) {
            console.log(todo.length);
            todo.pop();
        }
        else {
            if (indexDel < todo.length) {

                for (let i = indexDel; i < todo.length; i++) {
                    todo[i] = todo[i + 1];
                }
                todo.pop();
                console.log(`${toDel} Removed`);
            }
            else {
                console.log("Not in the list");
            }
        }

        // todo.splice(indexDel, 1);
        // console.log("************************************************");
        // userPromp = "";
    }
    prevProm = userPromp;
    // userPromp = "";

}
// alert("Bye! See you");