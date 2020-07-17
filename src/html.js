/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {/* VK */}
        <script
          async="true"
          type="text/javascript"
          src="https://vk.com/js/api/openapi.js?168"
        />
        <script
          defer="true"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `VK.init({apiId: 7059586, onlyWidgets: true});`,
          }}
        />
        {/* Yandex Metrika */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(54322950, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<div><img src="https://mc.yandex.ru/watch/54322950" style="position:absolute; left:-9999px;" alt="" /></div>`,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {/* VK */}
        <div id="vk_comments" />
        <script
          defer="true"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});`,
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
