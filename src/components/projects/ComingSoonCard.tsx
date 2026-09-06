import React from 'react';
import { Rocket } from 'lucide-react';

const ComingSoonCard: React.FC = () => {
  return (
    <div className="h-full min-h-[560px] rounded-xl border border-dashed border-border flex flex-col items-center justify-center gap-3 p-10 text-center">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
        <Rocket size={20} className="text-primary" />
      </div>
      <p className="text-sm font-medium text-foreground">
        More projects in progress
      </p>
      <p className="text-xs text-muted-foreground max-w-[220px]">
        Building the next one right now — check back soon.
      </p>
    </div>
  );
};

export default ComingSoonCard;