import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import taskService from './task.service';
import { Task, UpdateTaskVars } from './task.type';

const QUERY_KEYS = {
    list: ['task', 'list']
};

const sharedOptions = (queryClient: QueryClient) => ({
    onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.list),
    onError: () => localStorage.removeItem('tasks')
});

const useAll = () => {
    return useQuery<Array<Task>>(QUERY_KEYS.list, taskService.getAll, {
        onError: () => localStorage.removeItem('tasks')
    });
};

const useCreate = () => {
    const queryClient = useQueryClient();
    return useMutation<Task, Error, Task>(taskService.create, {
        ...sharedOptions(queryClient)
    });
};

const useUpdate = () => {
    const queryClient = useQueryClient();
    return useMutation<void, Error, UpdateTaskVars>(taskService.update, {
        ...sharedOptions(queryClient)
    });
};

const useRemove = () => {
    const queryClient = useQueryClient();
    return useMutation<void, Error, number>(taskService.remove, {
        ...sharedOptions(queryClient)
    });
};

const useClearFinished = () => {
    const queryClient = useQueryClient();
    return useMutation<void, Error>(taskService.clearFinished, {
        ...sharedOptions(queryClient)
    });
};

export default {
    useAll,
    useCreate,
    useUpdate,
    useRemove,
    useClearFinished
};