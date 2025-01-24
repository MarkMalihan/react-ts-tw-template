import { Button } from "@/components/ui/Button";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { CiDark, CiLight } from "react-icons/ci";

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <Button
        variant="light"
        className="border dark:bg-black"
        onClick={toggleDarkMode}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? (
          <CiLight className="text-2xl text-white" />
        ) : (
          <CiDark className="text-2xl text-black" />
        )}
      </Button>
    </>
  );
};

export default DarkModeButton;
