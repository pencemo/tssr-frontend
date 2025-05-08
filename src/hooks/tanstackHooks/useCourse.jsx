import { courseService } from "@/API/services/courseService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAllCourse = () => {
  return useQuery({
    queryKey: ["coures_all", ],
    queryFn: () => courseService.getCourses(),
    keepPreviousData: true,
  });
};

// export const useCreateSutdyCenter = () => {
//   const queryClient= useQueryClient();
// return useMutation({
//   mutationFn: (data) => {
//     return studyCentreService.createStudyCenter(data);
//   },
//   onSuccess: () => {
//     queryClient.invalidateQueries("studycentre");
//   },
// });
// }

// export const useLogin = () => {
//   const queryClient= useQueryClient();
// return useMutation({
//   mutationFn: (data) => {
//     return authService.login(data);
//   },
//   onSuccess: () => {
//     queryClient.invalidateQueries("user");
//   },
// });
// }


