import React, { useState } from 'react';
import { Phone, Mail, MapPin, Star, CheckCircle, Calendar, Clock, Users } from 'lucide-react';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#964B00]">Orhena</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setActivePage('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activePage === 'home' ? 'text-[#964B00] bg-[#4682B4]/10' : 'text-gray-700 hover:text-[#964B00]'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => setActivePage('services')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activePage === 'services' ? 'text-[#964B00] bg-[#4682B4]/10' : 'text-gray-700 hover:text-[#964B00]'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => setActivePage('about')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activePage === 'about' ? 'text-[#964B00] bg-[#4682B4]/10' : 'text-gray-700 hover:text-[#964B00]'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => setActivePage('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activePage === 'contact' ? 'text-[#964B00] bg-[#4682B4]/10' : 'text-gray-700 hover:text-[#964B00]'
              }`}
            >
              Contact
            </button>
          </div>
          <button className="md:hidden text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <div className="relative bg-gradient-to-r from-[#964B00] to-[#4682B4] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Experience the Sparkle of Cleanliness with Orhena Sparkle Clean
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Your trusted partner for all your cleaning needs
          </p>
          <button 
            onClick={() => setActivePage('contact')}
            className="bg-white text-[#964B00] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#f8f9fa] transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Cleaning Service Today!
          </button>
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="bg-gray-50">
      <HeroSection />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome to Orhena Sparkle Clean</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Welcome to Orhena Sparkle Clean, your trusted partner for all your cleaning needs. Our team of professionals is dedicated to providing top-notch cleaning services that exceed your expectations. From residential to commercial cleaning, we offer a wide range of services tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
              <div className="space-y-4">
                {['Residential Cleaning', 'Commercial Cleaning', 'Specialized Cleaning', 'Industrial Cleaning', 'Warehouse Cleaning'].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-[#4682B4] mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-[#964B00] mr-3" size={20} />
                  <span className="text-gray-700">+2348118211041</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-[#964B00] mr-3" size={20} />
                  <span className="text-gray-700">orhenaentreprise@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Orhena Sparkle Clean transformed my home! Their attention to detail and professional service exceeded my expectations. Highly recommended!"
                </p>
                <p className="font-semibold text-gray-900">- Happy Customer {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cleaning solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="space-y-16">
          {/* Residential Cleaning */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#964B00] text-white p-8">
              <h2 className="text-3xl font-bold">Residential Cleaning</h2>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                Our residential cleaning services are designed to provide a clean and comfortable living space for you and your family. Our team uses eco-friendly products and state-of-the-art equipment to ensure a sparkling clean home.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Include:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-[#4682B4] mr-2" size={16} />
                      One-time cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-[#4682B4] mr-2" size={16} />
                      Regular cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-[#4682B4] mr-2" size={16} />
                      Deep cleaning
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-[#4682B4] mr-2" size={16} />
                      Healthier living environment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-[#4682B4] mr-2" size={16} />
                      More free time for family
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-[#4682B4] mr-2" size={16} />
                      Professional results
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Cleaning */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#4682B4] text-white p-8">
              <h2 className="text-3xl font-bold">Commercial Cleaning</h2>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                Our commercial cleaning services are tailored to meet the specific needs of businesses. Our team is trained to provide a clean and healthy environment for employees and customers.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Include:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-[#964B00] mr-2" size={16} />
                      Office cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-[#964B00] mr-2" size={16} />
                      Retail cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-[#964B00] mr-2" size={16} />
                      Restaurant cleaning
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-[#964B00] mr-2" size={16} />
                      Improved workplace productivity
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-[#964B00] mr-2" size={16} />
                      Better customer impression
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-[#964B00] mr-2" size={16} />
                      Healthier work environment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Specialized Cleaning */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#964B00] to-[#4682B4] text-white p-8">
              <h2 className="text-3xl font-bold">Specialized Cleaning</h2>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                Our specialized cleaning services include carpet cleaning, upholstery cleaning, and more. Our team uses specialized equipment and techniques to ensure a deep clean.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Services Include:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-white bg-[#964B00] rounded-full p-1 mr-2" size={16} />
                      Carpet cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-white bg-[#964B00] rounded-full p-1 mr-2" size={16} />
                      Upholstery cleaning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-white bg-[#964B00] rounded-full p-1 mr-2" size={16} />
                      Post-construction cleaning
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-white bg-[#4682B4] rounded-full p-1 mr-2" size={16} />
                      Extended furniture life
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-white bg-[#4682B4] rounded-full p-1 mr-2" size={16} />
                      Allergen removal
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-white bg-[#4682B4] rounded-full p-1 mr-2" size={16} />
                      Professional restoration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Orhena Sparkle Clean, our mission is to provide exceptional cleaning services that exceed our clients' expectations. We strive to build long-term relationships with our clients and provide a clean and healthy environment for everyone.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#964B00] to-[#4682B4] rounded-lg p-8 text-white">
            <div className="flex items-center mb-4">
              <Users className="mr-3" size={32} />
              <h3 className="text-2xl font-bold">Our Values</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Quality and Excellence</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Customer Satisfaction</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Professionalism</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Reliability</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Orhena Sparkle Clean was founded with a vision to provide top-notch cleaning services to individuals and businesses. Our team has years of experience in the cleaning industry and is dedicated to providing exceptional service.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            What started as a small local business has grown into a trusted name in the cleaning industry, serving hundreds of satisfied customers across the region. Our commitment to quality, reliability, and customer satisfaction has been the cornerstone of our success.
          </p>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us today to book your cleaning service or inquire about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            {/* Updated form with Formspree */}
            <form action="https://formspree.io/f/myznjnjl" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#964B00] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#964B00] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#964B00] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#964B00] focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#964B00] text-white py-3 rounded-lg font-semibold hover:bg-[#7a3d00] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-[#964B00] mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+2348118211041</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-[#964B00] mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">orhenaentreprise@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-[#964B00] mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Working Hours</p>
                    <p className="text-gray-600">Monday - Saturday: 8AM - 6PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="text-[#964B00] mr-4" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Emergency Service</p>
                    <p className="text-gray-600">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#964B00] to-[#4682B4] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
              <p className="mb-6">Contact us now to schedule your cleaning service and experience the Orhena difference!</p>
              <button 
                onClick={() => setActivePage('home')}
                className="bg-white text-[#964B00] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {renderPage()}
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-[#964B00] mb-4">Orhena Sparkle Clean</div>
              <p className="text-gray-300 mb-4">
                Providing exceptional cleaning services that exceed expectations. Quality, reliability, and customer satisfaction are our top priorities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => setActivePage('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setActivePage('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => setActivePage('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setActivePage('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  +2348118211041
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  orhenaentreprise@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Orhena Sparkle Clean. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;