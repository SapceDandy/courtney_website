import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  status: string;
  goals: string;
  contactMethod: string;
  additionalComments: string;
}

const Journey = () => {
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    status: '',
    goals: '',
    contactMethod: '',
    additionalComments: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically make an API call to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Track form submission in Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'journey_form_submission', {
          event_category: 'form',
          event_label: 'Begin Journey Form'
        });
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for sharing your journey with us. We will be in touch soon!'
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        status: '',
        goals: '',
        contactMethod: '',
        additionalComments: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Begin Your Journey | M&P Expert</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div id="journey-page" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                Begin Your Transformative Journey
              </h1>
              <p className="text-xl text-gray-700">
                Tell us about yourself so we can craft a tailored experience that helps you
                shine on your journey to success. Your story is unique, and we're here to
                help you write its next chapter.
              </p>
            </motion.div>

            <motion.form
              id="journey-form"
              onSubmit={handleSubmit}
              className="space-y-8"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp}>
                  <label htmlFor="journey-name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="journey-name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow duration-200"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="journey-email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="journey-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow duration-200"
                    placeholder="Enter your email address"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp}>
                  <label htmlFor="journey-phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="journey-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow duration-200"
                    placeholder="Enter your phone number"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="journey-status" className="block text-gray-700 font-medium mb-2">
                    Current Status
                  </label>
                  <select
                    id="journey-status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow duration-200"
                  >
                    <option value="">Select your current status</option>
                    <option value="aspiring">Aspiring Contestant</option>
                    <option value="current">Current Competitor</option>
                    <option value="professional">Professional/Industry</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="journey-goals" className="block text-gray-700 font-medium mb-2">
                  Your Goals and Challenges
                </label>
                <textarea
                  id="journey-goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow duration-200"
                  placeholder="Tell us about your pageant journey, goals, and any specific challenges you'd like to overcome..."
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="journey-contact" className="block text-gray-700 font-medium mb-2">
                  Preferred Contact Method
                </label>
                <select
                  id="journey-contact"
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow duration-200"
                >
                  <option value="">Select preferred contact method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="text">Text Message</option>
                </select>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="journey-comments" className="block text-gray-700 font-medium mb-2">
                  Additional Comments or Questions
                </label>
                <textarea
                  id="journey-comments"
                  name="additionalComments"
                  value={formData.additionalComments}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow duration-200"
                  placeholder="Any additional information you'd like to share..."
                />
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center space-y-4"
              >
                <motion.button
                  id="journey-submit"
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full md:w-auto px-12 py-4 bg-secondary text-white rounded-lg font-semibold text-lg 
                    transition-all duration-200 hover:bg-opacity-90 hover:shadow-lg
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit & Begin Your Journey'}
                </motion.button>

                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-4 rounded-lg w-full ${
                      submitStatus.type === 'success'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Journey; 