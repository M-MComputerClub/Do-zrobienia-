import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(task) {
      // Dodaj createdAt przy dodawaniu nowego zadania
      this.todos.push({
        name: task.name,
        description: task.description,
        icon: task.icon || '📝', // Default icon if not provided
        color: task.color,
        done: false,
        createdAt: new Date(), // Ustawienie createdAt na bieżący czas
      })
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    },
  },
  getters: {
    todosAsc: (state) => {
      // Użyj kopii tablicy i sortuj ją
      return [...state.todos].sort((a, b) => a.createdAt - b.createdAt)
    },
  },
})
