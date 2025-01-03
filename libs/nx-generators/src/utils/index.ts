export function getSvgContent(svgFileContent: string) {
  const regex = /<svg[^>]*>([\s\S]*)<\/svg>/;
  const matches = regex.exec(svgFileContent) ?? [];
  let svgContent = matches.length > 1 ? matches[1] : '';

  // Define the prefix
  const prefix = 'svg:';

  // Add prefix to all SVG tags (like <circle>, <rect>, <path>, etc.)
  svgContent = svgContent.replace(
    /<(\/?)(circle|rect|path|line|polygon|polyline|ellipse|text|mask|g|clipPath)([^>]*)>/gi,
    (match, closing, tagName, attributes) => {
      return `<${closing}${prefix}${tagName}${attributes}>`;
    },
  );

  return svgContent;
}

export interface SvgAttributes {
  width: string | null;
  height: string | null;
  viewBox: string | null;
  fill: string | null;
  stroke: string | null;
  strokeWidth: string | null;
  strokeLinecap: string | null;
  strokeLinejoin: string | null;
}

export function getSvgAttributes(svgContent: string) {
  // Extract width and height of <svg> element
  const svgAttributes: SvgAttributes = {
    width: null,
    height: null,
    viewBox: null,
    fill: null,
    stroke: null,
    strokeWidth: null,
    strokeLinecap: null,
    strokeLinejoin: null,
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

  // Regular expression to match the 'viewBox' attribute in the <svg> tag
  const svgViewBoxRegex = /<svg[^>]*\sviewBox\s*=\s*["']([^"']+)["'][^>]*>/;
  const svgViewBoxMatches = svgViewBoxRegex.exec(svgContent);

  // If a match is found, return the 'viewBox' value; otherwise, return null
  svgAttributes.viewBox = svgViewBoxMatches ? svgViewBoxMatches[1] : null;

  // Regular expression to match the 'fill' attribute in the <svg> tag
  const svgFillRegex = /<svg[^>]*\sfill\s*=\s*["']([^"']+)["'][^>]*>/;
  const svgFillMatches = svgFillRegex.exec(svgContent);

  // If a match is found, return the 'fill' value; otherwise, return null
  svgAttributes.fill = svgFillMatches ? svgFillMatches[1] : null;

  // Regular expression to match the 'stroke' attribute in the <svg> tag
  const svgStrokeRegex = /<svg[^>]*\sstroke\s*=\s*["']([^"']+)["'][^>]*>/;
  const svgStrokeMatches = svgStrokeRegex.exec(svgContent);

  // If a match is found, return the 'stroke' value; otherwise, return null
  svgAttributes.stroke = svgStrokeMatches ? svgStrokeMatches[1] : null;

  // Regular expression to match the 'stroke-width' attribute in the <svg> tag
  const svgStrokeWidthRegex =
    /<svg[^>]*\sstroke-width\s*=\s*["']([^"']+)["'][^>]*>/;
  const svgStrokeWidthMatches = svgStrokeWidthRegex.exec(svgContent);

  // If a match is found, return the 'stroke-width' value; otherwise, return null
  svgAttributes.strokeWidth = svgStrokeWidthMatches
    ? svgStrokeWidthMatches[1]
    : null;

  // Regular expression to match the 'stroke-linecap' attribute in the <svg> tag
  const svgStrokeLinecapRegex =
    /<svg[^>]*\sstroke-linecap\s*=\s*["']([^"']+)["'][^>]*>/;
  const svgStrokeLinecapMatches = svgStrokeLinecapRegex.exec(svgContent);

  // If a match is found, return the 'stroke-linecap' value; otherwise, return null
  svgAttributes.strokeLinecap = svgStrokeLinecapMatches
    ? svgStrokeLinecapMatches[1]
    : null;

  // Regular expression to match the 'stroke-linejoin' attribute in the <svg> tag
  const svgStrokeLinejoinRegex =
    /<svg[^>]*\sstroke-linejoin\s*=\s*["']([^"']+)["'][^>]*>/;
  const svgStrokeLinejoinMatches = svgStrokeLinejoinRegex.exec(svgContent);

  // If a match is found, return the 'stroke-linejoin' value; otherwise, return null
  svgAttributes.strokeLinejoin = svgStrokeLinejoinMatches
    ? svgStrokeLinejoinMatches[1]
    : null;

  return svgAttributes;
}
