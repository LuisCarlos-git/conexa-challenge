import React, { useCallback, useEffect, useState } from 'react';

import { ProfessionalContext } from './context';
import { IProfessional } from '@/types/entities/professional';
import { professionalServices } from '@/services/professional';

export function ProfessionalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [professional, setProfessional] = useState<IProfessional | null>(null);

  const getProfessionalData = useCallback(async () => {
    try {
      const res = await professionalServices.getProfessionalDetails();
      setProfessional(res);
    } catch {
      console.error('failed get professional');
    }
  }, []);

  useEffect(() => {
    getProfessionalData();
  }, [getProfessionalData]);

  return (
    <ProfessionalContext.Provider value={{ professional }}>
      {children}
    </ProfessionalContext.Provider>
  );
}
