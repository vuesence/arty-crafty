/**
 * Transforms a string into a URL-friendly slug.
 *
 * @param input - The input string to be transformed.
 * @returns The URL-friendly slug string.
 */
export function slug(input: string): string {
  const cyrillicMap: { [key: string]: string } = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "sht",
    ъ: "a",
    ы: "i",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };

  const replaceCyrillic = (char: string) => cyrillicMap[char] || char;
  return input.toLowerCase()
    .split("")
    .map(replaceCyrillic)
    .join("")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}
