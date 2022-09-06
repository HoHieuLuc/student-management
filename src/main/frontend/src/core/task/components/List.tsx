import taskHook from '../task.hook';
import { useState } from 'react';

import { ActionIcon, Box, Button, Center, Checkbox, Container, Group, Paper, Text } from '@mantine/core';
import { IconX } from '@tabler/icons';

import { Task } from '../task.type';

const Item = ({ data }: { data: Task }) => {
    const { mutate: removeTask } = taskHook.useRemove();
    const { mutate: updateTask } = taskHook.useUpdate();
    const [checked, setChecked] = useState(data.done);

    return (
        <Group spacing='xl' align='center'>
            <Checkbox
                checked={checked}
                onChange={(event) => {
                    setChecked(event.currentTarget.checked);
                    updateTask({
                        id: data.uid,
                        done: event.currentTarget.checked,
                    });
                }}
            />
            <Text>{data.name}</Text>
            <Text>{new Date(data.start).toLocaleString('vi-VN')}</Text>
            <Text>{new Date(data.end).toLocaleString('vi-VN')}</Text>
            <ActionIcon
                onClick={() => removeTask(data.uid)}
            >
                <IconX />
            </ActionIcon>
        </Group>
    );
};

const List = () => {
    const { data } = taskHook.useAll();
    const { mutate: clearFinished } = taskHook.useClearFinished();

    return (
        <Container size='md' mt='sm'>
            <Paper withBorder shadow='sm'>
                {data && data.map(task => (
                    <Box
                        key={task.uid}
                        p={20}
                        sx={(theme) => ({
                            borderBottom: `1px solid ${theme.colors.gray[3]}`
                        })}
                    >
                        <Item data={task} />
                    </Box>
                ))}
            </Paper>
            <Center mt='sm'>
                <Button
                    uppercase
                    size='md'
                    disabled={data?.length === 0}
                    onClick={() => clearFinished()}
                >
                    Clear Finished
                </Button>
            </Center>
        </Container>
    );
};
export default List;