import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as LucideIcons from 'lucide-react';
import { profileData } from '../data/profileData';
import PageHeader from '../components/common/PageHeader';
import CircularProgress from '../components/common/CircularProgress';

const Skills = () => {
  const getIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Code;
    return IconComponent;
  };

  return (
    <>
      <Helmet>
        <title>Skills & Languages - {profileData.personal.name}</title>
        <meta name="description" content={`Technical skills and languages of ${profileData.personal.name}. Expertise in WordPress Development, SEO, and multiple programming languages.`} />
        <link rel="canonical" href={`${profileData.seo.baseUrl}/skills`} />
        <meta property="og:title" content={`Skills & Languages - ${profileData.personal.name}`} />
        <meta property="og:description" content={`Technical skills and languages of ${profileData.personal.name}. Expertise in WordPress Development, SEO, and multiple programming languages.`} />
        <meta property="og:url" content={`${profileData.seo.baseUrl}/skills`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${profileData.seo.baseUrl}${profileData.seo.ogImage}`} />
      </Helmet>

      <section className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader
            subtitle="MY SKILLS"
            title="Skills & Languages"
            highlight="Skills"
            description="A comprehensive overview of my technical expertise and language proficiency."
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-primary-400 to-primary-600 rounded"></span>
                Technical Skills
              </h2>
              <div className="space-y-6">
                {profileData.skills.technical.map((skill, index) => {
                  const IconComponent = getIcon(skill.icon);
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group backdrop-blur-xl bg-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-primary-400/30"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors border border-primary-400/30">
                            <IconComponent className="w-5 h-5 text-primary-400" />
                          </div>
                          <span className="text-lg font-semibold text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-primary-400 font-bold text-lg">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-2">
                <span className="w-1 h-8 bg-gradient-to-b from-primary-400 to-primary-600 rounded"></span>
                Languages
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {profileData.skills.languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-primary-400/30 text-center group"
                  >
                    <div className="flex justify-center mb-4">
                      <CircularProgress value={language.proficiency} size={100} strokeWidth={6} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {language.name}
                    </h3>
                    <p className="text-primary-400 text-sm">
                      {language.level}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
