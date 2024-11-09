import { Country } from '../../interfaces/country';
import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countries:Country[]=[];
  constructor(private countriesService: CountriesService) {}

  SearchByCapital(term: string) {
    console.log('term desde by-capital:>> ', term);
    this.countriesService.searchCapital(term).subscribe((countries) => {
      console.log('countries by-capital :>> ', countries);
      this.countries = countries;
    });
  }
}
