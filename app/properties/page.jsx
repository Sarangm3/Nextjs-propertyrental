import properties from "@/properties.json";
import PropertiesCard from "@/components/PropertyCard";
const PropertyPage = () => {
  return (
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

export default PropertyPage;
