'use client';
import { fetchProperties } from '@/utils/request';
import FeaturedPropertyCard from '@/components/FeaturePropertyCard';
import Spinner from '@/components/Spinner';
import { useEffect, useState } from 'react';
import FeaturedPropertyCardSkeleton from '@/components/skeleton/FeaturePropertyCardSkeleton';

const FeatureProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProperties({
          showFeatured: true,
        });
        setProperties(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-slate-100 dark:bg-gray-800 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-gray-500 dark:text-white mb-6 text-center">
          Featured Properties
        </h2>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pulse ">
            <FeaturedPropertyCardSkeleton />
            <FeaturedPropertyCardSkeleton />
          </div>
        ) : (
          properties.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {properties.map((property) => (
                <FeaturedPropertyCard key={property._id} property={property} />
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
};
export default FeatureProperties;
