import { createStyles } from '@mantine/core';

interface Params {
    opened: boolean;
}

export default createStyles((theme, { opened }: Params) => ({
    main: {
        minHeight: '100vh',
        margin: 0,
        width: '100%',
        display: 'flex',
    },
    navbar: {
        borderRight: `1px solid ${theme.colors.gray[3]}`,
        position: 'fixed',
        width: '20%',
        zIndex: 99999,
        height: '100%',
        backgroundColor: theme.colorScheme === 'light' ? 'white' : theme.colors.dark[5],
        transition: 'all 0.3s ease-in-out',
		marginLeft: opened ? '0%' : '-20%',
        [theme.fn.smallerThan('md')]: {
            width: '30%',
            marginLeft: opened ? '0%' : '-30%',
        },
        [theme.fn.smallerThan('sm')]: {
            width: '50%',
            marginLeft: opened ? '0%' : '-50%',
        },
        [theme.fn.smallerThan('xs')]: {
            width: '70%',
            marginLeft: opened ? '0%' : '-70%',
        },
    },
    content: {
        width: opened ? '80%' : '100%',
        transition: 'all 0.3s ease-in-out',
        [theme.fn.smallerThan('md')]: {
            width: '100%',
            position: 'relative'
        },
    }
}));