import PropertiesCard from '@/components/PropertyCard';
import PropertySearch from '@/components/PropertySearchForm';
import { fetchProperties } from '@/utils/request';

const PropertyPage = async () => {
  const properties = await fetchProperties();

  //sort properties by date
  properties.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <PropertySearch />
        </div>
      </section>
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
    </>
  );
};

export default PropertyPage;
