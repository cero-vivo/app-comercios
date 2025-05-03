export type EnvironmentType = 'dev' | 'qa' | 'production';

export const ENVIRONMENT = 'dev' as EnvironmentType;

let URL_API = '';

switch (ENVIRONMENT) {
  case 'dev':
    URL_API = process.env.EXPO_PUBLIC_DEV_URL_API || "";
    break;
  case 'qa':
    URL_API = process.env.EXPO_PUBLIC_QA_URL_API || "";
    break;
  case 'production':
    URL_API = process.env.EXPO_PUBLIC_PRODUCTION_URL_API || "";
    break;
  default:
    throw new Error(`Entorno no soportado: ${ENVIRONMENT}`);
}

export const API_URL = URL_API;
