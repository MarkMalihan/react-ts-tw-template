import { APP_CONSTANTS } from "@/configs/config";
import DarkModeButton from "@/features/DarkModeButton";
import PokemonData from "@/features/PokemonData";

const HomePage = () => {
  return (
    <div className="space-y-10 p-5">
      <section className="flex items-center justify-center gap-3">
        <h1 className="text-primary font-bold text-center text-4xl">
          {APP_CONSTANTS.WELCOME_TO}
          {APP_CONSTANTS.APP_TITLE}
        </h1>
        <DarkModeButton />
      </section>

      <PokemonData />
    </div>
  );
};

export default HomePage;
