import { CreateStudentVars, Student, UpdateStudentVars } from './student.type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import studentService from './student.service';
import { AxiosError } from 'axios';

const QUERY_KEYS = {
    list: ['student', 'list']
};

const useAll = () => {
    return useQuery<Array<Student>, AxiosError>(QUERY_KEYS.list, studentService.getAll);
};

const useCreate = () => {
    const queryClient = useQueryClient();
    return useMutation<Student, AxiosError, CreateStudentVars>(studentService.create, {
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.list)
    });
};

const useUpdate = () => {
    const queryClient = useQueryClient();
    return useMutation<Student, AxiosError, UpdateStudentVars>(studentService.update, {
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.list)
    });
};

const useRemove = () => {
    const queryClient = useQueryClient();
    return useMutation<Student, AxiosError, number>(studentService.remove, {
        onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.list)
    });
};

export default {
    useAll,
    useCreate,
    useUpdate,
    useRemove,
};