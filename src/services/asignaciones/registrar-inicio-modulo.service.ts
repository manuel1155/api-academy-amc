import { pool } from '../../app/data-source';
import { log } from "console"

export const registrarInicioModulo = async (idAsignacion: number, idModulo: number, updatedAt: Date): Promise<any> => {

    log(' - startet registrarInicioModulo');

    try {

        const [result]: any = await pool.execute(
            'INSERT INTO asig_det_modulo (id_asignacion,id_modulo,estatus,f_inicio) values (?,?,?,?)',
            [idAsignacion, idModulo, 'proceso', updatedAt]
        );
    
        return result.insertId;

      } catch (err) {
        throw new Error('Error updating user name');
      }
}