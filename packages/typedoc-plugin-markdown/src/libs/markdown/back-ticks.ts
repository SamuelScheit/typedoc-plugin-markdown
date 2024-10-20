/**
 * Wraps a string in backticks.
 * If the input string itself contains a backtick, pipe, or backslash (which can result in unwanted side effects) the string is escaped instead.
 */

import { unescapeChars } from '../utils';

const markdownLink = /\[([^\]]+)\]\(([^)]+)\)/g;

export function backTicks(text: string) {
  text = unescapeChars(text);
  const match = Array.from(text.matchAll(markdownLink));
  if (match.length) {
    let newString = '';
    let previousIndex = 0;

    for (const m of match) {
      const [, linkText, link] = m;
      let newLink = `[\`${linkText}\`](${link})`;
      if (text[previousIndex + m.index] !== '`' && m.index !== 0) {
        newLink = `\`${newLink}`;
      }

      if (
        text[previousIndex + m.index + m[0].length] !== '`' &&
        m.index + m[0].length < text.length - 1
      ) {
        newLink = `${newLink}\``;
      }

      newString += text.slice(previousIndex, m.index) + newLink;

      previousIndex = m.index + m[0].length;
    }
    const firstMatch = match[0]!;
    const lastMatch = match[match.length - 1]!;
    newString += text.slice(lastMatch.index + lastMatch[0].length);

    if (firstMatch.index !== 0) {
      newString = `\`${newString}`;
    }
    if (lastMatch.index + lastMatch[0].length < text.length - 1) {
      newString = `${newString}\``;
    }

    return newString;
  }

  return `\`${text}\``;
}
