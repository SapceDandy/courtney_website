import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Speaking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/speaking-hero.jpg"
            alt="Speaking engagement"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Inspiring Audiences Worldwide
          </h1>
          <p className="text-xl mb-8">
            Transformative keynotes and workshops that leave a lasting impact
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Download Speaker Kit
          </button>
        </div>
      </section>

      {/* Event Gallery */}
      <section
        ref={galleryRef}
        className="py-20"
        id="speaking-gallery"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-primary text-center mb-16">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial="hidden"
                animate={galleryInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 },
                  },
                }}
                className="group relative"
              >
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm mb-2">{event.location}</p>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50" id="speaker-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-primary text-center mb-16">
            What Organizers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20" id="event-calendar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-primary text-center mb-16">
            Upcoming Events
          </h2>
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="bg-primary text-white p-6 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">{event.date.day}</span>
                    <span className="text-lg">{event.date.month}</span>
                    <span className="text-lg">{event.date.year}</span>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.location}</p>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                  <div className="p-6 flex items-center justify-center">
                    <a
                      href={event.registrationLink}
                      className="btn-primary inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Kit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-2xl font-serif text-primary mb-6">
              Download Speaker Kit
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Organization</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
              >
                Download Now
              </button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

const pastEvents = [
  {
    title: "Women in Leadership Summit",
    location: "New York, NY",
    description: "Keynote speech on personal branding and stage presence",
    image: "/images/event-1.jpg",
  },
  {
    title: "Global Entrepreneurship Conference",
    location: "London, UK",
    description: "Workshop on effective public speaking",
    image: "/images/event-2.jpg",
  },
  {
    title: "TEDx Talk",
    location: "San Francisco, CA",
    description: "The Power of Authentic Presence",
    image: "/images/event-3.jpg",
  },
  {
    title: "Corporate Leadership Forum",
    location: "Chicago, IL",
    description: "Executive presence workshop",
    image: "/images/event-4.jpg",
  },
  {
    title: "Youth Empowerment Conference",
    location: "Miami, FL",
    description: "Inspiring the next generation",
    image: "/images/event-5.jpg",
  },
  {
    title: "International Women's Day Event",
    location: "Toronto, Canada",
    description: "Keynote on confidence and leadership",
    image: "/images/event-6.jpg",
  },
];

const testimonials = [
  {
    name: "John Smith",
    role: "Event Director, Leadership Summit",
    quote: "One of the most engaging speakers we've had. The audience was captivated throughout the entire presentation.",
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "Lisa Chen",
    role: "Conference Organizer",
    quote: "Professional, inspiring, and delivers incredible value. Our attendees are still talking about the impact.",
    image: "/images/testimonial-2.jpg",
  },
  {
    name: "Mark Johnson",
    role: "CEO, Corporate Training Co.",
    quote: "The workshop exceeded our expectations. Our team gained valuable insights and practical skills.",
    image: "/images/testimonial-3.jpg",
  },
];

const upcomingEvents = [
  {
    title: "Executive Presence Masterclass",
    location: "Los Angeles Convention Center",
    description: "A full-day workshop on developing executive presence and leadership communication.",
    date: {
      day: "15",
      month: "June",
      year: "2024",
    },
    registrationLink: "#",
  },
  {
    title: "Women's Leadership Summit",
    location: "Hilton Chicago",
    description: "Keynote speech on personal branding and confidence building.",
    date: {
      day: "22",
      month: "July",
      year: "2024",
    },
    registrationLink: "#",
  },
  {
    title: "Global Communication Conference",
    location: "Singapore Expo",
    description: "International workshop on cross-cultural communication and presence.",
    date: {
      day: "10",
      month: "August",
      year: "2024",
    },
    registrationLink: "#",
  },
];

export default Speaking; 