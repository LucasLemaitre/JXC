import { Component, Input, OnInit } from '@angular/core';
import { IData } from 'src/model/IData';
import { ActivatedRoute } from '@angular/router';
import { DataApiService } from '../dataApiService';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() dataList: IData[] = [];

  constructor(private dataApiService: DataApiService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.url.subscribe(res => {
      let toGet = res[0].path
      if (toGet === "monsters"){
        this.getMonsters()
      } else if (toGet === "creatures"){
        this.getCreatures()
      }
    });
  }

  getAll(): void{
    this.dataApiService.getAll()
      .subscribe({
        next: (data) => this.dataList = data,
        error: (e) => console.error(e),
        complete: () => console.info('end load all data')
      });
  }

  getCreatures() : void {
    this.dataApiService.getCreatures()
      .subscribe({
        next: (data)  => this.dataList = data,
        error: (e) => console.error(e),
        complete: () => console.info('end load all creatures')
      })
  }

  getMonsters() : void {
    this.dataApiService.getMonsters()
      .subscribe({
        next: (data)  => this.dataList = data,
        error: (e) => console.error(e),
        complete: () => console.info('end load all monsters')
      })
  }
}
