'use client';

import { useState } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';
import { useToast } from '@/components/ui/use-toast';
import DeleteButton from '@/components/DeleteButton';

const Message = ({ message }) => {
  const { toast } = useToast();
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleted, setIsDeleted] = useState(false);
  const { setUnreadCount } = useGlobalContext();
  const handleReadClick = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'PUT',
      });

      if (res.status === 200) {
        const { read } = await res.json();
        setIsRead(read);
        setUnreadCount((prevCount) => (read ? prevCount - 1 : prevCount + 1));
        if (read) {
          toast({
            title: 'Success',
            description: 'Marked as read',
          });
        } else {
          toast({
            title: 'Success',
            description: 'Marked as new',
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error',
        description: 'Something went wrong',
      });
    }
  };
  const handleDeleteClick = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        setIsDeleted(true);
        setUnreadCount((prevCount) => prevCount - 1);
        toast({
          title: 'Success',
          description: 'Message Deleted',
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'error',
        description: 'Message was not deleted',
      });
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="relative bg-white dark:bg-gray-950 p-4 rounded-md shadow-md border dark:border-gray-800 border-gray-200">
        {!isRead && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md">
            New
          </div>
        )}
        <h2 className="text-xl mb-4">
          <span className="font-bold">Property Inquiry:</span>{' '}
          {message.property.name}
        </h2>
        <p className="text-gray-700">{message.body}</p>

        <ul className="mt-4">
          <li>
            <strong>Name:</strong>
            {message?.sender?.username}
          </li>

          <li>
            <strong>Reply Email:</strong>{' '}
            <a href="mailto:recipient@example.com" className="text-blue-500">
              {message.email}
            </a>
          </li>
          <li>
            <strong>Reply Phone:</strong>{' '}
            <a href="tel:123-456-7890" className="text-blue-500">
              {message.phone}
            </a>
          </li>
          <li>
            <strong>Received:</strong>{' '}
            {new Date(message.createdAt).toLocaleString()}
          </li>
        </ul>
        <button
          className={`mt-4 mr-3  ${
            isRead ? 'bg-gray-500' : 'bg-gray-800 text-white'
          } py-1 px-3 rounded-md`}
          onClick={handleReadClick}
        >
          {isRead ? 'Mark As New' : 'Mark As Read'}
        </button>
        <DeleteButton message={'Message'} onClickHandle={handleDeleteClick} />
      </div>
    </div>
  );
};
export default Message;
