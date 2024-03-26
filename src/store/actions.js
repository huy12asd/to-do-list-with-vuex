export default{
    addTodoaction({ commit }) {
      commit('addTodo');
    },
    deleteTodoaction({ commit }, index) {
      commit('deleteTodo', index);
    },
    toggleEditaction({ commit }, index) {
      commit('toggleEdit', index);
    },
    editTodoaction({ commit }, index) {
      commit('editTodo', index);
    },
    confirmEditaction({ commit }) {
      commit('confirmEdit');
    },
    cancelEditaction({ commit }) {
      commit('cancelEdit');
    }
  };