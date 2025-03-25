import { pool } from '../../app/data-source';
import { log } from "console"

export const registrarInicioSubmodulo = async (idAsignacion: number, idSubmodulo: number, updatedAt: Date): Promise<any> => {

    log(' - startet registrarInicioSubmodulo');

    try {

        const [result]: any = await pool.execute(
            'INSERT INTO asig_det_submodulo (id_asignacion,id_submodulo,estatus,f_inicio) values (?,?,?,?)',
            [idAsignacion, idSubmodulo, 'proceso', updatedAt]
        );
    
        return result.insertId;

      } catch (err) {
        console.log(err);
        throw new Error('Error updating user name');
      }
}