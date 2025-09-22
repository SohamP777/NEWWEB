import { useState } from 'react';
import { FaSpinner, FaCheck } from 'react-icons/fa';

export default function URLSubmitForm() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysisDone, setAnalysisDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setAnalysisDone(true);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">Analyze Your Website</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-1 px-4 py-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            disabled={isLoading || analysisDone}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              analysisDone 
                ? 'bg-green-500 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isLoading ? (
              <FaSpinner className="animate-spin" />
            ) : analysisDone ? (
              <FaCheck />
            ) : null}
            {analysisDone ? 'Analysis Complete' : 'Analyze'}
          </button>
        </div>
      </form>
      {analysisDone && (
        <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p>Your SEO report is ready! Check the results below.</p>
        </div>
      )}
    </div>
  );
}