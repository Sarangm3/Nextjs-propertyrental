import Messages from '@/components/Messages';

const MessagePage = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="container m-auto py-8 md:py-24 max-w-6xl">
        <div className="bg-white dark:bg-gray-950 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Messages</h1>
          <Messages />
        </div>
      </div>
    </section>
  );
};
export default MessagePage;
