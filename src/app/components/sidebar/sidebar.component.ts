import {Component, OnInit, Input} from '@angular/core';
import { PeopleService } from '../../services/peopleService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  public people = [];
  selectedPerson: any;
  rate: number;
  searchText: string;
  @Input() filteredPeople: any;
  @Input() searchString: any;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {

    this.searchText = '';
    this.peopleService.getPeople()
    .subscribe (
      people => {
        this.people = people;
        this.selectedPerson = this.people[0];
        this.peopleService.storage = people;
      }
    );
  }

  onSelect(person: any) {
    this.selectedPerson = person;
  }
}
