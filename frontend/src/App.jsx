import { useState } from "react";
import InputForm from "./components/InputForm";
import BusinessCard from "./components/BusinessCard";

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [formInfo, setFormInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBusinessData = async ({ name, location }) => {
    setLoading(true);
    setFormInfo({ name, location });
    try {
      const res = await fetch("http://localhost:4000/business-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, location }),
      });
      const data = await res.json();
      setBusinessData(data);
    } catch (err) {
      alert("Error fetching business data.");
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    if (!formInfo) return;
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:4000/regenerate-headline?name=${formInfo.name}&location=${formInfo.location}`
      );
      const data = await res.json();
      setBusinessData((prev) => ({
        ...prev,
        headline: data.headline,
      }));
    } catch (err) {
      alert("Error regenerating headline.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Local Business Dashboard</h1>
      <div className="w-full max-w-md">
        <InputForm onSubmit={fetchBusinessData} />
        {loading && <p className="text-blue-600 mt-4">Loading...</p>}
        <BusinessCard data={businessData} onRegenerate={regenerateHeadline} />
      </div>
    </div>
  );
}

export default App;
