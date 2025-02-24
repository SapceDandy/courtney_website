import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface TrainingProgram {
  title: string;
  description: string;
  includes: string[];
  details: string[];
}

interface TrainingPrograms {
  comprehensive: TrainingProgram;
  intensive: TrainingProgram;
  virtual: TrainingProgram;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Training = () => {
  const [activeProgram, setActiveProgram] = useState<keyof TrainingPrograms>('comprehensive');
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [storiesRef, storiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/training-hero.jpg"
            alt="Pageant training"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Transform Your Presence
          </h1>
          <p className="text-xl mb-8">
            Comprehensive pageant training programs tailored to your goals
          </p>
          <a
            href="#training-details"
            className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Explore Programs
          </a>
        </div>
      </section>

      {/* Success Stories */}
      <section
        ref={storiesRef}
        className="py-20"
        id="training-stories"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-primary text-center mb-16">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial="hidden"
                animate={storiesInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 },
                  },
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-[400px]">
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="relative">
                      <Image
                        src={story.beforeImage}
                        alt={`${story.name} before`}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 text-sm rounded">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={story.afterImage}
                        alt={`${story.name} after`}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-secondary text-white px-2 py-1 text-sm rounded">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4">{story.achievement}</p>
                  <p className="text-gray-700">{story.testimonial}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50" id="training-details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-primary text-center mb-16">
            Training Programs
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(trainingPrograms).map((program) => (
              <button
                key={program}
                onClick={() => setActiveProgram(program as keyof TrainingPrograms)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeProgram === program as keyof TrainingPrograms
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {program.charAt(0).toUpperCase() + program.slice(1)}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-serif text-primary mb-6">
              {trainingPrograms[activeProgram].title}
            </h3>
            <p className="text-gray-700 mb-8">
              {trainingPrograms[activeProgram].description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">What's Included</h4>
                <ul className="space-y-3">
                  {trainingPrograms[activeProgram].includes.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Program Details</h4>
                <ul className="space-y-3">
                  {trainingPrograms[activeProgram].details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-3">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20" id="video-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-primary text-center mb-16">
            Hear from Our Winners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={testimonial.videoUrl}
                  title={testimonial.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id="faq-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-primary text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      activeAccordion === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeAccordion === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

const successStories = [
  {
    name: "Jessica Martinez",
    achievement: "Miss State 2023",
    testimonial: "The training program completely transformed my stage presence and confidence.",
    beforeImage: "/images/before-1.jpg",
    afterImage: "/images/after-1.jpg",
  },
  {
    name: "Amanda Thompson",
    achievement: "National Finalist",
    testimonial: "I learned invaluable skills that helped me stand out in the competition.",
    beforeImage: "/images/before-2.jpg",
    afterImage: "/images/after-2.jpg",
  },
  {
    name: "Rachel Kim",
    achievement: "International Title Holder",
    testimonial: "The personalized coaching made all the difference in my journey.",
    beforeImage: "/images/before-3.jpg",
    afterImage: "/images/after-3.jpg",
  },
];

const trainingPrograms: TrainingPrograms = {
  comprehensive: {
    title: "Comprehensive Pageant Training",
    description: "A complete program covering all aspects of pageant competition.",
    includes: [
      "Personal styling and image consulting",
      "Interview preparation",
      "Stage presence and walking techniques",
      "Public speaking coaching",
      "Platform development",
    ],
    details: [
      "12-week program",
      "Weekly one-on-one sessions",
      "Group workshops",
      "Mock competitions",
      "Video analysis and feedback",
    ],
  },
  intensive: {
    title: "Intensive Boot Camp",
    description: "Accelerated training program for experienced contestants.",
    includes: [
      "Advanced stage techniques",
      "Crisis management",
      "Media training",
      "Personal branding",
      "Competition strategy",
    ],
    details: [
      "2-week intensive program",
      "Daily training sessions",
      "Personalized feedback",
      "Professional photo shoot",
      "Final showcase",
    ],
  },
  virtual: {
    title: "Virtual Coaching",
    description: "Flexible online training for contestants worldwide.",
    includes: [
      "Virtual consultations",
      "Online workshops",
      "Digital resources",
      "Remote feedback",
      "Community support",
    ],
    details: [
      "Flexible schedule",
      "Access to online platform",
      "Video submissions",
      "Virtual community",
      "24/7 support",
    ],
  },
};

const videoTestimonials = [
  {
    title: "Sarah's Journey to the Crown",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    title: "Michelle's Transformation Story",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    title: "Lauren's Path to Success",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
];

const faqs = [
  {
    id: "faq1",
    question: "How long does the training program take?",
    answer: "Our comprehensive program is 12 weeks long, but we also offer intensive boot camps and flexible virtual coaching options to suit your schedule and needs.",
  },
  {
    id: "faq2",
    question: "Do I need prior pageant experience?",
    answer: "No prior experience is required. We work with contestants at all levels, from beginners to experienced competitors.",
  },
  {
    id: "faq3",
    question: "What is included in the training program?",
    answer: "Our programs include personal styling, interview preparation, stage presence coaching, public speaking training, and platform development. The specific components vary by program type.",
  },
  {
    id: "faq4",
    question: "Can I train virtually?",
    answer: "Yes, we offer virtual coaching options with live video sessions, online workshops, and digital resources for contestants worldwide.",
  },
  {
    id: "faq5",
    question: "How much does the program cost?",
    answer: "Program costs vary depending on the type and duration of training. Contact us for detailed pricing information and payment plans.",
  },
];

export default Training; 