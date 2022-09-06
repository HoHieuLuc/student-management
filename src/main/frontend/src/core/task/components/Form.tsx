import { useForm } from '@mantine/form';

import { Button, Center, ColorInput, Group, Paper, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { CreateTaskForm } from '../task.type';

import { getExactHour } from '~/lib/common';

interface Props {
    onSubmit: (values: CreateTaskForm) => void;
}

const Form = ({ onSubmit }: Props) => {
    const taskForm = useForm<CreateTaskForm>({
        initialValues: {
            name: '',
            startDate: new Date(),
            startTime: getExactHour(8),
            finishDate: new Date(),
            finishTime: getExactHour(9),
            color: ''
        },
        validate: {
            name: value => value ? null : 'Name is required',
            color: value => value ? null : 'Color is required',
            startTime: value => value ? null : 'Start time is required',
            finishTime: value => value ? null : 'Finish time is required',
        }
    });    

    return (
        <form onSubmit={taskForm.onSubmit(onSubmit)}>
            <Paper withBorder p={10}>
                <Group position='center'>
                    <Stack
                        sx={(theme) => ({
                            width: '50%',
                            [theme.fn.smallerThan('md')]: {
                                width: '90%'
                            }
                        })}
                    >
                        <TextInput
                            label='New Task'
                            placeholder='New Task'
                            {...taskForm.getInputProps('name')}
                        />
                        <ColorInput
                            format='rgb'
                            placeholder='Pick a Color'
                            disallowInput
                            {...taskForm.getInputProps('color')}
                            withinPortal
                        />
                        <SimpleGrid cols={2}>
                            <DatePicker
                                label='Start Date'
                                {...taskForm.getInputProps('startDate')}
                                clearable={false}
                                maxDate={
                                    taskForm.values.finishDate
                                        ? taskForm.values.finishDate
                                        : undefined
                                }
                                withinPortal
                            />
                            <TimeInput
                                label='Start Time'
                                format='12'
                                {...taskForm.getInputProps('startTime')}
                            />
                            <DatePicker
                                label='Finish Date'
                                {...taskForm.getInputProps('finishDate')}
                                clearable={false}
                                minDate={
                                    taskForm.values.startDate
                                        ? taskForm.values.startDate
                                        : undefined
                                }
                                withinPortal
                            />
                            <TimeInput
                                label='Finish Time'
                                format='12'
                                {...taskForm.getInputProps('finishTime')}
                            />
                        </SimpleGrid>
                        <Center>
                            <Button
                                type='submit'
                                uppercase
                            >
                                Submit
                            </Button>
                        </Center>
                    </Stack>
                </Group>
            </Paper>
        </form>
    );
};
export default Form;