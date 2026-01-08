import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const pixelId = process.env.NEXT_PUBLIC_SNAP_PIXEL_ID;

  // PAGE_VIEW on every client-side route change (important in Next.js)
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined" && window.snaptr) {
        window.snaptr("track", "PAGE_VIEW");
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  const content = Component.noLayout ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  return (
    <>
      {pixelId ? (
        <Script id="snap-pixel" strategy="afterInteractive">{`
          (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
          {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
          a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
          r.src=n;var u=t.getElementsByTagName(s)[0];
          u.parentNode.insertBefore(r,u);})(window,document,'https://sc-static.net/scevent.min.js');

          snaptr('init', '${pixelId}');
          snaptr('track', 'PAGE_VIEW');
        `}</Script>
      ) : null}

      {content}
    </>
  );
};

export default MyApp;
