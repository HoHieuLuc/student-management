import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from '@mantine/core';
import config from '~/config/config';

const AppContent = () => {
    return (
        <Container
            size='xl'
            p={10}
            pt={10}
        >
            <Routes>
                {config.appNavbar.map(nav => (
                    <Route key={nav.link} path={nav.link} element={nav.component} />
                ))}
                <Route path='/*' element={<Navigate replace to='/' />} />
            </Routes>
        </Container>
    );
};

export default AppContent;