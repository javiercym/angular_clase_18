import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  id!: number;
  datos!:any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getData(this.id);
    });
  }
  getData(id: number) {
    this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe(data => this.datos = data);
  }
}
