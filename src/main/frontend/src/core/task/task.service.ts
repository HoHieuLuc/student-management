import { Task, UpdateTaskVars } from './task.type';

const isTasks = (tasks: unknown): tasks is Array<Task> => {
    // yeah...
    return Array.isArray(tasks);
};

const getAll = () => new Promise<Array<Task>>((resolve) => {
    const data = JSON.parse(localStorage.getItem('tasks') || '') as Array<Task>;
    resolve(data);
});

const create = (payload: Task) => new Promise<Task>((resolve) => {
    const tasks: unknown = JSON.parse(localStorage.getItem('tasks') || '');
    if (isTasks(tasks)) {
        localStorage.setItem('tasks', JSON.stringify([...tasks, payload]));
    }
    resolve(payload);
});

const update = (payload: UpdateTaskVars) => new Promise<void>((resolve) => {    
    const data = JSON.parse(localStorage.getItem('tasks') || '') as Array<Task>;
    const newData = data.map<Task>(task => {
        return task.uid === payload.id
            ? {
                ...task,
                done: payload.done || task.done,
                name: payload.name || task.name
            }
            : task;
    });
    localStorage.setItem('tasks', JSON.stringify(newData));
    resolve();
});

const remove = (id: number) => new Promise<void>((resolve) => {
    const data = JSON.parse(localStorage.getItem('tasks') || '') as Array<Task>;
    const newData = data.filter(task => task.uid !== id);
    localStorage.setItem('tasks', JSON.stringify(newData));
    resolve();
});

const clearFinished = () => new Promise<void>((resolve) => {
    const data = JSON.parse(localStorage.getItem('tasks') || '') as Array<Task>;
    const newData = data.filter(task => !task.done);
    localStorage.setItem('tasks', JSON.stringify(newData));
    resolve();
});

export default {
    create,
    getAll,
    update,
    remove,
    clearFinished,
};