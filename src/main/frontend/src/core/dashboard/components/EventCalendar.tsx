import dashboardHook from '../dashboard.hook';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import EventCalendarToolbar from './EventCalendarToolbar';
import EventFourDaysView from './EventFourDaysView';
import EventCellHeader from './EventCellHeader';
import EventCell from './EventCell';
import { Box } from '@mantine/core';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
    const events = dashboardHook.useCalendarEvents();

    const calendarProps = dashboardHook.useCalendar();

    return (
        <Box p={20}>
            <Calendar
                {...calendarProps}
                localizer={localizer}
                events={events}
                style={{ height: '120vh' }}
                eventPropGetter={(event) => ({
                    style: {
                        backgroundColor: event.color,
                        fontSize: 13
                    }
                })}
                showMultiDayTimes
                components={{
                    month: {
                        dateHeader: EventCellHeader
                    },
                    event: EventCell,
                    toolbar: EventCalendarToolbar,
                }}
                views={{
                    week: true,
                    day: true,
                    month: true,
                    agenda: EventFourDaysView
                }}
                formats={{
                    eventTimeRangeFormat: () => '',
                }}
            />
        </Box>
    );
};
export default EventCalendar;