import { ENDPOINTS } from '@/enums';
import { httpClient } from '@/lib/httpClient';
import {
  IProfessional,
  IProfessionalServices,
} from '@/types/services/professional';

class ProfessionalServices implements IProfessionalServices {
  async getProfessionalDetails(): Promise<IProfessional> {
    return await httpClient.get<IProfessional>(
      ENDPOINTS.GET_PROFESSIONAL_DETAILS
    );
  }
}

export const professionalServices = new ProfessionalServices();
