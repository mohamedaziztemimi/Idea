import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Discover our journey, values, and mission to deliver the best online shopping experience.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Welcome to our ecommerce platform. Born out of a desire to innovate and deliver value, our journey began with a simple idea: to provide customers with high-quality products paired with a seamless online shopping experience.
          </p>
          <div className="flex justify-center mb-12">
            <Image
              src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg"
              alt="Our Story"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower customers with an exceptional online shopping experience. We are committed to quality, affordability, and exceptional service, ensuring every purchase brings satisfaction.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Customer-Centric Approach</li>
                <li>Innovation and Excellence</li>
                <li>Integrity and Trust</li>
                <li>Collaboration and Teamwork</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Our team is the backbone of our success, bringing passion and expertise to every aspect of our business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Doe', role: 'CEO & Founder', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' },
              { name: 'Jane Smith', role: 'Chief Marketing Officer', image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg' },
              { name: 'Michael Johnson', role: 'Head of Product Development', image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg' },
              { name: 'Emily Davis', role: 'Customer Success Manager', image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg' },
            ].map((teamMember, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Image
                  src={teamMember.image}
                  alt={teamMember.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{teamMember.name}</h3>
                <p className="text-gray-700">{teamMember.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
