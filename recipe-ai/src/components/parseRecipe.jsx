import "./parseRecipe.css";

// Helper to clean markdown bold tags
export function cleanMarkdown(text) {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

// Check for decoration lines (like "====" or "----")
function isDecorationLine(line) {
  return /^[-=]{3,}$/.test(line.trim());
}

// Remove bullets or number prefixes from each line
function cleanLine(line) {
  return line
    .replace(/^(\d+\.\s*|\d+\)\s*|[-*+]+\s*)/, "") // removes "1.", "2)", "* ", etc.
    .trim();
}

// Parse a section (Ingredients, Steps, Tips)
function parseSection(section) {
  return section
    .split("\n")
    .slice(1) // Skip the "###" heading line
    .map(cleanLine)
    .filter((line) => line && !isDecorationLine(line));
}

// Clean title and remove decoration lines
function cleanTitle(rawTitle) {
  return rawTitle
    .split("\n")
    .filter((line) => !isDecorationLine(line))
    .join(" ")
    .replace(/\*\*/g, "")
    .trim();
}

// Main recipe parser
export default function parseRecipe(recipe) {
  if (!recipe) return { title: "", recipeIngredients: [], steps: [], tips: [] };

  const sections = recipe
    .split(/###/)
    .map((s) => s.trim())
    .filter(Boolean);

  const rawTitle = sections[0] || "";
  const recipeIngredients = sections.find((s) =>
    s.toLowerCase().startsWith("ingredients")
  );
  const steps = sections.find((s) => s.toLowerCase().startsWith("steps"));
  const tips = sections.find((s) => s.toLowerCase().startsWith("tips"));

  return {
    title: cleanTitle(rawTitle),
    recipeIngredients: recipeIngredients ? parseSection(recipeIngredients) : [],
    steps: steps ? parseSection(steps) : [],
    tips: tips ? parseSection(tips) : [],
  };
}
