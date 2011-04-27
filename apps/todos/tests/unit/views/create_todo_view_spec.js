describe('Todos.CreateTodoView', function() {
  afterEach(function() {
    Todos.mainPane.remove();
  });

  describe('#insertNewline', function() {
    var createTodoSpy, value;
    beforeEach(function() {
      value = 'Do Something';
      view = Todos.CreateTodoView.create({value: value});
      createTodoSpy = spyOn(Todos.todoListController, 'createTodo');
      view.insertNewline();
    });

    it('delegates to create a new todo with it\'s current value', function() {
      expect(createTodoSpy).toHaveBeenCalledWith(value);
    });
  });
});
