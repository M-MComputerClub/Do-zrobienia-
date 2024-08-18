<template>
    <div class="fixed bottom-0 flex flex-col gap-0.5">
      <div v-if="showAddDailyTask" class="w-full flex justify-center">
        <form @submit.prevent="submitForm" class="flex flex-col gap-0.5">
          <div class="w-screen h-25 flex gap-0.5">
            <div class="w-1/5 h-full bg-zinc-800 text-center flex items-center rounded-md rounded-tl-2xl justify-center">Choose icon</div>
            <div class="flex flex-col w-3/5 gap-0.5">
              <input v-model="taskTitle" type="text" placeholder="Task title" class="w-full h-1/3 bg-zinc-800 p-2 rounded-md"/>
              <input v-model="taskDescription" type="text" placeholder="Task description" class="w-full h-1/3 bg-zinc-800 p-2 rounded-md" />
              <button type="submit" class="w-full bg-zinc-800 hover:bg-zinc-300 h-1/3 hover:text-black rounded-md text-sm">Add</button>
            </div>
            <div class="w-1/5 h-full bg-zinc-800 rounded-md rounded-tr-2xl">
              <input v-model="taskColor" type="color" class="w-11/12 h-full bg-zinc-800 rounded-md rounded-tr-xl"/>
            </div>
          </div>
        </form>
      </div>
      <div v-if="showButtons" class="w-full flex justify-center">
        <div class="text-white rounded-b-md rounded-t-xl flex w-screen justify-between text-sm gap-0.5 h-20 items-end md:w-1/2">
          <button @click="handleClick('Button 1')" class="bg-zinc-800 h-20 flex items-end justify-center p-2 w-1/3 rounded-md rounded-tl-xl">Advanced Task</button>
          <button @click="buttonShowAddDailyTask" class="bg-zinc-800 h-20 flex gap-1 flex-col items-center justify-end p-2 w-1/3 rounded-md">
            <p class="text-4xl">+</p>
            Daily Task
          </button>
          <button @click="handleClick('Button 3')" class="bg-zinc-800 h-20 flex items-end justify-center p-2 w-1/3 rounded-md rounded-tr-xl">Calendar Event</button>
        </div>
      </div>
  
      <nav class="w-screen bg-zinc-800 text-white p-4 rounded-t-md">
        <ul class="flex justify-around">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/todo">To-Do</router-link></li>
          <li @click="toggleButtons">Add</li>
          <li><router-link to="/calendar">Calendar</router-link></li>
          <li><router-link to="/settings">Settings</router-link></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useTodoStore } from '@/stores/todoStore'
  
  const store = useTodoStore()
  
  const showButtons = ref(false)
  const showAddDailyTask = ref(false)
  const taskTitle = ref('')
  const taskDescription = ref('')
  const taskColor = ref('#ffffff')
  
  const toggleButtons = () => {
    if (showAddDailyTask.value) {
      showButtons.value = false
      showAddDailyTask.value = false
    } else {
      showButtons.value = !showButtons.value
    }
  }
  
  const handleClick = (buttonName) => {
    console.log(`${buttonName} clicked`)
    showButtons.value = false
  }
  
  const buttonShowAddDailyTask = () => {
    showAddDailyTask.value = true
    showButtons.value = false
    taskColor.value = getRandomColor();
  }
  
  const submitForm = () => {
    if (taskTitle.value.trim() === '') return
    
    store.addTodo({
      name: taskTitle.value,
      description: taskDescription.value,
      color: taskColor.value
    })
    
    // Clear the form and hide the task input
    taskTitle.value = ''
    taskDescription.value = ''
    taskColor.value = '#ffffff'
    showAddDailyTask.value = false
  }

  function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
  </script>
  