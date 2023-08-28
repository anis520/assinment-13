"use client";
// import { headers } from "next/headers";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [theme, setheme] = useState(null);
  const [user, setuser] = useState(null);
  // const headersList = headers();
  // const referer = headersList.get("theme");
  const handle = async () => {
    const res = await fetch("http://localhost:3000/api/preference");
    const data = await res.json();
    setheme(data.theme);
    setuser(data.user);
    console.log(data);
  };

  return (
    <div className={`${theme}`}>
      <div className="p-20 bg-gray-100 w-screen h-screen dark:text-white dark:bg-slate-800">
        <p className="fixed top-2 right-2 bg-stone-800  dark:bg-white px-2 rounded-md cursor-pointer text-white dark:text-gray-800   font-semibold  ">
          {theme ? theme : "light"}
        </p>
        <div className="bg-gray-400 p-5 rounded-lg">
          <p className="text-2xl font-semibold">Welcome to this app</p>
          <button
            className="font-semibold text-xl bg-indigo-400 text-white  px-2 rounded-md my-3"
            onClick={handle}
          >
            click
          </button>

          {user ? (
            <>
              <p>
                <span>Name :</span> {user?.name}
              </p>
              <p>
                <span>Id :</span> {user?.id}
              </p>
            </>
          ) : (
            <p>no user found</p>
          )}
        </div>
      </div>
    </div>
  );
}
