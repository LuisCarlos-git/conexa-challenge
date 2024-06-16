import { TemplateApp } from '@/templates';
import { ProfessionalProvider } from '@/context/Professional';

function App() {
  return (
    <ProfessionalProvider>
      <TemplateApp />
    </ProfessionalProvider>
  );
}

export default App;
