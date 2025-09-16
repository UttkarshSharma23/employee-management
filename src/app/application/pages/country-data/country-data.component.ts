import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss']
})

export class CountryDataComponent implements OnInit {

  countryData: any[] = [];

  apiResponse = [
  {
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
  },
  {
    country: "USA",
    regions: [
      {
        region: "East Coast",
        states: [
          {
            state: "New York",
            districts: ["Manhattan", "Brooklyn"]
          },
          {
            state: "Massachusetts",
            districts: ["Boston", "Cambridge"]
          }
        ]
      },
      {
        region: "West Coast",
        states: [
          {
            state: "California",
            districts: ["Los Angeles", "San Francisco"]
          }
        ]
      }
    ]
  }
];

  ngOnInit() {
    // this._displayData();
    this._optimizedDisplayData();
  }


  // NOTE : BruteForce Approach
  private _displayData() {
    this.apiResponse.forEach(country => {
      country.regions.forEach(region => {
        region.states.forEach(state => {
          state.districts.forEach((district, dIndex) => {
            this.countryData.push({
              country: (dIndex === 0 && region === country.regions[0] && state === region.states[0])
                ? country.country
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
    });
   // console.log(this.countryData);
  }


  // NOTE : Optimized Approach
  private _optimizedDisplayData() {
  this.countryData = this.apiResponse.flatMap((country, cIndex) =>
    country.regions.flatMap((region, rIndex) =>
      region.states.flatMap((state, sIndex) =>
        state.districts.map((district, dIndex) => ({
          country: rIndex === 0 && sIndex === 0 && dIndex === 0 ? country.country : "",
          region: sIndex === 0 && dIndex === 0 ? region.region : "",
          state: dIndex === 0 ? state.state : "",
          district : district
        }))
      )
    )
  );
  //console.log(this.countryData);
}


}

