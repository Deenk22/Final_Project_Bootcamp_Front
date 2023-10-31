import UpdateFormView from "./UpdateFormView";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {useMutation} from "@tanstack/react-query";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";

export default function UpdateForm({name, surname, email}) {
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
      return await axios.patch(
        `http://localhost:3000/user/${user.id}`,
        {
          name,
          surname,
          email,
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

  async function userPatch(values) {
    try {
      const {data, status} = await mutation.mutateAsync(values);
      if (status === 200) {
        const {message} = data;
        doneNotification(message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UpdateFormView
      userPatch={userPatch}
      onSubmit={onSubmit}
      name={name}
      surname={surname}
      email={email}
    />
  );
}
