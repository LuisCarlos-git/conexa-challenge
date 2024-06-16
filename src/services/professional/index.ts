import { ENDPOINTS } from '@/enums';
import { httpClient } from '@/lib/httpClient';
import { IProfessional } from '@/types/entities/professional';
import { IProfessionalServices } from '@/types/services/professional';

class ProfessionalServices implements IProfessionalServices {
  async getProfessionalDetails(): Promise<IProfessional> {
    return await httpClient.get<IProfessional>(ENDPOINTS.PROFESSIONAL);
  }
}

export const professionalServices = new ProfessionalServices();
