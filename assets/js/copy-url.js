/**
 * @param {Event} e
 */
const copyUrl = (e) => {
  const url = (e.target.value == null) ? document.location.href : e.target.value;

  navigator.clipboard.writeText(url).then(
    () => {
      console.log('Copied to clipboard!');
    },
    () => {
      console.warn('Copy to clipboard error!');
    }
  );
}
