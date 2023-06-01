import React, { useState } from "react";

export default function RegistrationForm() {
  const [user, setUser] = useState({
    userId: "1001",
    passWord: "1234",
    fname: "sachin tendulkar",
    address: "abc nashik road, nashik,400228 ",
    Country: "india",
    zipCode: "410206",
    email: "sachin@gmail.com",
    about: "Text",
    gender: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="my-5">
      <from className="w-50 p-3 d-flex flex-column justify-content-center mx-auto  border" onSubmit={submitHandler}>
        <h2 className="my-5 text-center">Registration Form</h2>
        <div className="mx-auto">
          <label className="d-flex justify-content-between gap-5">
            User Id:
            <input
              name="userId"
              value={user.userId}
              onChange={(e) => setUser({ ...user, userId: e.target.value })}
            />
          </label>
          <br />
          <label className="d-flex justify-content-between gap-5">
            Password:
            <input
              name="passWord"
              value={user.passWord}
              onChange={(e) => setUser({ ...user, passWord: e.target.value })}
            />
          </label>
          <br />
          <label className="d-flex justify-content-between gap-5">
            Full Name:
            <input
              name="fname"
              value={user.fname}
              onChange={(e) => setUser({ ...user, fname: e.target.value })}
            />
          </label>
          <br />
          <label className="d-flex justify-content-between gap-5">
            Address:
            <input
              name="address"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
          </label>
          <br />
          <label className="d-flex justify-content-between gap-5">
            Country:
            <input
              name="Country"
              value={user.Country}
              onChange={(e) => setUser({ ...user, Country: e.target.value })}
            />
          </label>
          <br />
          <label className="d-flex justify-content-between gap-5">
            Zip Code:
            <input
              name="zipCode"
              value={user.zipCode}
              onChange={(e) => setUser({ ...user, zipCode: e.target.value })}
            />
          </label>
          <br />
          <label className="d-flex justify-content-between gap-5">
            Email:
            <input
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </label>
          <br />
          <label className="d-flex justify-content-between gap-5">
            About:
            <input
              name="about"
              value={user.about}
              onChange={(e) => setUser({ ...user, about: e.target.value })}
            />
          </label>
          <br />
          <label className="d-flex justify-content-between gap-5">
            Language:
            <input type="checkbox" />
            English
            <input type="checkbox" />
            Non English
          </label>
          <br />
          <label className="d-flex justify-content-between gap-5">
            {" "}
            Gender:
            <input
              type="radio"
              name="gender"
              value={user.gender}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />{" "}
            Male:
            <input
              type="radio"
              name="gender"
              value={user.gender}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            />{" "}
            Female:
          </label>
        </div>
        <br />
        <br />
        <br />
        state data:{" "}
        {user.userId +
          "---" +
          user.passWord +
          " ---" +
          user.fname +
          "---" +
          user.address +
          "---" +
          user.Country +
          " ---" +
          user.zipCode +
          "---" +
          user.email +
          "---" +
          user.about +
          "---" +
          user.gender}{" "}
        <br /> <br />
        <button>submit</button>
      </from>
    </div>
  );
}
