import UpdateUserDataView from "./UpdateUserDataView";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";

export default function UpdateUserData() {
  const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));
  console.log(token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const mutation = useMutation({
    mutationFn: async (values) => {
      const {name, surname, email} = values;
      return await axios.patch(
        `http://localhost:3000/user/${token.id}`,
        {
          name: name,
          surname: surname,
          email: email,
        },
        config
      );
    },
    onSuccess: (data) => {
      return data;
    },
  });

  async function updateUser(values) {
    try {
      const {data, status} = await mutation.mutateAsync(values);
      if (status === 200) {
        const newUser = data;
        console.log(newUser);
      }
    } catch (err) {
      throw new Error(`something went wrong with the Sign-Up: ${err.message}`);
    }
  }

  return (
    <>
      <UpdateUserDataView updateUser={updateUser} />
    </>
  );
}
