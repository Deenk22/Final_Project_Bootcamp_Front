import UpdatePassFormView from "./UpdatePassFormView";
import {useMutation} from "@tanstack/react-query";
import jwtDecode from "jwt-decode";
import axios from "axios";
import toastFunctions from "../../notifications/notificationService";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";

export default function UpdatePassForm() {
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function onSubmit(values, actions) {
    passPatch(values);
    actions.resetForm();
  }

  const mutation = useMutation({
    mutationFn: async (values) => {
      const {currentPassword, newPassword} = values;
      const user = await jwtDecode(token);
      return await axios.patch(
        `http://localhost:3000/user/password/${user.id}`,
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
        },
        config
      );
    },
    onError: (err) => {
      if (err.response.status === 409) {
        toastFunctions.errorPasswordMatch();
      }
      if (err.response.status === 500) {
        toastFunctions.internalServerError();
      }
    },
    onSuccess: (data) => {
      return data;
    },
  });

  async function passPatch(values) {
    try {
      const {data, status} = await mutation.mutateAsync(values);
      if (status === 200) {
        const {message} = data;
        toastFunctions.passwordSuccessfullyUpdated(message);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <>
      <UpdatePassFormView passPatch={passPatch} onSubmit={onSubmit} />
    </>
  );
}
