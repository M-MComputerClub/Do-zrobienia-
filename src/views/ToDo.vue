<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const add_menu = ref(false)

const input_name = ref('')
const input_description = ref('')
const input_icon = ref('')
const input_color = ref('')


const heatmapData = ref([
      10, 20, 30, 40, 50,
      15, 25, 35, 45, 55,
      20, 30, 40, 50, 60,
      25, 35, 45, 55, 65,
      30, 40, 50, 60, 70,
    ]);
	
const getColor = (value) => {
      if (value <= 20) return '#00FF00'; // Zielony dla wartości <= 20
      if (value <= 40) return '#00AA00'; // Żółty dla wartości <= 40
      if (value <= 60) return '#005500'; // Pomarańczowy dla wartości <= 60
      return '#002500'; // Czerwony dla wartości > 60
    };

const todos_asc = computed(() => todos.value.sort((a,b) =>{
	return a.createdAt - b.createdAt
}))

const divStyle = (value) => {
  // Sprawdzamy czy wpisana wartość jest prawidłowym kodem HEX
  const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
  if (hexPattern.test(value)) {
    return {
      backgroundColor: value,
    };
  } else {
    return {
      backgroundColor: "#f0f0f0", // Domyślny kolor, jeśli wartość nie jest prawidłowym HEX
    };
  }
}

watch(name, (newVal) => {
	localStorage.setItem('name', newVal)
})

watch(todos, (newVal) => {
	localStorage.setItem('todos', JSON.stringify(newVal))
}, {
	deep: true
})

const addTodo = () => {
	if (input_name.value.trim() === '') {
		return
	}

	todos.value.push({
		name: input_name.value,
		description: input_description.value,
		icon: input_icon.value,
		color: input_color.value,
		done: false,
	})
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
		<section class="todo-list">
			<h1 class="justify-center flex font-medium">TODO LIST</h1>
			<div class="list" id="todo-list">

				<div v-for="todo in todos_asc" class="">
					<div class="todo-content m-2.5" :style="divStyle(todo.color)">
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

		<!-- <section class="todo-list">
			<h1 class="justify-center flex font-medium">TODO LIST</h1>
			<div class="p-2 flex flex-col">
				<div class="grid grid-cols-12 grid-flow-row gap-1">
					<div
						v-for="index in 100"
						:key="index"
						:style="{ backgroundColor: getColor(index) }"
						class="w-2 h-2 text-center flex items-center justify-center text-white font-bold"
					>
						{{ value }}
					</div>
				</div>
			</div>
		</section> -->





		

    <section class="create-todo bg-gray-200 h-screen p-10 fixed top-32 left-0 right-0 rounded-t-md animate-slideInBottom" v-if="add_menu">
			<form id="new-todo-form" class="flex flex-col justify-center items-center gap-4" @submit.prevent="addTodo">
				<input 
					type="text" 
					name="name" 
					id="name" 
					placeholder="Nazwa"
					v-model="input_name" required>
				<input 
					type="text" 
					name="Description" 
					id="description" 
					placeholder="Opis"
					v-model="input_description" required/>
				<input 
					type="text" 
					name="icon" 
					id="icon" 
					placeholder="&#128512;"
					v-model="input_icon" required/>
				<input 
					type="color" 
					name="color" 
					id="color" 
					placeholder="#a72020"
					v-model="input_color" required/>

				<input type="submit" value="Add todo" class="bg-slate-500">
			</form>
		</section>


    <footer class="flex justify-around fixed bottom-5 left-0 right-0 items-center">
      <div class="size-10 bg-yellow-500 items-center flex justify-center rounded-full">h</div>
      <button class="size-12 bg-yellow-500 rounded-full" @click="add_menu = !add_menu">+</button>
      <div class="size-10 bg-yellow-500 items-center flex justify-center rounded-full">j</div>
    </footer>
	</main>
</template>

<style scoped>
/* Dodajemy animację slide-in z dołu */
@keyframes slideInBottom {
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slideInBottom {
  animation: slideInBottom 0.5s ease-out forwards;
}
</style>