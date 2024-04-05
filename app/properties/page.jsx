import Properties from '@/components/Properties';
import PropertySearch from '@/components/PropertySearchForm';

const PropertyPage = async () => {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <PropertySearch />
        </div>
      </section>
      <Properties />
    </>
  );
};

export default PropertyPage;
