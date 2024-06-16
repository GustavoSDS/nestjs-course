import ContentLoader from "react-content-loader";

interface Props {}
const loading = (props: Props) => {
  return (
    <div className="p-8 w-3/4 mx-auto h-2/4 rounded-lg mt-20 bg-gray-200 dark:bg-gray-800 ">
      <MyLoader />
    </div>
  );
};
export default loading;

const MyLoader = () => (
  <ContentLoader
    height={140}
    speed={2}
    backgroundColor={"#333"}
    foregroundColor={"#999"}
    viewBox="0 0 380 70"
  >
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="200" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="150" height="10" />
  </ContentLoader>
);
