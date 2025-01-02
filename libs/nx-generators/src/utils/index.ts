export function getSvgContent(svgFileContent: string) {
  const regex = /<svg[^>]*>([\s\S]*)<\/svg>/;
  const matches = regex.exec(svgFileContent) ?? [];
  let svgContent = matches.length > 1 ? matches[1] : '';

  // Define the prefix
  const prefix = 'svg:';

  // Add prefix to all SVG tags (like <circle>, <rect>, <path>, etc.)
  svgContent = svgContent.replace(
    /<(\/?)(circle|rect|path|line|polygon|polyline|ellipse|text)([^>]*)>/gi,
    (match, closing, tagName, attributes) => {
      return `<${closing}${prefix}${tagName}${attributes}>`;
    },
  );

  return svgContent;
}
