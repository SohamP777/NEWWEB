import { useState } from 'react';
import { FaEye, FaCode } from 'react-icons/fa';
import ReactDiffViewer from 'react-diff-viewer';

export default function PreviewOptimization() {
  const [original, setOriginal] = useState('<h1>About Us</h1>\n<p>We sell products</p>');
  const [optimized, setOptimized] = useState('<h1>About Our Company</h1>\n<p>We provide industry-leading e-commerce solutions</p>');
  const [viewMode, setViewMode] = useState('split'); // 'split' | 'unified'

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <FaEye /> Optimization Preview
        </h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setViewMode('split')} 
            className={`px-3 py-1 text-sm rounded ${viewMode === 'split' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Split View
          </button>
          <button 
            onClick={() => setViewMode('unified')} 
            className={`px-3 py-1 text-sm rounded ${viewMode === 'unified' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            Unified
          </button>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <ReactDiffViewer
          oldValue={original}
          newValue={optimized}
          splitView={viewMode === 'split'}
          showDiffOnly={true}
          leftTitle="Original"
          rightTitle="Optimized"
          styles={{
            variables: {
              dark: {
                diffViewerBackground: '#1e293b', // slate-800
              }
            }
          }}
        />
      </div>
      
      <div className="mt-4 flex gap-3">
        <button className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center gap-2">
          <FaCode /> Apply Changes
        </button>
      </div>
    </div>
  );
}