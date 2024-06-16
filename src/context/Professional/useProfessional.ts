import { useContext } from 'react';
import { ProfessionalContext } from './context';

export function useProfessional() {
  const context = useContext(ProfessionalContext);

  if (!context)
    throw new Error('useProfessional must be used within ProfessionalProvider');

  return context;
}
