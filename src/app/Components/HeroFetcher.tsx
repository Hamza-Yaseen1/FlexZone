'use client'
import { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';
import Hero from './Hero';

const client = sanityClient({
  projectId: '9gjavzge', // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your dataset name
  apiVersion: '2023-01-01',    // Use the current API version
  useCdn: true,
});

type HeroData = {
  backgroundImage: {
    asset: {
      url: string;
    };
  };
  heading: string;
  paragraph: string;
  buttonText: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
};

const HeroFetcher: React.FC = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data as a promise
    client
      .fetch<HeroData>(`
        *[_type == "hero"][0] {
          backgroundImage {
            asset -> {
              url
            }
          },
          heading,
          paragraph,
          buttonText,
          textColor,
          buttonColor,
          buttonTextColor
        }
      `)
      .then((data) => {
        setHeroData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching hero data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!heroData) {
    return <div>Error loading data.</div>; // Handle case where data is unavailable
  }

  return (<>
  
  <Hero heroData={heroData} />;
  </>);
};

export default HeroFetcher;
