"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, CheckCircle, Mail, UserRound } from "lucide-react";
import { TUser } from "@/types/listings";
import { useState, useEffect } from "react";
import { IUser } from "@/types/user";
import { getMyProfile } from "@/services/users";

type TUserProps = {
  user: TUser;
  timeAgo: string;
};

const UserBox = ({ user, timeAgo }: TUserProps) => {
  const [isUser, setIsUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (!user?._id) return;

    const fetchData = async () => {
      try {
        const userData = await getMyProfile(user?._id);
        setIsUser(userData.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [user?._id]);
  // console.log('isUser__', isUser);

  return (
    <div className="w-full rounded-lg bg-white p-4">
      {/* Avatar */}
      <div className="flex justify-center">
        <Avatar className="w-16 h-16">
          <AvatarImage src={isUser?.profileImage} />
          <AvatarFallback>
            <UserRound size={32} />
          </AvatarFallback>
        </Avatar>
      </div>

      {/* User Info */}
      <div className="text-center mt-2">
        <h3 className="text-lg font-semibold">{isUser?.name}</h3>
        <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
          <MapPin className="text-[#1575B9] w-4 h-4" />{" "}
          {isUser?.address
            ? `${isUser.address.city}, ${isUser.address.country}`
            : "Unverified User"}
        </p>
        <p className="text-xs text-gray-500">Posting for {timeAgo}</p>
      </div>

      {/* Online Badge */}
      {user.isActive && (
        <div className="flex justify-center mt-2">
          <Badge
            variant="outline"
            className="bg-green-100 text-green-700 px-3 py-1"
          >
            ● Online
          </Badge>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-4">
        <Button className="w-full bg-[#1575B9] hover:bg-[#1575B9] text-white flex items-center gap-2">
          <Mail className="w-4 h-4" /> Message Me
        </Button>

        <p className="text-green-600 text-sm flex items-center gap-1 mt-2 justify-center">
          <CheckCircle className="text-green-500 w-4 h-4" /> Phone Verified
        </p>

        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            className="w-1/2 mr-1 border border-[#1575B9] text-[#1575B9]"
          >
            View Profile
          </Button>
          <Button
            variant="outline"
            className="w-1/2 ml-1 border border-[#1575B9] text-[#1575B9]"
          >
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserBox;
