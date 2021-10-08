import { Component, OnInit } from "@angular/core";
import * as XLSX from "xlsx";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  title = "Upload files";
  convertedJson = "";
  totalJson = { sheets: new Array()};

  constructor() {}

  ngOnInit() {}

 fileUpload(event: Event) {
  //  debugger;
    const element = event.target as HTMLInputElement;
    let files = element.files;
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(files[0]);

    fileReader.onload = async (e)  => {
      let binaryData = e.target.result;
      let workbook =  await XLSX.read(binaryData, { type: "binary" });
      workbook.SheetNames.forEach((sheet) => {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        this.totalJson.sheets.push(data)
        // this.convertedJson = JSON.stringify(data, undefined, 4);
      });
        console.log(this.totalJson)
      };
    }
  }
}
