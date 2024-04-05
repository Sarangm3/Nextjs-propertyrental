'use client';
import Message from '@/components/Message';
import Spinner from '@/components/Spinner';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Messages = () => {
  const { data: session } = useSession();
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
    <Spinner loading={loading} />
  ) : (
    messages.map((message) => <Message key={message._id} message={message} />)
  );
};
export default Messages;
