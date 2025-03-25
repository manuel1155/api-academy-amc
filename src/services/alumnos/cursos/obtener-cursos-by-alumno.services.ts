import { pool } from '../../../app/data-source';
import { log } from "console"

export const obtenerCursosAlumno = async (idAlumno: string) => {

    log(' - startet obtenerCursosAlumno');

    try {
        const [rows]:any = await pool.query(
          ` SELECT ca.id as id_asignacion, c.id as id_curso, c.titulo as titulo_curso, c.url_imagen, ca.estatus 
          FROM cursos_asignados ca
          INNER JOIN cursos c ON ca.id_curso = c.id
          WHERE ca.id_usuario = ?`,
          [idAlumno]
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