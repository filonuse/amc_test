import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.css']
})

export class ItemEditComponent implements OnInit {
  public currentItem: any;

  constructor(private activeRoute: ActivatedRoute, private itemService: ItemService, private router: Router) {
  }

  ngOnInit() {
    this.currentItem = {
      id: this.activeRoute.snapshot.params.id,
      type: this.activeRoute.snapshot.params.type
    };
    this.getById();
  }

  public getById(): void {
    this.itemService.getById(this.currentItem).subscribe((response: any) => {
      this.currentItem = Object.assign(this.currentItem, response);
    });
  }

  public getBack(): void {
    this.router.navigate(['dashboard']).catch();
  }

  public uploadChanges(): void {
    this.itemService.edit(this.currentItem).subscribe(() => {
      this.getBack();
    });
  }
}
