'use client';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';
import PropertiesCard from '@/components/PropertyCard';
import { toast } from 'react-toastify';

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
        } else {
          toast.error('Failed to fetch saved properties');
        }
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch saved properties');
      } finally {
        setLoading(false);
      }
    };
    fetchPropertySaved();
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            properties.map((property) => (
              <PropertiesCard key={property._id} property={property} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
export default PropertySavedPage;
