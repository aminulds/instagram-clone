import Head from "next/head";
import Feed from "./components/Feed";
import Header from "./components/Header";

export default function Home() {
  return (
    <div
      className=" bg-white h-screen
     overflow-y-scroll scrollbar-hide"
    >
      <Head>
        <title>Instagram Clone</title>
      </Head>

      <Header />

      <Feed />

      {/* Modal */}
    </div>
  );
}
