import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import {  Button } from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const querySnapshot = await getDocs(collection(db, 'services'));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <Separator className="my-4" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-md" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-base text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">₹{service.price}</span>
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
