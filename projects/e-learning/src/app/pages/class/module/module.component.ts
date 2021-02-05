import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearningMaterial } from '@bootcamp-elearning/models/learning-material';
import { ClassService } from '@bootcamp-elearning/services/class.service';
import { ROLE } from '@bootcamp-homepage/constants/roles';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { VIEW_TYPE } from '../../../constants/view-type';
import * as moment from 'moment';
import { fakedata } from './fakedata';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  idDetailClass: string;
  roleCode: string;

  statusPresent: any[];

  roles = ROLE;
  viewType = VIEW_TYPE;
  selectedView = VIEW_TYPE.VIEW_ONLY;

  modules: any;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private classService: ClassService) { }

  ngOnInit(): void {
    this.roleCode = this.authService.getRole();
    this.route.params.subscribe(params => {
      this.getDetail(params['idDetailClass']);
      this.idDetailClass = params['idDetailClass'];
    })

  }

  getDetail(idDtlClass: string): void {
    let idUser = this.authService.getUserId();
    let params = {
      idUser,
      idDtlClass
    }
    // Fake Data
    // this.modules = fakedata.data;
    // this.checkPresent();

    this.classService.getDetail(params).subscribe(
      res => {
        this.modules = res.data;
        console.log(res);
        this.checkPresent();
      },
      err => { console.log(err) }
    )
  }

  checkPresent(): void {
    this.modules.forEach(val => {
      let startTime = val.module.idDetailClass.startTime;
      let endTime = val.module.idDetailClass.endTime;
      val.learningMaterials.forEach(learningMaterial => {

        if (this.roleCode === ROLE.PARTICIPANT) {
          // if (true) {
          if (!learningMaterial.doesParticipantPresent) {
            if (learningMaterial.isUserOnTime) {
              if (learningMaterial.doesTutorPresent) {
                // Button Absen
                learningMaterial.statusPresent = {
                  type: 'btn',
                  style: 'success',
                  msg: 'Hadir'
                }
                console.log('Bisa Absen');
              } else {
                // Tutor belum menghadiri kelas
                learningMaterial.statusPresent = {
                  type: 'badge',
                  style: 'info',
                  msg: 'Tutor Belum Menghadiri Kelas'
                }
                console.log('Tutor Belum Menghadiri Kelas');
              }
            } else {
              let scheduleDate = learningMaterial.learningMaterial.scheduleDate;
              let scheduleStarDateTime = moment(`${scheduleDate} ${startTime}`, "YYYY-MM-DD HH:mm");
              let scheduleEndDateTime = moment(`${scheduleDate} ${endTime}`, "YYYY-MM-DD HH:mm");
              let dateTimeNow = moment(new Date());
              console.log('Waktu Sekarang');
              console.log(dateTimeNow.add(7, 'hours'));

              if (dateTimeNow.diff(scheduleStarDateTime, 'seconds') >= 0) {
                if (dateTimeNow.diff(scheduleEndDateTime, 'seconds') > 0) {
                  // Kelas Kadaluarsa
                  learningMaterial.statusPresent = {
                    type: 'badge',
                    style: 'danger',
                    msg: 'Anda Terlambat Menghadiri Kelas'
                  }
                  console.log('Anda Terlambat');
                }
              } else {
                // Kelas belum dimulai
                learningMaterial.statusPresent = {
                  type: 'badge',
                  style: 'warning',
                  msg: 'Kelas Belum Dimulai'
                }
                console.log('Kelas belum dimulai');
              }
            }
          } else {
            if (learningMaterial.isParticipantAccepted) {
              // Telah menghadiri kelas
              learningMaterial.statusPresent = {
                type: 'badge',
                style: 'success',
                msg: 'Telah Menghadiri Kelas'
              }
              console.log('Telah menghadiri kelas');
            } else {
              learningMaterial.statusPresent = {
                type: 'badge',
                style: 'info',
                msg: 'Menunggu Konfirmasi Tutor'
              }
              console.log('Menunggu konfirmasi tutor');
            }
          }

        } else {
          if (!learningMaterial.doesTutorPresent) {
            if (learningMaterial.isUserOnTime) {
              // Button Absen
              learningMaterial.statusPresent = {
                type: 'btn',
                style: 'success',
                msg: 'Hadir'
              }
              console.log('Bisa Absen');
            } else {
              let scheduleDate = learningMaterial.idLearningMaterial.scheduleDate;
              let scheduleStarDateTime = moment(`${scheduleDate} ${startTime}`, "YYYY-MM-DD HH:mm");
              let scheduleEndDateTime = moment(`${scheduleDate} ${endTime}`, "YYYY-MM-DD HH:mm");
              let dateTimeNow = moment(new Date());
              if (dateTimeNow.diff(scheduleStarDateTime, 'seconds') >= 0) {
                if (dateTimeNow.diff(scheduleEndDateTime, 'seconds') > 0) {
                  // Kelas Kadaluarsa
                  learningMaterial.statusPresent = {
                    type: 'badge',
                    style: 'danger',
                    msg: 'Anda Terlambat'
                  }
                  console.log('Anda terlambat');
                }
              } else {
                // Kelas belum dimulai
                learningMaterial.statusPresent = {
                  type: 'badge',
                  style: 'warning',
                  msg: 'Kelas Belum Dimulai'
                }
                console.log('Kelas belum dimulai');
              }
            }
          } else {
            // Telah menghadiri kelas
            learningMaterial.statusPresent = {
              type: 'badge',
              style: 'success',
              msg: 'Telah Menghadiri Kelas'
            }
            console.log('Telah menghadiri kelas');
          }
        }
      });
    })
  }


  onChangeOperation(e): void {
    this.selectedView = e;
  }

}
