import TeamCarousel from "@/components/lightswind/team-carousel";
import { useLoaderData } from "react-router";

const Home = () => {
  const BooksData = useLoaderData();
  return (
    <>
      <h1 className=" text-center mt-5 text-6xl bg-fuchsia-300 w-5xl mx-auto p-2 rounded-md">
        new books
      </h1>
      <TeamCarousel
        members={BooksData}
        title="OUR TEAM"
        autoPlay={3000}
        pauseOnHover={true}
        onMemberChange={() => {}}
      />
    </>
  );
};

export default Home;
