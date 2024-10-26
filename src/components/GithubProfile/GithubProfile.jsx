import axios from "axios";
import { useEffect, useState } from "react";

const GithubProfile = ({ url }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [userName, setUserName] = useState("OneClickTechy");
  const [userProfile, setUserProfile] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchUserProfile = async (url, userName) => {
    try {
      const response = await axios.get(`${url}/${userName}`);
      if (response.data) {
        setUserProfile(response.data);
        setErrorMessage(null);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
      setErrorMessage("User not found or error occurred.");
      setUserProfile(null); // Clear the profile on error
    }
  };
  useEffect(() => {
    fetchUserProfile(url, userName);
    console.log(userProfile);
  }, [userName, url]);
  const handleSubmit = async () => {
    if (usernameInput.trim() === "") {
      alert("please provide user name or id");
      return;
    }
    setUserName(usernameInput);
    setUsernameInput("");
  };
  return (
    <div className=" w-full min-h-screen flex flex-col justify-start items-center gap-4 p-8">
        <div className="">

      <input
        type="text"
        name="github-username"
        id="github-username"
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
        placeholder="enter github profile name"
      />
      <button onClick={handleSubmit}>Search</button>
        </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {userProfile && (
        <div className="flex flex-col gap-4 justify-center items-center bg-teal-400 w-full sm:w-2/3 md:w-1/3 p-4 rounded-xl shadow-2xl shadow-gray-400">
          <h2 className="font-extrabold text-4xl text-center w-full text-blue-950">{userProfile.name || userProfile.login}</h2>
          <img
            className="rounded-full border-2 border-gray-500 w-52 h-52"
            src={userProfile.avatar_url}
            alt={`${userProfile.name}'s avatar`}
            width={200}
            height={200}
          />
          <p>Followers: {userProfile.followers}</p>
          <p>Public Repos: {userProfile.public_repos}</p>
          <a
            className="border-2 border-gray-500 px-4 py-2 cursor-pointer"
            href={userProfile.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;
