<template>
	<main class="app">
	  <section class="todo-list">
		<h1 class="justify-center flex text-3xl font-semibold">To-Do List</h1>
		<div class="list" id="todo-list">
		  <div v-for="todo in todos_asc" :key="todo.name" class="">
			<div class="todo-content m-2.5 lg:ml-64 md:ml-16 ml-8 md:mr-16 lg:mr-64 mr-8 rounded-lg flex p-4 bg-zinc-800 justify-between">
			  <p class="w-10 h-10 rounded-md flex items-center justify-center text-2xl" :style="divStyle(todo.color)">{{todo.icon}}</p>
			  <div class="text-white flex flex-col items-start justify-start w-5/6">
				<p class="text-xl font-semibold">{{todo.name}}</p>
				<p class="text-sm font-light">{{todo.description}}</p>
			  </div>
			  <div class="actions">
				<button class="delete w-10 h-10 rounded-md flex items-center justify-center text-2xl" @click="removeTodo(todo)" :style="divStyle(todo.color)">X</button>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
  
	  <footer>
		<NavBar @add-task="addTask" />
	  </footer>
	</main>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch } from 'vue'
  import { useTodoStore } from '@/stores/todoStore'
  import NavBar from '../components/NavBar.vue'
  
  const store = useTodoStore()
  
  const todos_asc = computed(() => store.todosAsc)
  
  const divStyle = (value) => {
	const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
	if (hexPattern.test(value)) {
	  return {
		backgroundColor: value,
	  };
	} else {
	  return {
		backgroundColor: "#f0f0f0",
	  };
	}
  }
  
  const addTask = (task) => {
	store.addTodo(task)
  }
  
  const removeTodo = (todo) => {
	store.removeTodo(todo)
  }
  
  onMounted(() => {
	// Initialization logic if needed
  })
  
  watch(() => store.todos, (newVal) => {
	localStorage.setItem('todos', JSON.stringify(newVal))
  }, {
	deep: true
  })
  </script>
  