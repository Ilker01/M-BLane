import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  isHome?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, url, isHome = false }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MiBLane",
    "description": "Premium luxury chauffeur and limousine service in the San Francisco Bay Area. Airport transfers, corporate transportation, meet & greet, special events, and Napa wine tours.",
    "url": "https://miblane.com",
    "telephone": "+16692719105",
    "email": "booking@miblane.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "225 Cuesta Drive",
      "addressLocality": "South San Francisco",
      "addressRegion": "CA",
      "postalCode": "94080",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.6547,
      "longitude": -122.4077
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$$$",
    "servesCuisine": null,
    "image": "https://miblane.com/hero-main-pic.jpg",
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Transportation Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Airport Transfers"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Corporate Transportation"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Meet & Greet"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Special Events"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "VIP City Sight Tours"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Napa Wine Tour"}}
      ]
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MiBLane" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://miblane.com/hero-main-pic.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MiBLane" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://miblane.com/hero-main-pic.jpg" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Additional SEO Elements */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="MiBLane" />
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="South San Francisco, California" />
      <meta name="geo.position" content="37.6547;-122.4077" />
      <meta name="ICBM" content="37.6547, -122.4077" />

      {/* Structured Data (JSON-LD) for Home Page */}
      {isHome && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
