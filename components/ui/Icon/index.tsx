import IconsPath from '@/lib/JSON/icon_url.json';

export interface IconProps {
  width?: string | number;
  height?: string | number;
  widthBox?: string | number;
  heightBox?: string | number;
  path?: string;
  pathName?: string;
  color?: string;
  onClick?(): void;
  styles?: string;
  iconName?: string;
  type?: 'stroke' | 'fill';
}

function Icon({
  width,
  height,
  widthBox,
  heightBox,
  path,
  color,
  onClick,
  styles,
  iconName,
  pathName,
  type = 'fill',
}: IconProps) {
  if (pathName) {
    const IconSVG = IconsPath[pathName as keyof {}];

    return (
      <img
        src={IconSVG}
        alt={pathName}
        width={width || 30}
        height={height || 30}
      />
    );
  }

  if (type === 'stroke') {
    return (
      <svg
        className={styles}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        color={color || 'inherit'}
        width={width || 24}
        height={height || 24}
        viewBox={`0 0 ${widthBox || 24} ${heightBox || 24}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={IconsPath[iconName as keyof {}] || path}
        />
      </svg>
    );
  }

  return (
    <svg
      className={styles}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      color={color || 'inherit'}
      width={width || 24}
      height={height || 24}
      viewBox={`0 0 ${widthBox || 24} ${heightBox || 24}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={IconsPath[iconName as keyof {}] || path}
      />
    </svg>
  );
}

export default Icon;
