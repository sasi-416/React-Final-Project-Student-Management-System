package react_axios_demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long sid;
	
	private String sname;
	
	private int sfee;
	
	private String scourse;
	
	private String saddress;

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(Long sid, String sname, int sfee, String scourse, String saddress) {
		super();
		this.sid = sid;
		this.sname = sname;
		this.sfee = sfee;
		this.scourse = scourse;
		this.saddress = saddress;
	}

	public Student(String sname, int sfee, String scourse, String saddress) {
		super();
		this.sname = sname;
		this.sfee = sfee;
		this.scourse = scourse;
		this.saddress = saddress;
	}

	public Long getSid() {
		return sid;
	}

	public void setSid(Long sid) {
		this.sid = sid;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public int getSfee() {
		return sfee;
	}

	public void setSfee(int sfee) {
		this.sfee = sfee;
	}

	public String getScourse() {
		return scourse;
	}

	public void setScourse(String scourse) {
		this.scourse = scourse;
	}

	public String getSaddress() {
		return saddress;
	}

	public void setSaddress(String saddress) {
		this.saddress = saddress;
	}
	
	
	
}
