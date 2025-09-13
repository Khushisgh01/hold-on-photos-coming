import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  Map, 
  FileText, 
  Trophy, 
  BookOpen, 
  Building, 
  MessageSquare,
  User,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home, description: 'Your career overview' },
  { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Explore career paths' },
  { name: 'Roadmaps', href: '/roadmaps', icon: Map, description: 'Step-by-step guides' },
  { name: 'Exams', href: '/exams', icon: FileText, description: 'Entrance exams info' },
  { name: 'Scholarships', href: '/scholarships', icon: Trophy, description: 'Funding opportunities' },
  { name: 'Courses', href: '/courses', icon: BookOpen, description: 'Learning resources' },
  { name: 'Internships', href: '/internships', icon: Building, description: 'Work experience' },
  { name: 'Mock Interviews', href: '/interviews', icon: MessageSquare, description: 'Interview practice' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">M</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground">Magdarshak</h1>
            <p className="text-sm text-muted-foreground">Career Navigator</p>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <User className="w-6 h-6 text-primary" />
          <div className="flex-1">
            <h3 className="font-medium text-foreground">Your Profile</h3>
            <div className="flex gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">Class 12</Badge>
              <Badge variant="outline" className="text-xs">Science (PCM)</Badge>
            </div>
          </div>
        </div>
        <Link 
          to="/profile"
          className="block mt-3 text-sm text-primary hover:text-primary-dark transition-colors"
        >
          Change Stream
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            NAVIGATION
          </h4>
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors group",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <item.icon className={cn(
                    "w-5 h-5",
                    isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )} />
                  <div className="flex-1">
                    <div className={cn(
                      "font-medium",
                      isActive ? "text-primary-foreground" : "text-foreground"
                    )}>
                      {item.name}
                    </div>
                    <div className={cn(
                      "text-xs",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      {item.description}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* User Profile at Bottom */}
      <div className="p-4 border-t border-border">
        <Link 
          to="/profile"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
        >
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-primary font-medium text-sm">S</span>
          </div>
          <div className="flex-1">
            <div className="font-medium text-foreground">Student</div>
            <div className="text-xs text-muted-foreground">Ready to explore careers?</div>
          </div>
        </Link>
      </div>
    </div>
  );
}