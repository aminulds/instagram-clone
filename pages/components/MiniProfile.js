function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://avatars.githubusercontent.com/u/55378938?v=4"
        alt=""
        className="w-16 rounded-full border p-[2px] cursor-pointer"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold cursor-pointer">aminulds</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sing Out</button>
    </div>
  );
}

export default MiniProfile;
