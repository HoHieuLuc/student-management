import { useState } from 'react';

import { Box, Popover } from '@mantine/core';
import EventPopover from './EventPopover';

import { EventProps } from 'react-big-calendar';
import { TaskEvent } from '../dashboard.type';

const EventCell = ({ event }: EventProps<TaskEvent>) => {
    const [opened, setOpened] = useState(false);
    return (
        <Popover
            position='bottom'
            shadow='md'
            withinPortal
            opened={opened} onChange={setOpened}
            styles={{
                dropdown: {
                    borderRadius: 10,
                    border: 'none',
                    width: 300
                }
            }}
        >
            <Popover.Target>
                <Box
                    sx={{
                        height: '100%'
                    }}
                    onClick={() => setOpened((o) => !o)}
                >
                    {event.start.toLocaleString('en-US', { hour: 'numeric', hour12: true })}
                    {' '}
                    {event.title}
                </Box>
            </Popover.Target>
            <Popover.Dropdown p={0}>
                <EventPopover
                    id={event.id}
                    color={event.color}
                    name={event.title}
                    callback={() => setOpened(false)}
                />
            </Popover.Dropdown>
        </Popover>
    );
};

export default EventCell;