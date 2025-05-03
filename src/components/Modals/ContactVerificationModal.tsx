import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ContactVerificationModalProps {
  nome: string;
  email: string;
  telefone: string;
  onClose: () => void;
  onChange: (data: { nome: string; email: string; telefone: string }) => void;
  onConfirm: () => void;
}

export default function ContactVerificationModal({
  nome,
  email,
  telefone,
  onClose,
  onChange,
  onConfirm,
}: ContactVerificationModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white w-full max-w-[600px] rounded-lg shadow-md p-6">
        <h2 className="text-lg font-bold mb-2">Verificar dados de contato</h2>
        <p className="text-sm mb-6">
          Considerando que você não reconheceu a Notificação de Intermediação Preliminar (NIP), a CASSI entrará em contato para compreender melhor a situação. Por favor, verifique as informações abaixo e, se necessário, atualize-as:
        </p>

        <div className="mb-4">
          <label className="block font-semibold mb-1">Beneficiário</label>
          <Input
            type="text"
            value={nome}
            disabled
            className="w-full bg-gray-200 text-gray-700"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block font-semibold mb-1">E-mail</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => onChange({ nome, email: e.target.value, telefone })}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Celular</label>
            <Input
              type="tel"
              value={telefone}
              onChange={(e) => onChange({ nome, email, telefone: e.target.value })}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            className="border-[#002D4B] text-[#002D4B]"
            onClick={onClose}
          >
            Voltar
          </Button>
          <Button
            className="bg-[#002D4B] text-white hover:bg-[#002D4B]"
            onClick={onConfirm}
          >
            Confirmar dados
          </Button>
        </div>
      </div>
    </div>
  );
}
