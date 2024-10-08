import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from './service/signupserviec.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    username: null,
    firstname: null,
    lastname: null,
    phonenumber: null,
    email: null,
    password: null
  };

  public error: any = [];
  public msg: string | null = null;

  constructor(private SignupService: SignupService) { }

  ngOnInit(): void { }

  submitSignup(registrationForm: NgForm) {
    console.log('Form data before submit:', this.form);
    return this.SignupService.signUp(this.form).subscribe(
      data => this.handleResponse(data, registrationForm),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any, registrationForm: NgForm) {
    alert('Registration Success! Please click here to log in.');
    registrationForm.resetForm();
    window.location.href = '/login';
    console.log('Response data:', data);
    if (data.statusCode === 200) {
      registrationForm.resetForm();
    }
  }


  handleError(error: any) {
    console.error('Error response:', error);
    alert(error.error.message);
    this.error = error.error.errors;
  }

  protected status = status;
}
