import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  FileText, 
  ExternalLink,
  Target,
  BarChart,
  Scale,
  Shield,
  Code,
  Server,
  Layers,
  Cloud,
  Lock,
  Zap,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';

const iconMap = {
  mail: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
  'file-text': FileText,
  'external-link': ExternalLink,
  target: Target,
  'bar-chart': BarChart,
  scale: Scale,
  shield: Shield,
  code: Code,
  server: Server,
  layers: Layers,
  cloud: Cloud,
  lock: Lock,
  zap: Zap,
  'check-circle': CheckCircle,
  'arrow-right': ArrowRight,
  menu: Menu,
  x: X,
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export default function Icon({ name, className, size = 24 }: IconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} size={size} />;
}
