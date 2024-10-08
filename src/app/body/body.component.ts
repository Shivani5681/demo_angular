import { Component } from '@angular/core';
import { restList } from '../Models/mockData';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  searchText = new FormControl('');
  filteredData: any[] = [];
  resData: any[] = restList; // Use mock data

  loggedInUser = 'John Doe';

  ngOnInit(): void {
    this.filteredData = this.resData;
    console.log(restList, "Rest lIST" , this.resData)
  }

  filterData(): void {
    const searchValue = this.searchText?.value?.toLowerCase() || '';
    this.filteredData = this.resData.filter((res) =>
      res.name.toLowerCase().includes(searchValue)
    );
    this.searchText.setValue('');
  }

  filterTopRated(): void {
    this.filteredData = this.resData.filter((rest) => rest.avgRating > 4);
  }

  refreshData(): void {
    this.filteredData = this.resData;
    this.searchText.setValue('');
  }

  updateUserName(newName: string): void {
    this.loggedInUser = newName;
  }
}
