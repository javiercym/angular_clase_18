import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  input!:any[];

  constructor(private data:DataService){}

  ngOnInit(): void {
    this.data.GetAll().subscribe( data => this.input = data);
  }
}
