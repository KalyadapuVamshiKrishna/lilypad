export const COLORS = {
  primary: "#8B5CF6",
  accent: "#DB2777",
  dark: "#0F172A",
  surface: "#F8FAFC",
} as const;

export const FONTS = {
  serif: "Playfair Display",
  sans: "Manrope",
} as const;

export type ColorToken = keyof typeof COLORS;
export type FontToken = keyof typeof FONTS;

