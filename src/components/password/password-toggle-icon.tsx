import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../tooltip';

export const PasswordToggleIcon = ({
  isPasswordVisible,
  toggleVisibility,
}: {
  isPasswordVisible: boolean;
  toggleVisibility: () => void;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {isPasswordVisible ? (
            <EyeIcon
              className="peer mr-3 w-5"
              onMouseDown={(e) => {
                e.preventDefault();
                toggleVisibility();
              }}
            />
          ) : (
            <EyeSlashIcon
              className="peer mr-3 w-5"
              onMouseDown={(e) => {
                e.preventDefault();
                toggleVisibility();
              }}
            />
          )}
        </TooltipTrigger>
        <TooltipContent
          align={'start'}
          side="bottom"
          sideOffset={0}
          variant="suggest"
          className="left-8"
        >
          <p>{isPasswordVisible ? 'Hide password' : 'Show password'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
