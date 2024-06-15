import { useEffect } from 'react';

import { professionalServices } from '@/services/professional';

export function TemplateApp() {
  useEffect(() => {
    (async () => {
      const response = await professionalServices.getProfessionalDetails();

      console.log({ response });
    })();
  }, []);
  return <h1>ola</h1>;
}
