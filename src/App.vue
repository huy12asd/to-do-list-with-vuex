
<template>
  <div class="container">
    <h1>To do:</h1>
    <div class=danhsach>
    <div v-for="(todo,index) in todos" :key="index"
    @dblclick="todo.done1=!todo.done1"
    :class="{done1:todo.done1}" class="todo-item">
      <span :class="{done1:todo.done1}">{{ todo.todo }}</span>
    <div class="button">
      <button @click="deleteTodoaction()" id="mau">Remove</button>
      <button @click="toggleEditaction(index)" id="mau">edit</button>
    </div>
    </div>
  </div>
  <hr>
  <div id="full">
   
    <label for="task"><h3>Task:</h3></label>
    <input id="thanhtab" name="task" type="text" v-model="newTodo" placeholder="What do you need to do?">
   
  </div>
  <div id="benphai">
    <button id="mau" @click=addTodoaction()>Save item</button>
  </div>
  <div v-show="show">
    <input type="text" v-model="editedTodo" id="text">
    <button @click="confirmEditaction" id="mau">Save</button>
    <button @click="cancelEditaction" id="mau">Cancel</button>
  </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  data(){
   
  
  },
  computed:{
    ...mapGetters(
      [' getTodos'],
      ['getNewTodo'],
      ['getShow'],
      ['getEditedTodo']
    ),
    ...mapState(
      ['todos'],
      ['show'],
      ['editingIndex'],
      ['editedTodo']
    )
  },
  methods:{
    ...mapActions(
    ['addTodoaction'],
    ['deleteTodoaction'],
    ['toggleEditaction'],
    ['editTodoaction'],
    ['confirmEditaction'],
    ['cancelEditaction']
  ),

  ...mapMutations(
    ['addTodo'],
    [' deleteTodo'],
    [' toggleEdit'],
    [' editTodo'],
    ['confirmEdit'],
    ['cancelEdit']
  ),
  }
 
 

 
  
}
</script>
<style >
  .danhsach div{
    border:1px solid grey;
    padding:10px 15px;
    margin-right:5px;
    border-radius: 20px;
    }
  .danhsach div.done1
    {background-color:green;
    color:white;}
  
  #thanhtab{
  
  padding: 10px 15px;
  margin-right: 5px;
  border-radius: 20px;
  width: 90%;

   
  }
  
  #benphai{
    text-align: right;
    
  }
  #mau{
    padding:10px 15px;
    margin-right:5px;
    border-radius: 20px;
    background: blue;
    color:white
  }
  #full {
    text-align: right;
      white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
  #remove{
    padding:10px 15px;
    margin-right:5px;
    border-radius: 20px;
    margin-left: auto;
    
  }
  .todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  padding: 10px 15px;
  margin-right: 5px;
  border-radius: 20px;
}
.button{
  display: flex;
}
#text{
  padding:10px 15px;
    margin-right:5px;
    border-radius: 20px;
}


</style>
