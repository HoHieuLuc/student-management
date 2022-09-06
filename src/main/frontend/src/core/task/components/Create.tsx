import dayjs from 'dayjs';
import { mergeDateAndTime } from '~/lib/common';
import taskHook from '../task.hook';
import { CreateTaskForm } from '../task.type';
import Form from './Form';

const Create = () => {
    const { mutate } = taskHook.useCreate();

    const handleCreate = (values: CreateTaskForm) => {
        const start = mergeDateAndTime(values.startDate, values.startTime);
        const end = mergeDateAndTime(values.finishDate, values.finishTime);

        if (dayjs(start).isAfter(end)) {
            return;
        }

        mutate({
            name: values.name,
            color: values.color,
            done: false,
            uid: new Date().getTime(),
            start,
            end,
        });
    };

    return (
        <Form
            onSubmit={handleCreate}
        />
    );
};
export default Create;