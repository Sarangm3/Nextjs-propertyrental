'use client';
import Message from '@/components/Message';
import { useEffect, useState } from 'react';
import MessageSkeleton from '@/components/skeleton/MessageSkeleton';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/messages');
        if (res.status === 200) {
          const data = await res.json();
          setMessages(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  return loading ? (
    <>
      <MessageSkeleton />
      <MessageSkeleton />
      <MessageSkeleton />
    </>
  ) : (
    messages.map((message) => <Message key={message._id} message={message} />)
  );
};
export default Messages;
