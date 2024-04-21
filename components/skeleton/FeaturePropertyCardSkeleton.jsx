const FeaturedPropertyCard = () => {
  return (
    <div className="rounded-xl shadow-md dark:shadow-gray-700 relative flex flex-col md:flex-row ">
      <div className="w-full md:w-2/5 bg-gray-300 dark:bg-gray-600 rounded-md">
        <div className="h-60 md:h-auto w-full md:w-100"></div>
      </div>
      <div className="p-6">
        <h3 className="bg-gray-200 dark:bg-gray-700 h-6 w-2/3 mb-2 rounded-md"></h3>
        <div className="mb-4 bg-gray-200 dark:bg-gray-700 h-5 w-1/2 rounded-md"></div>
        <h3 className="absolute top-[10px] left-[10px] bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg  h-10 w-28"></h3>
        <div className="flex justify-center gap-4 mb-4">
          <p className="bg-gray-200 dark:bg-gray-700 h-5 w-14 rounded-md"></p>
          <p className="bg-gray-200 dark:bg-gray-700 h-5 w-14 rounded-md"></p>
          <p className="bg-gray-200 dark:bg-gray-700 h-5 w-14 rounded-md"></p>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <p className="bg-gray-200 dark:bg-gray-700 h-5 w-20 rounded-md"></p>
          <p className="bg-gray-200 dark:bg-gray-700 h-5 w-20 rounded-md"></p>
          <p className="bg-gray-200 dark:bg-gray-700 h-5 w-20 rounded-md"></p>
        </div>

        <div className="border mb-5 bg-gray-200 dark:bg-gray-700 rounded-md"></div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <span className="bg-gray-200 dark:bg-gray-700 h-5 w-8 rounded-md"></span>
            <span className="bg-gray-200 dark:bg-gray-700 h-5 w-24 rounded-md"></span>
          </div>
          <div className="h-[36px] bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg lg:w-20"></div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedPropertyCard;
