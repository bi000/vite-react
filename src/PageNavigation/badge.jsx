import { useEffect } from 'react';

const IASBadge = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www-cdn.icef.com/scripts/iasbadgeid.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      // Optional: Remove script and badge on unmount
      script.remove();
    };
  }, []);

  return <span id="iasBadge" data-account-id="6599"></span>;
};

export default IASBadge;
