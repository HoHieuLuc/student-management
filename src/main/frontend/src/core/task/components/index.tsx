import { Box } from '@mantine/core';
import Create from './Create';
import List from './List';

const Task = () => {
    return (
        <Box>
            <Create />
            <List />
        </Box>
    );
};

export default Task;