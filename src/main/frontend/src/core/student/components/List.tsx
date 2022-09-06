import studentHook from '../student.hook';
import {
    ActionIcon, Center, Grid, Paper, Radio,
    ScrollArea, Select, Stack, Table, TextInput, Title
} from '@mantine/core';
import { IconSquareX } from '@tabler/icons';
import { useForm } from '@mantine/form';

import { Student } from '../student.type';
import { CSSProperties } from 'react';

interface Props {
    data: Array<Student>;
    scrollAreaStyle?: CSSProperties;
}

export const List = ({ data, scrollAreaStyle }: Props) => {
    const { mutate: removeStudent } = studentHook.useRemove();

    const studentElements = data.map(student => (
        <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.gender}</td>
            <td>{student.teams}</td>
            <td>
                <Center>
                    <ActionIcon onClick={() => removeStudent(student.id)}>
                        <IconSquareX />
                    </ActionIcon>
                </Center>
            </td>
        </tr>
    ));

    return (
        <ScrollArea
            offsetScrollbars
            style={{
                whiteSpace: 'break-spaces',
                height: 500,
                ...scrollAreaStyle,
            }}
            type='always'
        >
            <Table highlightOnHover>
                <thead>
                    <tr>
                        <th>Student No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Teams</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentElements}
                </tbody>
            </Table>
        </ScrollArea>
    );
};


interface SearchForm {
    name: string;
    email: string;
    gender: '' | 'F' | 'M',
    teams: string | null;
}

const WithQuery = () => {
    const { data } = studentHook.useAll();
    const searchForm = useForm<SearchForm>({
        initialValues: {
            name: '',
            email: '',
            gender: '',
            teams: null
        }
    });    

    return (
        <>
            <Title weight={500}>Student List</Title>
            <Paper withBorder p={10}>
                <Stack>
                    <Grid m={0}>
                        <Grid.Col md={4}>
                            <TextInput
                                label='Search by Name'
                                {...searchForm.getInputProps('name')}
                            />
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <TextInput
                                label='Search by Email'
                                {...searchForm.getInputProps('email')}
                            />
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <Radio.Group
                                label='Gender'
                                orientation='vertical'
                                {...searchForm.getInputProps('gender')}
                            >
                                <Radio value='M' label='Male' />
                                <Radio value='F' label='Female' />
                                <Radio value='' label='All' />
                            </Radio.Group>
                        </Grid.Col>
                    </Grid>
                    <Select
                        description='Pick a Team'
                        data={['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5']}
                        {...searchForm.getInputProps('teams')}
                        allowDeselect
                        withinPortal
                        searchable
                        clearable
                    />
                </Stack>
            </Paper>
            {data && <List
                data={data.filter(
                    student =>
                        student.name.includes(searchForm.values.name)
                        && student.email.includes(searchForm.values.email)
                        && student.gender.includes(searchForm.values.gender)
                        && (
                            searchForm.values.teams === null
                            || student.teams === searchForm.values.teams
                        )
                )}
            />}
        </>
    );
};

export default WithQuery;