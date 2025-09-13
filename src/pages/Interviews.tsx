import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Play, Clock, Users } from 'lucide-react';

export default function Interviews() {
  const interviewTypes = [
    {
      title: 'Technical Interview',
      description: 'Programming, problem-solving, and technical questions',
      duration: '45-60 minutes',
      questions: '5 questions',
      level: 'Intermediate',
      color: 'blue'
    },
    {
      title: 'Behavioral Interview', 
      description: 'Personality, teamwork, and situational questions',
      duration: '30-45 minutes',
      questions: '5 questions',
      level: 'Beginner',
      color: 'green'
    },
    {
      title: 'Case Study Interview',
      description: 'Problem analysis and business case solving',
      duration: '60-90 minutes', 
      questions: '5 questions',
      level: 'Advanced',
      color: 'purple'
    },
    {
      title: 'HR Round',
      description: 'Company culture fit and general questions',
      duration: '20-30 minutes',
      questions: '5 questions', 
      level: 'Beginner',
      color: 'orange'
    }
  ];

  return (
    <Layout>
      <PageHeader title="Mock Interviews" description="Practice interviews with AI feedback to boost your confidence">
        <Button><MessageSquare className="w-4 h-4 mr-2" />Start Interview</Button>
      </PageHeader>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interviewTypes.map((interview, index) => (
            <Card key={index} className="p-6 shadow-card">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{interview.title}</h3>
                  <Badge variant={interview.level === 'Beginner' ? 'default' : interview.level === 'Intermediate' ? 'secondary' : 'destructive'}>
                    {interview.level}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{interview.description}</p>
              </div>
              <div className="flex items-center justify-between text-sm mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{interview.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{interview.questions}</span>
                </div>
              </div>
              <Button className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Start Interview
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}