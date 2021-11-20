// media breakpoints

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileXL: '600px',
    tablet: '768px',
    laptopS: '1024px',
    laptopSM: '1280px',
    laptopM: '1336px',
    laptopL: `1440px`,
    desktopS: `1600px`,
    desktopM: `1680px`
}
export const device = {
    mobileS: `screen and  (max-width: ${size.mobileS})`,
    mobileM: `screen and (max-width: ${size.mobileM})`,
    mobileL: `screen and (max-width: ${size.mobileL})`,
    mobileXL: `screen and (max-width: ${size.mobileXL})`,
    tablet: `screen and (max-width: ${size.tablet})`,
    laptopS: `screen and (max-width: ${size.laptopS})`,
    laptopSM: `screen and (max-width: ${size.laptopSM})`,
    laptopM: `screen and (max-width: ${size.laptopM})`,
    laptopL: `screen and (max-width: ${size.laptopL})`,
    desktopS: `screen and (max-width: ${size.desktopS})`,
    desktopM: `screen and (max-width: ${size.desktopM})`,
};
export const onlyOnDesktop = `screen and (min-width: 769px)`