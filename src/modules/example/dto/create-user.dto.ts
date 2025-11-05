import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    IsEnum,
    IsOptional,
} from 'class-validator';
import { UserRole } from '../types/user.types';

/**
 * DTO (Data Transfer Object) para crear un usuario
 * Define y valida los datos necesarios para crear un nuevo usuario
 */
export class CreateUserDto {
    @ApiProperty({
        description: 'Email institucional del usuario',
        example: 'juan.perez@uta.edu.ec',
    })
    @IsEmail({}, { message: 'Debe ser un email válido' })
    @IsNotEmpty({ message: 'El email institucional es requerido' })
    institutionalEmail: string;

    @ApiProperty({
        description: 'Nombre completo del usuario',
        example: 'Juan Pérez',
    })
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'El nombre es requerido' })
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name: string;

    @ApiProperty({
        description: 'Contraseña del usuario',
        example: 'Password123!',
        minLength: 8,
    })
    @IsString({ message: 'La contraseña debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'La contraseña es requerida' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    password: string;

    @ApiPropertyOptional({
        description: 'Rol del usuario en el sistema',
        enum: UserRole,
        example: UserRole.user,
        default: UserRole.user,
    })
    @IsEnum(UserRole, { message: 'El rol debe ser admin o user' })
    @IsOptional()
    role?: UserRole;

    @ApiPropertyOptional({
        description: 'Clave para firma digital de PDFs',
        example: 'key-abc123',
    })
    @IsString({ message: 'La clave PDF debe ser una cadena de texto' })
    @IsOptional()
    pdfKey?: string;
}

/**
 * Interfaz para datos de creación de usuario
 * Representa la estructura que el servicio espera recibir
 */
export interface ICreateUserData {
    institutionalEmail: string;
    name: string;
    passwordHash: string;
    role?: UserRole;
    pdfKey?: string;
}
