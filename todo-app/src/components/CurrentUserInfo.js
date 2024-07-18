import {useRecoilValue} from "recoil";
import {currentUserNameQuery} from "../atoms/userAtoms";

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameQuery);

  return (
    <div>{userName}</div>
  );
};

export default CurrentUserInfo;