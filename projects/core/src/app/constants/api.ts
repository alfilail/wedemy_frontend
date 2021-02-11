const API = {
<<<<<<< HEAD
  WEDEMY_HOST_DOMAIN: 'http://192.168.15.183:8080',
=======
  WEDEMY_HOST_DOMAIN: 'http://192.168.13.66:8080',
>>>>>>> 27c7ef44152c99bef0dd5c003ffb7a9f97111f5a

  /* 1. API of Tutor & Participant */

  // 1.A. Class
  WEDEMY_CLASS_QUERY_PATH: '/module-registration/module-and-materials',
  WEDEMY_CLASS_ENROLLMENT_TUTOR_QUERY_PATH: '/detail-class/tutor',
  WEDEMY_CLASS_ENROLLMENT_PARTICIPANT_QUERY_PATH: '/class-enrollment/user',

  // 1.B. Forum
  WEDEMY_FORUM_QUERY_PATH: '/forum',
  WEDEMY_FORUM_MATERIAL_QUERY_PATH: '/forum/material',
  WEDEMY_FORUM_REPLY_QUERY_PATH: '/detail-forum',

  // 1.C. Material
  WEDEMY_MATERIAL_QUERY_PATH: '/learning-material',
  WEDEMY_DETAIL_MODULE_QUERY_PATH: '/detail-module-rgs',
  WEDEMY_MATERIAL_TYPE_QUERY_PATH: '/learning-material-type',

  // 1.D Presence
  WEDEMY_PRESENCE_QUERY_PATH: '/presence',
  WEDEMY_PARTICIPANT_PRESENCE_QUERY_PATH: '/approvement-renewal/participant-presence',
  WEDEMY_APPROVEMENT_PARTICIPANT_PRESENCE_QUERY_PATH: '/approvement-renewal/participant-approvement',

  // 1.E Assignment
  WEDEMY_ASSIGNMENT_QUERY_PATH: '/evaluation',
  WEDEMY_ASSIGNMENT_SCORE_QUERY_PATH: '/evaluation/score-submission',

  // 1.F Answer
  WEDEMY_ANSWER_QUERY_PATH: '/assignment-submission/participant',
  WEDEMY_ANSWER_UPLOAD_QUERY_PATH: '/assignment-submission'

}

export default API;