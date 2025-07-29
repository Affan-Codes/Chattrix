import { useQuery } from "@tanstack/react-query";
import { LucideMessageCircle, Search } from "lucide-react";
import { useState } from "react";
import { getUserFriends } from "../lib/api";
import NoFriendsFound from "./NoFriendsFound";
import { useNavigate } from "react-router";

const FriendsPage = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const searchFriends = friends.filter((curfriendName) =>
    curfriendName.fullname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 mt-6">
      <div className="mx-auto space-y-10 max-w-screen-md">
        {/* Heading and Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight whitespace-nowrap">
            Your Friends
          </h2>

          <form onSubmit={handleSearch} className="relative w-full sm:w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="Search friends"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-base-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-base-400"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Friends */}
        {loadingFriends ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : friends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className="space-y-2">
            {searchFriends.length > 0 ? (
              searchFriends.map((friend) => (
                <div
                  key={friend._id}
                  className="bg-transparent hover:shadow-md transition-shadow p-4 flex items-center justify-between gap-4 border-y-2"
                >
                  {/* Left: Avatar + Name */}
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={friend.profilePic}
                        alt={friend.fullname}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="font-semibold truncate text-lg max-w-[150px] sm:max-w-[200px]">
                      {friend.fullname}
                    </h3>
                  </div>

                  {/* Right: Message Icon */}
                  <button
                    onClick={() => navigate(`/chat/${friend._id}`)}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <LucideMessageCircle size={28} />
                  </button>
                </div>
              ))
            ) : (
              <div className="card bg-base-200 p-6 text-center">
                <p className="text-base-content opacity-70">
                  No friends found matching your input!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
