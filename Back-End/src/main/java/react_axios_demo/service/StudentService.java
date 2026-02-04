package react_axios_demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import jakarta.persistence.EntityNotFoundException;
import react_axios_demo.entity.Student;
import react_axios_demo.repository.StudentRepository;


@Service
public class StudentService 
{
	
	private StudentRepository studentRepository;

	public StudentService(StudentRepository studentRepository) {
		super();
		this.studentRepository = studentRepository;
	}
	
	
	public List<Student> getAllStudents()
	{
		return	studentRepository.findAll();
	}
	
	
	public Student addStudent(Student student)
	{
		return studentRepository.save(student);
	}

	
	public Student getStudentById(Long id)
	{
		return	studentRepository.findById(id).orElse(null);
	}
	
	
	public void deleteStudent(Long id)
	{
			if(studentRepository.existsById(id))
			{
					studentRepository.deleteById(id);
			}
			else
			{
				throw new EntityNotFoundException("Student with "+id +" does not exist");
			}
		
	}
	
	public Student updateStudent(Long id, Student student)
	{
		
			Optional<Student>  optionalStudent =studentRepository.findById(id);
			
			if(optionalStudent  == null)
			{
					return  null;
			}
			else
			{
					Student  existingStudent =optionalStudent.get();
					
				
						existingStudent.setSname(student.getSname());
						existingStudent.setSfee(student.getSfee());
						existingStudent.setScourse(student.getScourse());
						existingStudent.setSaddress(student.getSaddress());
				
						studentRepository.save(existingStudent);
						
						return  existingStudent;
				
			}
			
		
		
	}
	
	
	
	
	
	
	
	
	
}
