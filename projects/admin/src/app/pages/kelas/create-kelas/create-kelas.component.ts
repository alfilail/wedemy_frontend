import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classes } from '@bootcamp-admin/model/classes';
import { DetailClasses } from '@bootcamp-admin/model/dtl-classes';
import { ClassHelper } from '@bootcamp-admin/model/helper/class-helper';
import { ModuleRegistrations } from '@bootcamp-admin/model/module-registrations';
import { Modules } from '@bootcamp-admin/model/modules';
import { Profiles } from '@bootcamp-admin/model/profiles';
import { Users } from '@bootcamp-admin/model/users';
import { ClassService } from '@bootcamp-admin/service/class.service';
import { DtlClassService } from '@bootcamp-admin/service/dtl-class.service';
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

  codeValid: boolean;
  codeErrMsg: string;

  nameValid: boolean;
  nameErrMsg: string;

  descValid: boolean;
  descErrMsg: string;

  kuotaValid: boolean;
  kuotaErrMsg: string;

  jamMulaiValid: boolean;
  jamMulaiErrMsg: string;

  jamSelesaiValid: boolean;
  jamSelesaiErrMsg: string;

  formData: FormData;
  file: String;
  endTimeValue: string;
  startTimeValue: string;
  isCreate: boolean;

  productDialog: boolean;
  rangeDates?: Date[];
  submitted: boolean;
  statuses: any[];

  moduleSelect = new Modules();
  tutorSelect: Users = new Users();

  listTutors: Users[] = []
  listModules: Modules[] = [];
  listDtlClass: DetailClasses[] = []
  listClass: ClassHelper[] = []

  class = new Classes();

  dtlClass = new DetailClasses();
  moduleRegistration = new ModuleRegistrations();
  classHelper = new ClassHelper();
  profileTutor = new Profiles();
  tutor: Users = new Users();

  statusActivity: string;
  modules: Modules[] = [];

  constructor(private dtlClassService: DtlClassService, private activeRoute: ActivatedRoute, private route: Router, private tutorService: UserService, private classService: ClassService, private moduleService: ModuleService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.statusActivity = params['activity']
      this.getModules()
      this.getTutors()
      if (this.statusActivity == 'create') {
        this.isCreate = true;
      } else {
        this.isCreate = false;
        this.getClass();
      }
    })
  }

  getClass(): void {
    this.classService.getClassById(this.statusActivity).subscribe(val => {
      this.class = val.data;
    })
  }

  getTutors(): void {
    this.tutorService.getUserByCode('ADM').subscribe(val => {
      this.listTutors = val.data
      console.log(val)
    })
  }

  onSelectEnd($event) {
    let hour = new Date($event).getHours();
    let min = new Date($event).getMinutes();

    if (hour < 10) {
      if (min < 10) {
        this.endTimeValue = `0${hour}:0${min}`;
      } else {
        this.endTimeValue = `0${hour}:${min}`;
      }
    } else {
      if (min < 10) {
        this.endTimeValue = `${hour}:0${min}`;
      } else {
        this.endTimeValue = `${hour}:${min}`;
      }
    }
  }

  onSelectStart($event) {
    let hour = new Date($event).getHours();
    let min = new Date($event).getMinutes();

    if (hour < 10) {
      if (min < 10) {
        this.startTimeValue = `0${hour}:0${min}`;
      } else {
        this.startTimeValue = `0${hour}:${min}`;
      }
    } else {
      if (min < 10) {
        this.startTimeValue = `${hour}:0${min}`;
      } else {
        this.startTimeValue = `${hour}:${min}`;
      }
    }
  }

  getModules() {
    this.moduleService.getModules().subscribe(val => {
      this.listModules = val.data;
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

    let kelas = new Classes();
    kelas = this.class
    kelas.idTutor = this.tutorSelect

    let dtlClass = new DetailClasses();
    dtlClass.idClass = kelas;
    dtlClass.endTime = this.endTimeValue
    dtlClass.startTime = this.startTimeValue

    if (this.rangeDates != undefined) {
      dtlClass.startDate = this.formatDate(this.rangeDates[0])
      dtlClass.endDate = this.formatDate(this.rangeDates[1])
    }

    console.log(this.startTimeValue)
    console.log(this.endTimeValue)

    if (this.startTimeValue > this.endTimeValue) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Jam berakhir tidak boleh lebih awal" })
    } else {
      if (this.statusActivity == 'create') {
        console.log('insert')

        this.modules.push(this.moduleSelect)

        let classHelper = new ClassHelper();
        classHelper.detailClass = dtlClass
        classHelper.clazz = kelas
        classHelper.module = this.modules

        this.listClass.push(classHelper)
        this.classHelper = classHelper
      } else {
        console.log('update')
        this.updateClass();
      }
    }
  }

  saveClass() {
    console.log(this.classHelper)
    this.formData.append("body", JSON.stringify(this.classHelper));
    this.classService.insertClasses(this.formData).subscribe(val => {
      this.route.navigateByUrl("/admin/kelas-aktif")
    })
  }

  deleteList(index: number): void {
    this.listClass.splice(index, 1)
  }

  updateClass() {
    this.class.id = this.statusActivity
    this.formData.append("body", JSON.stringify(this.listClass));

    this.classService.updateClass(this.formData).subscribe(val => {
      this.route.navigateByUrl('/admin/kelas-aktif')
    })
  }

  validate(event: string, col: string) {
    if (event.length == 0) {
      if (col == 'code') {
        this.codeValid = false;
        this.codeErrMsg = 'kode tidak boleh kosong'
      } else if (col == 'nama') {
        this.nameValid = false;
        this.nameErrMsg = 'nama tidak boleh kosong'
      } else if (col == 'desc') {
        this.descValid = false;
        this.descErrMsg = 'deskripsi tidak boleh kosong'
      } else if (col == 'kuota') {
        this.kuotaValid = false;
        this.kuotaErrMsg = 'kuota peserta tidak boleh kosong'
      }
    } else {
      if (col == 'code') {
        this.codeValid = true;
      } else if (col == 'nama') {
        this.nameValid = true;
      } else if (col == 'desc') {
        this.descValid = true;
      } else if (col == 'kuota') {
        this.kuotaValid = true;
      }
    }
  }
}
