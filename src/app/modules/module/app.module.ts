import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home/home.component';
import { ButtonComponent } from '../components/button/button.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { ModalComponent } from '../components/modal/modal.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { AboutComponent } from '../pages/about/about.component';
import { GreetingsComponent } from '../pages/greetings/greetings.component';
import { FinancasService } from '../service/financas.service';
import { FlowbiteService } from '../service/flowbite.service';
import { PaginationService } from '../service/pagination.service';
import { ToggleComponent } from '../components/toggle/toggle.component';
import { DesenvolvedorComponent } from '../pages/desenvolvedor/desenvolvedor.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    ButtonComponent,
    PaginationComponent,
    ModalComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    GreetingsComponent,
    ToggleComponent,
    DesenvolvedorComponent,
  ],
  exports: [
    HomeComponent,
    ButtonComponent,
    PaginationComponent,
    ModalComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    GreetingsComponent,
    ToggleComponent,
    DesenvolvedorComponent,
  ],
  providers: [FinancasService, FlowbiteService, PaginationService],
})
export class AppModule {}
