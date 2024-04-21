const MessageSkeleton = () => {
  return (
    <div className="space-y-4 border rounded">
      <div className="relative p-4 rounded-md shadow-md ">
        <div className="absolute top-2 right-2 animate-pulse bg-gray-300 dark:bg-gray-700 w-12 h-8 px-2 py-1 rounded-md"></div>
        <div className="animate-pulse h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded-md mb-6"></div>
        <div className="animate-pulse h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-md mb-6"></div>
        <div className="animate-pulse h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
        <div className="animate-pulse h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
        <div className="animate-pulse h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
        <div className="animate-pulse h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-md mb-2"></div>
        <div className="flex items-center space-x-4">
          <div className="animate-pulse h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          <div className="animate-pulse h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};
export default MessageSkeleton;
