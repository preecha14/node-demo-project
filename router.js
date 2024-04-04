const { Router } = require("express");
const { test_process, post_todos } = require("./service/process");
const router = Router();

router.get('/getdata', (req, res) => {
    console.log(req.query);
    //const param1 = req.query.param1;

    const {param1, param2} = req.query;
    console.log('---param-->'+param1);


  res.send('Hello World for Get')
});

let todos = [];


router.post('/postdata', async (req, res) => {
    res.send(await test_process(req.body));
  });

 // POST a new todo
 router.post('/todos', (req, res) => {
   const newTodo = req.body;
   todos.push(newTodo);
   res.status(201).json(newTodo);  
});

// GET all todos
router.get('/todos', (req, res) => {
    res.json(todos);
});

// DELETE a specific todo
router.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex(todo => todo.id == id);   

    if (index !== -1) {
        // ลบ To-do ออกจาก array โดยใช้ splice
        todos.splice(index, 1);
        res.sendStatus(204); // ส่งสถานะการลบสำเร็จ 204 (No Content)
    } else {
        // ถ้าไม่พบ To-do ที่ต้องการลบ
        res.status(404).json({ error: 'To-do not found' }); // ส่งสถานะการไม่พบ 404 (Not Found)
    }

});

// DELETE all todos
router.delete('/todosall', (req, res) => {
    todos = [];
    res.sendStatus(204);
});
// PUT update a specific todo
router.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body;
    
    const index = todos.findIndex(todo => todo.id == id);   
    if (index !== -1) {
        // อัปเดต To-do ที่ต้องการโดยใช้ Object.assign หรือ Spread Operator
        todos[index] = { ...todos[index], ...updatedTodo };
        res.sendStatus(204); // ส่งสถานะการอัปเดตสำเร็จ 204 (No Content)
    } else {
        // ถ้าไม่พบ To-do ที่ต้องการอัปเดต
        res.status(404).json({ error: 'To-do not found' }); // ส่งสถานะการไม่พบ 404 (Not Found)
    }

});

module.exports = router;
