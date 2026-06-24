# EA03 - Prototipo funcional UniLib

Experiencia de Aprendizaje 03: construccion del prototipo, plan de pruebas y
control de versiones del sistema de biblioteca **UniLib**.

El prototipo esta en la carpeta `prototipo/` y esta hecho en **React + Vite**.

## Como ejecutar el prototipo

1. Entrar a la carpeta del prototipo:

```
cd prototipo
```

2. Instalar las dependencias:

```
npm install
```

3. Levantar el proyecto:

```
npm run dev
```

4. Abrir en el navegador la direccion que aparece en la consola (normalmente http://localhost:5173).

## Usuarios de prueba

La clave para todos los usuarios es **1234**.

| RUT | Rol |
|-----|-----|
| 20.555.888-1 | Estudiante |
| 15.333.444-K | Docente |
| 18.777.999-5 | Bibliotecario |

## Funcionalidades del prototipo

- Inicio de sesion segun el rol del usuario
- Catalogo de libros con buscador por titulo o autor
- Registro de prestamos (valida usuarios morosos y calcula la fecha de vencimiento)
- Registro de devoluciones con calculo de multa por dias de atraso
- Vista de "Mis prestamos" para el estudiante

## Control de versiones

Los cambios que se le hicieron al prototipo quedan registrados en el historial
de commits de este repositorio:

1. Se agrego un buscador de libros en el catalogo.
2. Se cambio el valor de la multa diaria de $200 a $500.
