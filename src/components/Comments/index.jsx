import React, { useEffect, useRef } from 'react';

const Comments = () => {
  const container = useRef(null);
  useEffect(() => {
    const loadScript = document.createElement('script');
    loadScript.src = 'https://vk.com/js/api/openapi.js?168';
    loadScript.async = true;
    loadScript.onload = () => {
      window.VK.init({ apiId: 7059586, onlyWidgets: true });
      window.VK.Widgets.Comments('vk_comments', { limit: 10, attach: '*' });
    };
    container.current.appendChild(loadScript);
  }, []);
  return (
    <div ref={container}>
      <div id="vk_comments" />
    </div>
  );
};

export default Comments;
