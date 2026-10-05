# Laboratorio #4 — Gerencia de Recursos de Tecnología de Información y Comunicación

**Autor:** Josue Moreno · **Grupo:** 9GS241

Sitio web estático que describe la importancia de la gerencia de recursos TIC:

- **La gerencia de recursos tecnológicos:** planificación, diseño, implementación y evaluación de la infraestructura TIC (ciclo interactivo).
- **Importancia de la gestión de la infraestructura TIC:** hardware y software, monitoreo y optimización, seguridad, capacitación continua, integración tecnológica, ética y uso responsable.
- Marcos de referencia (COBIT, ITIL, ISO/IEC 27001, ISO/IEC 38500, NIST CSF, TOGAF), caso aplicado, autoevaluación, metodología de búsqueda y referencias APA.

## Estructura

```
index.html      Página principal
css/styles.css  Estilos (tema claro/oscuro, responsive)
js/main.js      Contenido dinámico, ciclo, tarjetas, quiz y animaciones
render.yaml     Configuración para desplegar en Render
```

## Verlo localmente

Abrir `index.html` en el navegador, o:

```bash
python -m http.server 8000
```

## Desplegar en Render

1. Subir este repositorio a GitHub.
2. En [render.com](https://render.com): **New → Static Site** y conectar el repositorio.
3. Configuración:
   - **Build Command:** *(dejar vacío)*
   - **Publish Directory:** `.`
4. **Create Static Site**. Render dará una URL tipo `https://lab4-grtic-josue-moreno.onrender.com`.

(Alternativa: **New → Blueprint** y Render leerá `render.yaml` automáticamente.)
