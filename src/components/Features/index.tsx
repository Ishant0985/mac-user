import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, CollectionReference } from 'firebase/firestore';
import SectionTitle from '../Common/SectionTitle';
import SingleFeature from './SingleFeature';
import { Feature } from '@/types/feature';

interface FeatureTab {
  title: string;
  description: string;
}

const Features = () => {
  const [featuresData, setFeaturesData] = useState<Feature[]>([]);
  const [featureTab, setFeatureTab] = useState<FeatureTab>({
    title: '',
    description: '',
  });

  useEffect(() => {
    const fetchFeaturesData = async () => {
      const featuresCollection = collection(db, 'features') as CollectionReference<any>;
      const querySnapshot = await getDocs(featuresCollection);
      const data: Feature[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id, // Now doc.id is a string, which matches our updated Feature type.
          title: data.title,
          // Map Firestore's 'description' field to the expected 'paragraph'
          paragraph: data.description,
          icon: data.icon,
        } as Feature;
      });
      setFeaturesData(data);
    };

    const fetchFeatureTab = async () => {
      const featureTabCollection = collection(db, 'featureTab') as CollectionReference<any>;
      const querySnapshot = await getDocs(featureTabCollection);
      const data: FeatureTab[] = querySnapshot.docs.map((doc) => doc.data() as FeatureTab);
      if (data.length > 0) {
        setFeatureTab(data[0]);
      }
    };

    fetchFeaturesData();
    fetchFeatureTab();
  }, []);

  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={featureTab.title}
          paragraph={featureTab.description}
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <SingleFeature key={feature.id || index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
