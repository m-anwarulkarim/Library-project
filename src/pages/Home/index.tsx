import TeamCarousel from "@/components/lightswind/team-carousel";
import { useLoaderData } from "react-router";
import CategoryFilter from "@/features/category/Categois";
import BooksGalary from "@/features/category/BooksGlary";

const Home = () => {
  const BooksData = useLoaderData();
  return (
    <>
      <h1 className="text-center mt-5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl bg-fuchsia-300 w-full max-w-4xl mx-auto p-2 sm:p-4 rounded-md">
        new books
      </h1>
      <TeamCarousel
        members={BooksData}
        title="OUR TEAM"
        autoPlay={3000}
        pauseOnHover={true}
        onMemberChange={() => {}}
      />
      {/* category  */}
      <CategoryFilter />
      {/* gelary */};
      <BooksGalary />
    </>
  );
};

export default Home;
