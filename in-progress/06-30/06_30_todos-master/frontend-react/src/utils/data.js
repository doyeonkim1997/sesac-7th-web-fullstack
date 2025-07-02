// js/data.js
export const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Todo 2",
    isCompleted: true,
  }
];

export const initialUsers = [
  { email: "user1@example.com", password: "password123" },
  { email: "admin@example.com", password: "adminpass" },
  { email: "guest@example.com", password: "guest" }
];


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))


export const todoAPI = {
  async fetchTodos() {
    await delay(2000);
    return [...initialTodos]
  },

  async addTodo(todo) {
    await delay(1000);
    const newTodo = {
      ...todo,
      id: initialTodos.reduce((maxId, todos) => Math.max(maxId, todos.id) + 1, 0),
    }
    return newTodo;
  },

  async toggleTodo(todoId, isCompleted) {
    await delay(1000)
    return { id: todoId, isCompleted }
  },

  async deleteTodo(todoId) {
    await delay(1000)
    return todoId
  },

  async updateTodo(todoId, updates) {
    await delay(1000)
    return { id: todoId, ...updates }
  }
}

export const userAPI = {
  async login(email, password) {
    await delay(3000)
    const user = initialUsers.find(user =>
      user.email === email &&
      user.password === password
    )
    if (user) {
      return { success: true, user: { email: user.email } }
    }
    throw new Error("로그인 실패")
  }


}