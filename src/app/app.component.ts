import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'example-react-form';
  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      terms: ['', [
        Validators.required,
        Validators.requiredTrue
      ]]
    });

    this.loadAPI();
  }

  loadAPI(): any {
    const response = {
      email: 'leifer33@gmail.com',
      password: '12345678',
      terms: true
    };


    this.formLogin.patchValue(response);

  }

  send(): any {
    console.log(this.formLogin.value);
  }
}
