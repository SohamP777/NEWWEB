import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title = 'SEO Nova - AI-Powered SEO Automation', 
  description = 'Automatically optimize your website\'s SEO with AI-powered automation. No manual work required.', 
  keywords = 'seo, automation, ai, optimization, website, ranking', 
  image = '/og-image.png',
  url = window.location.href,
  type = 'website' 
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}