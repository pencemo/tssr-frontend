import { studyCentreService } from "@/API/services/studyCenterService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useStudyCentre = (page, limit, search) => {
  return useQuery({
    queryKey: ["studycentre", page, limit, search],
    queryFn: () => studyCentreService.getStudyCenters(page, limit, search),
    keepPreviousData: true,
  });
};

export const useCreateSutdyCenter = () => {
  const queryClient= useQueryClient();
return useMutation({
  mutationFn: (data) => {
    return studyCentreService.createStudyCenter(data);
  },
  onSuccess: () => {
    queryClient.invalidateQueries("studycentre");
  },
});
}

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


