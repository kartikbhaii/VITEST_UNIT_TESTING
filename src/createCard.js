export function createCard({ suits, values }) {
  if (!Array.isArray(suits) || !Array.isArray(values)) {
    throw new TypeError("suits and values must be arrays");
  }
  if (suits.length !== 4 || values.length !== 13) {
    throw new RangeError(
      "suits and values must be standard lengths (4 and 13)",
    );
  }

  let card = [];

  for (const suit of suits) {
    for (const value of values) {
      card.push(`${value} of ${suit}`);
    }
  }

  return card;
}
