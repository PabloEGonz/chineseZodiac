import Description from "../components/description";
import Form from "../components/form";
import PopUP from "../components/popUP";

const Home = () => {
  return (
    <>
      <main>
        <Description />
        <Form />
        <PopUP />
      </main>
      <section className="zodiacs"></section>
    </>
  );
};

export default Home;
