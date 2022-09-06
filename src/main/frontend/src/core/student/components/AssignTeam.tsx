import studentHook from '../student.hook';
import { useForm } from '@mantine/form';

import { Button, Group, Select, Stack, Title } from '@mantine/core';
import { List } from './List';

const AssignTeam = () => {
    const { data } = studentHook.useAll();
    const { mutate: updateStudent, isLoading } = studentHook.useUpdate();

    const studentForm = useForm({
        initialValues: {
            id: '',
            teams: ''
        },
        validate: {
            id: value => value ? null : 'Name is required',
            teams: value => value ? null : 'Teams is required',
        }
    });

    const handleSubmit = (values: typeof studentForm.values) => {
        updateStudent({
            id: Number(values.id),
            data: {
                teams: values.teams
            }
        });
    };

    return (
        <Stack>
            {data && <>
                <Title weight={500}>Student List</Title>
                <List data={data} scrollAreaStyle={{
                    height: 300,
                }} />
                <Title weight={500}>Reassign a team for an existing student</Title>
                <form onSubmit={studentForm.onSubmit(handleSubmit)}>
                    <Select
                        label='Student that needs to be reassigned (team)'
                        placeholder='Nguyễn Văn A'
                        data={data.map(student => ({
                            value: `${student.id}`,
                            label: student.name,
                        }))}
                        {...studentForm.getInputProps('id')}
                        withinPortal
                        searchable
                    />
                    <Select
                        label='Pick a Team'
                        placeholder='Pick a Team'
                        data={['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5']}
                        {...studentForm.getInputProps('teams')}
                        withinPortal
                    />
                    <Group mt='md'>
                        <Button
                            type='submit'
                            size='md'
                            uppercase
                            disabled={!studentForm.isDirty()}
                            loading={isLoading}
                        >
                            Update
                        </Button>
                    </Group>
                </form>
            </>}
        </Stack>
    );
};
export default AssignTeam;