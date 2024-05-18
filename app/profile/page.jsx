'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import profileDefault from '@/assets/images/profile.png';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';
import { useToast } from '@/components/ui/use-toast';
import DeleteButton from '@/components/DeleteButton';
import ProfilePropertySkeleton from '@/components/skeleton/ProfilePropertySkeleton';

const ProfilePage = () => {
  const { toast } = useToast();
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProperties = async (userId) => {
      if (!userId) {
        return;
      }

      try {
        const res = await fetch(`/api/properties/user/${userId}`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch user properties when session is available
    if (session?.user?.id && properties.length === 0) {
      fetchUserProperties(session.user.id);
    }
  }, [session]);

  const handleDeleteProperty = async (propertyId) => {
    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: 'DELETE',
      });
      if (res.status === 200) {
        //Remove the property from state
        const updatedProperties = properties.filter(
          (property) => property._id !== propertyId
        );
        setProperties(updatedProperties);
        toast({
          title: 'Success',
          description: 'Property Deleted',
        });
      } else {
        toast({
          title: 'error',
          description: 'Fail to delete property',
        });
      }
    } catch (error) {
      toast({
        title: 'error',
        description: 'Fail to delete property',
      });
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="container m-auto py-8 md:py-24">
        <div className="bg-white dark:bg-gray-950 px-6 py-8 mb-4 shadow-md dark:shadow-gray-700 rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 md:mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={profileImage || profileDefault}
                  width={200}
                  height={200}
                  priority={true}
                  alt="User"
                />
              </div>
              <h2 className="text-2xl mb-4">
                <span className="font-bold block">Name: </span> {profileName}
              </h2>
              <h2 className="md:text-2xl text-xs">
                <span className="font-bold block">Email: </span> {profileEmail}
              </h2>
            </div>

            <div className="mt-10 md:mt-0 md:w-3/4 md:pl-4">
              <h2 className="text-2xl font-semibold mb-4">Your Listings</h2>
              {!loading && properties.length === 0 && (
                <p>You have no property Listings</p>
              )}
              {loading ? (
                <div className="animate-pulse">
                  <ProfilePropertySkeleton />
                  <ProfilePropertySkeleton />
                </div>
              ) : (
                properties.map((property) => (
                  <div key={property._id} className="mb-10">
                    <Link href={`/properties/${property._id}`}>
                      <Image
                        className="h-32 w-full rounded-md object-cover"
                        src={property.images[0]}
                        width={500}
                        height={100}
                        alt=""
                        priority={true}
                      />
                    </Link>
                    <div className="mt-2">
                      <p className="text-lg font-semibold">{property.name}</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Address: {property.location.street}{' '}
                        {property.location.city} {property.location.state}
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link
                        href={`/properties/${property._id}/edit`}
                        className="mt-4 bg-gray-500 text-white py-1 px-3 mr-3 rounded-md inline-block hover:bg-gray-600"
                      >
                        Edit
                      </Link>
                      <DeleteButton
                        message={'Property'}
                        onClickHandle={() => handleDeleteProperty(property._id)}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProfilePage;
