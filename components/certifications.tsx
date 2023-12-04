'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { certificationsData, experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';
import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';

export default function Certifications() {
  const { ref, inView } = useSectionInView('Certifications', 0.2);
  const { theme } = useTheme();

  return (
    <section
      id='certifications'
      ref={ref}
      className='mb-28 scroll-mt-28 sm:mb-40'
    >
      <SectionHeading>Certifications</SectionHeading>
      <VerticalTimeline lineColor=''>
        {certificationsData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='!mt-0 font-normal'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
              <motion.div
                className='mt-2 flex sm:flex-row'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                }}
              >
                <a
                  className=' borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-1.5 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10'
                  href={item.certificationLink}
                  target='_blank'
                >
                  Verify{' '}
                  <HiCheck className='opacity-60 transition group-hover:translate-y-1' />
                </a>
              </motion.div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
