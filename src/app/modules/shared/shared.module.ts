import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../components/list/list.component';

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
    FormsModule,
    ListComponent,
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
    ListComponent,
  ],
  providers: [FinancasService, FlowbiteService, PaginationService],
})
export class SharedModule {}
