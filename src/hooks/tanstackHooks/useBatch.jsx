import { batchService } from "@/API/services/batchService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useBatchesOfCourse = (id) => {
  return useQuery({
    queryKey: ["batch", ],
    queryFn: () => batchService.getBatchesOfCourse(id),
    keepPreviousData: true,
  });
};

export const useCreateBatch = () => {
  const queryClient= useQueryClient();
return useMutation({
  mutationFn: ({data, courseId}) => {
    return batchService.createBatch(data, courseId);
  },
  onSuccess: () => {
    queryClient.invalidateQueries("batch");
  },
});
}
export const useUpdateStatusOfBatch = () => {
  const queryClient= useQueryClient();
return useMutation({
  mutationFn: ({data, batchId}) => {
    return batchService.updateStatus(data, batchId);
  },
  onSuccess: () => {
    queryClient.invalidateQueries("batch");
  },
});
}


