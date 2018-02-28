import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ItemService } from './../item.service';

@Component({
  selector: 'app-item-patrimony',
  templateUrl: './item-patrimony.component.html',
  styleUrls: ['./item-patrimony.component.css']
})
export class ItemPatrimonyComponent implements OnInit {

  itens = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {

    this.listAll();
  }

  listAll(){
    this.itemService.list().subscribe(data => this.itens = data)
  }
  add(frm:FormControl){
    console.log(frm.value);

    this.itemService.addiction(frm.value)
      .subscribe(() => {
        frm.reset();
        this.listAll();
       });
  }

}
