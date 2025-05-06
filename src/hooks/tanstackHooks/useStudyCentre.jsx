import { studyCentreService } from "@/API/services/studyCenterService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useStudyCentre = (page, limit) => {
  return useQuery({
    queryKey: ["studycentre", page, limit],
    queryFn: () => studyCentreService.getStudyCenters(page, limit),
    keepPreviousData: true,
  });
};

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


