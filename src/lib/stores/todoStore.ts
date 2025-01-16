import { writable } from 'svelte/store';
import type { Todo } from '../types/types';

function loadTodos(): Todo[] {
	if (typeof window === 'undefined') return [];
	const saved = localStorage.getItem('todos');
	if (!saved) return [];
	try {
		return JSON.parse(saved).map((todo: any) => ({
			...todo,
			createdAt: new Date(todo.createdAt)
		}));
	} catch {
		console.error('Failed to parse todos from localStorage');
		return [];
	}
}

function saveTodos(todos: Todo[]): void {
	if (typeof window !== 'undefined') {
		try {
			localStorage.setItem('todos', JSON.stringify(todos));
		} catch (error) {
			console.error('Failed to save todos to localStorage:', error);
		}
	}
}

function createTodoStore() {
	const { subscribe, set, update } = writable<Todo[]>(loadTodos());

	return {
		subscribe,
		addTodo: (newTodo: Todo) => {
			update((todos) => {
				const newTodos = [...todos, newTodo];
				saveTodos(newTodos);
				return newTodos;
			});
		},
		toggleTodo: (id: string) => {
			update((todos) => {
				const newTodos = todos.map((todo) =>
					todo.id === id ? { ...todo, completed: !todo.completed } : todo
				);
				saveTodos(newTodos);
				return newTodos;
			});
		},
		deleteTodo: (id: string) => {
			update((todos) => {
				const newTodos = todos.filter((todo) => todo.id !== id);
				saveTodos(newTodos);
				return newTodos;
			});
		},
		clearCompleted: () => {
			update((todos) => {
				const newTodos = todos.filter((todo) => !todo.completed);
				saveTodos(newTodos);
				return newTodos;
			});
		},
		reset: () => {
			set([]);
			saveTodos([]);
		}
	};
}

export const todoStore = createTodoStore();
