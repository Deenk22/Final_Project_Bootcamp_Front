import UpdatePassFormView from "./UpdatePassFormView";
import jwtDecode from "jwt-decode";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";
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
          currentPassword,
          newPassword,
        },
        config
      );
    },
    onError: (err) => {
      if (err.response.status === 409) {
        const {message} = err.response.data;
        errorNotification(message);
      }
      if (err.response.status === 500) {
        const {message} = err.response.data;
        errorNotification(message);
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
        doneNotification(message);
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
