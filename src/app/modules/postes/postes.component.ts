import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.scss']
})
export class PostesComponent implements OnInit {
  bigChart = [];
  bigdonut = [];
  constructor( private postsService : PostsService) { }

  ngOnInit(): void {
     this.bigChart = this.postsService.bigChart();
     this.bigdonut = this.postsService.bigdonut();
  }

}
