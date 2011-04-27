Todos.CreateTodoView = SC.TemplateView.extend(SC.TextFieldSupport, {

  insertNewline: function() {
    Todos.todoListController.createTodo(this.get('value'));
    this.set('value', '');
  }
});

