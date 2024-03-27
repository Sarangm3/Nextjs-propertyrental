import connectDB from "@/config/database";
import Property from "@/Models/Property";

// GET /api/properties
export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const properties = await Property.findById(params.id);
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", {
      status: 500,
    });
  }
};
