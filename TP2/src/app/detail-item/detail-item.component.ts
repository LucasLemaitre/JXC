import { Component, getNgModuleById } from '@angular/core';
import { IData } from 'src/model/IData';
import { ActivatedRoute } from '@angular/router';
import { DataApiService } from '../dataApiService';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent {
  entry!: IData //Créature/monstre à afficher

  constructor(private dataApiService :DataApiService , private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( res => {
      //TODO
      let id = res.get("id");
      console.log(res)
      if(id) {
        this.getById(+id!)
      }
      //récupérer l'id passé dans l'URL
      //récupérer l'item correspondant à cet Id
    })
   
  }

  getById(id: number){
    this.dataApiService.getItem(id)
      .subscribe({
        next: (data)  => this.entry = data,
        error: (e) => console.error(e),
        complete: () => console.info('end load specific item')
      })

  }
}
