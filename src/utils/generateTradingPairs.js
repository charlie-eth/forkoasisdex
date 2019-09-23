import {
  TOKEN_DAI,
  TOKEN_DIGIX,
  TOKEN_MAKER,
  TOKEN_RHOC,
  TOKEN_RPL,
  TOKEN_WRAPPED_ETH,
} from "../constants";

export const generateTradingPairs = () => {
  return [
    {
      base: TOKEN_WRAPPED_ETH,
      quote: TOKEN_DAI,
      priority: 9,
      isDefault: true
    },
    {
      base: TOKEN_MAKER,
      quote: TOKEN_DAI,
      isDefault: true
    },
    {
      base: TOKEN_MAKER,
      quote: TOKEN_WRAPPED_ETH,
      isDefault: true
    },
    {
      base: TOKEN_RPL,
      quote: TOKEN_WRAPPED_ETH,
      isDefault: true

    }
  ];
};
