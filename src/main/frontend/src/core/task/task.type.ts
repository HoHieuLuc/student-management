export interface Task {
    name: string;
    start: string | Date;
    end: string | Date;
    uid: number;
    done: boolean;
    color: string;
}

export interface CreateTaskForm {
    name: string;
    startDate: Date;
    startTime: Date;
    finishDate: Date;
    finishTime: Date;
    color: string;
}

export interface UpdateTaskVars {
    id: number;
    name?: string;
    done?: boolean;
}