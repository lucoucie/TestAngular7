export class FilterPeople  {

  filter(peopleObj: any, searchString: any) {
    const filteredPeople: any = [];
    let me: any = this;
    if (searchString) {
      (peopleObj).forEach(function(person: any) {
        if (person.name.toUpperCase().includes(searchString.toUpperCase())) {
          filteredPeople.push(person);
        }
      });
    }
    return filteredPeople;
  }
}
