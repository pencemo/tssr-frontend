import axiosInstance from "../axiosConfig";
import { API_ENDPOINTS } from "../apiEndpoints";

export const studyCentreService = {
  getStudyCenters: async (page, limit, search) => {
    const response = await axiosInstance.get(
      API_ENDPOINTS.STUDY_CENTERS.VERIFIED,
      {
        params: {
          page,
          limit,
          search,
        },
      }
    );
    return response.data;
  },
  createStudyCenter: async (studyCenter) => {
    const response = await axiosInstance.post(
      API_ENDPOINTS.STUDY_CENTERS.CREATE,
      studyCenter
    )
    return response.data;
  }
};
