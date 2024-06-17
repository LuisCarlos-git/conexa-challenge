import { TemplateApp } from '@/templates';
import { ProfessionalProvider } from '@/context/Professional';
import { ScheduleProvider } from '@/context/Schedule';
import { Toaster } from 'sonner';

function App() {
  return (
    <ProfessionalProvider>
      <ScheduleProvider>
        <Toaster richColors position="top-right" />
        <TemplateApp />
      </ScheduleProvider>
    </ProfessionalProvider>
  );
}

export default App;
