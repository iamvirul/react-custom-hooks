import { useState, useEffect } from 'react';

const useClipboard = () => {
  const [clipboard, setClipboard] = useState('');
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      event.clipboardData.setData('text/plain', clipboard);
      event.preventDefault();
    };

    document.addEventListener('copy', handler);

    setIsSupported(document.queryCommandSupported('copy'));

    return () => {
      document.removeEventListener('copy', handler);
    };
  }, [clipboard]);

  const copyToClipboard = (text) => {
    setClipboard(text);
    if (isSupported) {
      document.execCommand('copy');
    } else {
      console.error('Copy to clipboard is not supported.');
    }
  };

  return { copyToClipboard, clipboard };
};

export default useClipboard;
