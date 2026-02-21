export const CARD_SLOT_IDS = [
  'ratings-summary',
  'factor-grades',
  'quant-ranking',
] as const;

export type CardSlotId = (typeof CARD_SLOT_IDS)[number];

export const isSlotVisible = (
  slotId: CardSlotId,
  isPremium: boolean,
): boolean => {
  return isPremium || slotId === 'quant-ranking';
};
