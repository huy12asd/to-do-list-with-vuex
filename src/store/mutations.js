export default {
    addTodo(state) {
      state.todos.push({
        todo: state.newTodo,
        done: false
      });
      state.newTodo = '';
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    },
    toggleEdit(state, index) {
        state.show = !state.show;
        state.editingIndex = index; // Cập nhật chỉ mục đang chỉnh sửa
        state.editedTodo = state.todos[index].todo; // Cập nhật todo đang chỉnh sửa
      },
    editTodo(state, index) {
        state.editingIndex = index;
        state.editedTodo = state.todos[index].todo;
    },
    
    confirmEdit(state) {
        if (state.editedTodo.trim() !== '') {
            state.todos[state.editingIndex].todo = state.editedTodo;
            state.cancelEdit();
            state.show = false;
          }
        },
    cancelEdit(state) {
      state.editingIndex = null;
      state.editedTodo = '';
      state.show = false; // Ẩn phần chỉnh sửa
    }
  };
  