import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  public datamajor: Array<any>=[];
  public namegroup: any = null;

  constructor(private http: HttpService) {

  }

  ngOnInit(): void {}
  public getMajor = async () => {
    let getData: any = await this.http.get("admin/branch");

    if (getData.connect) {
      if (getData['response']["rowCount"]>0) {
        this.datamajor = getData['response']['result'];
        console.log(this.datamajor)
      } else {
        this.datamajor = [];
      }
    } else {
      alert('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้');
    }
  };


  public namegroupch(acronym: any, code: any, name_th: any) {
    this.namegroup = acronym;
    console.log(this.namegroup);
  }

  public insertGroup = async () => {
    let getData: any = await this.http.get("admin/insertgroup");

    if (getData.connect) {
      if (getData['response']["rowCount"]>0) {
        this.datamajor = getData['response']['result'];
        console.log(this.datamajor)
      } else {
        this.datamajor = [];
      }
    } else {
      alert('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้');
    }
  };

}
