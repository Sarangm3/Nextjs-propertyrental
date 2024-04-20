'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { useToast } from '@/components/ui/use-toast';

const BookmarkButton = ({ property }) => {
  const { toast } = useToast();
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
    }
    const fetchBookmarkData = async () => {
      try {
        const res = await fetch('/api/bookmarks/check', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            propertyId: property._id,
          }),
        });
        if (res.status === 200) {
          const data = await res.json();
          setIsBookmarked(data.isBookmarked);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarkData();
  }, [userId, property._id]);

  const handleBookmark = async () => {
    if (!userId) {
      toast({
        title: 'error',
        description: 'You need to sign in to bookmark a property',
      });
      return;
    }
    try {
      const res = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyId: property._id,
        }),
      });
      if (res.status === 200) {
        const data = await res.json();
        toast({
          title: 'Success',
          description: data.message,
        });
        setIsBookmarked(data.isBookmarked);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) return <p className="text-center">Loading...</p>;
  return isBookmarked ? (
    <button
      onClick={handleBookmark}
      className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" /> Remove Bookmark
    </button>
  ) : (
    <button
      onClick={handleBookmark}
      className="bg-green-500 hover:bg-green-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="mr-2" /> Bookmark Property
    </button>
  );
};
export default BookmarkButton;
