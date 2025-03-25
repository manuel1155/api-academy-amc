import { pool } from "../../app/data-source";
import { log } from "console";

export const obtenerDetallesModulo = async (idCurso: number, idModulo: number, idAsig: number) => {
  log(" - startet obtenerDetallesModulo");
  log(" - idCurso: " + idCurso);
  log(" - idModulo: " + idModulo);
  log(" - idAsig: " + idAsig);

  const [rows]: any = await pool.query(
    ` 
SELECT m.id_curso, m.id as id_modulo,m.orden as orden_modulo, m.nombre_modulo, m.area, 
	m_det.estatus as estatus_modulo,
    m_det.f_inicio as f_inicio_modulo,
    m_det.f_termino as f_termino_modulo,
	sub.id as id_submodulo, sub.orden as orden_sub, nombre_submodulo,  sub_det.estatus as estatus_submodulo,
    sub_det.f_inicio as f_inicio_submodulo,
    sub_det.f_termino as f_termino_submodulo
FROM modulos m 
	LEFT JOIN asig_det_modulo m_det ON (m.id = m_det.id_modulo AND m_det.id_asignacion = ?)
	LEFT JOIN submodulos sub ON m.id = sub.id_modulo
	LEFT JOIN asig_det_submodulo sub_det ON (sub.id = sub_det.id_submodulo AND sub_det.id_asignacion = ?)
WHERE m.id_curso = ? AND m.id = ?
ORDER BY orden_sub;
    `,
    [idAsig, idAsig, idCurso, idModulo]
  );

  log(" - end obtenerDetallesModulo");
  return rows;
};
