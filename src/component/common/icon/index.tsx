import React from 'react';
import { GitHub, Icon as FeatherIcon } from 'react-feather';

export type AllowedIcons = 'github';

function mapIcon(name: AllowedIcons): FeatherIcon | undefined {
  switch (name) {
    case 'github':
      return GitHub;
  }
}

type IconProps = {
  name: AllowedIcons;
  size?: number;
  className?: string;
  onClick?: () => void;
};

export const Icon: React.FC<IconProps> = ({ name, size, ...props }) => {
  const InternalIcon = mapIcon(name);
  if (!InternalIcon) {
    return null;
  }
  return <InternalIcon size={size ? size : 24} {...props} />;
};
