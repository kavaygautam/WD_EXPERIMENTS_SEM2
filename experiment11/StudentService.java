package com.example.demo.service;

import com.example.demo.model.Student;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StudentService {
    private Map<Integer, Student> studentDB = new HashMap<>();

    public List<Student> getAllStudents() {
        return new ArrayList<>(studentDB.values());
    }

    public Student getStudentById(int id) {
        return studentDB.get(id);
    }

    public Student addStudent(Student student) {
        studentDB.put(student.getId(), student);
        return student;
    }

    public Student updateStudent(int id, Student student) {
        studentDB.put(id, student);
        return student;
    }

    public void deleteStudent(int id) {
        studentDB.remove(id);
    }
}
