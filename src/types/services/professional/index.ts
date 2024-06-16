import { IProfessional } from '@/types/entities/professional';

export interface IProfessionalServices {
  getProfessionalDetails(): Promise<IProfessional>;
}
