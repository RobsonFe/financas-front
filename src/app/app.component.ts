import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './modules/module/app.module';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './modules/service/flowbite.service';
import { PaginationService } from './modules/service/pagination.service';
import { FinancasService } from './modules/service/financas.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FlowbiteService, FinancasService, PaginationService],
})
export class AppComponent implements OnInit {
  title = 'financas-front';

  ngOnInit(): void {
    initFlowbite();
  }
}
