export function titleToComponentName(text: string): string {
  if (typeof text !== 'string' || text.trim() === '') {
    throw new Error('Input must be a non-empty string');
  }

  // Map of special characters to their word equivalents, prioritized for replacement
  const CHAR_TO_WORD_MAP: Readonly<Record<string, string>> = {
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
    '-': 'Dash',
    // _: 'Underscore',
  };

  // Map of specific text patterns to their desired standardized form
  // These replacements happen early to ensure correct casing before general PascalCase conversion.
  const TEXT_STANDARDIZATION_MAP: Readonly<Record<string, string>> = {
    iFixit: 'IFixIt',
    GitHub: 'Github',
  };

  // Create a regex for special characters from CHAR_TO_WORD_MAP
  const specialCharRegex = new RegExp(
    `[${Object.keys(CHAR_TO_WORD_MAP)
      .map((char) => `\\${char}`)
      .join('')}]`,
    'g',
  );

  let processedText = text;

  // 1. Apply specific text standardizations (like iFixit to IFixIt).
  // This loop ensures that all defined standardizations are applied.
  for (const pattern in TEXT_STANDARDIZATION_MAP) {
    // Using a RegExp constructor to allow dynamic pattern creation.
    // The 'g' flag for global replacement.
    processedText = processedText.replace(
      new RegExp(pattern, 'g'),
      TEXT_STANDARDIZATION_MAP[pattern],
    );
  }

  processedText = processedText
    // 2. Replace defined special characters with their word equivalents, padded with spaces.
    .replace(specialCharRegex, (char) => ` ${CHAR_TO_WORD_MAP[char]} `)
    // 3. Normalize multiple spaces to a single space.
    .replace(/\s+/g, ' ')
    // 4. Remove any remaining characters that are not alphanumeric or spaces.
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    // 5. Handle number-letter combinations by adding a space between them.
    .replace(/(\d)([a-zA-Z])/g, '$1 $2')
    // 6. Handle letter-number combinations by adding a space between them.
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    // 7. Trim leading/trailing spaces.
    .trim();

  // Split the processed text into words, filter out empty strings, and convert to PascalCase.
  const words = processedText
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  // Join the words and append "Icon".
  return words.join('') + 'Icon';
}
