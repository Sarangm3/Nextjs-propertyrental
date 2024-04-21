const FeaturedPropertyCardSkeleton = () => {
  return (
    <div className="rounded-xl shadow-md dark:shadow-gray-700 relative">
      <div className="w-full h-56 rounded-t-xl bg-gray-300 dark:bg-gray-700 rounded-md"></div>
      <div className="p-4">
        <div className="mb-6">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-md h-5 w-1/4 mb-2"></div>
          <h3 className=" bg-gray-200 dark:bg-gray-700 rounded-md h-6 w-3/4"></h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-lg w-28 h-10"></h3>

        <div className="flex justify-center gap-4 mb-4">
          <p className="bg-gray-200 dark:bg-gray-700 rounded-md h-5 w-14"></p>
          <p className="bg-gray-200 dark:bg-gray-700 rounded-md h-5 w-14"></p>
          <p className="bg-gray-200 dark:bg-gray-700 rounded-md h-5 w-14"></p>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <p className="bg-gray-200 dark:bg-gray-700 rounded-md h-5 w-20"></p>
          <p className="bg-gray-200 dark:bg-gray-700 rounded-md h-5 w-20"></p>
          <p className="bg-gray-200 dark:bg-gray-700 rounded-md h-5 w-20"></p>
        </div>

        <div className="border mb-5 bg-gray-200 dark:bg-gray-700 rounded-md"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <span className="bg-gray-200 dark:bg-gray-700 rounded-md h-5 w-10"></span>
            <span className="bg-gray-200 dark:bg-gray-700 rounded-md h-5 w-24"></span>
          </div>
          <div className="h-[36px] bg-gray-200 dark:bg-gray-700  px-4 py-2 rounded-lg w-full lg:w-20"></div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedPropertyCardSkeleton;
