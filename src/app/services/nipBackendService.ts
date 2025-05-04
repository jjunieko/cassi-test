import { NipData } from '../model/NipData';
import { getNipInitialMock, getNipErrorMock, getNipWithoutInterlocutorMock } from './nip.service';

export function getNipByNumber(nip: number): NipData | null {
  if (nip === 111111) return getNipInitialMock(); // fluxo de sucesso 
  if (nip === 123456) return getNipWithoutInterlocutorMock(); // nao encontrado
  if (nip === 999999) return getNipErrorMock();   // fluxo de erro
  return null;
}
