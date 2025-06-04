// Importa los módulos necesarios de Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormControl, ReactiveFormsModule, Validator } from '@angular/forms';

@Component({
  selector: 'app-root',               // Nombre del componente usado en el HTML principal (<app-root>)
  imports: [RouterOutlet],           // Importa RouterOutlet para manejar las rutas en el componente
  templateUrl: './app.component.html', // Plantilla HTML del componente
  styleUrl: './app.component.css'      // Hoja de estilos del componente
})
export class AppComponent {
  title = 'little_fast_api_angular';  // Título del proyecto

 
  
}
