import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

// Define the shape of your hero data
interface HeroData {
  title?: string;
  description?: string;
  button1Url?: string;
  button1Text?: string;
  button2Url?: string;
  button2Text?: string;
}

const Hero = () => {
  // Explicitly type the state with the HeroData interface
  const [heroData, setHeroData] = useState<HeroData>({});

  useEffect(() => {
    const fetchHeroData = async () => {
      const querySnapshot = await getDocs(collection(db, 'hero'));
      const data = querySnapshot.docs.map((doc) => doc.data());
      if (data.length > 0) {
        // Cast the fetched data to the HeroData type
        setHeroData(data[0] as HeroData);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                {heroData.title}
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                {heroData.description}
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href={heroData.button1Url || '#'}
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  {heroData.button1Text}
                </Link>
                <Link
                  href={heroData.button2Url || '#'}
                  className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  {heroData.button2Text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SVG sections omitted for brevity */}
    </section>
  );
};

export default Hero;
