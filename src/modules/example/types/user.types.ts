/**
 * Tipos y Enums del Dominio de Usuarios
 *
 * Este archivo contiene los tipos base, enums y tipos auxiliares
 * relacionados con el dominio de usuarios.
 */

import { Role } from '../../../../generated/prisma/client';

/**
 * Re-exportar el enum Role de Prisma como UserRole para mantener consistencia
 */
export { Role as UserRole };

/**
 * Tipo que representa un usuario completo del sistema
 * Basado en el modelo de Prisma
 */
export type User = {
    id: number;
    institutionalEmail: string;
    name: string;
    passwordHash: string;
    role: Role;
    pdfKey?: string | null;
    createdAt: Date;
};