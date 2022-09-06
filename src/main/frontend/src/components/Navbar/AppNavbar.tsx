import authHook from '~/core/auth/auth.hook';
import useStyles from './AppNavbar.style';

import { Box, Divider, NavLink, Text } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { IconLogout } from '@tabler/icons';

import config from '~/config/config';

const AppNavbar = () => {
    const logout = authHook.useLogout();
    const location = useLocation();
    const { classes } = useStyles();

    const navLinkElements = config.appNavbar.map((item) => (
        <NavLink
            key={item.label}
            active={location.pathname === item.link}
            label={item.label}
            icon={<item.icon size={16} stroke={1.5} />}
            component={Link}
            to={item.link}
            className={classes.navlink}
        />
    ));

    return (
        <Box>
            <Box p={15}>
                <Text
                    lineClamp={1}
                    weight={500}
                    size='xl'
                >
                    Student Management App
                </Text>
                <Text
                    color='dimmed'
                    size='sm'
                >
                    Dashboard
                </Text>
            </Box>
            <Divider sx={(theme) => ({
                borderTopColor: theme.colors.gray[1]
            })} />
            <Box p={15}>
                {navLinkElements}
                <NavLink
                    label='Logout'
                    icon={<IconLogout size={16} stroke={1.5} />}
                    onClick={logout}
                    className={classes.navlink}
                />
            </Box>
        </Box>
    );
};

export default AppNavbar;