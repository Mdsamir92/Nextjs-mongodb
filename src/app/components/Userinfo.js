"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Userinfo() {
  const { data: session } = useSession();

  return (
    <div >
      <div>
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button onClick={() => signOut()} >
          Log Out
        </button>
      </div>
    </div>
  );
}