export interface AnchorIconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
}

function AncorIcon({ color = '#ff5c5c', size = 36, strokeWidth = 1 }: AnchorIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-anchor-icon lucide-anchor'
    >
      <path d='M12 6v16' />
      <path d='m19 13 2-1a9 9 0 0 1-18 0l2 1' />
      <path d='M9 11h6' />
      <circle
        cx='12'
        cy='4'
        r='2'
      />
    </svg>
  );
}

export default AncorIcon;
