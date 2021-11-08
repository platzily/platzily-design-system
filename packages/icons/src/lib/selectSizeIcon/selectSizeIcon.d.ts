export interface SelectSizeIconProps {
  size?: string;
}

export default function selectSizeIcon(props: SelectSizeIconProps): {
  width: number | string;
  height: number | string;
};
