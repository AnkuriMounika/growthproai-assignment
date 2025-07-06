const BusinessCard = ({ data, onRegenerate }) => {
  if (!data) return null;

  return (
    <div className="p-4 border rounded shadow mt-4 space-y-2 bg-white">
      <h2 className="text-xl font-semibold text-gray-800">
        Google Rating: ⭐ {data.rating}
      </h2>
      <p className="text-gray-600">Reviews: {data.reviews}</p>
      <p className="italic text-gray-700">"{data.headline}"</p>
      <button
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
        onClick={onRegenerate}
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
};

export default BusinessCard;
