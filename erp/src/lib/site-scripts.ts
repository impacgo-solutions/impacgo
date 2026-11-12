/*
 * Google Analytics (G-Z9G4KKW4FM) and the tawk.to chat widget — the exact
 * deferred loader from the main site's index.html, so the ERP section is
 * tracked and has chat like the rest of www.impacgo.com. Both load once the
 * page is idle (4s after load) or on first interaction, so they never block
 * first render. GA4's enhanced measurement picks up client-side navigations.
 * Keep in sync with the main site's index.html if either ID changes.
 */
export const SITE_SCRIPTS = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Z9G4KKW4FM');

function loadDeferredScripts() {
  var gtm = document.createElement('script');
  gtm.async = true;
  gtm.src = 'https://www.googletagmanager.com/gtag/js?id=G-Z9G4KKW4FM';
  document.head.appendChild(gtm);

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();
  var tawk = document.createElement('script');
  tawk.async = true;
  tawk.src = 'https://embed.tawk.to/6a13d5bc83cf321c3962e34c/1jpenlr2g';
  tawk.charset = 'UTF-8';
  tawk.setAttribute('crossorigin', '*');
  document.body.appendChild(tawk);
}

var deferredScriptsLoaded = false;
var deferredFallbackTimer;
var deferredInteractionEvents = ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'];
function triggerDeferredLoad() {
  if (deferredScriptsLoaded) return;
  deferredScriptsLoaded = true;
  clearTimeout(deferredFallbackTimer);
  deferredInteractionEvents.forEach(function (evt) {
    window.removeEventListener(evt, triggerDeferredLoad);
  });
  loadDeferredScripts();
}
window.addEventListener('load', function () {
  deferredFallbackTimer = setTimeout(triggerDeferredLoad, 4000);
  deferredInteractionEvents.forEach(function (evt) {
    window.addEventListener(evt, triggerDeferredLoad, { once: true, passive: true });
  });
});
`;
