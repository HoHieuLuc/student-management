import { useCallback, useMemo, useState } from 'react';
import { View, Views } from 'react-big-calendar';
import { TaskEvent } from './dashboard.type';
import taskHook from '../task/task.hook';

const useCalendar = () => {
    const [view, setView] = useState<View>(Views.MONTH);
    const [date, setDate] = useState(new Date());

    const onView = useCallback((newView: View) => setView(newView), [setView]);
    const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate]);
    const onDrillDown = useCallback(
        (newDate: Date) => {
            setDate(newDate);
            setView(Views.DAY);
        },
        [setView]
    );

    return {
        view,
        date,
        onView,
        onNavigate,
        onDrillDown
    };
};

const useCalendarEvents = () => {
    const { data } = taskHook.useAll();

    const events = useMemo(() => {
        return data?.map<TaskEvent>(task => ({
            id: task.uid,
            title: task.name,
            start: new Date(task.start),
            end: new Date(task.end),
            color: task.color,
            allDay: false
        }));
    }, [data]);

    return events;
};

export default {
    useCalendarEvents,
    useCalendar,
};