import { useMutation } from "react-query";
import Request, { BASE_URL } from "./index";

export const useLogin = () => {
  return useMutation((agrs) => Request(`${BASE_URL}user/login`), {
    method: "POST",
  });
};
