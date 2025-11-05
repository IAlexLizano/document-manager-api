/**
 * Archivo barrel para exportar todos los DTOs e interfaces de datos
 * Permite importar todos los DTOs e interfaces desde un solo lugar
 */
export * from './create-user.dto';

// Re-exportar las interfaces de datos para facilitar su uso
export type { ICreateUserData } from './create-user.dto';