"use strict";
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
require("zone.js/dist/zone"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9seWZpbGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSDs7R0FFRztBQUVILCtFQUErRTtBQUMvRSxvRUFBb0U7QUFFcEU7Ozs7R0FJRztBQUNILDhFQUE4RTtBQUU5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUVIOztHQUVHO0FBQ0gsNkJBQTJCLENBQUUsNkJBQTZCO0FBRzFEOztHQUVHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgYW5kIGlzIGxvYWRlZCBiZWZvcmUgdGhlIGFwcC5cclxuICogWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cclxuICpcclxuICogVGhpcyBmaWxlIGlzIGRpdmlkZWQgaW50byAyIHNlY3Rpb25zOlxyXG4gKiAgIDEuIEJyb3dzZXIgcG9seWZpbGxzLiBUaGVzZSBhcmUgYXBwbGllZCBiZWZvcmUgbG9hZGluZyBab25lSlMgYW5kIGFyZSBzb3J0ZWQgYnkgYnJvd3NlcnMuXHJcbiAqICAgMi4gQXBwbGljYXRpb24gaW1wb3J0cy4gRmlsZXMgaW1wb3J0ZWQgYWZ0ZXIgWm9uZUpTIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBiZWZvcmUgeW91ciBtYWluXHJcbiAqICAgICAgZmlsZS5cclxuICpcclxuICogVGhlIGN1cnJlbnQgc2V0dXAgaXMgZm9yIHNvLWNhbGxlZCBcImV2ZXJncmVlblwiIGJyb3dzZXJzOyB0aGUgbGFzdCB2ZXJzaW9ucyBvZiBicm93c2VycyB0aGF0XHJcbiAqIGF1dG9tYXRpY2FsbHkgdXBkYXRlIHRoZW1zZWx2ZXMuIFRoaXMgaW5jbHVkZXMgU2FmYXJpID49IDEwLCBDaHJvbWUgPj0gNTUgKGluY2x1ZGluZyBPcGVyYSksXHJcbiAqIEVkZ2UgPj0gMTMgb24gdGhlIGRlc2t0b3AsIGFuZCBpT1MgMTAgYW5kIENocm9tZSBvbiBtb2JpbGUuXHJcbiAqXHJcbiAqIExlYXJuIG1vcmUgaW4gaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Jyb3dzZXItc3VwcG9ydFxyXG4gKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQlJPV1NFUiBQT0xZRklMTFNcclxuICovXHJcblxyXG4vKiogSUUxMCBhbmQgSUUxMSByZXF1aXJlcyB0aGUgZm9sbG93aW5nIGZvciBOZ0NsYXNzIHN1cHBvcnQgb24gU1ZHIGVsZW1lbnRzICovXHJcbi8vIGltcG9ydCAnY2xhc3NsaXN0LmpzJzsgIC8vIFJ1biBgbnBtIGluc3RhbGwgLS1zYXZlIGNsYXNzbGlzdC5qc2AuXHJcblxyXG4vKipcclxuICogV2ViIEFuaW1hdGlvbnMgYEBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc2BcclxuICogT25seSByZXF1aXJlZCBpZiBBbmltYXRpb25CdWlsZGVyIGlzIHVzZWQgd2l0aGluIHRoZSBhcHBsaWNhdGlvbiBhbmQgdXNpbmcgSUUvRWRnZSBvciBTYWZhcmkuXHJcbiAqIFN0YW5kYXJkIGFuaW1hdGlvbiBzdXBwb3J0IGluIEFuZ3VsYXIgRE9FUyBOT1QgcmVxdWlyZSBhbnkgcG9seWZpbGxzIChhcyBvZiBBbmd1bGFyIDYuMCkuXHJcbiAqL1xyXG4vLyBpbXBvcnQgJ3dlYi1hbmltYXRpb25zLWpzJzsgIC8vIFJ1biBgbnBtIGluc3RhbGwgLS1zYXZlIHdlYi1hbmltYXRpb25zLWpzYC5cclxuXHJcbi8qKlxyXG4gKiBCeSBkZWZhdWx0LCB6b25lLmpzIHdpbGwgcGF0Y2ggYWxsIHBvc3NpYmxlIG1hY3JvVGFzayBhbmQgRG9tRXZlbnRzXHJcbiAqIHVzZXIgY2FuIGRpc2FibGUgcGFydHMgb2YgbWFjcm9UYXNrL0RvbUV2ZW50cyBwYXRjaCBieSBzZXR0aW5nIGZvbGxvd2luZyBmbGFnc1xyXG4gKiBiZWNhdXNlIHRob3NlIGZsYWdzIG5lZWQgdG8gYmUgc2V0IGJlZm9yZSBgem9uZS5qc2AgYmVpbmcgbG9hZGVkLCBhbmQgd2VicGFja1xyXG4gKiB3aWxsIHB1dCBpbXBvcnQgaW4gdGhlIHRvcCBvZiBidW5kbGUsIHNvIHVzZXIgbmVlZCB0byBjcmVhdGUgYSBzZXBhcmF0ZSBmaWxlXHJcbiAqIGluIHRoaXMgZGlyZWN0b3J5IChmb3IgZXhhbXBsZTogem9uZS1mbGFncy50cyksIGFuZCBwdXQgdGhlIGZvbGxvd2luZyBmbGFnc1xyXG4gKiBpbnRvIHRoYXQgZmlsZSwgYW5kIHRoZW4gYWRkIHRoZSBmb2xsb3dpbmcgY29kZSBiZWZvcmUgaW1wb3J0aW5nIHpvbmUuanMuXHJcbiAqIGltcG9ydCAnLi96b25lLWZsYWdzLnRzJztcclxuICpcclxuICogVGhlIGZsYWdzIGFsbG93ZWQgaW4gem9uZS1mbGFncy50cyBhcmUgbGlzdGVkIGhlcmUuXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZmxhZ3Mgd2lsbCB3b3JrIGZvciBhbGwgYnJvd3NlcnMuXHJcbiAqXHJcbiAqICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZGlzYWJsZV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0cnVlOyAvLyBkaXNhYmxlIHBhdGNoIHJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gKiAod2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfb25fcHJvcGVydHkgPSB0cnVlOyAvLyBkaXNhYmxlIHBhdGNoIG9uUHJvcGVydHkgc3VjaCBhcyBvbmNsaWNrXHJcbiAqICh3aW5kb3cgYXMgYW55KS5fX3pvbmVfc3ltYm9sX19CTEFDS19MSVNURURfRVZFTlRTID0gWydzY3JvbGwnLCAnbW91c2Vtb3ZlJ107IC8vIGRpc2FibGUgcGF0Y2ggc3BlY2lmaWVkIGV2ZW50TmFtZXNcclxuICpcclxuICogIGluIElFL0VkZ2UgZGV2ZWxvcGVyIHRvb2xzLCB0aGUgYWRkRXZlbnRMaXN0ZW5lciB3aWxsIGFsc28gYmUgd3JhcHBlZCBieSB6b25lLmpzXHJcbiAqICB3aXRoIHRoZSBmb2xsb3dpbmcgZmxhZywgaXQgd2lsbCBieXBhc3MgYHpvbmUuanNgIHBhdGNoIGZvciBJRS9FZGdlXHJcbiAqXHJcbiAqICAod2luZG93IGFzIGFueSkuX19ab25lX2VuYWJsZV9jcm9zc19jb250ZXh0X2NoZWNrID0gdHJ1ZTtcclxuICpcclxuICovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFpvbmUgSlMgaXMgcmVxdWlyZWQgYnkgZGVmYXVsdCBmb3IgQW5ndWxhciBpdHNlbGYuXHJcbiAqL1xyXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBBUFBMSUNBVElPTiBJTVBPUlRTXHJcbiAqL1xyXG4iXX0=