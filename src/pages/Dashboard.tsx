import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { StatCard } from '@/components/StatCard';
import { ProgressBar } from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  FileText, 
  Trophy, 
  BookOpen, 
  Building,
  TrendingUp,
  Calendar,
  Clock,
  ArrowRight,
  Target,
  Play
} from 'lucide-react';

export default function Dashboard() {
  const recentActivities = [
    {
      title: 'JEE Main Physics Playlist',
      action: 'bookmarked',
      time: '2 hours ago',
      icon: BookOpen,
      color: 'blue'
    },
    {
      title: 'JEE Advanced 2025',
      action: 'viewed',
      time: '1 day ago',
      icon: FileText,
      color: 'purple'
    },
    {
      title: 'Software Engineer Path',
      action: 'explored',
      time: '3 days ago',
      icon: Briefcase,
      color: 'green'
    }
  ];

  const upcomingDeadlines = [
    {
      title: 'JEE Main Registration',
      date: '2025-01-15',
      daysLeft: 12,
      priority: 'high'
    },
    {
      title: 'INSPIRE Scholarship',
      date: '2025-02-01',
      daysLeft: 29,
      priority: 'medium'
    }
  ];

  const quickActions = [
    { title: 'Explore Careers', icon: Briefcase, href: '/careers' },
    { title: 'Check Exam Dates', icon: Calendar, href: '/exams' },
    { title: 'Find Scholarships', icon: Trophy, href: '/scholarships' },
    { title: 'Browse Courses', icon: BookOpen, href: '/courses' }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Welcome back, Student!"
        description="Your personalized career journey dashboard"
      >
        <Button className="bg-success hover:bg-success/90">
          <Target className="w-4 h-4 mr-2" />
          Take Personality Test
        </Button>
        <Button variant="outline">
          <Play className="w-4 h-4 mr-2" />
          Practice Interview
        </Button>
      </PageHeader>

      <div className="p-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatCard
            title="Careers"
            value="15"
            icon={Briefcase}
            color="blue"
          />
          <StatCard
            title="Exams"
            value="8"
            icon={FileText}
            color="purple"
          />
          <StatCard
            title="Scholarships"
            value="12"
            icon={Trophy}
            color="green"
          />
          <StatCard
            title="Courses"
            value="45"
            icon={BookOpen}
            color="orange"
          />
          <StatCard
            title="Internships"
            value="25"
            icon={Building}
            color="pink"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Career Journey Progress */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Your Career Journey Progress</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <ProgressBar 
                    value={75} 
                    label="Career Exploration"
                    showLabel 
                    color="primary"
                  />
                  <p className="text-sm text-muted-foreground mt-1">Explored 2 career paths</p>
                </div>
                
                <div>
                  <ProgressBar 
                    value={45} 
                    label="Interview Readiness"
                    showLabel 
                    color="warning"
                  />
                  <p className="text-sm text-muted-foreground mt-1">3 mock interviews completed</p>
                </div>
                
                <div>
                  <ProgressBar 
                    value={60} 
                    label="Course Progress"
                    showLabel 
                    color="success"
                  />
                  <p className="text-sm text-muted-foreground mt-1">2 courses bookmarked</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Upcoming Deadlines */}
          <div>
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-destructive" />
                <h3 className="text-lg font-semibold text-foreground">Upcoming Deadlines</h3>
              </div>
              
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">{deadline.title}</h4>
                        <p className="text-sm text-muted-foreground">Due: {deadline.date}</p>
                      </div>
                      <Badge 
                        variant={deadline.priority === 'high' ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {deadline.daysLeft} days
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-info" />
                <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors">
                    <div className={`p-2 rounded-lg bg-${activity.color}-100`}>
                      <activity.icon className={`w-4 h-4 text-${activity.color}-600`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.action} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-between h-auto p-4"
                    asChild
                  >
                    <a href={action.href}>
                      <div className="flex items-center gap-3">
                        <action.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{action.title}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}