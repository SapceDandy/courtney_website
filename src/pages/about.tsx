import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Layout>
      {/* Story Section */}
      <motion.section
        ref={storyRef}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20"
        id="about-story"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                Our Story
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to transform lives through expert mentorship and pageant training,
                M&P Expert has become a leading force in personal development and stage presence coaching.
              </p>
              <p className="text-lg text-gray-700">
                Our journey began with a simple belief: everyone deserves the opportunity to shine.
                Today, we've helped hundreds of individuals discover their true potential and achieve
                their dreams, both on and off the stage.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-story.jpg"
                alt="Our story"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section
        ref={timelineRef}
        className="py-20 bg-gray-50"
        id="timeline"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-primary text-center mb-16">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary" />
            
            {/* Timeline Items */}
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial="hidden"
                animate={timelineInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.2 },
                  },
                }}
                className="relative flex items-center mb-12"
              >
                {/* For even indices (0, 2, 4...) - Content on the left */}
                {index % 2 === 0 && (
                  <>
                    <div className="w-1/2 pr-12">
                      <div className="bg-white p-6 rounded-lg shadow-lg ml-auto text-right">
                        <h3 className="text-2xl font-serif text-primary mb-2">
                          {item.year}
                        </h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full" />
                    <div className="w-1/2" /> {/* Empty space for right side */}
                  </>
                )}
                
                {/* For odd indices (1, 3, 5...) - Content on the right */}
                {index % 2 === 1 && (
                  <>
                    <div className="w-1/2" /> {/* Empty space for left side */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full" />
                    <div className="w-1/2 pl-12">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-serif text-primary mb-2">
                          {item.year}
                        </h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className="py-20"
        id="team-profiles"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-primary text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial="hidden"
                animate={teamInView ? "visible" : "hidden"}
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
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-sm mb-2">{member.role}</p>
                    <p className="text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-primary text-white" id="mission-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16">
            Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-6">Our Mission</h3>
              <p className="text-lg">
                To empower individuals with the confidence, skills, and presence
                needed to excel in their personal and professional endeavors,
                creating lasting impact through expert mentorship and training.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-6">Our Values</h3>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary mr-3">•</span>
                    <div>
                      <h4 className="font-semibold mb-1">{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const timelineItems = [
  {
    year: "2018",
    description: "Founded M&P Expert with a vision to transform lives through expert mentorship.",
  },
  {
    year: "2019",
    description: "Launched our comprehensive pageant training program.",
  },
  {
    year: "2020",
    description: "Expanded to virtual coaching, reaching clients worldwide.",
  },
  {
    year: "2021",
    description: "Celebrated our first national pageant winner.",
  },
  {
    year: "2022",
    description: "Introduced corporate speaking and leadership programs.",
  },
  {
    year: "2023",
    description: "Opened our state-of-the-art training facility.",
  },
];

const teamMembers = [
  {
    name: "Sarah Anderson",
    role: "Founder & Lead Coach",
    bio: "Former Miss USA finalist with 15+ years of pageant and coaching experience.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Michael Roberts",
    role: "Speaking Coach",
    bio: "Professional speaker and communication expert with corporate background.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Emily Chen",
    role: "Performance Director",
    bio: "Broadway performer turned coach, specializing in stage presence.",
    image: "/images/team-3.jpg",
  },
];

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, setting high standards for ourselves and our clients.",
  },
  {
    title: "Authenticity",
    description: "We believe in helping individuals discover and embrace their authentic selves.",
  },
  {
    title: "Growth",
    description: "We foster continuous learning and personal development.",
  },
  {
    title: "Impact",
    description: "We aim to create lasting positive change in the lives of those we work with.",
  },
];

export default About; 