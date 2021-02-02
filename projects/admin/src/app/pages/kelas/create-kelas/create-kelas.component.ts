import { Component, OnInit } from '@angular/core';
import { Classes } from '@bootcamp-admin/model/classes';
import { DetailClasses } from '@bootcamp-admin/model/dtl-classes';
import { ClassHelper } from '@bootcamp-admin/model/helper/class-helper';
import { ModuleRegistrations } from '@bootcamp-admin/model/module-registrations';
import { Modules } from '@bootcamp-admin/model/modules';
import { Profiles } from '@bootcamp-admin/model/profiles';
import { Users } from '@bootcamp-admin/model/users';
import { ClassService } from '@bootcamp-admin/service/class.service';
import { ModuleService } from '@bootcamp-admin/service/module.service';
import { UserService } from '@bootcamp-admin/service/user.service';
import * as moment from 'moment';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-kelas',
  templateUrl: './create-kelas.component.html',
  styleUrls: ['./create-kelas.component.scss']
})
export class CreateKelasComponent implements OnInit {

  formData: FormData;
  file: String;
  endTimeValue: string;
  startTimeValue: string;

  productDialog: boolean;
  rangeDates: Date[];
  submitted: boolean;
  statuses: any[];

  moduleSelect = new Modules();
  tutorSelect: Users = new Users();

  listTutors: Users[] = []
  listModules: Modules[] = [];
  listDtlClass: DetailClasses[] = []
  listModuleRegistration: ModuleRegistrations[] = []

  class = new Classes();
  module = new Modules();
  dtlClass = new DetailClasses();
  moduleRegistration = new ModuleRegistrations();
  classHelper = new ClassHelper();
  profileTutor = new Profiles();
  tutor: Users = new Users();

  modules: Modules[] = [];

  constructor(private tutorService: UserService, private classService: ClassService, private moduleService: ModuleService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.getModules()
    this.getTutors()
  }

  getTutors(): void {
    this.tutorService.getUserByCode('TTR').subscribe(val => {
      this.listTutors = val
      console.log(val)
    })
  }

  onSelectEnd($event) {
    let hour = new Date($event).getHours();
    let min = new Date($event).getMinutes();
    if (min < 10) {
      this.endTimeValue = `${hour}:0${min}`;
    } else {
      this.endTimeValue = `${hour}:${min}`;
    }
  }

  onSelectStart($event) {
    let hour = new Date($event).getHours();
    let min = new Date($event).getMinutes();
    if (min < 10) {
      this.startTimeValue = `${hour}:0${min}`;
    } else {
      this.startTimeValue = `${hour}:${min}`;
    }
  }

  getModules() {
    this.moduleService.getModules().subscribe(val => {
      this.listModules = val;
      console.log(val)
    })
  }

  formatDate(str: Date): string {
    let format = moment(str).format('YYYY-MM-DD');
    return format;
  }


  getFile(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      console.log(file);
      let data: FormData = new FormData();
      data.append('file', file);
      this.formData = data;
      this.file = file.name;
    }
  }

  addClass() {

    this.class.idTutor = this.tutorSelect

    this.dtlClass.idClass = this.class;
    this.dtlClass.endTime = this.endTimeValue
    this.dtlClass.startTime = this.startTimeValue
    this.dtlClass.endDate = this.formatDate(this.rangeDates[0])
    this.dtlClass.startDate = this.formatDate(this.rangeDates[1])

    this.moduleRegistration.idModule = this.moduleSelect
    this.moduleRegistration.idDetailClass = this.dtlClass
    this.modules.push(this.moduleSelect)

    this.listModuleRegistration.push(this.moduleRegistration);
  }

  saveClass() {
    this.classHelper.detailClass = this.dtlClass
    this.classHelper.clazz = this.class
    this.classHelper.module = this.modules

    this.formData.append("body", JSON.stringify(this.classHelper));
    this.classService.insertClasses(this.formData).subscribe(val => { })
  }

  deleteList(index: number): void {
    this.listModuleRegistration.splice(index, 1);
  }

}
