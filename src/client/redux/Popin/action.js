export const SHOW_POPIN = 'SHOW_POPIN';
export const HIDE_POPIN = 'HIDE_POPIN';

export const showPopin = popinType => {
  window.scrollTo(0, 0);

  return {
    type: SHOW_POPIN,
    popinType
  };
};

export const hidePopin = () => ({
  type: HIDE_POPIN
});
