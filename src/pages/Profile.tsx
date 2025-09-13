import { Layout } from '@/components/Layout';
import { PageHeader } from '@/components/PageHeader';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Target,
  Edit3,
  Save,
  Camera
} from 'lucide-react';

export default function Profile() {
  return (
    <Layout>
      <PageHeader 
        title="Your Profile"
        description="Manage your personal information and academic details"
      >
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </PageHeader>

      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Picture & Basic Info */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-card">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-3xl font-bold text-primary-foreground mx-auto">
                    S
                  </div>
                  <Button 
                    size="sm" 
                    className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="text-xl font-semibold text-foreground mt-4">Student</h3>
                <p className="text-muted-foreground">Ready to explore careers?</p>
                
                <div className="flex justify-center gap-2 mt-4">
                  <Badge variant="secondary">Class 12</Badge>
                  <Badge variant="outline">Science (PCM)</Badge>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>student@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Born: Jan 15, 2006</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card mt-6">
              <h4 className="font-semibold text-foreground mb-4">Career Interests</h4>
              <div className="space-y-2">
                <Badge variant="outline" className="mr-2">Software Engineering</Badge>
                <Badge variant="outline" className="mr-2">Data Science</Badge>
                <Badge variant="outline" className="mr-2">Artificial Intelligence</Badge>
              </div>
              <Button variant="ghost" size="sm" className="mt-3">
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Interests
              </Button>
            </Card>
          </div>

          {/* Main Profile Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-6">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Student" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="student@example.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+91 98765 43210" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" defaultValue="2006-01-15" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select defaultValue="prefer-not-to-say">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="address">Address</Label>
                <Textarea 
                  id="address" 
                  defaultValue="New Delhi, India"
                  className="mt-1"
                  rows={3}
                />
              </div>
            </Card>

            {/* Academic Information */}
            <Card className="p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-6">Academic Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="currentClass">Current Class</Label>
                  <Select defaultValue="class-12">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class-10">Class 10</SelectItem>
                      <SelectItem value="class-11">Class 11</SelectItem>
                      <SelectItem value="class-12">Class 12</SelectItem>
                      <SelectItem value="graduation">Graduation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="stream">Stream</Label>
                  <Select defaultValue="science-pcm">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="science-pcm">Science (PCM)</SelectItem>
                      <SelectItem value="science-pcb">Science (PCB)</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="arts">Arts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="school">School/College</Label>
                  <Input id="school" defaultValue="Delhi Public School" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="percentage">Current Percentage</Label>
                  <Input id="percentage" defaultValue="85%" className="mt-1" />
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="aspirations">Career Aspirations</Label>
                <Textarea 
                  id="aspirations" 
                  placeholder="Tell us about your career goals and aspirations..."
                  className="mt-1"
                  rows={4}
                />
              </div>
            </Card>

            {/* Preferences */}
            <Card className="p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-6">Preferences</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="preferredLocation">Preferred Study Location</Label>
                  <Select defaultValue="anywhere">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="anywhere">Anywhere in India</SelectItem>
                      <SelectItem value="north">North India</SelectItem>
                      <SelectItem value="south">South India</SelectItem>
                      <SelectItem value="west">West India</SelectItem>
                      <SelectItem value="east">East India</SelectItem>
                      <SelectItem value="abroad">Abroad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budgetRange">Budget Range (Annual)</Label>
                  <Select defaultValue="2-5-lakhs">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-2-lakhs">Under ₹2 Lakhs</SelectItem>
                      <SelectItem value="2-5-lakhs">₹2-5 Lakhs</SelectItem>
                      <SelectItem value="5-10-lakhs">₹5-10 Lakhs</SelectItem>
                      <SelectItem value="10-20-lakhs">₹10-20 Lakhs</SelectItem>
                      <SelectItem value="above-20-lakhs">Above ₹20 Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}