import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, CheckCircle, Mail } from "lucide-react";
import { TUser } from "@/types/listings";

const UserBox = ({ user }: { user: TUser }) => {
  return (
    <div className="w-full rounded-lg bg-blue-100 p-4">
      {/* Avatar */}
      <div className="flex justify-center">
        <Avatar className="w-16 h-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      {/* User Info */}
      <div className="text-center mt-2">
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
          <MapPin className="text-[#1575B9] w-4 h-4" /> Hemel Hempstead
        </p>
        <p className="text-xs text-gray-500">Posting for 2+ years</p>
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
