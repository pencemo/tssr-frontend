export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    ISOUTH: "/api/auth/isAuth",
    REGISTER: "/api/auth/create",
  },
  STUDY_CENTERS: {
    VERIFIED: "/api/studycenter/getVerifiedStudyCenters",
    GET_ONE: "/api/studycenter/getStudyCenterById",
    CREATE: "/api/studycenter/addStudyCenter",
    UPDATE: "/api/studyCenter/updateStudyCenter",
    DELETE: "/api/studyCenters/:id",
    GET_STUDYCENTER_FOR_EXCEL: "/api/studycenter/getAllStudyCenterForExcel",
  },
  COURSE: {
    GET_ALL: "/api/course/getAllCourses",
    ADD_COURSE: "/api/course/create",
    EDIT: "/api/course/update",
    GET_SUB: "/api/subject/getAllSubjects",
  },
  BATCH: {
    CREATE: "api/batch/createBatch",
    UPDATE_STATUS: "api/batch/editAdmissionStatus",
    GET_COURSE: "api/batch/getBatchesOfCourse",
  },
  ADMISSION: {
    OPEN_ADMISSION: "api/batch/editBatchDate",
    OPENED_ADMISSION: "api/batch/admissionOpened",
    CLOSED_ADMISSION: "api/batch/admissionNotOpen",
    SHEDULED_ADMISSION: "api/batch/admissionScheduled",
    CHANGE_ADMISSION_STATUS: "api/batch/toggleBatchStatus",
  }
};
 