import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{
 listUsers: any = []; // Arreglo para almacenar los usuarios que se reciben de la API

  APIURL = 'http://127.0.0.1:8000/'; // URL base del backend en FastAPI

  // Inyecta el servicio HttpClient para hacer peticiones HTTP
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
  
  ) {}
     form = new FormGroup({
      us_id: new FormControl('0'),
      us_name: new FormControl(''),
      us_lastname: new FormControl(''),
      us_email: new FormControl('')
  
    })

  ngOnInit(){
    this.getAllUsers();
  }

  // Método para obtener todos los usuarios desde la API
  getAllUsers() {
    this.http.get(this.APIURL + 'users').subscribe((data:any ) => {
      this.listUsers = data; // Almacena los datos recibidos en listUsers
    });
  }
   logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
  
 

  handleSubmit(){
    console.log(this.form.value);
    this.http.post(this.APIURL + 'user/create', this.form.value,{observe: 'body', responseType:'json'})
    .subscribe( {
      next: () => {
        this.getAllUsers();
      }
    })
  }
  deleteUser(id: number){
    this.http.delete(this.APIURL + 'user/delete/' + id)
    .subscribe( {
      next: () => {
        this.getAllUsers();
      }
      
    })
    console.log('adios',this.APIURL + 'user/delete/' + id);
    
  }
 EditUser(id: number){
  this.http.get(this.APIURL + 'user/'+ id).subscribe((data:any)=>{
     console.log(data);
    this.form.patchValue({
      us_id: data.us_id,
      us_name: data.us_name,
      us_lastname: data.us_lastname,
      us_email: data.us_email
    })
  })
 }
 UpdateUser(){
    // console.log(this.form.value.us_id);
    const user = this.form.value
    console.log(user);

    this.http.put(this.APIURL + 'user/put/'+user.us_id, user,{observe: 'body', responseType:'json'})
    .subscribe( {
      next: () => {
        this.getAllUsers();
      }
    })
  }
}

