import AnimatedTitle from "@/components/AnimatedTitle";

const Home = () => {
  return (
    <div>
      <p className="nav-hover-btn max-w-[40px]">Home</p>
      <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5  text-center"
        />
    </div>
  );
};
export default Home;
