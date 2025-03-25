import { pool } from '../../app/data-source';
import { log } from "console"

export const obtenerModulosSubById = async (idCurso?: number) => {

    log(' - startet obtenerModulosSubById');
    log(' - idCurso: ' + idCurso);

    try {
        const [rows]:any = await pool.query(
          ` SELECT m.id_curso, m.id as id_modulo,m.orden as orden_modulo, m.nombre_modulo, m.area, sub.id as id_submodulo, sub.orden as orden_sub, nombre_submodulo
          FROM modulos m
          LEFT JOIN submodulos sub ON m.id = sub.id_modulo WHERE m.id_curso = ? 
          ORDER BY orden_modulo ASC, orden_sub ASC ;`,
          [idCurso]
        );

        let id_mod = 0;
        let modulos = [];
        let item = 0;
        for (let r of rows){
            if (id_mod == 0) {
                id_mod = r.id_modulo;

                let submodulos = [];
                if(r.id_submodulo != null){
                    submodulos.push({
                        id_submodulo: r.id_submodulo,
                        nombre_submodulo: r.nombre_submodulo,
                        orden: r.orden_sub,
                    })
                }

                modulos.push({
                    id_modulo: r.id_modulo,
                    nombre_modulo: r.nombre_modulo,
                    area: r.area,
                    orden: r.orden_modulo,
                    submodulos: submodulos
                });
            }
            else if (r.id_modulo != id_mod) {
                id_mod = r.id_modulo;
                item++;
                let submodulos = [];
                if(r.id_submodulo != null){
                    submodulos.push({
                        id_submodulo: r.id_submodulo,
                        nombre_submodulo: r.nombre_submodulo,
                        orden: r.orden_sub,
                    })
                }

                modulos.push({
                    id_modulo: r.id_modulo,
                    nombre_modulo: r.nombre_modulo,
                    area: r.area,
                    orden: r.orden_modulo,
                    submodulos: submodulos
                });

            }else if (r.id_modulo == id_mod){
                modulos[item].submodulos.push({
                    id_submodulo: r.id_submodulo,
                    nombre_submodulo: r.nombre_submodulo,
                    orden: r.orden_sub,
                });
            }
        }
        return {
            success: true,
            data: modulos,
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
