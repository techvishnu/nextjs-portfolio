'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-center">
  I am an engineering student deeply passionate about all things computer-related. My coding journey has been both exciting and enlightening, leading me to real coding projects and a wealth of knowledge. Proficient in web development, I've successfully completed various small projects showcasing my front-end skills.
</p>

<p className="mb-3 text-center">
  Embracing the open-source philosophy, I made the switch to Linux for my daily computing needs a couple of years ago, fostering adaptability and a versatile skill set. My proficiency extends to Microsoft products, reflecting my ability to navigate seamlessly between Linux and Microsoft ecosystems.
</p>

<p className="mb-3 text-center">
  Outside of my academic pursuits, I find joy in playing video games and hitting the gym, contributing to a healthy work-life balance. Actively honing my web development skills, I focus on leveling up my front-end expertise. This portfolio is a testament to my journey and a showcase of the skills and experiences defining me in the tech landscape.
</p>

    </motion.section>
  );
}
