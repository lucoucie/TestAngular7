import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngbd-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class NgbdRatingComponent implements OnInit {
  @Input() rating: any;
  constructor() {
  }

  ngOnInit() {
  }
}
