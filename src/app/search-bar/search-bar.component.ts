import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();

  public searchText: string = '';

  clearSearch() {
    this.searchText = '';
  }


  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchEvent.emit(inputElement.value);
  }
  
}
