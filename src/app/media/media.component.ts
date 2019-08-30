import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.scss"]
})
export class MediaComponent implements OnInit {
  form = new FormGroup({
    thumbnail: new FormControl()
  });
  constructor() {}

  ngOnInit() {}
}
