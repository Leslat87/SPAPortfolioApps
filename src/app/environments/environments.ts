declare var process: {
  env: {
    API_BASE_URL: string;
  }
};

export const environment = {
  production: false,
  baseUrl: process.env.API_BASE_URL || 'http://localhost:3000'
};