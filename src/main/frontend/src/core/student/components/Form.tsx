import { useForm } from '@mantine/form';

import { Button, Center, Group, Radio, Select, Stack, TextInput, Text } from '@mantine/core';

import { CreateStudentVars } from '../student.type';

interface Props {
    onSubmit: (data: CreateStudentVars) => void;
    loading: boolean;
    success: boolean;
}

const Form = ({ onSubmit, loading, success }: Props) => {
    const studentForm = useForm<CreateStudentVars>({
        initialValues: {
            name: '',
            email: '',
            gender: '',
            teams: ''
        },
        validate: {
            name: value => value ? null : 'Name is required',
            email: value => /^(.+)@(\S+)[.](\S+)$/.test(value) ? null : 'E-mail must be valid',
            teams: value => value ? null : 'Teams is required',
            gender: (value: string) => value ? null : 'Gender is required'
        }
    });

    return (
        <form onSubmit={studentForm.onSubmit(onSubmit)}>
            <Stack>
                <TextInput
                    label='Student Name'
                    placeholder='Nguyễn Văn A'
                    {...studentForm.getInputProps('name')}
                />
                <TextInput
                    label='Email'
                    placeholder='example@example.com'
                    {...studentForm.getInputProps('email')}
                />
                <Group align='center' grow>
                    <Select
                        label='Pick a Team'
                        placeholder='Pick a Team'
                        data={['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5']}
                        {...studentForm.getInputProps('teams')}
                        withinPortal
                        searchable
                    />
                    <Radio.Group
                        label='Choose a gender:'
                        {...studentForm.getInputProps('gender')}
                        p={12}
                        size='md'
                        sx={(theme) => ({
                            display: 'flex',
                            gap: 10,
                            alignItems: 'center',
                            marginTop: 'auto',
                            [theme.fn.smallerThan('md')]: {
                                flexDirection: 'column',
                                alignItems: 'start'
                            },
                            [`& [role='radiogroup']`]: {
                                paddingTop: 0
                            }
                        })}
                    >

                        <Radio value='F' label='Female' />
                        <Radio value='M' label='Male' />
                    </Radio.Group>
                </Group>
                <Center>
                    <Button
                        disabled={!studentForm.isDirty()}
                        loading={loading}
                        uppercase
                        size='md'
                        type='submit'
                    >
                        Create
                    </Button>
                </Center>
                {success && <Center>
                    <Text>You have successfully added a student!</Text>
                </Center>}
            </Stack>
        </form>
    );
};
export default Form;