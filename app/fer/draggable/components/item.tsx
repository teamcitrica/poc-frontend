import React, {forwardRef} from 'react';
import {UniqueIdentifier} from '@dnd-kit/core';

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  itemId: UniqueIdentifier;
}

export const Item = forwardRef<HTMLDivElement, ItemProps>(({itemId, ...props}, ref) => {
  return (
    <div className="bg-slate-700 w-20 text-cyan-100 mb-3" {...props} ref={ref}>{itemId}</div>
  );
});