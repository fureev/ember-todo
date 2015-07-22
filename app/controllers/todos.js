import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createTodo: function(newTitle) {
            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: newTitle,
                isCompleted: false
            });

            // Clear the "New Todo" text field
            this.set('newTitle', '');

            // Save the new model
            todo.save();
        },
        editTodo: function() {
            this.set('isEditing', true);
        }
    }
});
