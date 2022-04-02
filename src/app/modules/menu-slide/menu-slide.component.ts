import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Path } from '../../../app/config.js';
declare const body: any;
declare const title: String;
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-slide',
  templateUrl: './menu-slide.component.html',
  styleUrls: ['./menu-slide.component.css', 
  '../../../assets/css/app.css', 
  '../../../assets/css/style.css' 
]
})
export class MenuSlideComponent implements OnInit {
  path: string = Path.url;
  constructor(private authSvc: AuthService, private router: Router) { }
  ngOnInit(): void {
  }
  
  goTienda() {
      const currentUrl = this.router.url;
      this.router.navigate([currentUrl])
      .then(() => {
      this.router.navigate(['/tienda'])
      .then(() => {
        window.location.reload();
      })
    });
  }

  goInicio() {
    const currentUrl = this.router.url;
    this.router.navigate([currentUrl])
    .then(() => {
    this.router.navigate(['/inicio'])
    .then(() => {
      window.location.reload();
    })
  });
  }

  
  goNotificacion() {
    const currentUrl = this.router.url;
    this.router.navigate([currentUrl])
    .then(() => {
    this.router.navigate(['/notificaciones'])
    .then(() => {
      window.location.reload();
    })
  });
  }

  goConfiguraciones() {
    const currentUrl = this.router.url;
    this.router.navigate([currentUrl])
    .then(() => {
    this.router.navigate(['/configuraciones'])
    .then(() => {
      window.location.reload();
    })
  });
  }

  goPerfil() {
    const currentUrl = this.router.url;
    this.router.navigate([currentUrl])
    .then(() => {
    this.router.navigate(['/perfil'])
    .then(() => {
      window.location.reload();
    })
  });
  }



  onLogout(): void{
    this.authSvc.logout()
  }

}
