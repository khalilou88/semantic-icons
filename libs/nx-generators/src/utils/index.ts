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

export interface SvgAttributes {
  width: string | null;
  height: string | null;
  fill: string | null;
}

export function getSvgAttributes(svgContent: string) {
  // Extract width and height of <svg> element
  const svgAttributes: SvgAttributes = {
    width: null,
    height: null,
    fill: null,
  };

  // Regular expression to match the 'width' attribute in the <svg> tag
  const svgWidthRegex = /<svg[^>]*\swidth\s*=\s*["']([^"']+)["'][^>]*>/;
  const svgWidthMatches = svgWidthRegex.exec(svgContent);

  // If a match is found, return the 'width' value; otherwise, return null
  svgAttributes.width = svgWidthMatches ? svgWidthMatches[1] : null;

  // Regular expression to match the 'height' attribute in the <svg> tag
  const svgHeightRegex = /<svg[^>]*\sheight\s*=\s*["']([^"']+)["'][^>]*>/;
  const svgHeightMatches = svgHeightRegex.exec(svgContent);

  // If a match is found, return the 'height' value; otherwise, return null
  svgAttributes.height = svgHeightMatches ? svgHeightMatches[1] : null;

  // Regular expression to match the 'fill' attribute in the <svg> tag
  const svgFillRegex = /<svg[^>]*\sfill\s*=\s*["']([^"']+)["'][^>]*>/;
  const svgFillMatches = svgFillRegex.exec(svgContent);

  // If a match is found, return the 'fill' value; otherwise, return null
  svgAttributes.fill = svgFillMatches ? svgFillMatches[1] : null;

  return svgAttributes;
}
