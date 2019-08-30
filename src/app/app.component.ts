import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  // enigmForm = new FormGroup({
  //   title: new FormControl(""),
  //   choices: new FormArray([
  //     new FormGroup({
  //       valid: new FormControl(false),
  //       value: new FormControl("")
  //     }),
  //     new FormGroup({
  //       valid: new FormControl(false),
  //       value: new FormControl("")
  //     })
  //   ])
  // });

  form = new FormGroup({
    food: new FormControl(),
    gps: new FormGroup({
      lat: new FormControl("", Validators.required),
      lng: new FormControl("", Validators.required),
      libelle: new FormControl("")
    })
    // media: new FormGroup({})
  });

  selectedMean: string;

  // get choices() {
  //   return this.enigmForm.get("choices") as FormArray;
  // }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.choices);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.enigmForm.value);
    console.log(this.form);
  }

  onSelectedMeanChange(e) {
    this.selectedMean = e.value;
  }
}
