import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: 'primary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
}

const colorVariants = {
  primary: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  info: 'bg-info'
};

const sizeVariants = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4'
};

export function ProgressBar({ 
  value, 
  max = 100, 
  color = 'primary', 
  size = 'md',
  showLabel = false,
  label 
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className="w-full">
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-foreground">{label}</span>}
          {showLabel && <span className="text-sm text-muted-foreground">{percentage.toFixed(0)}%</span>}
        </div>
      )}
      <div className={cn('w-full bg-secondary rounded-full overflow-hidden', sizeVariants[size])}>
        <div 
          className={cn('h-full transition-all duration-300 ease-out rounded-full', colorVariants[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}