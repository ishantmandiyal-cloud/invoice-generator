import React from "react";

const Profile = () => {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
  const currentUser = storedUsers.filter((users) =>  users.email == loggedInUser.email )
  const isUserLoggedIn = () => {
    return localStorage.getItem("isLoggedIN") === "true";
  };
  return (
    <>
      <div className="max-w-md mx-auto px-4 py-16">
        {isUserLoggedIn() ? (
          <div className="bg-emerald-900/40 border border-emerald-800 rounded-xl p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-700 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
              {currentUser[0].name.charAt(0).toUpperCase()}
            </div>
            <h1 className="text-2xl font-bold text-white">
              {currentUser[0].name}
            </h1>
            <p className="text-emerald-300 mb-6">{currentUser[0].email}</p>

            <div className="text-left bg-emerald-950 border border-emerald-800 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-emerald-400">Name</span>
                <span className="text-white">{currentUser[0].name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-emerald-400">Email</span>
                <span className="text-white">{currentUser[0].email}</span>
              </div>
            </div>
          </div>
        ) : (
          <div> Please Log In, You are logged out</div>
        )}
      </div>
    </>
  );
};

export default Profile;
