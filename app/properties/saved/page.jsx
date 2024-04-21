'use client';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';
import PropertiesCard from '@/components/PropertyCard';
import PropertyCardSkeleton from '@/components/skeleton/PropertyCardSkeleton';

const PropertySavedPage = () => {
  const [properties, setProperties] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertySaved = async () => {
      try {
        const res = await fetch('/api/bookmarks');
        if (res.status === 200) {
          const data = await res.json();
          setProperties(data.bookmarks);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPropertySaved();
  }, []);

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
            <PropertyCardSkeleton />
          </div>
        ) : properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertiesCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default PropertySavedPage;
