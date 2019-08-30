import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";

import { AppComponent } from "./app.component";
import { MediaComponent } from "./media/media.component";
import { RequiredIfValidator } from "./services/required-if.directive";
import { GpsComponent } from "./gps/gps.component";

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    RequiredIfValidator,
    GpsComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MatRadioModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
