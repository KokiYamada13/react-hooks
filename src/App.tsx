import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
// import axios from "axios";
// import { User } from "./types/api/user";
// import { useState } from "react";
// import { UserProfile } from "./types/userProfile";

// const user = {
//   id: 1,
//   name: "どうぞ",
//   email: "@gmail",
//   address: "aefwaew"
// };

export default function App() {
  // const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>失敗</p>
      ) : loading ? (
        <p>loading.....</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
