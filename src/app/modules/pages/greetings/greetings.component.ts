import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlowbiteService } from '../../service/flowbite.service';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.css',
})
export class GreetingsComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
