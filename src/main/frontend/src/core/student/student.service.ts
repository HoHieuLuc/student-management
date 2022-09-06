import { CreateStudentVars, Student, UpdateStudentVars } from './student.type';
import axiosClient from '~/lib/axios-client';

const getAll = async () => {
    const { data } = await axiosClient.get<Array<Student>>(`/api/v1/student`);
    return data;
};

const create = async (payload: CreateStudentVars) => {
    const { data } = await axiosClient.post<Student>(`/api/v1/student`, payload);
    return data;
};

const update = async (payload: UpdateStudentVars) => {
    const { data } = await axiosClient.patch<Student>(`/api/v1/student/${payload.id}`, payload.data);
    return data;
};

const remove = async (id: number) => {
    const { data } = await axiosClient.delete<Student>(`/api/v1/student/${id}`);
    return data;
};

export default {
    getAll,
    create,
    update,
    remove,
};