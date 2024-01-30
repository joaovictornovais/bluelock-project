import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { signout } = useAuth();

  return (
    <main>
      <Button fn={() => signout()}>Sair</Button>
    </main>
  );
};

export default Home;
