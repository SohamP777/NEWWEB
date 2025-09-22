import { useState } from 'react';
import { FaBrain, FaThumbsUp, FaLightbulb } from 'react-icons/fa';

const recommendations = [
  {
    id: 1,
    title: "Increase Blog Post Frequency",
    insight: "Your top-performing content gets 3x more traffic than average",
    action: "Publish 2 more articles weekly",
    priority: "High"
  },
  {
    id: 2,
    title: "Optimize for Voice Search",
    insight: "23% of your traffic uses long-tail queries",
    action: "Add FAQ schema markup",
    priority: "Medium"
  }
];

export default function AIRecommendations() {
  const [dismissed, setDismissed] = useState([]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <FaBrain /> AI-Powered Recommendations
      </h3>
      
      <div className="space-y-4">
        {recommendations.filter(r => !dismissed.includes(r.id)).map((rec) => (
          <div key={rec.id} className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold flex items-center gap-2">
                  <FaLightbulb className="text-yellow-500" /> {rec.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{rec.insight}</p>
                <p className="mt-2 font-medium">{rec.action}</p>
              </div>
              <button 
                onClick={() => setDismissed([...dismissed, rec.id])}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded text-sm">
                <FaThumbsUp /> Apply
              </button>
              <span className={`text-xs px-2 py-1 rounded ${
                rec.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {rec.priority} Priority
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
        View all 7 recommendations →
      </button>
    </div>
  );
}