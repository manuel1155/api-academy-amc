import { pool } from "../../app/data-source";
import { log } from "console";

export const obtenerModSubConDetByIdCurso = async (idCurso: number, idAsig: number) => {
  log(" - startet obtenerModSubConDetByIdCurso");
  log(" - idCurso: " + idCurso);

  try {
    const [rows]: any = await pool.query(
      `SELECT 
	m.id_curso, 
    m.id as id_modulo,
    m.orden as orden_modulo, 
    m.nombre_modulo, 
    m.area,
    m_det.estatus as estatus_modulo,
    m_det.f_inicio as f_inicio_modulo,
    m_det.f_termino as f_termino_modulo,
    sub.id as id_submodulo,
    sub.orden as orden_sub,
    nombre_submodulo,
    sub_det.estatus as estatus_submodulo,
    sub_det.f_inicio as f_inicio_submodulo,
    sub_det.f_termino as f_termino_submodulo
FROM modulos m
LEFT JOIN asig_det_modulo m_det ON (m.id = m_det.id_modulo AND m_det.id_asignacion = ?)
LEFT JOIN submodulos sub ON m.id = sub.id_modulo
LEFT JOIN asig_det_submodulo sub_det ON (sub.id = sub_det.id_submodulo AND sub_det.id_asignacion = ?)
WHERE m.id_curso = ?
ORDER BY orden_modulo ASC, orden_sub ASC`,
      [idAsig, idAsig, idCurso]
    );

    let id_mod = 0;
    let modulos = [];
    let item = 0;
    for (let r of rows) {
      if (id_mod == 0) {
        id_mod = r.id_modulo;

        let submodulos = [];
        if (r.id_submodulo != null) {
          submodulos.push({
            id_submodulo: r.id_submodulo,
            nombre_submodulo: r.nombre_submodulo,
            orden: r.orden_sub,
            estatus_submodulo: r.estatus_submodulo,
            f_inicio_submodulo: r.f_inicio_submodulo,
            f_termino_submodulo: r.f_termino_submodulo,
          });
        }

        modulos.push({
          id_modulo: r.id_modulo,
          nombre_modulo: r.nombre_modulo,
          area: r.area,
          orden: r.orden_modulo,
          submodulos: submodulos,
          estatus_modulo: r.estatus_modulo,
          f_inicio_modulo: r.f_inicio_modulo,
          f_termino_modulo: r.f_termino_modulo,
        });
      } else if (r.id_modulo != id_mod) {
        id_mod = r.id_modulo;
        item++;
        let submodulos = [];
        if (r.id_submodulo != null) {
          submodulos.push({
            id_submodulo: r.id_submodulo,
            nombre_submodulo: r.nombre_submodulo,
            orden: r.orden_sub,
            estatus_submodulo: r.estatus_submodulo,
            f_inicio_submodulo: r.f_inicio_submodulo,
            f_termino_submodulo: r.f_termino_submodulo,
          });
        }

        modulos.push({
          id_modulo: r.id_modulo,
          nombre_modulo: r.nombre_modulo,
          area: r.area,
          orden: r.orden_modulo,
          submodulos: submodulos,
          estatus_modulo: r.estatus_modulo,
          f_inicio_modulo: r.f_inicio_modulo,
          f_termino_modulo: r.f_termino_modulo,
        });
      } else if (r.id_modulo == id_mod) {
        modulos[item].submodulos.push({
          id_submodulo: r.id_submodulo,
          nombre_submodulo: r.nombre_submodulo,
          orden: r.orden_sub,
          estatus_submodulo: r.estatus_submodulo,
          f_inicio_submodulo: r.f_inicio_submodulo,
          f_termino_submodulo: r.f_termino_submodulo,
        });
      }
    }
    return {
      success: true,
      data: modulos,
    };
  } catch (error: any) {
    console.error("Error ejecutando la consulta:", error.message);
    return {
      success: false,
      message: "Error al obtener los datos de la base de datos",
      error: error.message,
    };
  }
};
