const ProfilePropertySkeleton = () => {
  return (
    <div className="mb-10">
      <div className="rounded-md bg-gray-200 dark:bg-gray-700 h-32 w-full"></div>
      <div className="mt-2">
        <p className="bg-gray-200 rounded-md dark:bg-gray-700 h-6 w-1/2 my-3"></p>
        <p className="bg-gray-200 rounded-md dark:bg-gray-700 h-4 w-3/4"></p>
      </div>
      <div className="mt-2 flex">
        <div className="mt-4 py-1 px-3 mr-3 rounded-md  bg-gray-200 dark:bg-gray-700 h-8 w-20"></div>
        <div className="mt-4 py-1 px-3 mr-3 rounded-md  bg-gray-200 dark:bg-gray-700 h-8 w-20"></div>
      </div>
    </div>
  );
};
export default ProfilePropertySkeleton;
