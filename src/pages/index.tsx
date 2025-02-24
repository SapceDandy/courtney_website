import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.98 }
};

const buttonBounce = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(212,175,55,0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valueRef, valueInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const taglines = [
    "Transform Your Presence",
    "Elevate Your Potential",
    "Achieve Your Dreams"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section with Enhanced Parallax */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        id="hero-section"
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y, opacity: backgroundOpacity }}
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Elegant pageant background"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
        >
          <div className="h-24 mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTagline}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-serif"
              >
                {taglines[currentTagline]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-12 text-gray-200"
          >
            Expert mentorship and pageant training to help you shine on any stage
          </motion.p>
          <motion.div 
            variants={buttonBounce}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <a
              href="/journey"
              className="inline-block bg-secondary text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Begin Your Journey
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section
        ref={introRef}
        id="intro"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif text-primary mb-8"
            >
              Your Journey to Excellence Starts Here
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-700 mb-12 leading-relaxed"
            >
              At M&P Expert, we understand that true transformation goes beyond surface-level changes.
              Our comprehensive approach combines expert guidance, personalized coaching, and proven
              methodologies to help you unlock your full potential.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-white shadow-lg"
                >
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section
        ref={valueRef}
        id="value-prop"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate={valueInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif text-primary mb-8"
            >
              Why Choose M&P Expert?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Discover the secret to unparalleled success. Our expert guidance transforms talent into triumph,
              preparing you for the spotlight in every arena.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial="hidden"
                animate={valueInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.3 },
                  },
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  className="text-secondary mb-6 text-5xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {prop.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
        id="services-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif text-primary mb-8"
            >
              Transformative Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-700"
            >
              Choose from our range of specialized services designed to help you achieve your goals
              and make a lasting impact.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={scaleOnHover}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  className="text-secondary mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <motion.div
                  variants={buttonBounce}
                  className="inline-block"
                >
                  <a
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-24 bg-white relative overflow-hidden"
        id="testimonials-section"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-serif text-primary mb-8"
            >
              Success Stories
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-700"
            >
              Hear from our alumni who have achieved remarkable success through our programs.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={scaleOnHover}
                initial="initial"
                whileHover="hover"
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-8">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-24 bg-primary relative overflow-hidden"
        id="final-cta"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'url("/images/pattern.png")',
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-serif text-white mb-8"
          >
            Ready to Elevate Your Potential?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-12 leading-relaxed"
          >
            Take the first step toward a brighter future. Our expert mentorship and training
            will set you on the path to success. Don't wait – your journey to excellence
            begins today.
          </motion.p>
          <motion.div
            variants={buttonBounce}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <a
              href="/journey"
              className="inline-block bg-secondary text-white px-10 py-5 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Book Your Session Today
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-center mb-16 text-gray-600">
            Featured In
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {featuredLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

const stats = [
  {
    value: "500+",
    label: "Successful Graduates"
  },
  {
    value: "50+",
    label: "Competition Wins"
  },
  {
    value: "15+",
    label: "Years Experience"
  }
];

const valueProps = [
  {
    title: "Expert Guidance",
    description: "Learn from industry professionals with proven success in pageantry and public speaking. Our mentors bring decades of experience to help you excel.",
    icon: "👑"
  },
  {
    title: "Personalized Approach",
    description: "Every journey is unique. Our tailored training programs are designed to meet your specific goals and aspirations, ensuring maximum impact.",
    icon: "🎯"
  },
  {
    title: "Proven Results",
    description: "Join our community of successful alumni who have achieved their dreams on the big stage. Your success story begins with us.",
    icon: "🏆"
  }
];

const services = [
  {
    title: "Pageant Training",
    description: "Comprehensive training programs tailored to your specific pageant goals. Master stage presence, interview skills, and personal presentation.",
    icon: (
      <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Speaking Engagements",
    description: "Transform your public speaking abilities with our expert coaching. Perfect for keynotes, workshops, and professional presentations.",
    icon: (
      <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Personal Mentorship",
    description: "One-on-one guidance to help you reach your full potential. Develop confidence, leadership skills, and a powerful personal brand.",
    icon: (
      <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Miss State 2023",
    quote: "The training I received was invaluable. It helped me secure my state title and prepared me for national competition. The personalized coaching made all the difference.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Michael Chen",
    title: "Corporate Executive",
    quote: "The speaking coaching transformed my presentation skills. I now command attention in every boardroom and have seen a significant impact on my career trajectory.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Emily Rodriguez",
    title: "Pageant Finalist",
    quote: "The personalized mentorship program gave me the confidence to shine on stage and in life. I've grown not just as a competitor, but as a person.",
    image: "/images/testimonial3.jpg",
  },
];

const featuredLogos = [
  { src: "/images/logo1.png", alt: "Featured Publication 1" },
  { src: "/images/logo2.png", alt: "Featured Publication 2" },
  { src: "/images/logo3.png", alt: "Featured Publication 3" },
  { src: "/images/logo4.png", alt: "Featured Publication 4" },
];
