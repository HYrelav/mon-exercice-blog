import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postItemTitle: string;
  @Input() postItemContent: string;
  @Input() postItemLoveIts: number;
  @Input() postItemCreated_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    this.postItemLoveIts+=1;
  }

  onDontLoveIt(){
    this.postItemLoveIts-=1;
  }
}
