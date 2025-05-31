export function titleToAngularComponentName(text: string) {
  if (!text || typeof text !== 'string') {
    throw new Error('Input must be a non-empty string');
  }

  // Map of special characters to their word equivalents
  const charMap = {
    '.': 'Dot',
    '@': 'At',
    '#': 'Hash',
    // '$': 'Dollar',
    '%': 'Percent',
    '&': 'And',
    '*': 'Star',
    '+': 'Plus',
    '=': 'Equals',
    '?': 'Question',
    '!': 'Exclamation',
    '<': 'Less',
    '>': 'Greater',
    '|': 'Pipe',
    '~': 'Tilde',
    '^': 'Caret',
    '(': 'OpenParen',
    ')': 'CloseParen',
    '[': 'OpenBracket',
    ']': 'CloseBracket',
    '{': 'OpenBrace',
    '}': 'CloseBrace',
    ':': 'Colon',
    ';': 'Semicolon',
    ',': 'Comma',
    '/': 'Slash',
    '\\': 'Backslash',
  };

  return (
    text
      // Replace special characters with their word equivalents
      .replace(
        /[.@#$%&*+=?!<>|~^(){}[\]:;,/\\]/g,
        (char) => ' ' + charMap[char] + ' ',
      )
      // Remove remaining special characters and replace with spaces
      .replace(/[^a-zA-Z0-9\s]/g, ' ')
      // Handle number-letter and letter-number combinations by adding space between them
      .replace(/(\d)([a-zA-Z])/g, '$1 $2')
      .replace(/([a-zA-Z])(\d)/g, '$1 $2')
      // Split by spaces and filter out empty strings
      .split(/\s+/)
      .filter((word) => word.length > 0)
      // Convert to PascalCase (preserve numbers as-is, only capitalize letters)
      .map((word) => {
        if (/^\d+$/.test(word)) {
          // If word is all digits, keep it as-is
          return word;
        } else {
          // Otherwise, apply PascalCase
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join('') + 'Icon'
  );
}
