// For buttons, make sure to add the data-selector="true" property. See
// https://github.com/twbs/bootstrap/issues/15359
// https://stackoverflow.com/a/27237034

const initTooltips = () => {
  document.querySelectorAll('[data-toggle="tooltip"]')
    .forEach((el) => {
      const tt = $(el);
      tt.tooltip();
      tt.on('shown.bs.tooltip', () => {
        setTimeout(() => {
            tt.tooltip('hide');
          },
          1000);
      });
    });
}

if(document.readyState === 'loading') {
  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', initTooltips);
} else {
  // `DOMContentLoaded` has already fired
  initTooltips();
}
