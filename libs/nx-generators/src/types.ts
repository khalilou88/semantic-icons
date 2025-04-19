export interface Icon {
  id: string;
  name: string;
  svgContent: string;
  tags: string[];

  size?: 16 | 20 | 24;
  type?: 'solid' | 'outline';
  componentContent?: string;
}
