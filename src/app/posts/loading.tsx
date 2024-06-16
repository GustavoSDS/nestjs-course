import ContentLoader from "react-content-loader";

const LoadingPage = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-col gap-0">
      {posts.map((post) => (
        <Loader key={post} />
      ))}
    </div>
  );
};
export default LoadingPage;

const Loader = () => {
  return (
    <ContentLoader
      className="w-full m-4 h-full dark:bg-gray-900"
      animate={true}
      speed={1}
      gradientRatio={0.5}
      backgroundColor="#f3f3f3"
    >
      {/* Only SVG shapes */}
      <rect x="0" y="20" width="300" height="15" className="w-full" />
      <rect x="0" y="40" width="300" height="15" className="w-1/2" />

      <rect x="0" y="65" width="300" height="12" className="w-full" />
      <rect x="0" y="80" width="300" height="12" className="w-full" />
      <rect x="0" y="95" width="300" height="12" className="w-full" />

      <rect x="0" y="110" rx={6} ry={6} width="120" height="40" />
    </ContentLoader>
  );
};
