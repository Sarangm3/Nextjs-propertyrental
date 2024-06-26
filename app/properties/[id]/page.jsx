'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/request';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyDetails from '@/components/PropertyDetails';
import Spinner from '@/components/Spinner';
import PropertyImages from '@/components/PropertyImages';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButton from '@/components/ShareButton';
import PropertyContactForm from '@/components/PropertyContactForm';

const PropertiesPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />

          {/* <!-- Go Back --> */}
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-gray-500 hover:text-gray-600 flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Back to Properties
              </Link>
            </div>
          </section>

          {/* <!-- Property Info --> */}
          <section className="bg-gray-100 dark:bg-gray-950">
            <div className="container mx-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <PropertyDetails property={property} />
                </div>
                {/* <!-- Sidebar --> */}
                <aside className="col-span-1 md:col-span-1 space-y-4">
                  <BookmarkButton property={property} />
                  <ShareButton property={property} />
                  <PropertyContactForm property={property} />
                </aside>
              </div>
            </div>
          </section>

          <PropertyImages images={property.images} />
        </>
      )}
    </>
  );
};
export default PropertiesPage;
