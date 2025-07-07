import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <HashLoader
        color="#000000"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
// This component can be used to show a loading state while data is being fetched or processed.