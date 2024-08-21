const socialIcons = {
  Github: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
    ></path>
  </svg>`,
  Facebook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
    ></path>
  </svg>`,
  Instagram: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="4"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
  </svg>`,
  LinkedIn: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <line x1="8" y1="11" x2="8" y2="16"></line>
    <line x1="8" y1="8" x2="8" y2="8.01"></line>
    <line x1="12" y1="16" x2="12" y2="11"></line>
    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
  </svg>`,
  Mail: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>`,
  Twitter: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </svg>`,
  Twitch: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>`,
  YouTube: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>`,
  WhatsApp: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
    </svg>`,
  Snapchat: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118zm-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118"></path>
    </svg>`,
  Pinterest: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="8" y1="20" x2="12" y2="11"></line>
      <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
      <circle cx="12" cy="12" r="9"></circle>
    </svg>`,
  TikTok: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    </svg>`,
  CodePen: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
      <line x1="3" y1="9" x2="3" y2="15"></line>
      <line x1="21" y1="9" x2="21" y2="15"></line>
      <line x1="12" y1="3" x2="12" y2="9"></line>
      <line x1="12" y1="15" x2="12" y2="21"></line>
    </svg>`,
  Discord: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="9" cy="12" r="1"></circle>
      <circle cx="15" cy="12" r="1"></circle>
      <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
      <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
      <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
      <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
    </svg>`,
  GitLab: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z"></path>
    </svg>`,
  Reddit: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"></path>
      <path d="M12 8l1 -5l6 1"></path>
      <circle cx="19" cy="4" r="1"></circle>
      <circle cx="9" cy="13" r=".5" fill="currentColor"></circle>
      <circle cx="15" cy="13" r=".5" fill="currentColor"></circle>
      <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"></path>
    </svg>`,
  Skype: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1 -5.953 5.953a9 9 0 0 1 -11.253 -11.253a4.5 4.5 0 0 1 5.953 -5.954a8.987 8.987 0 0 1 2.65 -.396z"></path>
      <path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4 -1.187 4 -2.5c0 -1.503 -1.927 -2.5 -4 -2.5s-4 -.997 -4 -2.5c0 -1.313 1.095 -2.5 4 -2.5c1.642 0 3.5 .5 4 2.5"></path>
    </svg>`,
  Steam: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z"></path>
      <circle fill="currentColor" cx="16.5" cy="9.5" r="1"></circle>
    </svg>`,
  Telegram: `<svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon-tabler"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
      </svg>`,
  Mastodon: `<svg class="icon-tabler" viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <path fill="currentColor"
  d="M499 112q-93 1 -166 11q-81 11 -128 33l-14 8q-16 10 -32 25q-22 21 -38 47q-21 33 -32 73q-14 47 -14 103v37q0 77 1 119q3 113 18 188q19 95 62 154q50 67 134 89q109 29 210 24q46 -3 88 -12q30 -7 55 -17l19 -8l-4 -75l-22 6q-28 6 -57 10q-41 6 -78 4q-53 -1 -80 -7
  q-43 -8 -67 -30q-29 -25 -35 -72q-2 -14 -2 -29l25 6q31 6 65 10q48 7 93 9q42 2 92 -2q32 -2 88 -9t107 -30q49 -23 81.5 -54.5t38.5 -63.5q9 -45 13 -109q4 -46 5 -97v-41q0 -56 -14 -103q-11 -40 -32 -73q-16 -26 -38 -47q-15 -15 -32 -25q-12 -8 -14 -8
  q-46 -22 -127 -33q-74 -10 -166 -11h-3zM367 267q73 0 109 56l24 39l24 -39q36 -56 109 -56q63 0 101 43t38 117v239h-95v-232q0 -74 -61 -74q-69 0 -69 88v127h-94v-127q0 -88 -69 -88q-61 0 -61 74v232h-95v-239q0 -74 38 -117t101 -43z" />
  </svg>`,
  BuyMeACoffee: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="100 0 450 450" style="enable-background:new 0 0 450 450;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFF;}
</style>
<path class="st0" d="M390.1,137.3l-0.2-0.1l-0.5-0.2C389.5,137.2,389.8,137.3,390.1,137.3z"/>
<path class="st0" d="M393.4,160.9l-0.3,0.1L393.4,160.9z"/>
<path class="st0" d="M390.1,137.2C390.1,137.2,390.1,137.2,390.1,137.2C390,137.2,390,137.2,390.1,137.2  C390.1,137.2,390.1,137.2,390.1,137.2z"/>
<path class="st0" d="M393.1,160.7l0.4-0.2l0.1-0.1l0.1-0.1C393.5,160.4,393.3,160.6,393.1,160.7z"/>
<path class="st0" d="M390.7,137.8l-0.4-0.4l-0.3-0.1C390.2,137.5,390.4,137.7,390.7,137.8z"/>
<path class="st0" d="M297,366.2c-0.3,0.1-0.6,0.3-0.8,0.6l0.2-0.2C296.7,366.4,296.9,366.3,297,366.2z"/>
<path class="st0" d="M351.5,355.4c0-0.3-0.2-0.3-0.1,0.9c0-0.1,0-0.2,0.1-0.3C351.4,355.9,351.4,355.7,351.5,355.4z"/>
<path class="st0" d="M345.8,366.2c-0.3,0.1-0.6,0.3-0.8,0.6l0.2-0.2C345.5,366.4,345.7,366.3,345.8,366.2z"/>
<path class="st0" d="M258.7,368.7c-0.2-0.2-0.5-0.3-0.8-0.4c0.2,0.1,0.5,0.2,0.6,0.3L258.7,368.7z"/>
<path class="st0" d="M250.2,360.5c0-0.3-0.1-0.7-0.3-1C250,359.8,250.1,360.1,250.2,360.5L250.2,360.5z"/>
<path class="st0" d="M206.5,160.2l0.2,0.2l0.1,0.1C206.8,160.3,206.7,160.2,206.5,160.2z"/>
<path class="st0" d="M412.8,148.7l-1.8-9.1c-1.6-8.2-5.3-16-13.7-18.9c-2.7-0.9-5.8-1.4-7.8-3.3c-2.1-2-2.7-5-3.2-7.8  c-0.9-5.2-1.7-10.4-2.6-15.6c-0.8-4.5-1.4-9.5-3.4-13.5c-2.7-5.5-8.2-8.7-13.7-10.8c-2.8-1-5.7-1.9-8.6-2.7  c-13.7-3.6-28.1-4.9-42.2-5.7c-16.9-0.9-33.9-0.7-50.8,0.8c-12.6,1.1-25.8,2.5-37.7,6.9c-4.4,1.6-8.9,3.5-12.2,6.9  c-4.1,4.1-5.4,10.6-2.4,15.7c2.1,3.7,5.7,6.3,9.5,8c4.9,2.2,10.1,3.9,15.4,5c14.8,3.3,30,4.5,45.1,5.1c16.7,0.7,33.4,0.1,50.1-1.6  c4.1-0.5,8.2-1,12.3-1.6c4.8-0.7,7.9-7.1,6.5-11.4c-1.7-5.3-6.3-7.3-11.4-6.5c-0.8,0.1-1.5,0.2-2.3,0.3l-0.5,0.1  c-1.8,0.2-3.5,0.4-5.3,0.6c-3.6,0.4-7.2,0.7-10.9,1c-8.1,0.6-16.3,0.8-24.5,0.8c-8,0-16-0.2-24-0.8c-3.7-0.2-7.3-0.5-10.9-0.9  c-1.7-0.2-3.3-0.4-4.9-0.6l-1.6-0.2l-0.3,0l-1.6-0.2c-3.3-0.5-6.6-1.1-9.9-1.8c-0.3-0.1-0.6-0.3-0.8-0.5s-0.3-0.6-0.3-0.9  c0-0.3,0.1-0.7,0.3-0.9s0.5-0.4,0.8-0.5h0.1c2.8-0.6,5.7-1.1,8.6-1.6c1-0.2,1.9-0.3,2.9-0.4h0c1.8-0.1,3.6-0.4,5.4-0.7  c15.6-1.6,31.3-2.2,47-1.7c7.6,0.2,15.2,0.7,22.8,1.4c1.6,0.2,3.3,0.3,4.9,0.5c0.6,0.1,1.2,0.2,1.9,0.2l1.3,0.2  c3.7,0.5,7.3,1.2,11,2c5.4,1.2,12.3,1.6,14.7,7.4c0.8,1.9,1.1,3.9,1.5,5.9l0.5,2.5c0,0,0,0.1,0,0.1c1.3,5.9,2.5,11.8,3.8,17.7  c0.1,0.4,0.1,0.9,0,1.3c-0.1,0.4-0.3,0.9-0.5,1.2c-0.3,0.4-0.6,0.7-1,0.9c-0.4,0.2-0.8,0.4-1.2,0.4h0l-0.8,0.1l-0.8,0.1  c-2.4,0.3-4.9,0.6-7.3,0.9c-4.8,0.5-9.6,1-14.4,1.4c-9.6,0.8-19.1,1.3-28.7,1.6c-4.9,0.1-9.8,0.2-14.7,0.2  c-19.5,0-38.9-1.1-58.2-3.4c-2.1-0.2-4.2-0.5-6.3-0.8c1.6,0.2-1.2-0.2-1.7-0.2c-1.3-0.2-2.7-0.4-4-0.6c-4.5-0.7-8.9-1.5-13.4-2.2  c-5.4-0.9-10.5-0.4-15.4,2.2c-4,2.2-7.2,5.5-9.3,9.6c-2.1,4.3-2.7,9.1-3.7,13.7c-0.9,4.7-2.4,9.7-1.8,14.5  c1.2,10.3,8.4,18.7,18.8,20.6c9.8,1.8,19.6,3.2,29.5,4.4c38.7,4.7,77.9,5.3,116.7,1.7c3.2-0.3,6.3-0.6,9.5-1c1-0.1,2,0,2.9,0.3  c0.9,0.3,1.8,0.9,2.5,1.6c0.7,0.7,1.2,1.5,1.6,2.5c0.3,0.9,0.5,1.9,0.4,2.9l-1,9.6c-2,19.3-4,38.6-5.9,58  c-2.1,20.3-4.1,40.6-6.2,60.9c-0.6,5.7-1.2,11.4-1.8,17.1c-0.6,5.6-0.6,11.4-1.7,17c-1.7,8.7-7.6,14.1-16.2,16.1  c-7.9,1.8-16,2.7-24.1,2.8c-9,0-18-0.3-27-0.3c-9.6,0.1-21.4-0.8-28.8-8c-6.5-6.3-7.4-16.1-8.3-24.6c-1.2-11.2-2.4-22.5-3.5-33.7  l-6.5-62.5l-4.2-40.5c-0.1-0.7-0.1-1.3-0.2-2c-0.5-4.8-3.9-9.5-9.3-9.3c-4.6,0.2-9.8,4.1-9.3,9.3l3.1,30l6.5,62  c1.8,17.6,3.7,35.2,5.5,52.9c0.4,3.4,0.7,6.8,1.1,10.1c2,18.5,16.1,28.4,33.6,31.2c10.2,1.6,20.6,2,31,2.1  c13.3,0.2,26.7,0.7,39.7-1.7c19.3-3.5,33.8-16.4,35.9-36.5c0.6-5.8,1.2-11.6,1.8-17.3c2-19.1,3.9-38.2,5.9-57.4l6.4-62.5l2.9-28.6  c0.1-1.4,0.7-2.8,1.7-3.8s2.2-1.8,3.6-2c5.5-1.1,10.8-2.9,14.7-7.1C413.8,166.2,415,157.5,412.8,148.7z M205,154.9  c0.1,0-0.1,0.7-0.1,1C204.8,155.4,204.8,154.9,205,154.9z M205.5,159c0,0,0.2,0.1,0.3,0.4C205.6,159.2,205.5,159,205.5,159  L205.5,159z M206,159.7C206.2,160.1,206.3,160.3,206,159.7L206,159.7z M207.1,160.6L207.1,160.6  C207.1,160.6,207.2,160.6,207.1,160.6C207.1,160.6,207.1,160.6,207.1,160.6L207.1,160.6z M392.5,159.3c-2,1.9-5,2.8-7.9,3.2  c-33.1,4.9-66.8,7.4-100.3,6.3c-24-0.8-47.7-3.5-71.5-6.8c-2.3-0.3-4.8-0.8-6.4-2.5c-3-3.2-1.5-9.7-0.7-13.7  c0.7-3.6,2.1-8.4,6.4-8.9c6.6-0.8,14.4,2,20.9,3c7.9,1.2,15.9,2.2,23.8,2.9c34,3.1,68.7,2.6,102.5-1.9c6.2-0.8,12.3-1.8,18.5-2.9  c5.5-1,11.5-2.8,14.8,2.8c2.3,3.9,2.6,9,2.2,13.4C394.8,156.2,393.9,158,392.5,159.3L392.5,159.3z"/>
</svg>`
};

export default socialIcons;
