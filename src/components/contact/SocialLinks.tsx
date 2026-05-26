import React from 'react';
import { Github, Linkedin, Mail, Youtube, Instagram } from 'lucide-react';
import personalInfo from '@/data/personal-info.json';

const DevToIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
  </svg>
);

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const socialLinks = [
  {
    name: 'LinkedIn',
    url: personalInfo.social.linkedin.url,
    username: personalInfo.social.linkedin.username,
    icon: <Linkedin size={20} />,
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    url: personalInfo.social.github.url,
    username: personalInfo.social.github.username,
    icon: <Github size={20} />,
    color: 'hover:text-gray-300',
  },
  {
    name: 'DEV.to',
    url: personalInfo.social.devto.url,
    username: personalInfo.social.devto.username,
    icon: <DevToIcon />,
    color: 'hover:text-white',
  },
  {
    name: 'Medium',
    url: personalInfo.social.medium.url,
    username: personalInfo.social.medium.username,
    icon: <MediumIcon />,
    color: 'hover:text-green-400',
  },
  {
    name: 'YouTube',
    url: personalInfo.social.youtube.url,
    username: personalInfo.social.youtube.username,
    icon: <Youtube size={20} />,
    color: 'hover:text-red-500',
  },
  {
    name: 'Instagram',
    url: personalInfo.social.instagram.url,
    username: personalInfo.social.instagram.username,
    icon: <Instagram size={20} />,
    color: 'hover:text-pink-500',
  },
  {
    name: 'Email',
    url: personalInfo.social.email,
    username: 'work.sujeeth@gmail.com',
    icon: <Mail size={20} />,
    color: 'hover:text-primary',
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="text-lg font-semibold text-foreground mb-4">Follow Me</h3>
      <div className="space-y-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 text-muted-foreground ${link.color} transition-all duration-200 group`}
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              {link.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{link.name}</p>
              <p className="text-xs text-muted-foreground">{link.username}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
