export function addSpaces(str: string): string {
  return str.replace(/([a-zA-Z])(\d)/g, '$1 $2');
}

export function titleToComponentName(text: string): string {
  if (typeof text !== 'string' || text.trim() === '') {
    throw new Error('Input must be a non-empty string');
  }

  // Map of specific text patterns to their desired standardized form.
  // These replacements happen FIRST to ensure specific terms are handled correctly
  // before general character processing or PascalCase conversion.
  // IMPORTANT: Keys should be the exact string to match (case-sensitive if needed).
  // Values are the desired output for that exact string within the context.
  const TEXT_STANDARDIZATION_MAP: Readonly<Record<string, string>> = {
    iFixit: 'IFixIt',
    GitHub: 'Github',
  };

  // Map of common special characters to their word equivalents for general parsing.
  const CHAR_TO_WORD_MAP: Readonly<Record<string, string>> = {
    '.': 'Dot',
    '@': 'At',
    '#': 'Hash',
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
    // '-': 'Dash',
    // _: 'Underscore',
    // '$': 'Dollar',
  };

  // Create a regex for special characters from CHAR_TO_WORD_MAP for general parsing.
  const specialCharRegex = new RegExp(
    `[${Object.keys(CHAR_TO_WORD_MAP)
      .map((char) => `\\${char}`)
      .join('')}]`,
    'g',
  );

  let processedText = text;

  // 1. Apply specific text standardizations.
  // This loop iterates through the TEXT_STANDARDIZATION_MAP and applies each replacement.
  // IMPORTANT: Order matters here if one key is a substring of another.
  // For 'GithubAction', it's crucial to replace that *before* 'gitHub' or other general casing rules.
  // Iterating through the map keys might not guarantee a specific order, so for critical overlaps,
  // consider a manual ordered array of { pattern, replacement } objects if issues arise.
  // For these specific cases, a simple loop should work.
  for (const original in TEXT_STANDARDIZATION_MAP) {
    // Using RegExp constructor with 'g' flag for global replacement.
    // Escape the pattern if it contains regex special characters, though for direct strings like 'IFixIt' it's usually fine.
    processedText = processedText.replace(
      new RegExp(original, 'g'),
      TEXT_STANDARDIZATION_MAP[original],
    );
  }

  // 2. Replace defined special characters with their word equivalents, padded with spaces.
  processedText = processedText.replace(
    specialCharRegex,
    (char) => ` ${CHAR_TO_WORD_MAP[char]} `,
  );

  // 3. Insert space before uppercase letters that are followed by lowercase letters,
  // AND are preceded by a lowercase letter or a digit.
  // This handles:
  // - "githubAction" -> "github Action"
  // - "myComponentName" -> "my Component Name"
  // - "v10Api" -> "v10 Api"
  // processedText = processedText.replace(/([a-z0-9])([A-Z][a-z])/g, '$1 $2');

  // 4. Insert space before sequences of uppercase letters that are followed by a lowercase letter,
  // AND are preceded by a *different* uppercase letter.
  // This specifically targets the "AaAAAAaaaaaAAAA" type pattern.
  // It ensures "AaAAAA" becomes "Aa AAAA" but leaves "AAAA" (an acronym) intact.
  // (A)(AAAA) = $1 AAAA
  // (AA)(AAa) = $1 AAa (split if first group is capital and next is capital then small)
  processedText = processedText.replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');

  // 4. Normalize multiple spaces to a single space.
  // processedText = processedText.replace(/\s+/g, ' ');

  // 5. Remove any remaining characters that are not alphanumeric or spaces.
  processedText = processedText.replace(/[^a-zA-Z0-9\s]/g, ' ');

  // 6. Handle letter-number combinations by adding a space between them.
  // This is important for "v10" -> "v 10" or "API3" -> "API 3".
  processedText = processedText.replace(/([a-zA-Z])(\d)/g, '$1 $2');
  processedText = processedText.replace(/(\d)([a-zA-Z])/g, '$1 $2');

  // 7. Trim leading/trailing spaces.
  processedText = processedText.trim();

  // --- Final PascalCase Conversion and Acronym Preservation ---
  const words = processedText
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word) => {
      // Preserve the casing of all-uppercase words (acronyms like "FRG", "CSS", "AAAA").
      // This is the key for "FRG" to remain "FRG", and "AAAA" to remain "AAAA".
      // if (word.length > 1 && word === word.toUpperCase()) {
      //   return word;
      // }
      // Convert other words to PascalCase (first letter capitalized, rest lowercase).
      // This will handle "Aa" to "Aa", and "aaaaa" to "Aaaaa".
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

  return words.join('');
}
