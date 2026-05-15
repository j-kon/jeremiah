import { LuCloud, LuLayers, LuNetwork, LuPlug, LuShield, LuZap } from 'react-icons/lu';
import {
  SiBitcoin,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGetx,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiLightning,
  SiSqlite,
} from 'react-icons/si';

const techRegistry = {
  // Mobile
  Flutter: { Icon: SiFlutter, accent: '#54C5F8', short: 'FL' },
  Dart: { Icon: SiDart, accent: '#0175C2', short: 'DT' },
  Riverpod: { Icon: LuLayers, accent: '#7C3AED', short: 'RP' },
  GetX: { Icon: SiGetx, accent: '#8B5CF6', short: 'GX' },
  'Performance Optimization': { Icon: LuZap, accent: '#FACC15', short: 'PO' },

  // Backend / APIs
  Firebase: { Icon: SiFirebase, accent: '#FFCA28', short: 'FB' },
  GraphQL: { Icon: SiGraphql, accent: '#E10098', short: 'GQL' },
  SQLite: { Icon: SiSqlite, accent: '#0F80CC', short: 'SQL' },
  'REST APIs': { Icon: LuNetwork, accent: '#10B981', short: 'API' },
  Authentication: { Icon: LuShield, accent: '#34D399', short: 'AUTH' },
  'Cloud Data Flows': { Icon: LuCloud, accent: '#38BDF8', short: 'CDF' },
  'Service Integration': { Icon: LuPlug, accent: '#A78BFA', short: 'SI' },

  // Bitcoin & Lightning
  Bitcoin: { Icon: SiBitcoin, accent: '#F7931A', short: 'BTC' },
  Lightning: { Icon: SiLightning, accent: '#FACC15', short: 'LN' },
  'Lightning Concepts': { Icon: SiLightning, accent: '#FACC15', short: 'LN' },
  'Bitcoin Dev Kit': { Icon: SiBitcoin, accent: '#F7931A', short: 'BDK' },
  BDK: { Icon: SiBitcoin, accent: '#F7931A', short: 'BDK' },
  'Wallet Architecture': { accent: '#F7931A', short: 'WA' },
  'Testnet Flows': { accent: '#F7931A', short: 'TF' },
  'Self-Custody UX': { accent: '#F7931A', short: 'SC' },

  // Dev Tools
  Git: { Icon: SiGit, accent: '#F05032', short: 'GIT' },
  'CI/CD': { Icon: SiGithubactions, accent: '#2088FF', short: 'CI' },
  'Product Thinking': { accent: '#94A3B8', short: 'PT' },
  'Architecture Reviews': { accent: '#94A3B8', short: 'AR' },
  'Planning Workflows': { accent: '#94A3B8', short: 'PW' },
  'Technical Communication': { accent: '#94A3B8', short: 'TC' },

  // Community
  'Community Building': { accent: '#34D399', short: 'CB' },
  'Event Leadership': { accent: '#34D399', short: 'EL' },
  Mentorship: { accent: '#34D399', short: 'M' },
  'Developer Relations': { accent: '#34D399', short: 'DR' },
  'Public Speaking': { accent: '#34D399', short: 'PS' },
  Writing: { accent: '#94A3B8', short: 'WR' },
};

function TechBadge({ name, variant = 'pill', className = '' }) {
  const meta = techRegistry[name] ?? { accent: '#94A3B8', short: name.slice(0, 2).toUpperCase() };
  const Icon = meta.Icon;
  const styles = { '--tech-accent': meta.accent };

  if (variant === 'tile') {
    return (
      <div className={`tech-tile ${className}`} style={styles}>
        <span className="tech-icon-shell">
          {Icon
            ? <Icon className="h-5 w-5" />
            : <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em]">{meta.short}</span>}
        </span>
        <span className="mt-3 block text-sm font-medium text-slate-100">{name}</span>
      </div>
    );
  }

  return (
    <div className={`tech-pill ${className}`} style={styles}>
      <span className="tech-pill-icon">
        {Icon
          ? <Icon className="h-4 w-4" />
          : <span className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.15em]">{meta.short}</span>}
      </span>
      <span>{name}</span>
    </div>
  );
}

export default TechBadge;
