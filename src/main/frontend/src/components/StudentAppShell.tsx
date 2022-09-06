import { useClickOutside, useMediaQuery } from '@mantine/hooks';
import useStyles from './StudentAppShell.style';
import { useState } from 'react';

import { Box, Overlay, useMantineTheme } from '@mantine/core';
import AppContent from './AppContent/AppContent';
import AppNavbar from './Navbar/AppNavbar';
import AppHeader from './Header/AppHeader';

export default function AppShellDemo() {
    const [opened, setOpened] = useState(true);
    const theme = useMantineTheme();

    const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
    const ref = useClickOutside(() => matches && setOpened(false));
    
    const { classes } = useStyles({ opened });

    return (
        <Box className={classes.main}>
            <Box
                p={0}
                className={classes.navbar}
                ref={ref}
            >
                <AppNavbar />
            </Box>
            <Box
                ml='auto'
                className={classes.content}
            >
                <AppHeader onBurgerClick={() => setOpened(!opened)} />
                <AppContent />
                {matches && opened &&
                    <Overlay opacity={0.6} zIndex={100} color="#000" />
                }
            </Box>
        </Box>
    );
}