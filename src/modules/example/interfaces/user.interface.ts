import { ICreateUserData } from '../dto';

/**
 * Interfaz del Servicio de Usuarios
 * 
 * Define el contrato que debe cumplir el servicio de usuarios.
 * Esta interfaz permite:
 * - Cambiar la implementación del servicio sin afectar el código que lo usa
 * - Facilitar el testing con mocks
 * - Documentar claramente qué operaciones están disponibles
 * - Asegurar type-safety en toda la aplicación
 */
export interface IUserService {
    /**
     * Obtener todos los usuarios del sistema
     * @returns Promise con array de usuarios
     */
    findAll(): Promise<any[]>;

    /**
     * Buscar un usuario por su ID
     * @param id - ID del usuario
     * @returns Promise con el usuario encontrado
     * @throws NotFoundException si no existe
     */
    findOne(id: number): Promise<any>;

    /**
     * Crear un nuevo usuario
     * @param data - Datos del usuario a crear
     * @returns Promise con el usuario creado
     * @throws ConflictException si el email ya existe
     */
    create(data: ICreateUserData): Promise<any>;
}
