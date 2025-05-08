export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    ISOUTH: "/api/auth/isAuth",
    REGISTER: "/api/auth/create",
  },
  STUDY_CENTERS: {
    VERIFIED: "/api/studycenter/getVerifiedStudyCenters",
    GET_ONE: "/api/studycenter/:id",
    CREATE: "/api/studycenter/addStudyCenter",
    UPDATE: "/api/studyCenters/:id",
    DELETE: "/api/studyCenters/:id",
  },
  COURSE: {
    GET_ALL: "/api/course/getallcourses",
  }
};
