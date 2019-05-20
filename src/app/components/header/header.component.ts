import {Component, OnInit} from '@angular/core';
import { PeopleService } from '../../services/peopleService';
import { FilterPeople } from '../../shared/filterPeople';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  peopleStore: any;
  searchString = '';
  filteredPeople = [];

  constructor(private peopleService: PeopleService, private filterPeople: FilterPeople) {
  }

  ngOnInit() {
  }

  search(event: any) {
    const me: any = this;
    me.peopleStore = me.peopleService.storage;
    this.filteredPeople = me.filterPeople.filter(me.peopleStore, me.searchString);
  }
  emptySearchString() {
    this.searchString = '';
  }
}
