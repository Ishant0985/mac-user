import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase'; // Adjust the path as necessary
import { collection, query, where, getDocs } from 'firebase/firestore';

const PrivacyPolicyPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'policies'), where('type', '==', 'privacy'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setContent(doc.data().content);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="policy-page">
      <h1>Privacy Policy</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PrivacyPolicyPage;
