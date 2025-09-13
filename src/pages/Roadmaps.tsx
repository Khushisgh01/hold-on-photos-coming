import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  CheckCircle,
  Circle,
  Code,
  Building,
  Target
} from 'lucide-react';

export default function Roadmaps() {
  const roadmaps = [
    { title: 'Software Engineer', steps: 4 },
    { title: 'Civil Services (IAS/IPS)', steps: 4 },
    { title: 'Data Scientist', steps: 4 }
  ];

  const roadmapSteps = [
    {
      step: 1,
      title: 'Class 12',
      description: 'Focus on JEE preparation with strong PCM foundation',
      duration: '1 year',
      status: 'current',
      tasks: [
        'Complete Class 12 curriculum',
        'Prepare for JEE Main & Advanced',
        'Build strong foundation in Physics, Chemistry, Math'
      ]
    },
    {
      step: 2,
      title: 'B.Tech',
      description: 'Computer Science or related engineering degree',
      duration: '4 years',
      status: 'upcoming',
      tasks: [
        'Choose Computer Science Engineering',
        'Learn programming languages',
        'Work on projects and internships'
      ]
    },
    {
      step: 3,
      title: 'Internships',
      description: 'Gain practical experience through internships',
      duration: '6 months',
      status: 'upcoming',
      tasks: [
        'Apply for software development internships',
        'Build portfolio projects',
        'Network with industry professionals'
      ]
    },
    {
      step: 4,
      title: 'Career Start',
      description: 'Join tech companies and build expertise',
      duration: 'Ongoing',
      status: 'future',
      tasks: [
        'Apply for software engineer positions',
        'Continue learning new technologies',
        'Work on challenging projects'
      ]
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Career Roadmaps"
        description="Step-by-step guides to achieve your career goals"
      >
        <Button>
          <Target className="w-4 h-4 mr-2" />
          Set Career Goal
        </Button>
      </PageHeader>

      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Roadmap Selection */}
          <div>
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Choose a Career</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Select a career to view its roadmap
              </p>
              
              <div className="space-y-3">
                {roadmaps.map((roadmap, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      index === 0 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-border hover:bg-accent'
                    }`}
                  >
                    <div className="font-medium">{roadmap.title}</div>
                    <div className="text-xs text-muted-foreground">{roadmap.steps} steps</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Roadmap Content */}
          <div className="lg:col-span-3">
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Software Engineer Roadmap</h2>
                  <p className="text-muted-foreground">
                    Design, develop, and maintain software applications and systems using programming languages and frameworks
                  </p>
                </div>
              </div>

              {/* Roadmap Timeline */}
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
                
                <div className="space-y-8">
                  {roadmapSteps.map((step, index) => (
                    <div key={index} className="relative flex gap-6">
                      <div className={`relative z-10 w-12 h-12 rounded-full border-4 flex items-center justify-center font-semibold ${
                        step.status === 'current' 
                          ? 'bg-primary border-primary text-primary-foreground' 
                          : step.status === 'upcoming'
                          ? 'bg-background border-primary text-primary'
                          : 'bg-background border-border text-muted-foreground'
                      }`}>
                        {step.step}
                      </div>
                      
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={step.status === 'current' ? 'default' : 'outline'} className="text-xs">
                            Step {step.step}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        <div className="space-y-2">
                          {step.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="flex items-center gap-3 text-sm">
                              <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                              </div>
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                        
                        {step.status === 'current' && (
                          <div className="mt-4">
                            <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                              <div className="flex items-center gap-2 text-success mb-2">
                                <CheckCircle className="w-4 h-4" />
                                <span className="font-medium">Career Achievement!</span>
                              </div>
                              <p className="text-sm text-success">
                                Congratulations! You've successfully established yourself as a Software Engineer.
                              </p>
                              
                              <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h5 className="font-medium text-success mb-1">Expected Salary</h5>
                                  <p className="text-sm">₹4-15 LPA (freshers), ₹20-50 LPA (experienced)</p>
                                </div>
                                <div>
                                  <h5 className="font-medium text-success mb-1">Growth Prospects</h5>
                                  <p className="text-sm">High demand globally, opportunities in startups to MNCs, can specialize in AI/ML, Full Stack, etc.</p>
                                </div>
                              </div>
                              
                              <div className="flex gap-3 mt-4">
                                <Button size="sm" className="bg-primary">
                                  View Related Courses
                                </Button>
                                <Button size="sm" variant="outline">
                                  Explore Similar Careers
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}