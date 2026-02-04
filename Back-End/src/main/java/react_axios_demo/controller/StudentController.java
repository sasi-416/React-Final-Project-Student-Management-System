package react_axios_demo.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import jakarta.persistence.EntityNotFoundException;
import react_axios_demo.entity.Student;
import react_axios_demo.service.StudentService;

@RestController
@RequestMapping("react_axios_demo/api")
@CrossOrigin(origins = "*" ,methods = {RequestMethod.GET,RequestMethod.PATCH,RequestMethod.DELETE,RequestMethod.POST})
class StudentController {

	private StudentService studentService;

	public StudentController(StudentService studentService) {
		super();
		this.studentService = studentService;
	}
	
	
	@GetMapping("/student")
	public  ResponseEntity<?> getAllStudents()
	{
		
		try
		{
			List<Student> studentList=studentService.getAllStudents();
 			
			return new ResponseEntity<>(studentList,HttpStatus.OK);
		}
		catch (Exception e) {
			
			return new ResponseEntity<>("Failed to fetch the student ",HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PostMapping("/student")
	public ResponseEntity<?> addStudent(@RequestBody Student student)
	{	

		try
		{
			Student addedStudent =studentService.addStudent(student);
			
			return new ResponseEntity<>(addedStudent,HttpStatus.OK);
		}
		catch (Exception e) {
			
			return new ResponseEntity<>("Failed to add the student ",HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/students/{sid}")
	public ResponseEntity<?> getStudentById(@PathVariable Long sid)
	{
		Student student=studentService.getStudentById(sid);
		
		
		if(student != null)
		{
			return new ResponseEntity<>(student, HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>("student with "+sid+" does not exist",HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/student/{id}")
	public ResponseEntity<?> deleteStudentById(@PathVariable Long id)
	{
		
			try
			{
				studentService.deleteStudent(id);
				return  new ResponseEntity<>("Student with "+id +" is deleted successfully",HttpStatus.OK);
			}
			catch(EntityNotFoundException e)
			{
				 return  new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
			}		
	}
	
	@PatchMapping("/student/{id}")
	public ResponseEntity<?> updateStudentById(@PathVariable Long id,@RequestBody Student student)
	{
		
		Student  updtatedStudent =studentService.updateStudent(id, student);
		
		if(updtatedStudent   == null)
		{
			return new ResponseEntity<>("Student with "+id+" does not exist",HttpStatus.BAD_REQUEST);
		}
		else
		{
			return new ResponseEntity<>(updtatedStudent,HttpStatus.OK);
		}
				
	}
	
	
	
}
