import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'pink';
  description?: string;
}

const colorVariants = {
  blue: 'bg-primary/10 text-primary',
  purple: 'bg-purple-100 text-purple-600',
  green: 'bg-success/10 text-success',
  orange: 'bg-warning/10 text-warning',
  pink: 'bg-pink-100 text-pink-600'
};

export function StatCard({ title, value, icon: Icon, color = 'blue', description }: StatCardProps) {
  return (
    <Card className="p-6 shadow-card hover:shadow-large transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground mt-1">{value}</p>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <div className={cn('p-3 rounded-xl', colorVariants[color])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  );
}