// src/environments/environments.ts
export const environments = {
  production: false,
  baseUrl: process.env["API_BASE_URL"] || 'http://localhost:3000'
};