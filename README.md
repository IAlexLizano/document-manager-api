# 📄 Document Manager API

Sistema de gestión de documentos oficiales y memorandos desarrollado con NestJS, Prisma y PostgreSQL. Este proyecto forma parte del trabajo final de Seguridad Informática y proporciona una plataforma segura para la creación, firma digital, cifrado y gestión de documentos institucionales.

## 📋 Descripción del Proyecto

El **Document Manager API** es un sistema integral para la gestión de documentos que incluye:

### Características Principales

- 🔐 **Autenticación y Autorización**: Sistema de roles (admin/user) con autenticación segura
- 📝 **Gestión de Documentos**: Creación y administración de documentos oficiales y memorandos
- 🔒 **Cifrado de Documentos**: Soporte para documentos cifrados con claves de encriptación
- ✍️ **Firma Digital**: Implementación de firmas digitales para documentos PDF
- 📊 **Códigos QR**: Generación de códigos QR para validación de documentos
- 👥 **Sistema de Destinatarios**: Asignación de permisos (lectura/escritura) a usuarios
- 📎 **Adjuntos**: Soporte para archivos adjuntos con gestión de tipos MIME
- 📜 **Historial de Acciones**: Registro completo de todas las acciones sobre documentos
- 💾 **Borradores**: Sistema de guardado automático de borradores

### Tipos de Documentos

- **Oficios**: Documentos oficiales institucionales
- **Memorandos**: Comunicaciones internas

### Estados de Documentos

- `draft`: Borrador
- `sent`: Enviado
- `received`: Recibido
- `not_sent`: No enviado

### Categorías de Documentos

- `normal`: Documentos estándar
- `encrypted`: Documentos cifrados con seguridad adicional

## 🛠️ Tecnologías Utilizadas

- **[NestJS](https://nestjs.com/)**: Framework de Node.js para aplicaciones escalables
- **[Prisma](https://www.prisma.io/)**: ORM moderno para TypeScript y Node.js
- **[PostgreSQL](https://www.postgresql.org/)**: Base de datos relacional
- **[Swagger](https://swagger.io/)**: Documentación interactiva de la API
- **TypeScript**: Lenguaje de programación tipado

## 📦 Instalación y Configuración Inicial

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- **PostgreSQL** (versión 14 o superior) - [Descargar aquí](https://www.postgresql.org/download/)
- **Git** - [Descargar aquí](https://git-scm.com/)

### Guía Paso a Paso para Iniciar el Proyecto

#### 1️⃣ Clonar el Repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/IAlexLizano/document-manager-api.git
cd document-manager-api
```

#### 2️⃣ Instalar las Dependencias

Instala todas las dependencias del proyecto con npm:

```bash
npm install
```

Esto instalará:

- NestJS y sus módulos
- Prisma (ORM para la base de datos)
- Swagger (documentación de la API)
- Todas las demás dependencias necesarias

#### 3️⃣ Configurar PostgreSQL

Antes de continuar, asegúrate de contar con una base de datos (Se recomienda utilizar Postgres).

Abre el archivo `.env` y agrega las siguientes variables:

````env
# ===================================
# CONFIGURACIÓN DE BASE DE DATOS
# ===================================
# Formato: postgresql://USUARIO:CONTRASEÑA@HOST:PUERTO/NOMBRE_DB?schema=public

# ===================================
# CONFIGURACIÓN DE LA APLICACIÓN
# ===================================
PORT=3000

**⚠️ IMPORTANTE:**


#### 5️⃣ Configurar Prisma y la Base de Datos

**a) Generar el Cliente de Prisma:**

Este comando genera el código TypeScript necesario para interactuar con la base de datos:

```bash
npx prisma generate
````

Verás una salida similar a:

```
✔ Generated Prisma Client to ./generated/prisma
```

**b) Ejecutar las Migraciones:**

Este comando creará todas las tablas y estructuras en tu base de datos PostgreSQL:

```bash
npx prisma migrate deploy
```

Si estás en modo desarrollo, es mejor usar:

```bash
npx prisma migrate dev
```

Este comando:

- Aplicará todas las migraciones pendientes
- Creará las tablas: `users`, `documents`, `drafts`, `attachments`, `document_recipients`, `document_history`
- Configurará las relaciones entre tablas
- Creará los índices necesarios

**c) Verificar la Base de Datos (Opcional):**

Puedes abrir Prisma Studio para ver visualmente tu base de datos:

```bash
npx prisma studio
```

Esto abrirá una interfaz web en `http://localhost:5555` donde podrás:

- Ver todas las tablas
- Inspeccionar los datos
- Agregar registros manualmente

#### 6️⃣ Iniciar el Proyecto

Una vez completados todos los pasos anteriores, inicia el servidor:

```bash
npm run start:dev
```

Verás una salida similar a:

```
[Nest] 12345  - LOG [NestFactory] Starting Nest application...
[Nest] 12345  - LOG [InstanceLoader] AppModule dependencies initialized
[Nest] 12345  - LOG Application is running on: http://localhost:3000
```

#### 7️⃣ Verificar que Todo Funciona

**a) Accede a la API:**

- Abre tu navegador en: `http://localhost:3000`

**b) Accede a la documentación de Swagger:**

- Abre tu navegador en: `http://localhost:3000/api`
- Verás la interfaz interactiva de Swagger con todos los endpoints disponibles

**c) Prueba un endpoint:**

- En Swagger, busca el endpoint `GET /users`
- Haz clic en "Try it out" y luego en "Execute"
- Deberías ver una respuesta (aunque esté vacía si no hay usuarios)

### 🔧 Solución de Problemas Comunes

#### Error: "Can't reach database server"

- Verifica que PostgreSQL esté ejecutándose
- Revisa que la URL en `.env` sea correcta
- Confirma que la base de datos existe: `document_manager`

#### Error: "Environment variable not found: DATABASE_URL"

- Asegúrate de que el archivo `.env` esté en la raíz del proyecto
- Verifica que el archivo se llame exactamente `.env` (sin extensión adicional)

#### Error al ejecutar migraciones

- Verifica que la base de datos esté creada
- Confirma que el usuario tenga permisos suficientes
- Intenta ejecutar: `npx prisma migrate reset` (esto borrará todos los datos)

#### El puerto 3000 ya está en uso

- Cambia el puerto en el archivo `.env`: `PORT=3001`
- O detén el proceso que esté usando el puerto 3000

## 🚀 Ejecución del Proyecto

### Modo Desarrollo (con hot-reload)

```bash
npm run start:dev
```

### Modo Producción

```bash
# Compilar el proyecto
npm run build

# Ejecutar la versión compilada
npm run start:prod
```

### Modo Debug

```bash
npm run start:debug
```

La API estará disponible en: `http://localhost:3000`

## 📚 Documentación de la API con Swagger

Swagger proporciona una interfaz interactiva para explorar y probar todos los endpoints de la API.

### Acceder a Swagger

Una vez que el proyecto esté ejecutándose:

1. Abre tu navegador
2. Navega a: **http://localhost:3000/api**

### ¿Qué puedes hacer en Swagger?

- 📖 **Ver todos los endpoints disponibles**: Organizados por módulos (users, documents, etc.)
- 🧪 **Probar peticiones en tiempo real**: Sin necesidad de Postman o curl
- 📋 **Ver los esquemas de datos**: Qué campos requiere cada endpoint
- 🔍 **Ver las respuestas posibles**: Códigos de estado y ejemplos
- 🔐 **Configurar autenticación**: Bearer tokens para endpoints protegidos

### Ejemplo de Uso

1. En Swagger, selecciona un endpoint (ej: `GET /users`)
2. Haz clic en "Try it out"
3. Si el endpoint requiere parámetros, ingrésalos
4. Haz clic en "Execute"
5. Verás la respuesta en tiempo real con el código de estado

## 🗄️ Gestión de la Base de Datos con Prisma

Prisma es el ORM que utilizamos para interactuar con PostgreSQL. Aquí están los comandos más útiles:

### Comandos Esenciales

```bash
# Ver y editar datos en una interfaz visual
npx prisma studio

# Generar el cliente de Prisma después de cambios en schema.prisma
npx prisma generate

# Crear y aplicar una nueva migración en desarrollo
npx prisma migrate dev --name descripcion_del_cambio

# Aplicar migraciones en producción
npx prisma migrate deploy

# Ver el estado de las migraciones
npx prisma migrate status

# Resetear la base de datos (¡CUIDADO! Borra todos los datos)
npx prisma migrate reset

# Validar el schema de Prisma
npx prisma validate

# Formatear el archivo schema.prisma
npx prisma format
```

### ¿Cuándo usar cada comando?

- **`prisma generate`**: Después de modificar `schema.prisma`
- **`prisma migrate dev`**: Al crear nuevas tablas o modificar el esquema en desarrollo
- **`prisma migrate deploy`**: Al desplegar a producción
- **`prisma studio`**: Para inspeccionar y editar datos visualmente
- **`prisma migrate reset`**: Para empezar de cero (solo en desarrollo)

## 📁 Estructura del Proyecto

```
document-manager-api/
├── prisma/
│   ├── schema.prisma          # Esquema de base de datos
│   └── migrations/            # Migraciones de la BD
├── src/
│   ├── common/
│   │   └── prisma/           # Módulo de Prisma
│   ├── modules/
│   │   └── users/            # Módulo de usuarios
│   ├── app.module.ts         # Módulo principal
│   └── main.ts               # Punto de entrada (configuración Swagger)
├── generated/
│   └── prisma/               # Cliente de Prisma generado
└── test/                     # Tests e2e
```

## 🧪 Testing

### Ejecutar Tests

```bash
# Tests unitarios
npm run test

# Tests en modo watch (se ejecutan al hacer cambios)
npm run test:watch

# Tests end-to-end
npm run test:e2e

# Generar reporte de cobertura
npm run test:cov
```

Los reportes de cobertura se generarán en la carpeta `coverage/`

## 🔒 Características de Seguridad

Este proyecto implementa varias características de seguridad enfocadas en la protección de documentos institucionales:

1. **Cifrado de Documentos**: Los documentos sensibles pueden ser cifrados con claves únicas almacenadas de forma segura
2. **Firma Digital**: Soporte para firmas digitales en documentos PDF, garantizando autenticidad e integridad
3. **Control de Acceso Granular**: Sistema de permisos por documento que permite asignar acceso de lectura o escritura a usuarios específicos
4. **Códigos QR de Validación**: Generación de códigos QR únicos para verificar la autenticidad de documentos
5. **Hashing de Contraseñas**: Las contraseñas de usuarios se almacenan con hash seguro (nunca en texto plano)
6. **Auditoría Completa**: Registro detallado de todas las acciones realizadas sobre documentos (creación, envío, recepción, edición)
7. **Categorización de Seguridad**: Documentos clasificados como normales o cifrados según su nivel de sensibilidad
8. **Autenticación por Roles**: Sistema de roles (administrador/usuario) para control de acceso a funcionalidades
9. **Autenticación por Roles**: Sistema de roles (administrador/usuario) para control de acceso a funcionalidades

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run start:dev          # Inicia en modo desarrollo con hot-reload
npm run start:debug        # Inicia en modo debug

# Producción
npm run build             # Compila el proyecto
npm run start:prod        # Ejecuta la versión compilada

# Calidad de Código
npm run format            # Formatea el código con Prettier
npm run lint              # Analiza y corrige problemas con ESLint

# Base de Datos
npx prisma studio         # Abre Prisma Studio
npx prisma migrate dev    # Ejecuta migraciones en desarrollo
npx prisma generate       # Genera el cliente de Prisma
```

## 🤝 Contribución

### Para contribuir:

2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👥 Autores

- **IAlexLizano** - [GitHub](https://github.com/IAlexLizano)

## 📄 Licencia

Este proyecto es privado y fue desarrollado con fines educativos para la Universidad Técnica de Ambato.

## 📞 Soporte

Si tienes alguna pregunta o problema, puedes:

- Abrir un issue en GitHub
- Contactar al desarrollador

---

<p align="center">
  Desarrollado con ❤️ usando <a href="https://nestjs.com/" target="_blank">NestJS</a> y <a href="https://www.prisma.io/" target="_blank">Prisma</a>
</p>
