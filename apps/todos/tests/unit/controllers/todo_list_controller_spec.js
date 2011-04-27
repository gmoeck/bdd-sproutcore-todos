describe('Todos.todoListController', function() {
  describe('#createTodo', function() {
    var createTodoSpy, title,todo;

    beforeEach(function() {
      title = 'title';
      todo = {title: title};
      createTodoSpy = spyOn(Todos.Todo, 'create').andReturn(todo);

      Todos.todoListController.createTodo(title);
    });

    it('creates a todo with the passed in title', function() {
      expect(createTodoSpy).toHaveBeenCalledWith({title: title});
    });

    it('adds that todo to it\'s content', function() {
      expect(Todos.todoListController.get('content')).toContain(todo);
    });
  });
});
