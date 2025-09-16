import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss']
})

export class CountryDataComponent implements OnInit {

  countryData: any[] = [];

  apiResponse = {
    country: "India",
    regions: [
      {
        region: "North",
        states: [
          {
            state: "Delhi",
            districts: ["New Delhi", "Central Delhi", "South Delhi"]
          },
          {
            state: "Haryana",
            districts: ["Gurgaon", "Faridabad"]
          }
        ]
      },
      {
        region: "West",
        states: [
          {
            state: "Rajasthan",
            districts: ["Jaipur", "Jodhpur"]
          }
        ]
      }
    ]
  };

  ngOnInit() {
    // this._displayData();
    this._optimizedDisplayData();
  }


  // NOTE : BruteForce Approach
  private _displayData() {
    this.apiResponse.regions.forEach(region => {
      region.states.forEach(state => {
        state.districts.forEach((district, dIndex) => {
          this.countryData.push({
            country: (dIndex === 0 && state === region.states[0] && region === this.apiResponse.regions[0])
              ? this.apiResponse.country
              : "",
            region: (dIndex === 0 && state === region.states[0])
              ? region.region
              : "",
            state: (dIndex === 0)
              ? state.state
              : "",
            district: district
          });
        });
      });
    });
    console.log(this.countryData);
  }


  // NOTE : Optimized Approach
  private _optimizedDisplayData() {
    this.countryData = this.apiResponse.regions.flatMap((region, rIndex) =>
      region.states.flatMap((state, sIndex) =>
        state.districts.map((district, dIndex) => ({
          country: rIndex === 0 && sIndex === 0 && dIndex === 0 ? this.apiResponse.country : "",
          region: sIndex === 0 && dIndex === 0 ? region.region : "",
          state: dIndex === 0 ? state.state : "",
          district
        }))
      ));
  //  console.log(this.countryData);
  }
}

