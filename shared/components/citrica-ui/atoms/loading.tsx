import React from 'react';
import { Spinner } from "@heroui/react";
import Text from '../atoms/text';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
  label?: string;
  labelColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
  className?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  color = 'primary',
  label,
  labelColor = 'default',
  className = '',
  fullScreen = false,
}) => {
  const content = (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <Spinner size={size} color={color} />
      {label && (
        <Text 
          variant="body" 
          textColor={labelColor === 'default' ? 'color-on-surface' : `color-${labelColor}`}
        >
          {label}
        </Text>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-color-surface p-8 rounded-lg shadow-lg">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

export default Loading;