const NLE_CHOPPA = 775832647;
const FAYGO = 754563502;
const PARTY_GIRL = 689218417;
const JUICE_WORLD = 805856467;
const SIX_NINE = 815074948;
const FUTURE = 819894787;
const LIL_BABY = 805851367;
const FIRST_DESPAIR_THEN_HOPE = 826727410;
const FIRST_DESPAIR_THEN_HOPE_BASS = 826748818;
const BEATBOX = 826761601;
const BEATBOX_2 = 826765663;

export const database = {
  [NLE_CHOPPA]: { from: null },
  [FAYGO]: { from: NLE_CHOPPA },
  [SIX_NINE]: { from: NLE_CHOPPA },
  [PARTY_GIRL]: { from: SIX_NINE },
  [FUTURE]: { from: SIX_NINE },
  [LIL_BABY]: { from: FAYGO },
  [JUICE_WORLD]: { from: LIL_BABY },

  [FIRST_DESPAIR_THEN_HOPE]: { from: null },
  [FIRST_DESPAIR_THEN_HOPE_BASS]: { from: FIRST_DESPAIR_THEN_HOPE },

  [BEATBOX]: { from: null },
  [BEATBOX_2]: { from: BEATBOX },
};
