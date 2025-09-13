import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Trophy, 
  Calendar, 
  DollarSign,
  ExternalLink,
  AlertTriangle,
  Building,
  User
} from 'lucide-react';

export default function Scholarships() {
  const scholarships = [
    {
      title: 'National Scholarship Portal',
      description: 'Central portal for various government scholarships for students',
      organization: 'Government of India - Multiple Ministries',
      amount: '₹12,000 to ₹20,000 per year (varies by scheme)',
      deadline: 'October 2025 (varies by state)',
      eligibilityStreams: ['PCM', 'PCB', 'Commerce', 'Arts', 'Vocational'],
      urgent: true,
      icon: Building,
      color: 'green'
    },
    {
      title: 'INSPIRE Scholarship',
      description: 'Innovation in Science Pursuit for Inspired Research scholarship for science students',
      organization: 'Department of Science & Technology, Govt. of India',
      amount: '₹80,000 per year for 5 years',
      deadline: 'February 2025',
      eligibilityStreams: ['PCM', 'PCB'],
      urgent: false,
      icon: Trophy,
      color: 'blue'
    }
  ];

  const applicationTips = [
    'Apply early to avoid last minute rush',
    'Keep all documents ready before applying',
    'Read eligibility criteria carefully',
    'Write compelling essays highlighting your achievements'
  ];

  return (
    <Layout>
      <PageHeader 
        title="Scholarships & Financial Aid"
        description="Find funding opportunities for your education"
      >
        <Button>
          <Trophy className="w-4 h-4 mr-2" />
          Apply for Scholarship
        </Button>
      </PageHeader>

      <div className="p-8 space-y-8">
        {/* Search */}
        <Card className="p-6 shadow-card">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search scholarships..." 
              className="pl-10"
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scholarships List */}
          <div className="lg:col-span-2 space-y-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    scholarship.color === 'green' ? 'bg-success/10' : 'bg-primary/10'
                  }`}>
                    <scholarship.icon className={`w-6 h-6 ${
                      scholarship.color === 'green' ? 'text-success' : 'text-primary'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{scholarship.title}</h3>
                      {scholarship.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          Deadline Soon!
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-3">{scholarship.description}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{scholarship.organization}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-success" />
                        <div className="text-sm">
                          <div className="font-medium text-foreground">Amount</div>
                          <div className="text-muted-foreground">{scholarship.amount}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-warning" />
                        <div className="text-sm">
                          <div className="font-medium text-foreground">Deadline</div>
                          <div className="text-muted-foreground">{scholarship.deadline}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {scholarship.eligibilityStreams.map((stream, streamIndex) => (
                        <Badge key={streamIndex} variant="secondary" className="text-xs">
                          {stream}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Button 
                        className="bg-success hover:bg-success/90"
                        size="sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
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
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Select a Scholarship</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6">
                Click on any scholarship to view detailed information
              </p>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-success" />
                <h3 className="text-lg font-semibold text-foreground">Application Tips</h3>
              </div>
              
              <div className="space-y-3">
                {applicationTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-card bg-warning/5 border-warning/20">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <h4 className="font-semibold text-warning">Urgent Deadlines</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm">
                  <div className="font-medium text-foreground">National Scholarship Portal</div>
                  <div className="text-muted-foreground">Varies by state</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}