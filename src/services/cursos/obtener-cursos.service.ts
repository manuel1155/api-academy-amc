import { pool } from '../../app/data-source';
import { log } from "console"

export const obtenerCursos = async () => {

    log(' - startet obtenerCursos');
    try {
        const [rows]:any = await pool.query(
          ` SELECT *
            FROM cursos c
            WHERE c.activo = true`,
          []
        );

        return {
            success: true,
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