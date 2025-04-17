
# Amigo Secreto - Challenge de Programación

Este proyecto fue desarrollado como parte del Challenge Amigo Secreto, un ejercicio práctico para aplicar conocimientos de HTML, CSS y JavaScript impartido por **Alura Latam**.
La aplicación permite a los usuarios agregar nombres a una lista y luego realizar un sorteo aleatorio para elegir un "amigo secreto".

## Descripción

La aplicación simula el popular juego de "Amigo Secreto". El usuario puede ingresar nombres en un campo de texto, y al llegar a un mínimo de 3 participantes, puede hacer un sorteo aleatorio que selecciona a uno de ellos como ganador.

Este proyecto fue creado con fines educativos y forma parte del contenido práctico del curso.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

## Instalación y uso

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Kaescoto94/challenge-amigo-secreto.git
   ```

2. Abre el archivo `index.html` en tu navegador (no requiere servidor local ni instalación adicional).

## Funcionalidades

- Agregar nombres con validación (no permite vacíos)
- Visualización dinámica de la lista en pantalla
- Sorteo aleatorio de un nombre utilizando `Math.random()`
- Validación para mínimo 3 participantes antes de habilitar el sorteo
- Mostrar el resultado del sorteo en el DOM

## Estructura del proyecto

```
📁 amigo-secreto/
├── index.html       # Estructura del proyecto
├── style.css        # Estilos básicos
├── app.js           # Lógica principal (JS)
├── README.md        # Documentación del proyecto
└── assets/          # Imágenes e íconos del proyecto
```

## Posibles problemas

- Si no se agregan al menos 3 nombres, el sorteo no se ejecuta (validación incluida).
- Si se actualiza la página, los nombres se pierden (no se guarda en localStorage en esta versión).

## Posibles mejoras

- Guardar los nombres con `localStorage`
- Permitir emparejamientos automáticos secretos entre todos los participantes
- Estilizar mejor la interfaz con frameworks como Tailwind o Bootstrap
- Hacer responsive el diseño

## Autor

Desarrollado por Kennet Escoto
Este proyecto forma parte del curso de introducción a la programación y fue realizado como parte del Challenge Amigo Secreto de Alura Latam.

## Recursos

- [Documentación oficial del challenge (Trello)](https://trello.com/b/v0TFbgqP/trello-challenge-amigo-secreto-esp)


## 🌐 Demo en línea

Podés ver y probar la aplicación en funcionamiento aquí:
➡️ [Demo a través de GitHub Pages](https://kaescoto94.github.io/challenge-amigo-secreto)

