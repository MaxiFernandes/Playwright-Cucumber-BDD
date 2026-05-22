import * as dotenv from 'dotenv';

dotenv.config({ override: true });

export const config = {
  baseUrl: process.env.BASE_URL || '',
  paths: {
    login: '/web/index.php/auth/login',
    dashboard: '/web/index.php/dashboard/index',
  },
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
};