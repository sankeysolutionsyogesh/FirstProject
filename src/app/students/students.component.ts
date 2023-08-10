import { Component } from '@angular/core';
import { StudentDataService } from '../services/student-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentDataService]
})
export class StudentsComponent {
  StudentData: any = [];
  APIResponse: any = [];
  totalPages: any = 0
  currentPage: any = 1
  nexPage: boolean = false
  previousPage: boolean = true

  errorMessage: any =
    { student_name: 'Student name must contain only alphabetic characters and spaces.', roll_no: 'Student Roll No is already taken' }
    ;

  getErrorKeys(error: any): string[] {
    console.log("Eror ", error)
    return Object.keys(error);
  }
  //
  removeAddStudentPage: any = false;

  //
  disableisPaid = true
  formData = {
    feesPaid: 0.0,
    isPaid: false,
    selectedDate: ""
  };


  apiCalling() {
    let dataToSend: any = {
      page_no: this.currentPage,
      page_size: 2
    };

    this.studentData.getData(dataToSend)
      .then((response) => {

        this.APIResponse = response;
        this.totalPages = this.APIResponse[0].total_pages;
        this.nexPage = this.APIResponse[0].has_next;
        this.previousPage = this.APIResponse[0].has_previous;
        this.StudentData = this.APIResponse[0].data
      })
      .catch((error) => {
        console.error('Error:', error);

      });
  }

  constructor(private router: Router, private route: ActivatedRoute, private studentData: StudentDataService) {

    this.apiCalling()

  }

  loadNextPage() {
    console.log("Nextpage")
    this.currentPage = this.currentPage + 1
    this.apiCalling()
  }

  loadPrevPage() {
    this.currentPage = this.currentPage - 1
    this.apiCalling()
  }

  addNewStudent() {
    this.removeAddStudentPage = false;
  }

  showStudents() {
    this.removeAddStudentPage = true;
  }

  Deleteaction(id: number) {
    console.log("ID", id)
    const confirmDelete = window.confirm(`Are you sure you want to delete? - ID ${id}`);
    if (confirmDelete) {
      // Perform the delete action
      console.log('Delete action confirmed');


      this.studentData.deleteData(id)
      .then((response) => {
        alert("Successfully added new student")
        console.log('Response', response)
        
      })
      .catch((error) => {
        console.log('Error:', error);
       
      });

    } else {
      // Cancelled
      console.log('Delete action cancelled');
    }
  }

  onSubmit(form: NgForm) {
    // const data = {
    //   student_name: "Ginson Pallickal",
    //   gender: "M",
    //   date_of_birth: "2001-04-23",
    //   room_number: 109,
    //   guardian_contact: "1234567890",
    //   fees_paid: 3000,
    //   is_paid: true,
    //   roll_no: 20
    // };

    if (form.valid) {
      const formData = form.value;

      const data = {
        student_name: form.value.studentName,
        gender: form.value.gender,
        date_of_birth: form.value.dateOfBirth,
        room_number: parseInt(form.value.roomNumber),
        guardian_contact: form.value.guardianContact,
        fees_paid: parseInt(form.value.feesPaid),
        is_paid: form.value.isPaid,
        roll_no: parseInt(form.value.rollNo)
      };

      console.log("formdata", data)

      this.studentData.postData(data)
        .then((response) => {
          alert("Successfully added new student")
          console.log('Response', response)
          form.resetForm();
          this.removeAddStudentPage = false;
        })
        .catch((error) => {
          console.log('Error:', error);
          this.errorMessage.push(error.error.errors)
          console.log("ErrorMessage", this.errorMessage)
        });
    }
  }

  limitGuardianContact(event: any) {
    const maxLength = 10;
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
  }

  limitRoomNumbert(event: any) {
    const maxLength = 6;
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
  }

  limitFeePaid(event: any) {
    this.formData.feesPaid = parseFloat(event.target.value);
    this.formData.isPaid = this.formData.feesPaid > 0;
  }

  get isPaidDisabled() {
    return this.formData.isPaid;
  }




  toggleChanged(event: any): void {
    if (event.checked) {

      this.addNewStudent()

    } else {
      this.showStudents()

    }
  }


  resetForm(form: NgForm) {
    form.resetForm(); // Reset the form
    // You can also reset other properties if needed
  }

}
