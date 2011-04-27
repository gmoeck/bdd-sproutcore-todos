sc_require('todos');

Todos.todoListController = SC.ArrayController.create({
  content: [],

  createTodo: function(title) {
    var todo = Todos.Todo.create({title: title});
    this.pushObject(todo);
  }
});

