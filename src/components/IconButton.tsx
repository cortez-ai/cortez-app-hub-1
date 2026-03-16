import { ExternalLink } from "lucide-react";

interface Props {
  onClick: () => void;
  ariaLabel?: string;
  tooltip?: string;
  icon: React.JSX.Element;
}

const IconButton = ({ onClick, ariaLabel, tooltip, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className="p-2 border border-gray-700 bg-zinc-800  hover:text-teal-400 text-gray-400 rounded-md transition-colors duration-200"
      title={tooltip}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};
export default IconButton;
