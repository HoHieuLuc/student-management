export interface TaskEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
    color: string;
    allDay: boolean;
}