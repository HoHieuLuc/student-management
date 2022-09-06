import { Paper, Box, ActionIcon, Text } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons';

interface Props {
    onBurgerClick: () => void;
}

const AppHeader = ({ onBurgerClick }: Props) => {
    return (
        <>
            <Paper
                p={7}
                sx={(theme) => ({
                    backgroundColor: '#26a69a',
                    color: theme.white,
                    position: 'fixed',
                    zIndex: 100,
                    width: '100%',
                    height: 60
                })}
                shadow='lg'
                radius={0}
            >
                <Box style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <ActionIcon
                        mr='xl'
                        radius='xl'
                        variant='transparent'
                        sx={{
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            },
                        }}
                        size='xl'
                        onClick={onBurgerClick}
                    >
                        <IconMenu2 color='white' />
                    </ActionIcon>
                    <Text weight={400} size={22}>Task Manager</Text>
                </Box>
            </Paper>
            <Box pt={60}></Box>
        </>
    );
};
export default AppHeader;