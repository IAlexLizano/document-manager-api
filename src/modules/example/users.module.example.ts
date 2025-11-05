import { Module } from '@nestjs/common';
import { UsersService } from './users.service.example';
import { UsersController } from './users.controller.example';
import { PrismaModule } from '../../common/prisma/prisma.module';

/**
 * Módulo de Usuarios - EJEMPLO DE ARQUITECTURA
 * 
 * Este módulo demuestra una arquitectura limpia para NestJS con:
 * 
 * 1. SEPARACIÓN DE RESPONSABILIDADES:
 *    - Controller: Maneja HTTP, validaciones de entrada, formateo de salida
 *    - Service: Contiene toda la lógica de negocio
 *    - DTOs: Definen y validan la estructura de datos de entrada
 *    - Entities: Definen la estructura de datos de salida
 *    - Interfaces: Contratos que aseguran consistencia
 * 
 * 2. PRINCIPIOS SOLID:
 *    - Single Responsibility: Cada clase tiene una única responsabilidad
 *    - Open/Closed: Abierto para extensión, cerrado para modificación
 *    - Liskov Substitution: Las interfaces permiten cambiar implementaciones
 *    - Interface Segregation: Interfaces específicas y pequeñas
 *    - Dependency Inversion: Depende de abstracciones (interfaces), no de implementaciones
 * 
 * 3. ESTRUCTURA DE CARPETAS:
 *    users/
 *    ├── dto/                          # Data Transfer Objects
 *    │   ├── create-user.dto.ts       # DTO para creación
 *    │   ├── update-user.dto.ts       # DTO para actualización
 *    │   ├── change-password.dto.ts   # DTO para cambio de contraseña
 *    │   └── index.ts                 # Barrel export
 *    ├── entities/                     # Entidades de respuesta
 *    │   └── user.entity.ts           # Entidad User con decoradores Swagger
 *    ├── interfaces/                   # Interfaces y contratos
 *    │   └── user.interface.ts        # Interfaces del dominio
 *    ├── users.controller.example.ts   # Controlador HTTP
 *    ├── users.service.example.ts      # Lógica de negocio
 *    └── users.module.example.ts       # Módulo NestJS
 * 
 * 4. BENEFICIOS DE ESTA ARQUITECTURA:
 *    ✅ Código fácil de mantener y extender
 *    ✅ Testing sencillo (cada componente se prueba independientemente)
 *    ✅ Fácil de entender y onboarding rápido
 *    ✅ Reutilización de código
 *    ✅ Cambios en una capa no afectan otras capas
 *    ✅ Documentación automática con Swagger
 *    ✅ Validaciones automáticas con class-validator
 *    ✅ Type-safety completo con TypeScript
 * 
 * 5. FLUJO DE UNA PETICIÓN:
 *    Cliente → Controller → DTO (validación) → Service (lógica) → 
 *    Prisma (BD) → Service → Entity (formato) → Controller → Cliente
 * 
 * NOTA: Este módulo NO está conectado al AppModule para servir solo como ejemplo.
 * Para usarlo en producción, importa UsersModule en AppModule.
 */
@Module({
    imports: [PrismaModule], // Importar módulo de Prisma para acceso a BD
    controllers: [UsersController], // Registrar el controlador
    providers: [UsersService], // Registrar el servicio
    exports: [UsersService], // Exportar el servicio para uso en otros módulos
})
export class UsersModuleExample { }
