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

  // Map of common special characters to their word equivalents, used for general parsing.
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
    // '$': 'Dollar',
    // '-': 'Dash',
    // '_': 'Underscore',
  };

  // Create a regex for special characters from CHAR_TO_WORD_MAP for general parsing.
  const specialCharRegex = new RegExp(
    `[${Object.keys(CHAR_TO_WORD_MAP)
      .map((char) => `\\${char}`) // Escape special regex characters
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

  // 2. Insert spaces before uppercase letters that are not at the start of a word,
  // to handle cases like "GithubAction" -> "Github Action" if not caught by TEXT_STANDARDIZATION_MAP.
  // This helps break apart concatenated PascalCase words.
  // Ex: "MyComponentName" -> "My Component Name"
  // Ex: "FRGTool" -> "FRG Tool" (if FRG wasn't explicitly handled earlier)
  processedText = processedText.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

  // 3. General text processing pipeline
  processedText = processedText
    // Replace defined special characters with their word equivalents, padded with spaces.
    .replace(specialCharRegex, (char) => ` ${CHAR_TO_WORD_MAP[char]} `)
    // Normalize multiple spaces to a single space.
    .replace(/\s+/g, ' ')
    // Remove any remaining characters that are not alphanumeric or spaces.
    .replace(/[^a-zA-Z0-9\s]/g, ' ')
    // Handle number-letter combinations by adding a space between them.
    .replace(/(\d)([a-zA-Z])/g, '$1 $2')
    // Trim leading/trailing spaces.
    .trim();

  // Split the processed text into words, filter out empty strings, and convert to PascalCase.
  // The goal here is primarily to ensure the first letter is capitalized,
  // as many transformations already align with desired casing.
  const words = processedText
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word) => {
      // If the word is an acronym (like "FRG" or "CSS"), keep its original casing.
      // A simple heuristic: if it's all uppercase, assume it's an acronym.
      // This is crucial for "FRG" to remain "FRG".
      if (word === word.toUpperCase() && word.length > 1) {
        // Check length > 1 to avoid single letters like 'A' becoming 'A' and breaking 'An'
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

  // Join the words and append "Icon".
  return words.join('') + 'Icon';
}
