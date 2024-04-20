import PropertyEditForm from '@/components/PropertyEditForm';

const PropertyEditPage = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950">
      <div className="container m-auto max-w-2xl py-24">
        <div className="px-6 py-8 mb-4 shadow-md dark:shadow-gray-700 rounded-md border m-4 md:m-0">
          <PropertyEditForm />
        </div>
      </div>
    </section>
  );
};
export default PropertyEditPage;
