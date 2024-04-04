const test_process = async (body) => {
    console.log(body);
    return body;

}

let todos = [];

const post_todos = async (body) => {
    const newTodo = body;
    todos.push(newTodo);
   return newTodo;
}



module.exports = { test_process ,post_todos};