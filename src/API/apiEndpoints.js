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
  },
  COURSE: {
    GET_ALL: "/api/course/getallcourses",
    GET_SUB: '/api/subject/getAllSubjects'
  },

};
