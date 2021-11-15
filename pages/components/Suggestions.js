import { useEffect, useState } from "react";
import faker from "faker";

function Suggestions() {
  const [suggestions, setSueggestion] = useState([]);

  useEffect(() => {
    const sueggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSueggestion(sueggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-gray-400 text-sm font-bold">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            alt=""
            className="w-10 rounded-full border p-[2px]"
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>

          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
