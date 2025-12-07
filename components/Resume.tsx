import React, { useState } from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../constants';
import { ExperienceItem, ResumeTab } from '../types';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ResumeTab>(ResumeTab.EDUCATION);

  const renderTimeline = (data: ExperienceItem[]) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
      <div className="flex flex-col gap-8">
        <h4 className="text-3xl font-bold text-gray-800 mb-4 font-heading">Part 1</h4>
        {data.slice(0, Math.ceil(data.length / 2)).map((item) => (
           <TimelineCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-8">
        <h4 className="text-3xl font-bold text-gray-800 mb-4 font-heading">Part 2</h4>
        {data.slice(Math.ceil(data.length / 2)).map((item) => (
           <TimelineCard key={item.id} item={item} />
        ))}
        {/* Placeholder for empty slot to balance layout if needed */}
        {data.length % 2 !== 0 && (
             <div className="hidden lg:block"></div>
        )}
      </div>
    </div>
  );

  return (
    <section id="resume" className="py-24 px-6 bg-[#ecf0f3] border-b border-gray-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">7+ Years of Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 font-heading">My Resume</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center mb-16 shadow-soft rounded-lg bg-white overflow-hidden">
          {Object.values(ResumeTab).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-8 text-lg font-medium transition-all duration-300 hover:text-primary ${
                activeTab === tab 
                  ? 'text-primary bg-white shadow-inner-soft' 
                  : 'text-gray-600 bg-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="transition-all duration-500 ease-in-out">
          {activeTab === ResumeTab.EDUCATION && renderTimeline(EDUCATION_DATA)}
          {activeTab === ResumeTab.EXPERIENCE && renderTimeline(EXPERIENCE_DATA)}
          {activeTab === ResumeTab.SKILLS && (
              <div className="text-center py-20">
                  <h3 className="text-2xl text-gray-500">Skills content coming soon...</h3>
              </div>
          )}
        </div>
      </div>
    </section>
  );
};

const TimelineCard: React.FC<{ item: ExperienceItem }> = ({ item }) => {
  return (
    <div className="p-10 rounded-xl bg-gradient-to-br from-[#e2e8ec] to-[#ffffff] shadow-soft hover:bg-white transition-all duration-300 group">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors font-heading">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 mt-2">{item.subtitle}</p>
        </div>
        {item.score && (
          <div className="px-4 py-2 bg-white shadow-inner-soft rounded-md text-primary font-bold text-sm whitespace-nowrap">
            {item.score}
          </div>
        )}
      </div>
      <hr className="border-gray-300 mb-6" />
      <p className="text-gray-500 leading-relaxed text-lg">
        {item.description}
      </p>
    </div>
  );
}

export default Resume;