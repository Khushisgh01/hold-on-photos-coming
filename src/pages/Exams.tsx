import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  FileText, 
  Calendar, 
  Clock, 
  ExternalLink,
  Info,
  AlertTriangle
} from 'lucide-react';

export default function Exams() {
  const exams = [
    {
      title: 'JEE Main 2025',
      description: 'National level entrance exam for admission to NITs, IIITs and other engineering colleges',
      dates: 'January 2025 (Session 1), April 2025 (Session 2)',
      registrationPeriod: 'December 2024 - January 2025',
      category: 'PCM',
      eligibilityStreams: ['PCM', 'PCB', 'Commerce', 'Arts', 'Vocational'],
      officialSite: '#',
      urgent: true,
      daysLeft: 12
    },
    {
      title: 'CAT 2025',
      description: 'Common Admission Test for admission to IIMs and other top B-schools',
      dates: 'November 2025 (tentative)',
      registrationPeriod: 'August-September 2025',
      category: 'Commerce, PCM, Arts',
      eligibilityStreams: ['Commerce', 'PCM', 'Arts'],
      officialSite: '#',
      urgent: false,
      daysLeft: 285
    },
    {
      title: 'UPSC CSE 2025',
      description: 'Civil Services Examination for IAS, IPS, IFS and other Group A services',
      dates: 'Prelims: June 2025, Mains: October 2025, Interview: February 2026',
      registrationPeriod: 'February-March 2025',
      category: 'Arts, Commerce, PCM, PCB',
      eligibilityStreams: ['Arts', 'Commerce', 'PCM', 'PCB'],
      officialSite: '#',
      urgent: false,
      daysLeft: 150
    }
  ];

  const examTips = [
    'Start preparation at least 6 months before exam date',
    'Create a structured study plan and stick to it',
    'Take regular mock tests to track progress',
    'Focus on weak areas and revise regularly'
  ];

  return (
    <Layout>
      <PageHeader 
        title="Entrance Exams 2025-26"
        description="Important exams for your academic stream with dates and details"
      >
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          Showing PCM Exams
        </Badge>
      </PageHeader>

      <div className="p-8 space-y-8">
        {/* Search */}
        <Card className="p-6 shadow-card">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search exams..." 
              className="pl-10"
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Exams List */}
          <div className="lg:col-span-2 space-y-6">
            {exams.map((exam, index) => (
              <Card key={index} className="p-6 shadow-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exam.title}</h3>
                      {exam.urgent && (
                        <Badge variant="destructive" className="text-xs mt-1">
                          Deadline Soon!
                        </Badge>
                      )}
                    </div>
                  </div>
                  {exam.urgent && (
                    <div className="text-right">
                      <div className="text-sm font-medium text-destructive">{exam.daysLeft} days</div>
                      <div className="text-xs text-muted-foreground">remaining</div>
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground mb-4">{exam.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <div className="font-medium">Exam Dates</div>
                      <div className="text-muted-foreground">{exam.dates}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-warning" />
                    <div>
                      <div className="font-medium">Registration Period</div>
                      <div className="text-muted-foreground">{exam.registrationPeriod}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exam.eligibilityStreams.map((stream, streamIndex) => (
                    <Badge key={streamIndex} variant="secondary" className="text-xs">
                      {stream}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Official Site
                  </Button>
                  <Button size="sm">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Select an Exam</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Click on any exam to view detailed information
              </p>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-success" />
                <h3 className="text-lg font-semibold text-foreground">Exam Preparation Tips</h3>
              </div>
              
              <div className="space-y-3">
                {examTips.map((tip, index) => (
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
                  <div className="font-medium text-foreground">JEE Main Registration</div>
                  <div className="text-muted-foreground">Ends in 12 days</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}