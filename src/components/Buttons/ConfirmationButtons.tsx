interface NipConfirmationButtonsProps {
  title?: string;
  yesLabel?: string;
  noLabel?: string;
  onYes?: () => void;
  onNo?: () => void;
}

export default function NipConfirmationButtons({
  title = 'Reconhece esta NIP?',
  yesLabel = 'Sim, foi aberto por mim',
  noLabel = 'Não reconheço',
  onYes,
  onNo,
}: NipConfirmationButtonsProps) {
  return (
    <div className="mt-6">
      <div className="w-full h-[1px] bg-gray-200 mb-4" />
      <h2 className="text-lg font-bold text-[#2D2D2D] mb-4">{title}</h2>
      <div className="flex gap-4">
        <button
          onClick={onNo}
          className="px-6 py-2 border border-[#002D4B] text-[#002D4B] rounded-md hover:bg-gray-100"
        >
          {noLabel}
        </button>
        <button
          onClick={onYes}
          className="px-6 py-2 bg-[#002D4B] text-white rounded-md hover:opacity-90"
        >
          {yesLabel}
        </button>
      </div>
    </div>
  );
}
