# 🛡️ Dominicana Compañía de Seguros – Gestión de Clientes

Aplicación web desarrollada con React para la gestión de clientes y sus direcciones, utilizando una API simulada con JSON Server.

---

## 🎯 Objetivo

Desarrollar una aplicación frontend que permita:

- 🔐 Autenticarse mediante un formulario de login simulado (solo navegación, sin lógica real).
- 👥 Ver una lista de clientes obtenida desde una API simulada.
- ➕➖ Crear, editar y eliminar clientes.
- 🏠 Para cada cliente, gestionar (ver, agregar, editar, eliminar) múltiples direcciones asociadas.

---

## 🛠️ Tecnologías Utilizadas

- **React** (Frontend principal)
- **JSON Server** (Simulación de API REST)
- **Librerías UI**: Tailwind CSS
- **Manejo de Estado**: Context API
- **Validación de Formularios**: Reglas básicas

---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/cristianEncarnacion/PruebaTecnicaFrontend
cd PruebaTecnicaFrontend
```
### 2️⃣ Instalar dependencias


```bash
npm install
```
### 3️⃣ Iniciar el servidor JSON (API simulada)

Asegúrate de tener instalado JSON Server:


```bash
npm install json-server
```

### 3️⃣ Iniciar el servidor JSON (API simulada)

Asegúrate de tener instalado JSON Server:

```bash
npm install json-server
```
Inicia el servidor con:

```bash
npx json-server db.json
```
### 4️⃣ Iniciar la aplicación React


Asegúrate de tener instalado JSON Server:

```bash
npm run dev
```
---
### 📌 Decisiones Técnicas
Se usó JSON Server para simular una API REST sin backend real.

El manejo del estado del usuario se implemento con Context API
Se priorizó una interfaz limpia, responsiva y con experiencia de usuario fluida.

Se modularizó el código para mantener una separación clara entre lógica de presentación, datos y servicios.

### ✅ Criterios Cumplidos
 Login simulado funcional

 Listado de clientes desde API

 CRUD completo para clientes

 CRUD completo para direcciones

 Diseño responsive
 
 ###  📬 Contacto
Proyecto desarrollado como parte de un ejercicio técnico para Dominicana Compañía de Seguros.
