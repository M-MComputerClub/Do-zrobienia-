<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])

const input_content = ref('')
const input_description = ref('')
const input_icon = ref('')
const input_color = ref('')

const todos_asc = computed(() => todos.value.sort((a,b) =>{
	return a.createdAt - b.createdAt
}))

watch(name, (newVal) => {
	localStorage.setItem('name', newVal)
})

watch(todos, (newVal) => {
	localStorage.setItem('todos', JSON.stringify(newVal))
}, {
	deep: true
})

const addTodo = () => {
	if (input_content.value.trim() === '') {
		return
	}

	todos.value.push({
		content: input_content.value,
		description: input_description.value,
		icon: input_icon.value,
		color: input_color.value,
		done: false,
	})
  console.log(todos)
}

const removeTodo = (todo) => {
	todos.value = todos.value.filter((t) => t !== todo)
}

onMounted(() => {
	todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>

<template>
	<main class="app">
		<section class="create-todo">
			<form id="new-todo-form" @submit.prevent="addTodo">
				<input 
					type="text" 
					name="content" 
					id="content" 
					placeholder="Nazwa"
					v-model="input_content" />
				<input 
					type="text" 
					name="Description" 
					id="description" 
					placeholder="Opis"
					v-model="input_description" />
				<input 
					type="text" 
					name="icon" 
					id="icon" 
					placeholder="&#128512;"
					v-model="input_icon" />
				<input 
					type="color" 
					name="color" 
					id="color" 
					placeholder="#a72020"
					v-model="input_color" />

				<input type="submit" value="Add todo" class="bg-slate-500">
			</form>
		</section>

		<section class="todo-list">
			<h3>TODO LIST</h3>
			<div class="list" id="todo-list">

				<div v-for="todo in todos_asc" class="">
					<div class="todo-content m-2.5 bg-red-100">
						<p>{{todo.icon}}</p>
						<p>{{todo.content}}</p>
						<p>{{todo.description}}</p>
						<p>{{todo.color}}</p>

              <div class="actions">
                <button button class="delete bg-red-200" @click="removeTodo(todo)">Delete</button>
              </div>
					</div>
				</div>

			</div>
		</section>

	</main>
</template>
