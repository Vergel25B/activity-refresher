import { Student } from "./Student";

export class StudentList {
    students: Array<Student>;

    constructor(students: Array<Student>) {
        this.students = students
    }

    getStudents() {
        return this.students;
    }

    updateStudentName(id: string, name: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.name = name;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";
    }

    checkStudentId(id: string) {
        // let valid = false;

        // for (let index = 0; index < this.students.length; index++) {
        //     const element = this.students[index];

        //     if (element.studentId === id) {
        //         valid = true;
        //     }
        // }
        let checkStudent = this.students.find(element => element.studentId === id);

        if (checkStudent) return true;

        return false;
    }

    updateAge(id: string, age: number) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.age = age;
            return student;
        }

        return "Student id doesnt exists";
    }

    updateCourse(id: string, courseName: string) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.course = courseName;
            return student;
        }

        return "Student id doesnt exists";
    }

    updateCollege(id: string, collegeName: string) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.college = collegeName;
            return student;
    }

}
    updateAddress(id: string, address: string) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.address = address;
            return student;

    }}

    // create method and return number of students
    // delete one student and return list of students, use splice method (index, 1)

    deletestudent(id: string) {
        let index = this.students.findIndex(element => element.studentId === id);

        if (index > -1){
            this.students.splice(index,1);
            return "student has benn successfully deleted";
            
        }

        return "student id doesnt exists"

        
    }
    numberOfStudent() {
        return this.students.length;
        }
}
