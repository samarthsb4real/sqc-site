import { Card, CardContent } from "@/components/ui/card";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  icon: React.ReactNode;
}

export default function TeamCard({ name, role, bio, icon }: TeamMemberProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="bg-[#060a20] border-gray-800 hover:border-blue-900/50 transition-all duration-300 hover:translate-y-[-2px]">
          <CardContent className="p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-900/20 border border-blue-900/30 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="font-title text-xl font-medium text-white">{name}</h3>
            <p className="text-blue-400 mb-2 font-display">{role}</p>
            {bio && (
              <p className="text-sm font-display text-gray-400 line-clamp-2">{bio}</p>
            )}
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-[#060a20] border-gray-800">
        <div className="flex flex-col space-y-2">
          <h4 className="text-lg font-title font-semibold">{name}</h4>
          <p className="text-blue-400 font-display">{role}</p>
          <p className="text-sm text-gray-300 font-display">{bio || "No bio available."}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}