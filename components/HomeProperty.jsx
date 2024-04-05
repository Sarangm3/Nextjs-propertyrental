'use client';
import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import Spinner from '@/components/Spinner';
import { fetchProperties } from '@/utils/request';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const HomeProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProperties();

        const recentProperties = data.properties
          .sort(() => Math.random() - Math.random())
          .slice(0, 3);
        setProperties(recentProperties);
      } catch (error) {
        console.log(error);
        toast.error('Fetching has some problem');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties === 0 ? (
                <p>No Properties Found</p>
              ) : (
                properties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))
              )}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};
export default HomeProperty;
