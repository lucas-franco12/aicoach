// src/components/MessageControls.tsx
import { Button } from "@/components/ui/button";
import { MessageSquare, CheckCircle } from "lucide-react";

interface MessageControlsProps {
  onTranslate: () => void;
  onCorrect: () => void;
}

export function MessageControls({ onTranslate, onCorrect }: MessageControlsProps) {
  return (
    <div className="flex gap-2 mt-1">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onTranslate}
        className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
      >
        <MessageSquare className="h-3 w-3" />
        Translate
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onCorrect}
        className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
      >
        <CheckCircle className="h-3 w-3" />
        Correct
      </Button>
    </div>
  );
}

