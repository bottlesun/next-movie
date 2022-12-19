const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};


export const theme = {
  mobile: `@media screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `@media screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `@media screen and (max-width: ${deviceSizes.laptop})`,
};
