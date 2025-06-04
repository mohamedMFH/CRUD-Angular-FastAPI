import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
 listUsers: any = [];                // Arreglo para almacenar los usuarios que se reciben de la API

  APIURL = 'http://127.0.0.1:8000/';  // URL base del backend en FastAPI

  // Inyecta el servicio HttpClient para hacer peticiones HTTP
  constructor(private test: HttpClient,private authService: AuthService,
    private router: Router) {}

  // Método para obtener todos los usuarios desde la API
  getAllUsers() {
    this.test.get(this.APIURL + 'users').subscribe((data:any ) => {
      this.listUsers = data;         // Almacena los datos recibidos en listUsers
    });
  }
   logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
