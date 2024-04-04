'use client';
import PropertiesCard from '@/components/PropertyCard';
import PropertySearchForm from '@/components/PropertySearchForm';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';
import { useSearchParams } from 'next/navigation';

const PropertySearchPage = ({ Property }) => {
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = searchParams.get('location');
  const propertyType = searchParams.get('propertyType');

  useEffect(() => {
    const fetchResultSearch = async () => {
      try {
        const query = `?location=${location}&propertyType=${propertyType}`;
        const res = await fetch(`/api/properties/search${query}`);
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
    fetchResultSearch();
  }, [location, propertyType]);

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <PropertySearchForm />
        </div>
      </section>

      {loading ? (
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
      )}
    </>
  );
};

export default PropertySearchPage;
