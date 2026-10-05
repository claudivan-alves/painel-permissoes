import { APP_CONFIG } from '@/core/config/app.config';
import { UserOption } from '@/core/models/system.model';

export const AUTH_USERS: UserOption[] = [
  { id: '1', name: 'Administrador', email: APP_CONFIG.demoCredentials.email, role: 'Administrador' },
  { id: '2', name: 'Mariana Souza', email: 'mariana.souza@prefeitura.gov.br', role: 'Gestor' },
  { id: '3', name: 'Rafael Lima', email: 'rafael.lima@prefeitura.gov.br', role: 'Fiscal' }
];
