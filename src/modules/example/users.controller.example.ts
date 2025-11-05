import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
    ParseIntPipe,
} from '@nestjs/common';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiParam,
    ApiBody,
} from '@nestjs/swagger';
import { UsersService } from './users.service.example';
import { CreateUserDto } from './dto';

/**
 * Controlador de Usuarios
 * 
 * Este controlador maneja todas las peticiones HTTP relacionadas con usuarios.
 * Responsabilidades:
 * - Recibir y validar peticiones HTTP
 * - Transformar DTOs a modelos de dominio
 * - Llamar a los servicios apropiados
 * - Formatear y devolver respuestas
 * - Documentar endpoints con Swagger
 * 
 * NO debe contener lógica de negocio, solo coordinación
 */
@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    /**
     * Crear un nuevo usuario
     */
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Crear un nuevo usuario',
        description: 'Crea un nuevo usuario en el sistema con los datos proporcionados',
    })
    @ApiResponse({
        status: 201,
        description: 'Usuario creado exitosamente',
    })
    @ApiResponse({
        status: 400,
        description: 'Datos inválidos',
    })
    @ApiResponse({
        status: 409,
        description: 'El email ya está registrado',
    })
    @ApiBody({ type: CreateUserDto })
    async create(@Body() createUserDto: CreateUserDto): Promise<any> {
        const { password, ...userData } = createUserDto;

        // El servicio se encarga del hash de la contraseña
        const user = await this.usersService.create({
            ...userData,
            passwordHash: password,
        });

        return user;
    }

    /**
     * Obtener todos los usuarios
     */
    @Get()
    @ApiOperation({
        summary: 'Obtener todos los usuarios',
        description: 'Retorna una lista de todos los usuarios registrados en el sistema',
    })
    @ApiResponse({
        status: 200,
        description: 'Lista de usuarios obtenida exitosamente',
    })
    async findAll(): Promise<any[]> {
        const users = await this.usersService.findAll();
        return users.map((user) => {
            return {
                id: user.id,
                name: user.name,
                role: user.role,
            };
        });
    }

    /**
     * Obtener un usuario por ID
     */
    @Get(':id')
    @ApiOperation({
        summary: 'Obtener un usuario por ID',
        description: 'Retorna los datos de un usuario específico según su ID',
    })
    @ApiParam({
        name: 'id',
        description: 'ID del usuario',
        type: 'number',
        example: 1,
    })
    @ApiResponse({
        status: 200,
        description: 'Usuario encontrado',
    })
    @ApiResponse({
        status: 404,
        description: 'Usuario no encontrado',
    })
    async findOne(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<any> {
        const user = await this.usersService.findOne(id);
        return user;
    }

}
