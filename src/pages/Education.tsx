import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { profileData } from '../data/profileData';
import PageHeader from '../components/common/PageHeader';

const Education = () => {
  return (
    <>
      <Helmet>
        <title>Education - {profileData.personal.name}</title>
        <meta name="description" content={`Educational background of ${profileData.personal.name} including MA in Arabic Literature, BA in Sociology, and Wafy program.`} />
        <link rel="canonical" href={`${profileData.seo.baseUrl}/education`} />
        <meta property="og:title" content={`Education - ${profileData.personal.name}`} />
        <meta property="og:description" content={`Educational background of ${profileData.personal.name} including MA in Arabic Literature, BA in Sociology, and Wafy program.`} />
        <meta property="og:url" content={`${profileData.seo.baseUrl}/education`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${profileData.seo.baseUrl}${profileData.seo.ogImage}`} />
      </Helmet>

      <section className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader
            subtitle="EDUCATION"
            title="Academic Background"
            highlight="Background"
            description="My educational journey and academic achievements."
          />

          {/* Step Timeline */}
          <div className="relative">
            {profileData.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Step Number & Line */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg z-10"
                    >
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </motion.div>
                    {index < profileData.education.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-600 mt-4 min-h-[100px]"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="flex-1 backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Shine Effect */}
                    <motion.div
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      style={{ transform: 'skewX(-20deg)' }}
                    />

                    {/* Logo Placeholder */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-primary-400/30 group-hover:border-primary-400/50 transition-colors flex-shrink-0">
                        <GraduationCap className="w-8 h-8 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-400 font-medium mb-2">
                          {edu.institution}
                        </p>
                        {edu.current && (
                          <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs font-semibold border border-primary-400/30">
                            Ongoing
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-gray-300 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span>
                          {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-gray-200 leading-relaxed">
                        {edu.description}
                      </p>
                    )}

                    {/* Award Badge for Completed */}
                    {!edu.current && (
                      <div className="mt-4 flex items-center gap-2 text-primary-400">
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-semibold">Completed</span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
