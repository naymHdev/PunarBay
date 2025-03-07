"use client";

import { useUser } from "@/contexts/UserContext";
import { getMyProfile } from "@/services/users";
import { IUser } from "@/types/user";
import { useEffect, useState } from "react";

const MyAccount = () => {
  const [isUser, setIsUser] = useState<IUser | null>(null);
  const { user } = useUser();

  useEffect(() => {
    if (!user?.userId) return;

    const fetchData = async () => {
      try {
        const userData = await getMyProfile(user.userId);
        setIsUser(userData);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [user?.userId]); // ✅ Include dependency

  console.log("isUser__", isUser);

  return (
    <div>
      <h1>My Account</h1>
      {isUser ? (
        <div>
          <p>Name: {isUser.name}</p>
          <p>Email: {isUser.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default MyAccount;
