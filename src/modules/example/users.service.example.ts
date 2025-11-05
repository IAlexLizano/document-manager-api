import {
    Injectable,
    NotFoundException,
    ConflictException,
    BadRequestException,
} from '@nestjs/common';
import { IUserService } from './interfaces/user.interface';
import { ICreateUserData } from './dto';
import { UserRole, User } from './types/user.types';
import { PrismaService } from 'src/common/prisma/prisma.service';

/**
 * Servicio de Usuarios
 * 
 * Este servicio implementa la lógica de negocio relacionada con usuarios.
 * Sigue los principios de arquitectura limpia:
 * - No depende de detalles de implementación
 * - Implementa interfaces bien definidas
 * - Contiene toda la lógica de negocio
 * - Maneja validaciones de negocio
 * - Gestiona errores de manera consistente
 */
@Injectable()
export class UsersService implements IUserService {

    constructor(private readonly prisma: PrismaService) { }

    /**
     * Obtener todos los usuarios
     * @returns Array de usuarios sin contraseñas
     */
    async findAll(): Promise<User[]> {
        try {
            return await this.prisma.user.findMany({
                orderBy: { createdAt: 'desc' },
            });
        } catch (error) {
            throw new BadRequestException(
                'Error al obtener los usuarios: ' + error.message,
            );
        }
    }

    /**
     * Buscar un usuario por ID
     * @param id - ID del usuario
     * @returns Usuario encontrado
     * @throws NotFoundException si el usuario no existe
     */
    async findOne(id: number): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }

        return user;
    }

    /**
     * Crear un nuevo usuario
     * @param data - Datos del usuario a crear
     * @returns Usuario creado
     * @throws ConflictException si el email ya existe
     */
    async create(data: ICreateUserData): Promise<User> {
        // Verificar si el email ya existe
        const existingUser = await this.prisma.user.findUnique({
            where: { institutionalEmail: data.institutionalEmail },
        });

        if (existingUser) {
            throw new ConflictException(
                `El email ${data.institutionalEmail} ya está registrado`,
            );
        }

        try {
            return await this.prisma.user.create({
                data: {
                    ...data,
                    role: data.role || UserRole.user,
                },
            });
        } catch (error) {
            throw new BadRequestException(
                'Error al crear el usuario: ' + error.message,
            );
        }
    }
}
