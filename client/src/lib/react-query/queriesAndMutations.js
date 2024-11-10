import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, loginUser, logoutUser } from "../api/apiFunctions";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => queryClient.invalidateQueries(["user"]),
  });
};

export const useLogoutUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // Function to log out the user
    mutationFn: logoutUser,
    // On successful logout, invalidate the "user" query
    onSuccess: () => queryClient.invalidateQueries(["user"]),
  });
};
