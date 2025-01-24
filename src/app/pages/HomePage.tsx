import { APP_CONSTANTS } from "@/configs/config";

const HomePage = () => {
  return (
    <>
      <h1 className="text-primary">
        {APP_CONSTANTS.WELCOME_TO}
        {APP_CONSTANTS.APP_TITLE}
      </h1>
    </>
  );
};

export default HomePage;
