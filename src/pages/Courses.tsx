import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  BookOpen, 
  Play, 
  Clock,
  ExternalLink,
  User,
  Star
} from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'JEE Main Physics Complete Course',
      description: 'Comprehensive physics playlist covering all JEE Main topics with problem solving',
      instructor: 'Physics Wallah - Alakh Pandey',
      platform: 'YouTube',
      duration: '150+ videos',
      level: 'Intermediate',
      skills: ['Mechanics', 'Thermodynamics', 'Optics'],
      rating: 4.8,
      students: '2.3M',
      free: true,
      platformColor: 'red'
    }
  ];

  const platforms = [
    { name: 'All Platforms', active: true },
    { name: 'YouTube', active: false },
    { name: 'Coursera', active: false },
    { name: 'NPTEL', active: false }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Learning Courses"
        description="Discover quality educational content across platforms"
      >
        <Button>
          <BookOpen className="w-4 h-4 mr-2" />
          My Bookmarks
        </Button>
      </PageHeader>

      <div className="p-8 space-y-8">
        {/* Search and Filters */}
        <Card className="p-6 shadow-card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search courses..." 
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {platforms.map((platform, index) => (
                <Button
                  key={index}
                  variant={platform.active ? "default" : "outline"}
                  size="sm"
                >
                  {platform.name}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Course List */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="p-0 shadow-card hover:shadow-large transition-shadow overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-gradient-primary flex items-center justify-center">
                      <Play className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge 
                        variant={course.free ? "default" : "secondary"}
                        className={`${course.free ? 'bg-success' : ''}`}
                      >
                        {course.free ? 'Free' : 'Paid'}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="secondary"
                        className={`bg-${course.platformColor === 'red' ? 'red' : 'blue'}-100 text-${course.platformColor === 'red' ? 'red' : 'blue'}-600`}
                      >
                        {course.platform}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{course.instructor}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-warning fill-warning" />
                        <span className="font-medium">{course.rating}</span>
                        <span className="text-muted-foreground">({course.students})</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Skills you'll learn:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="text-xs mb-4">
                      {course.level}
                    </Badge>
                    
                    <Button className="w-full" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open Course
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Filter by Category</h3>
              <div className="space-y-2">
                {['Physics', 'Chemistry', 'Mathematics', 'Programming', 'Data Science'].map((category, index) => (
                  <div key={index} className="p-2 rounded hover:bg-accent cursor-pointer text-sm">
                    {category}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Popular Platforms</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">YouTube</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Coursera</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">NPTEL</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}