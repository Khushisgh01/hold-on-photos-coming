import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, DollarSign, Clock, ExternalLink } from 'lucide-react';

export default function Internships() {
  const internships = [
    {
      title: 'Various Industries via AICTE Portal',
      company: 'Pan India',
      description: 'Industry exposure for engineering students in manufacturing, IT, automotive sectors',
      duration: '4-8 weeks',
      stipend: '₹5,000 - ₹15,000 per month',
      skills: ['Technical Knowledge', 'Industry Awareness', 'Communication'],
      deadline: 'May 2025, November 2025'
    },
    {
      title: 'Software Development Intern',
      company: 'Tech Startups (via Internshala)',
      description: 'Work on real projects using modern frameworks, contribute to product development',
      duration: '2-6 months',
      stipend: '₹10,000 - ₹25,000 per month',
      skills: ['Python/Java', 'Web Development', 'Problem Solving'],
      deadline: 'Rolling basis'
    }
  ];

  return (
    <Layout>
      <PageHeader title="Internships" description="Gain practical work experience">
        <Button><Building className="w-4 h-4 mr-2" />Apply Now</Button>
      </PageHeader>
      <div className="p-8 space-y-6">
        {internships.map((internship, index) => (
          <Card key={index} className="p-6 shadow-card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{internship.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{internship.company}</span>
                </div>
                <p className="text-muted-foreground mb-4">{internship.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-success" />
                    <span className="text-sm">{internship.stipend}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">{internship.duration}</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-4">
                  {internship.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
                <Button><ExternalLink className="w-4 h-4 mr-2" />Apply</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}