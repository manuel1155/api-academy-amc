import { pool } from '../../app/data-source';
import { log } from "console"

export const obtenerRecusrosSubmodulo = async (idSubmod: number) => {

    log(' - startet obtenerRecusrosSubmodulo');

    try {
        const [rows]:any = await pool.query(
          ` SELECT sc.id, sc.tipo, sc.contenido, sc.orden 
            FROM submodulo_contenidos sc
            WHERE sc.id_submodulo = ? AND sc.activo = true
            ORDER BY sc.orden asc;`,
          [idSubmod]
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