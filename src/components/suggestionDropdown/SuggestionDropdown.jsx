import axios from "axios";
import React, { useEffect, useState } from "react";

const SuggestionDropdown = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/users?limit=100"
        );
        if (response) {
          const filteredUsers = response.data.users.map((user) => {
            return user.firstName;
          });
          setUsers(filteredUsers);
        }
      } catch (error) {
        setErrorMessage(error.message);
        console.error(errorMessage);
      }
    };
    fetchUsers();
  }, []);

  const filterforSearch = users.filter((user) =>
    user.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  useEffect(() => {
    console.log(filterforSearch);
  }, [filterforSearch]);
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center">
      <div className="">
        <p>Search User</p>
        <div className="flex gap-4 justify-center items-center">
          <input
            type="text"
            className="text-black border border-emerald-400 focus:outline-emerald-800 focus:outline-2 active:outline-2 active:outline-emerald-600 rounded-xl p-2"
            value={searchValue}
            placeholder="enter user name"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            onClick={() => setSearchValue("")}
            className="bg-green-600 rounded-lg border-none hover:border hover:text-blue-950 hover:bg-teal-200 text-white"
          >
            clear
          </button>
        </div>
      </div>
      <ul
        className={
          searchValue.length
            ? `w-2/4 border-2 border-gray-600 rounded-lg p-8 flex flex-col justify-center items-center divide-y-2 divide-gray-600`
            : null
        }
      >
        {searchValue.length ? (
          filterforSearch && filterforSearch.length > 0 ? (
            filterforSearch.map((user, index) => (
              <li
                className="w-full leading-10"
                key={index}
                onClick={() => setSearchValue(user)}
              >
                {user}
              </li>
            ))
          ) : (
            <p>Can't find user</p>
          )
        ) : null}
      </ul>
    </div>
  );
};

export default SuggestionDropdown;
