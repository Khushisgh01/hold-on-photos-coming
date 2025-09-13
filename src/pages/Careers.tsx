import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Code, 
  Building, 
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users
} from 'lucide-react';

export default function Careers() {
  const careers = [
    {
      title: 'Software Engineer',
      description: 'Design, develop, and maintain software applications and systems using programming languages and frameworks',
      skills: ['Programming', 'Problem Solving', 'Logical Thinking', 'Mathematics'],
      salary: '₹34 LPA',
      growth: 'High Growth',
      icon: Code,
      color: 'blue'
    },
    {
      title: 'Civil Services (IAS/IPS)',
      description: 'Administrative and policy-making roles in government, serving the nation through public administration',
      skills: ['Leadership', 'Public Policy', 'Communication', 'Ethics'],
      salary: '₹56,000-₹2.5L',
      growth: 'Stable',
      icon: Building,
      color: 'green'
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Career Paths for You"
        description="Discover careers tailored to your stream and interests"
      >
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          Showing PCM Careers
        </Badge>
      </PageHeader>

      <div className="p-8 space-y-8">
        {/* Search */}
        <Card className="p-6 shadow-card">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search careers..." 
              className="pl-10"
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Career List */}
          <div className="lg:col-span-2 space-y-6">
            {careers.map((career, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-large transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-${career.color === 'blue' ? 'primary' : 'success'}/10`}>
                    <career.icon className={`w-6 h-6 ${career.color === 'blue' ? 'text-primary' : 'text-success'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{career.title}</h3>
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{career.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {career.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-success" />
                          <span className="font-medium">{career.salary}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span className="font-medium">{career.growth}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div>
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Select a Career</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Click on any career to view detailed information
              </p>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                  <h4 className="font-medium text-foreground">Career Assessment</h4>
                  <p className="text-xs text-muted-foreground">Take our test to find suitable careers</p>
                </div>
                <div className="p-3 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                  <h4 className="font-medium text-foreground">Salary Insights</h4>
                  <p className="text-xs text-muted-foreground">Compare salaries across careers</p>
                </div>
                <div className="p-3 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer">
                  <h4 className="font-medium text-foreground">Skills Required</h4>
                  <p className="text-xs text-muted-foreground">Understand skill requirements</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}