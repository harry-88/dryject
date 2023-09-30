"use client";

import { useRouter } from "next/navigation";
import { UserContext } from "../context/user.context";
import React, { useContext, useEffect } from "react";

async function Home() {
  const { user } = useContext(UserContext);
  const { push } = useRouter();

  useEffect(() => {
    if (user && !user.loggedIn) {
      push("/auth/login");
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-2xl">
      <p></p>
    </main>
  );
}

export default Home;
