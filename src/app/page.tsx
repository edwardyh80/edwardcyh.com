import Details from "@/components/Details";
import Profile from "@/components/Profile";

const Home = () => (
  <div className="m-auto flex max-w-screen-xl flex-col gap-16 px-4 lg:flex-row lg:px-8">
    <Profile />
    <Details />
  </div>
);

export default Home;
