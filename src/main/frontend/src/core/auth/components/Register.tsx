import { useForm } from '@mantine/form';
import authHook from '../auth.hook';

import { Stack, Title, TextInput, PasswordInput, Group, Button, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';

import { RegisterVars } from '../auth.type';

const Register = () => {
    const { mutate, isLoading } = authHook.useRegister();

    const registerForm = useForm<RegisterVars>({
        initialValues: {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
        },
        validate: {
            username: value => value ? null : 'Username is required',
            password: value => value ? null : 'Password is required',
            firstName: value => value ? null : 'Password is required',
            lastName: value => value ? null : 'Password is required',
        }
    });

    const handleSubmit = (values: typeof registerForm.values) => {
        void mutate(values);
    };

    return (
        <form onSubmit={registerForm.onSubmit(handleSubmit)}>
            <Stack>
                <Title weight={500}>Register</Title>
                <TextInput
                    label='Username'
                    {...registerForm.getInputProps('username')}
                />
                <TextInput
                    label='First Name'
                    {...registerForm.getInputProps('firstName')}
                />
                <TextInput
                    label='Last Name'
                    {...registerForm.getInputProps('lastName')}
                />
                <PasswordInput
                    label='Password'
                    {...registerForm.getInputProps('password')}
                />
                <Group position='left'>
                    <Button
                        loading={isLoading}
                        type='submit'
                    >
                        Register
                    </Button>
                    <Anchor component={Link} to='/'>
                        Cancel
                    </Anchor>
                </Group>
            </Stack>
        </form>
    );
};
export default Register;