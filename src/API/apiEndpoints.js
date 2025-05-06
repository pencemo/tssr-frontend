export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    ISOUTH: "/api/auth/isAuth",
    REGISTER: "/api/auth/create",
  },
  STUDY_CENTERS: {
    VERIFIED: "/api/studycenter/getVerifiedStudyCenters",
    GET_ONE: "/api/studyCenters/:id",
    CREATE: "/api/studyCenters",
    UPDATE: "/api/studyCenters/:id",
    DELETE: "/api/studyCenters/:id",
  },
  USERS: {
    GET_ALL: "/api/users",
  }
};
