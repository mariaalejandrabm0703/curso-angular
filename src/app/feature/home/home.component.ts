import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title= 'Upload files'
  convertedJson = ''
  constructor() { }

  ngOnInit() {
  }

  fileUpload(event: Event){
    const element = event.target as HTMLInputElement;
    let files = element.files;
    if (files) {
      console.log("FileUpload -> files", files);
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(files[0])
      fileReader.onload = (e) => {
        let binaryData = e.target.result;
        let workbook = XLSX.read(binaryData, {type: 'binary'});
        workbook.SheetNames.forEach(sheet =>{
          const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          this.convertedJson = JSON.stringify(data, undefined, 4);
        });
      }
    }
  }
}
