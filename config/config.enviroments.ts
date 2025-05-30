export type EnvironmentType = 'dev' | 'qa' | 'production';

export const ENVIRONMENT = 'dev' as EnvironmentType;

let URL_API = '';
let MAP_KEY = ""


switch (ENVIRONMENT) {
  case 'dev':
    URL_API = process.env.EXPO_PUBLIC_DEV_URL_API || "";
    MAP_KEY = process.env.EXPO_PUBLIC_DEV_MAP_KEY || "";
    break;
  case 'qa':
    URL_API = process.env.EXPO_PUBLIC_QA_URL_API || "";
    MAP_KEY = process.env.EXPO_PUBLIC_QA_MAP_KEY || "";
    break;
  case 'production':
    URL_API = process.env.EXPO_PUBLIC_PRODUCTION_URL_API || "";
    MAP_KEY = process.env.EXPO_PUBLIC_PRODUCTION_MAP_KEY || "";
    break;
  default:
    throw new Error(`Entorno no soportado: ${ENVIRONMENT}`);
}

export const API_URL = URL_API;
export const GOOGLE_MAP_KEY = MAP_KEY
export const UI_APP_NAME = "5asec"
