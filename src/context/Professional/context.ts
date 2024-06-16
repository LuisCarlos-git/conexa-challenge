import { createContext } from 'react';

import { IProfessionalContext } from '@/types/contexts/professional';

export const ProfessionalContext = createContext<IProfessionalContext | null>(
  null
);
