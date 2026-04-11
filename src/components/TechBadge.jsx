import { LuZap } from 'react-icons/lu';
import {
  SiBitcoin,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiSqlite,
} from 'react-icons/si';

const techRegistry = {
  Flutter: { Icon: SiFlutter, accent: '#54C5F8', short: 'FL' },
  Dart: { Icon: SiDart, accent: '#0175C2', short: 'DT' },
  Firebase: { Icon: SiFirebase, accent: '#FFCA28', short: 'FB' },
  Riverpod: { accent: '#7C3AED', short: 'RP' },
  GetX: { accent: '#8B5CF6', short: 'GX' },
  'REST APIs': { accent: '#10B981', short: 'API' },
  GraphQL: { Icon: SiGraphql, accent: '#E10098', short: 'GQL' },
  SQLite: { Icon: SiSqlite, accent: '#0F80CC', short: 'SQL' },
  Git: { Icon: SiGit, accent: '#F05032', short: 'GIT' },
  Bitcoin: { Icon: SiBitcoin, accent: '#F7931A', short: 'BTC' },
  Lightning: { Icon: LuZap, accent: '#FACC15', short: 'LN' },
  'Bitcoin Dev Kit': { accent: '#F7931A', short: 'BDK' },
  BDK: { accent: '#F7931A', short: 'BDK' },
  'CI/CD': { Icon: SiGithubactions, accent: '#2088FF', short: 'CI' },
};

function TechBadge({ name, variant = 'pill', className = '' }) {
  const meta = techRegistry[name] ?? { accent: '#94A3B8', short: name.slice(0, 2).toUpperCase() };
  const Icon = meta.Icon;
  const styles = {
    '--tech-accent': meta.accent,
  };

  if (variant === 'tile') {
    return (
      <div
        className={`tech-tile ${className}`}
        style={styles}
      >
        <span className="tech-icon-shell">
          {Icon ? <Icon className="h-5 w-5" /> : <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em]">{meta.short}</span>}
        </span>
        <span className="mt-3 block text-sm font-medium text-slate-100">{name}</span>
      </div>
    );
  }

  return (
    <div
      className={`tech-pill ${className}`}
      style={styles}
    >
      <span className="tech-pill-icon">
        {Icon ? <Icon className="h-4 w-4" /> : <span className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.15em]">{meta.short}</span>}
      </span>
      <span>{name}</span>
    </div>
  );
}

export default TechBadge;
