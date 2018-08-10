import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {RequestDataConfig} from '../../config/requestData.config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.css']
})

export class DashboardComponent implements OnInit {
  public itemsList: Array<any>;
  public tableHeaders: Array<any>;
  public requests: any;
  public requestData: string;
  public slicer: any;
  public perPage: number;

  constructor(private postService: PostsService, private router: Router) {

  }

  ngOnInit() {
    this.perPage = 10;
    this.slicer = {
      startItem: 0,
      endItem: this.perPage
    };
    this.requests = RequestDataConfig;
    this.requestData = RequestDataConfig.POSTS.value;
    this.getAll(this.requestData);
  }

  public getAll(requestData): void {
    this.postService.getAll(requestData).subscribe((response: any) => {
      this.getHeaders(response);
      this.itemsList = response;
    });
  }

  public getHeaders(response): void {
    this.tableHeaders = Object.keys(response[0]);
  }

  public changeRequest(value): void {
    this.getAll(value);
    this.requestData = value;
    this.slicer.endItem = this.perPage;
  }

  public moreItems(): void {
    this.slicer.endItem += this.perPage;
  }

  public getInfoAboutUser(id): void {
    this.router.navigate(['user', id]).catch();
  }

  public editItem(item): void {
    this.router.navigate(['item', item.id, {type: this.requestData}]).catch();
  }
}
