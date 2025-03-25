import { pool } from '../../app/data-source';
import { log } from "console"

export const registrarInicioAsignacion = async (idAsignacion: number, updatedAt: Date): Promise<any> => {

    log(' - startet registrarInicioAsignacion');

    try {
        const [rows] = await pool.execute(
          'UPDATE cursos_asignados SET f_inicio = ?, estatus = ? WHERE id = ?',
          [updatedAt, 'proceso', idAsignacion]
        );
        return rows;
      } catch (err) {
        throw new Error('Error updating user name');
      }
}