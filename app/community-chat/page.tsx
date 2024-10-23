// app/community-chat/page.tsx
import CommunityChat from '../../Components/CommunityChat';

export default function CommunityPage() {
  return (
    <div className="container flex flex-col h-screen mx-auto">
      <h1 className="my-4 text-2xl font-bold">Community Chat</h1>
      <div className="flex-1 overflow-hidden bg-white rounded-lg shadow-lg">
        <CommunityChat />
      </div>
    </div>
  );
}