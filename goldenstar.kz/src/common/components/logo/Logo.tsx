import * as React from 'react';
import LogoIconLight from 'assets/icons/logo-light.svg';
import LogoIconDark from 'assets/icons/logo-dark.svg';

interface LogoProps {
  isDark?: boolean;
}

export function Logo(props: LogoProps): React.JSX.Element {
  const { isDark } = props;
  return isDark ? (
    <LogoIconDark className="iMac:w-60 h-full w-20 lg:w-40" />
  ) : (
    <LogoIconLight className="iMac:w-60 h-full w-20 lg:w-40" />
  );
}
