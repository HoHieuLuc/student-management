export interface Student {
    id: number;
    name: string;
    email: string;
    gender: 'M' | 'F';
    teams: string;
}

export type CreateStudentVars = Omit<Student, 'id' | 'gender'> & {
    gender: 'M' | 'F' | '';
};

export interface UpdateStudentVars {
    id: number;
    data: {
        teams: string;
    }
}