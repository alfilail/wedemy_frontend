import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '@bootcamp-elearning/services/class.service';
import { ROLE } from '@bootcamp-homepage/constants/roles';
import { AuthService } from '@bootcamp-homepage/services/auth.service';
import { VIEW_TYPE } from '../../../constants/view-type';
import * as moment from 'moment';
import { fakedata } from './fakedata';
import { PresenceService } from '@bootcamp-elearning/services/presence.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
})
export class ModuleComponent implements OnInit {
  idDetailClass: string;
  roleCode: string;

  roles = ROLE;
  viewType = VIEW_TYPE;
  selectedView = VIEW_TYPE.VIEW_ONLY;

  modules: any;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private classService: ClassService,
    private presenceService: PresenceService) { }

  ngOnInit(): void {
    this.roleCode = this.authService.getRole();
    this.route.params.subscribe(params => {
      this.idDetailClass = params['idDetailClass'];
      this.getDetail(this.idDetailClass);
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
    let startTime = this.modules.detailClass.startTime;
    let endTime = this.modules.detailClass.endTime;
    this.modules.modulesAndMaterials.forEach(val => {
      val.learningMaterials.forEach(learningMaterial => {
        if (this.roleCode === ROLE.PARTICIPANT) {
          console.log('Role anda adalah Participant');
          // if (true) {
          if (!learningMaterial.doesParticipantPresent) {
            if (learningMaterial.isUserOnTime) {
              if (learningMaterial.doesTutorPresent) {
                // Button Absen
                learningMaterial.statusPresent = {
                  type: 'btn',
                  style: 'success',
                  msg: 'Hadir',
                  status: 400
                }
                console.log('Bisa Absen');
              } else {
                // Tutor belum menghadiri kelas
                learningMaterial.statusPresent = {
                  type: 'badge',
                  style: 'info',
                  msg: 'Tutor Belum Menghadiri Kelas',
                  status: 400
                }
                console.log('Tutor Belum Menghadiri Kelas');
              }
            } else {
              let scheduleDate = learningMaterial.learningMaterial.scheduleDate;
              let scheduleStarDateTime = moment(`${scheduleDate} ${startTime}`, "YYYY-MM-DD HH:mm");
              let scheduleEndDateTime = moment(`${scheduleDate} ${endTime}`, "YYYY-MM-DD HH:mm");
              let dateTimeNow = moment(new Date());
              console.log('Waktu Sekarang');
              // console.log(dateTimeNow.add(7, 'hours'));

              if (dateTimeNow.diff(scheduleStarDateTime, 'seconds') >= 0) {
                if (dateTimeNow.diff(scheduleEndDateTime, 'seconds') > 0) {
                  // Kelas Kadaluarsa
                  learningMaterial.statusPresent = {
                    type: 'badge',
                    style: 'danger',
                    msg: 'Anda Terlambat Menghadiri Kelas',
                    status: 400
                  }
                  console.log('Anda Terlambat');
                }
              } else {
                // Kelas belum dimulai
                learningMaterial.statusPresent = {
                  type: 'badge',
                  style: 'warning',
                  msg: 'Kelas Belum Dimulai',
                  status: 400
                }
                console.log('Kelas belum dimulai');
              }
            }
          } else {
            if (learningMaterial.isParticipantConfirmed) {
              if (learningMaterial.isParticipantAccepted) {
                // Telah menghadiri kelas
                learningMaterial.statusPresent = {
                  type: 'badge',
                  style: 'success',
                  msg: 'Telah Menghadiri Kelas',
                  status: 200
                }
                console.log('Telah menghadiri kelas');
              } else {
                learningMaterial.statusPresent = {
                  type: 'badge',
                  style: 'danger',
                  msg: 'Tutor menolak kehadiran anda',
                  status: 400
                }
                console.log('Tutor menolak kehadiran anda');
              }
            } else {
              learningMaterial.statusPresent = {
                type: 'badge',
                style: 'info',
                msg: 'Menunggu Konfirmasi Tutor',
                status: 400
              }
              console.log('Menunggu konfirmasi tutor');
            }
          }
        } else {
          console.log('Role anda adalah Tutor');
          if (!learningMaterial.doesTutorPresent) {
            console.log('Role anda adalah Tutor: doesTutorPresent');
            if (learningMaterial.isUserOnTime) {
              console.log('Role anda adalah Tutor: isUserOntime');
              // Button Absen
              learningMaterial.statusPresent = {
                type: 'btn',
                style: 'success',
                msg: 'Hadir',
                status: 400
              }
              console.log('Bisa Absen');
            } else {
              console.log('Role anda adalah Tutor: NOT isUserOntime');
              let scheduleDate = learningMaterial.learningMaterial.scheduleDate;
              let scheduleStarDateTime = moment(`${scheduleDate} ${startTime}`, "YYYY-MM-DD HH:mm");
              let scheduleEndDateTime = moment(`${scheduleDate} ${endTime}`, "YYYY-MM-DD HH:mm");
              let dateTimeNow = moment(new Date());
              // dateTimeNow.add(7, 'hours')
              if (dateTimeNow.diff(scheduleStarDateTime, 'seconds') >= 0) {
                console.log('Role anda adalah Tutor: dateTimeNow.diff(scheduleStarDateTime, seconds) >= 0)');
                if (dateTimeNow.diff(scheduleEndDateTime, 'seconds') > 0) {
                  console.log('Role anda adalah Tutor: dateTimeNow.diff(scheduleEndDateTime, seconds) > 0');
                  // Kelas Kadaluarsa
                  learningMaterial.statusPresent = {
                    type: 'badge',
                    style: 'danger',
                    msg: 'Anda Terlambat',
                    status: 400
                  }
                  console.log('Anda terlambat');
                }
              } else {
                // Kelas belum dimulai
                learningMaterial.statusPresent = {
                  type: 'badge',
                  style: 'warning',
                  msg: 'Kelas Belum Dimulai',
                  status: 400
                }
                console.log('Kelas belum dimulai');
              }
            }
          } else {
            // Telah menghadiri kelas
            learningMaterial.statusPresent = {
              type: 'badge',
              style: 'success',
              msg: 'Telah Menghadiri Kelas',
              status: 200
            }
            console.log('Telah menghadiri kelas');
          }
        }
      });
    })
  }

  present(idDetailModuleRegistration: string): void {
    let data = {
      idDetailModuleRegistration: {
        id: idDetailModuleRegistration
      },
      idUser: {
        id: this.authService.getUserId()
      }
    }

    this.presenceService.presence(data).subscribe(
      res => {

      },
      err => {
        console.log(err);
      }
    )
  }

  onChangeOperation(e): void {
    this.selectedView = e;
  }

}
