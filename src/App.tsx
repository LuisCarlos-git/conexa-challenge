import { TemplateApp } from '@/templates';
import { ProfessionalProvider } from '@/context/Professional';
import { ScheduleProvider } from '@/context/Schedule';

function App() {
  return (
    <ProfessionalProvider>
      <ScheduleProvider>
        <TemplateApp />
      </ScheduleProvider>
    </ProfessionalProvider>
  );
}

export default App;
