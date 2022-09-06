import studentHook from '../student.hook';

import { Stack, Title } from '@mantine/core';
import Form from './Form';

import { CreateStudentVars } from '../student.type';

const Create = () => {
    const { mutate, isLoading, isSuccess } = studentHook.useCreate();

    const handleCreate = (values: CreateStudentVars) => {
        mutate(values);
    };

    return (
        <Stack>
            <Title align='center'>Add a Student</Title>
            <Form 
                onSubmit={handleCreate}
                loading={isLoading}
                success={isSuccess}
            />
        </Stack>
    );
};
export default Create;