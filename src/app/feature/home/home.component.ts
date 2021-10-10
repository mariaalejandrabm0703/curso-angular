// import { HomeService } from "./services/home.service";
import { Component, OnInit } from "@angular/core";
// import * as XLSX from "xlsx";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  title = "Upload files";
  // convertedJson = "";
  totalJson = { sheets: new Array() };

  // constructor(private services: HomeService) {}

  ngOnInit() {}

  async fileUpload(event: Event) {
    this.totalJson = { sheets: new Array() };
    const element = event.target as HTMLInputElement;
    let files = element.files;
    const form_data = new FormData();
    form_data.append("nombreArchivo", files[0], "csv");
    console.log(files)
    console.log(files[0])

    // this.services.sendFile(form_data).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }
}
