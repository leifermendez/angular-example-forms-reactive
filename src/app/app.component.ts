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
      youtube: ['', [
        Validators.required,
        Validators.pattern('^(https?\\:\\/\\/)?(www\\.youtube\\.com|youtu\\.?be)\\/.+$')
      ]
      ],
      type: [
        ''
      ],
      color: [
        ''
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

    // this.loadAPI();
  }

  changeType = () => {
    console.log(this.formLogin.value.type);
    if (this.formLogin.value.type === 'carro') {
      this.formLogin.get('color').setValidators([Validators.required]);
      this.formLogin.get('color').updateValueAndValidity();
    } else {
      this.formLogin.get('color').clearValidators();
      this.formLogin.get('color').updateValueAndValidity();
    }
  };


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
