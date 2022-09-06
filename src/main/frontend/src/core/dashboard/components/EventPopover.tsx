import taskHook from '../../task/task.hook';
import { useForm } from '@mantine/form';

import { Button, Group, Paper, TextInput } from '@mantine/core';
import { IconPencil } from '@tabler/icons';

interface Props {
    id: number;
    name: string;
    color: string;
    callback: () => void;
}

const EventPopover = ({ id, name, color, callback }: Props) => {
    const taskForm = useForm({
        initialValues: {
            name
        },
        validate: {
            name: value => value ? null : 'Name is required'
        }
    });

    const { mutate: updateTask } = taskHook.useUpdate();
    const { mutate: removeTask } = taskHook.useRemove();

    return (
        <form
            onSubmit={taskForm.onSubmit((values) => updateTask({
                id,
                name: values.name
            }))}
        >
            <Paper
                sx={{
                    backgroundColor: color,
                    borderRadius: '10px 10px 0 0',
                }}
                p={10}
                shadow='md'
            >
                <TextInput
                    icon={<IconPencil />}
                    styles={{
                        input: {
                            border: 'none',
                            backgroundColor: color,
                            color: 'white',
                            borderBottom: '1px solid white',
                            borderRadius: 0,
                            '&:focus': {
                                borderBottom: '1px solid white',
                            }
                        },
                    }}
                    {...taskForm.getInputProps('name')}
                />
            </Paper>
            <Group p={10}>
                <Button
                    variant='subtle'
                    type='submit'
                >
                    Update
                </Button>
                <Button
                    variant='subtle'
                    onClick={() => removeTask(id, {
                        onSuccess: callback
                    })}
                >
                    Delete
                </Button>
            </Group>
        </form >
    );
};

export default EventPopover;