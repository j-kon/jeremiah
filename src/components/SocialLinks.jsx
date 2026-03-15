import { ArrowUpRight, BookOpen, Github, Linkedin, Mail } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  medium: BookOpen,
  mail: Mail,
};

function SocialLinks({ links }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        const isExternal = link.href.startsWith('http');

        return (
          <a
            key={link.label}
            href={link.href}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
          >
            <Icon className="h-4 w-4 text-amber-300/90" />
            <span>{link.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition duration-300 group-hover:text-slate-300" />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
