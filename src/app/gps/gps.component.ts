import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-gps",
  templateUrl: "./gps.component.html",
  styleUrls: ["./gps.component.scss"]
})
export class GpsComponent implements OnInit {
  @Input() gps: FormGroup;
  constructor() {}

  ngOnInit() {}
}
