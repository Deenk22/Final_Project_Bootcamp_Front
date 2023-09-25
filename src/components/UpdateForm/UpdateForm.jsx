import UpdateFormView from "./UpdateFormView";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {useMutation} from "@tanstack/react-query";
import jwtDecode from "jwt-decode";
import axios from "axios";
import toastFunctions from "../../notifications/notificationService";

export default function UpdateForm() {
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function onSubmit(values, actions) {
    userPatch(values);
    actions.resetForm();
  }

  const mutation = useMutation({
    mutationFn: async (values) => {
      const {name, surname, email} = values;
      const user = await jwtDecode(token);
      console.log(user);
      return await axios.patch(
        `http://localhost:3000/user/${user.id}`,
        {
          name: name,
          surname: surname,
          email: email,
        },
        config
      );
    },
    onError: (err) => {
      if (err.response.status === 409) {
        toastFunctions.userAlreadyExists();
      }
      if (err.response.status === 500) {
        toastFunctions.internalServerError();
      }
    },
    onSuccess: (data) => {
      return data;
    },
  });

  async function userPatch(values) {
    try {
      const {data, status} = await mutation.mutateAsync(values);
      if (status === 200) {
        const {message} = data;
        toastFunctions.userSuccessfullyUploaded(message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return <UpdateFormView userPatch={userPatch} onSubmit={onSubmit} />;
}
