import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { profileData } from '../data/profileData';
import PageHeader from '../components/common/PageHeader';

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  // Extract unique years for sticky markers
  const years = Array.from(
    new Set(
      profileData.experience.map((exp) => {
        const year = exp.startDate.split(' ')[1] || exp.startDate;
        return year;
      })
    )
  ).sort();

  return (
    <>
      <Helmet>
        <title>Experience - {profileData.personal.name}</title>
        <meta name="description" content={`Professional experience of ${profileData.personal.name} including WordPress Development, SEO, and Software Testing roles.`} />
        <link rel="canonical" href={`${profileData.seo.baseUrl}/experience`} />
        <meta property="og:title" content={`Experience - ${profileData.personal.name}`} />
        <meta property="og:description" content={`Professional experience of ${profileData.personal.name} including WordPress Development, SEO, and Software Testing roles.`} />
        <meta property="og:url" content={`${profileData.seo.baseUrl}/experience`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${profileData.seo.baseUrl}${profileData.seo.ogImage}`} />
      </Helmet>

      <section className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader
            subtitle="MY WORK"
            title="Professional Experience"
            highlight="Experience"
            description="A detailed timeline of my professional journey and career milestones."
          />

          <div className="relative">
            {/* Sticky Year Markers */}
            <div className="hidden lg:block">
              {years.map((year, index) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="sticky top-32 z-10 mb-8"
                  style={{ top: '8rem' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></div>
                    <span className="text-2xl font-bold text-primary-400 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-400/30">
                      {year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Timeline */}
            <div className="relative">
              {profileData.experience.map((exp, index) => {
                const isExpanded = expanded === exp.id;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative pl-8 pb-12 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-500 rounded-full border-4 border-slate-900 shadow-lg"></div>

                    <motion.div
                      whileHover={{ scale: 1.02, x: 10 }}
                      onClick={() => setExpanded(isExpanded ? null : exp.id)}
                      className="backdrop-blur-xl bg-white/10 rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-400/30 group-hover:bg-primary-500/30 transition-colors">
                              <Briefcase className="w-6 h-6 text-primary-400" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                                {exp.title}
                              </h3>
                              <p className="text-primary-400 font-medium">{exp.company}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-300 ml-16">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4"
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-16 pt-4 border-t border-white/10">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="leading-relaxed">{responsibility}</li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
