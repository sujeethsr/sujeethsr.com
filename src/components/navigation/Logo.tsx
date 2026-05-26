// Server Component - No 'use client' directive for SEO benefits
import React from 'react';
import Link from 'next/link';
import personalInfo from '@/data/personal-info.json';

const Logo: React.FC = () => {
  return (
    <div className="flex-shrink-0">
      <Link
        href="/"
        className="text-xl font-bold gradient-text font-mono"
      >
        {`<${personalInfo.personal.nickname} />`}
      </Link>
    </div>
  );
};

export default Logo;