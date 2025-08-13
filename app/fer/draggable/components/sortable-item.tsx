import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import { Item } from './item';

interface SortableItemProps {
  id: string;
  value: React.ReactNode;
}

export function SortableItem(props: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <Item itemId={props.id} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.value}
    </Item>
  );
}