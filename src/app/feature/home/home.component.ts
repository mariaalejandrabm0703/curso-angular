import { HomeService } from "./services/home.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  title = "Upload files";
  totalJson = { sheets: new Array() };

  constructor(private services: HomeService) {}

  ngOnInit() {}

  async fileUpload(event: Event) {
    console.log("llega this.fileUpload");
    console.log('llegan los files',event[0]);

    this.totalJson = { sheets: new Array() };
    const form_data = new FormData();
    form_data.append(event[0].name, event[0], "csv");
    console.log(form_data);

    this.services.sendFile(form_data).subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
