
import { Car } from "lucide-react"; 

export default function Logo() {
  return (
    <div className="custom_logo flex items-center gap-2">
      <div className="flex aspect-square w-8 items-center justify-center rounded-lg bg-yellow-400">
        <Car className="w-4 h-4 text-gray-900" />
      </div>
      <div className="flex flex-col text-left text-sm leading-tight">
        <span className="truncate font-semibold">
          Carr<span className="text-yellow-500">Go</span>
        </span>
        <span className="truncate text-xs text-muted-foreground">
          TAXI SERVICE
        </span>
      </div>
    </div>
  );
}
