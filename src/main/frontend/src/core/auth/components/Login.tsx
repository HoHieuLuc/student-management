import { useForm } from '@mantine/form';
import authHook from '../auth.hook';

import { Anchor, Button, Group, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

const Login = () => {
    const { mutate, isLoading, isError, error } = authHook.useLogin();

    const loginForm = useForm({
        initialValues: {
            username: '',
            password: ''
        },
        validate: {
            username: value => value ? null: 'Username is required',
            password: value => value ? null : 'Password is required',
        }
    });

    const handleSubmit = (values: typeof loginForm.values) => {
        void mutate(values);
    };

    return (
        <form onSubmit={loginForm.onSubmit(handleSubmit)}>
            <Stack>
                <Title weight={500}>Login</Title>
                <Text
                    color='red'
                    weight={600}
                    sx={{
                        height: '1em'
                    }}
                    
                >
                    {isError && error.response?.status === 401 && 'Username/Password is wrong !!!'}
                </Text>
                <TextInput
                    label='Username'
                    {...loginForm.getInputProps('username')}
                />
                <PasswordInput
                    label='Password'
                    {...loginForm.getInputProps('password')}
                />
                <Group position='left'>
                    <Button
                        loading={isLoading}
                        type='submit'
                    >
                        Login
                    </Button>
                    <Anchor component={Link} to='/register'>
                        Register
                    </Anchor>
                </Group>
            </Stack>
        </form>
    );
};
export default Login;