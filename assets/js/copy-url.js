const copyUrl = () => {
  const url = document.location.href;

  navigator.clipboard.writeText(url).then(
    () => {
      console.log('Copied to clipboard!');
    },
    () => {
      console.log('Copy to clipboard error!');
    }
  );
}
