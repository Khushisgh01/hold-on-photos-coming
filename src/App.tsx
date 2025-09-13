import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Careers from "./pages/Careers";
import Roadmaps from "./pages/Roadmaps";
import Exams from "./pages/Exams";
import Scholarships from "./pages/Scholarships";
import Courses from "./pages/Courses";
import Internships from "./pages/Internships";
import Interviews from "./pages/Interviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
