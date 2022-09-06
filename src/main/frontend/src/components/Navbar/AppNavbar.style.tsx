import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    navlink: {
        fontWeight: 500,
        borderRadius: theme.radius.sm,
        '&[data-active="true"]': {
            backgroundColor: theme.colors.gray[2],
            color: 'black',
        }
    }
}));