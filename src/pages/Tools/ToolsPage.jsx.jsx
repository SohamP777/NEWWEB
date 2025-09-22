import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import URLSubmitForm from '../components/tools/URLSubmitForm';
import AnalysisResult from '../components/tools/AnalysisResult';
import SEO from '../components/seo/SEO';

export default function ToolsPage() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) window.location.href = '/login';
  }, [user]);

  return (
    <>
      <SEO title="SEO Tools | SEO Nova" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">SEO Optimization Tools</h1>
        <URLSubmitForm />
        <AnalysisResult />
      </div>
    </>
  );
}