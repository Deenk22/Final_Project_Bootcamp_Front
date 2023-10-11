import axios from "axios";
import {useUserLoginContext} from "../../context/UserLoginContext";
import AccountView from "./AccountView";
import {useQuery} from "@tanstack/react-query";
import {convertDate} from "../../const/convertDate";

export default function Account() {
  const {user} = useUserLoginContext();

  const {id} = user ? user : null;
  const userUrl = `http://localhost:3000/user/${id}`;
  const getUserData = async () => {
    const {data} = await axios.get(userUrl);
    return data;
  };

  const {data: userData} = useQuery({
    queryKey: ["userId"],
    queryFn: getUserData,
    retry: 2,
  });

  const userAccountInfo = userData ? userData.data : null;
  const name = userAccountInfo?.map((user) => user.name);
  const surname = userAccountInfo?.map((user) => user.surname);
  const email = userAccountInfo?.map((user) => user.email);
  const avatar = userAccountInfo?.map((user) => user.avatar);
  const registerDate = userAccountInfo?.map((user) =>
    parseInt(user.registerDate)
  );
  const correctDate = convertDate(registerDate);

  return (
    <>
      <AccountView
        name={name}
        surname={surname}
        email={email}
        avatar={avatar}
        correctDate={correctDate}
      />
    </>
  );
}
