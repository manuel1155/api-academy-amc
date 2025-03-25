import { pool } from '../../app/data-source';
import { log } from "console"

export const obtenerDetallesCurso = async (cursoId: number) => {

    log(' - startet obtenerDetallesCurso');
    try {
        const [rows]:any = await pool.query(
          ` SELECT *
            FROM cursos c
            WHERE c.activo = true AND c.id = ? `,
          [cursoId]
        );

        let success = false;
        let mensaje = 'Curso no encontrado'
        if(rows.length > 0) {
            success = true;
            mensaje = 'Curso encontrado con exito';
        }

        return {
            success: success,
            message: mensaje,
            data: rows,
          };

    } catch (error: any) {
        console.error('Error ejecutando la consulta:', error.message);
        return {
          success: false,
          message: 'Error al obtener los datos de la base de datos',
          error: error.message,
        };
      }
}