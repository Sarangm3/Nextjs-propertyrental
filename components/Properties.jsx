'use client';
import PropertiesCard from '@/components/PropertyCard';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';
import { toast } from 'react-toastify';
import Pagination from '@/components/Pagination';
import FeaturedPropertyCardSkeleton from '@/components/skeleton/PropertyCardSkeleton';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/properties?page=${page}&pageSize=${pageSize}`
        );
        if (res.status === 200) {
          const data = await res.json();
          setProperties(data.properties);
          setTotalItems(data.total);
        } else {
          toast.error('Failed to fetch data');
        }
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, [page, pageSize]);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, index) => (
              <FeaturedPropertyCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          // Render properties or message when not loading
          <>
            {properties.length === 0 ? (
              <p>No properties found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertiesCard key={property._id} property={property} />
                ))}
              </div>
            )}
          </>
        )}
        <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};
export default Properties;
