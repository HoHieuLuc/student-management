import React from 'react';
import {
    IconCalendarEvent, IconListCheck, IconQuestionMark,
    IconUser, IconUserPlus, IconUsers, TablerIcon
} from '@tabler/icons';
import Dashboard from '~/core/dashboard/components';
import Student from '~/core/student/components';
import About from '~/core/about/components';
import Task from '~/core/task/components';

const isDev = import.meta.env.DEV;

const SERVER_URL = isDev ? 'http://localhost:4000' : import.meta.env.BASE_URL;

interface NavLink {
    icon: TablerIcon,
    label: string,
    link: string,
    component: React.ReactNode
}

const appNavbar: Array<NavLink> = [
    {
        icon: IconCalendarEvent,
        label: 'Calendar',
        link: '/',
        component: <Dashboard />,
    },
    {
        icon: IconListCheck,
        label: 'Tasks',
        link: '/tasks',
        component: <Task />,
    },
    {
        icon: IconUser,
        label: 'Student List',
        link: '/student-list',
        component: <Student.List />
    },
    {
        icon: IconUserPlus,
        label: 'Add a Student',
        link: '/add-student',
        component: <Student.Create />,
    },
    {
        icon: IconUsers,
        label: 'Assign Teams',
        link: '/assign-teams',
        component: <Student.AssignTeam />,

    },
    {
        icon: IconQuestionMark,
        label: 'About',
        link: '/about',
        component: <About />,
    },
];

export default {
    SERVER_URL,
    appNavbar,
};