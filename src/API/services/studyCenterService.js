import axiosInstance from "../axiosConfig";
import { API_ENDPOINTS } from "../apiEndpoints";

export const studyCentreService = {
  getStudyCenters: async ({page, limit}) => {
    const response = await axiosInstance.get(API_ENDPOINTS.STUDY_CENTERS.VERIFIED, {
      params: {
        page,
        limit,
      }
    });
    return response.data;
},
};
