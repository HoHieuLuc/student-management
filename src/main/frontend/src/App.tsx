import authHook from './core/auth/auth.hook';

import { Navigate, Route, Routes } from 'react-router-dom';
import StudentAppShell from './components/StudentAppShell';
import AuthComponent from './core/auth/components';
import { Container } from '@mantine/core';

function App() {
    const { data, isLoading } = authHook.useCurrentUser();

    if (isLoading) {
        return <></>;
    }

    return (
        <>
            {data
                ? <StudentAppShell />
                : <Container>
                    <Routes>
                        <Route path='/' element={<AuthComponent.Login />} />
                        <Route path='/register' element={<AuthComponent.Register />} />
                        <Route path='/*' element={<Navigate replace to='/' />} />
                    </Routes>
                </Container>
            }
        </>
    );
}

export default App;
