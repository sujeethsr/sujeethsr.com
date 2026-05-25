// Server Component - Static content rendered on server for SEO benefits
import React from 'react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-background/80 to-secondary overflow-hidden"
    >
      {/* Animated basketball dunk background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <div className="absolute right-[6%] top-[18%] w-[420px] h-[420px] hidden md:block">
          {/* Backboard */}
          <div className="absolute right-6 top-8 w-28 h-20 border-4 border-primary/70 rounded-md shadow-[0_0_35px_rgba(59,130,246,0.45)]" />

          {/* Rim */}
          <div className="absolute right-12 top-[92px] w-20 h-4 border-4 border-primary rounded-full animate-[rimShake_2.6s_ease-in-out_infinite]" />

          {/* Net */}
          <div className="absolute right-[70px] top-[108px] w-10 h-16 border-l-2 border-r-2 border-primary/40 skew-x-[-12deg]" />
          <div className="absolute right-[82px] top-[108px] w-10 h-16 border-l-2 border-r-2 border-primary/25 skew-x-[12deg]" />

          {/* Dunking player group */}
          <div className="absolute left-10 bottom-10 w-44 h-56 animate-[dunkMove_2.6s_ease-in-out_infinite]">
            {/* Head */}
            <div className="absolute left-[82px] top-5 w-10 h-10 rounded-full bg-primary shadow-[0_0_25px_rgba(59,130,246,0.65)]" />

            {/* Body */}
            <div className="absolute left-[84px] top-[50px] w-8 h-24 bg-primary/80 rounded-full rotate-[12deg]" />

            {/* Arm to rim */}
            <div className="absolute left-[104px] top-[58px] w-28 h-4 bg-primary/80 rounded-full rotate-[-32deg] origin-left" />

            {/* Other arm */}
            <div className="absolute left-[65px] top-[70px] w-24 h-4 bg-primary/50 rounded-full rotate-[28deg]" />

            {/* Left leg */}
            <div className="absolute left-[74px] top-[126px] w-5 h-28 bg-primary/70 rounded-full rotate-[32deg]" />

            {/* Right leg */}
            <div className="absolute left-[102px] top-[125px] w-5 h-28 bg-primary/60 rounded-full rotate-[-36deg]" />

            {/* Ball */}
            <div className="absolute left-[178px] top-[26px] w-10 h-10 rounded-full bg-primary border-2 border-primary-foreground/40 shadow-[0_0_28px_rgba(59,130,246,0.75)] animate-[ballDunk_2.6s_ease-in-out_infinite]">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-background/50" />
              <div className="absolute left-1/2 top-0 h-full w-[2px] bg-background/50" />
              <div className="absolute inset-2 rounded-full border border-background/40" />
            </div>
          </div>

          {/* Court glow */}
          <div className="absolute left-0 bottom-0 w-full h-1 bg-primary/50 blur-sm" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s discuss your next project
          </p>
        </div>

        <div className="flex justify-center">
          <div className="glass-card p-8 rounded-xl w-full max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;