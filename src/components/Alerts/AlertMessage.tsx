import Image from 'next/image';

interface AlertMessageProps {
  type: 'success' | 'error';
  message: React.ReactNode;
}

export default function AlertMessage({ type, message }: AlertMessageProps) {
  const styles = {
    success: {
      bg: 'bg-[#D6FBD0]',
      text: 'text-[#1D5220]',
      border: 'border-[#29BB11]',
      icon: '/icons/check-outline.svg',
    },
    error: {
      bg: 'bg-[#FAD4D4]',
      text: 'text-[#3D0000]',
      border: 'border-[#E23232]',
      icon: '/icons/check-error.svg',
    },
  };

  const style = styles[type];

  return (
    <div
      className={`rounded-lg p-4 flex items-start gap-2 mb-6 border ${style.bg} ${style.text} ${style.border}`}
    >
      <Image src={style.icon} alt={type} width={20} height={20} />
      <div className="leading-snug">
        <p className="whitespace-pre-line">{message}</p>
      </div>
    </div>
  );
}
