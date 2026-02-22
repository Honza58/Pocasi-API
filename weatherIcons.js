export const currentWeatherIcons = {
  0: {
    text: "Jasno",
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="a" x1="26.75" y1="22.91" x2="37.25" y2="41.09" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#fbbf24"/>
			<stop offset="0.45" stop-color="#fbbf24"/>
			<stop offset="1" stop-color="#f59e0b"/>
		</linearGradient>
	</defs>
	<circle cx="32" cy="32" r="10.5" stroke="#f8af18" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>
	<path d="M32,15.71V9.5m0,45V48.29M43.52,20.48l4.39-4.39M16.09,47.91l4.39-4.39m0-23-4.39-4.39M47.91,47.91l-4.39-4.39M15.71,32H9.5m45,0H48.29" fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
		<animateTransform attributeName="transform" dur="45s" values="0 32 32; 360 32 32" repeatCount="indefinite" type="rotate"/>
	</path>
</svg> `,
  },
  1: {
    text: "Převážně jasno",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<defs>
		<clipPath id="a">
			<rect y="7.5" width="64" height="32" fill="none"/>
		</clipPath>

		<!-- Slunce gradient -->
		<linearGradient id="b" x1="26.75" y1="29.91" x2="37.25" y2="48.09" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#fbbf24"/>
			<stop offset="0.45" stop-color="#fbbf24"/>
			<stop offset="1" stop-color="#f59e0b"/>
		</linearGradient>

		<!-- Mrak gradient -->
		<linearGradient id="c" x1="20" y1="42" x2="44" y2="42" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#ffffff"/>
			<stop offset="0.45" stop-color="#ffffff"/>
			<stop offset="1" stop-color="#ffffff"/>
		</linearGradient>
	</defs>

	<!-- Slunce -->
	<g clip-path="url(#a)">
		<circle cx="30" cy="30" r="10.5"
			stroke="#f8af18"
			stroke-miterlimit="10"
			stroke-width="0.5"
			fill="url(#b)"/>

		<path d="M30,14V8m0,44V46M42,18l4-4M14,46l4-4m0-24-4-4M46,46l-4-4M14,30H8m44,0H46"
			fill="none"
			stroke="#fbbf24"
			stroke-linecap="round"
			stroke-miterlimit="10"
			stroke-width="3">
			<animateTransform
				attributeName="transform"
				type="rotate"
				values="0 30 30; 360 30 30"
				dur="45s"
				repeatCount="indefinite"/>
		</path>
	</g>

	<!-- Malý mráček -->
	<g>
		<path d="M24 42
				 C22 42, 20 40, 20 38
				 C20 36, 22 34, 24 34
				 C25 31, 28 30, 30 32
				 C31 31, 33 31, 34 33
				 C36 33, 38 35, 38 37
				 C38 40, 36 42, 33 42 Z"
			fill="url(#c)">
			<animateTransform
				attributeName="transform"
				type="translate"
				values="-2 0; 2 0; -2 0"
				dur="6s"
				repeatCount="indefinite"/>
		</path>
	</g>
</svg> `,
  },
  2: {
    text: "Polojasno",
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="a" x1="16.5" y1="19.67" x2="21.5" y2="28.33" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#fbbf24" />
              <stop offset="0.45" stop-color="#fbbf24" />
              <stop offset="1" stop-color="#f59e0b" />
            </linearGradient>
            <linearGradient id="b" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#f3f7fe" />
              <stop offset="0.45" stop-color="#f3f7fe" />
              <stop offset="1" stop-color="#deeafb" />
            </linearGradient>
          </defs>
          <circle cx="19" cy="24" r="5" stroke="#f8af18" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)" />
          <path
            d="M19,15.67V12.5m0,23V32.33m5.89-14.22,2.24-2.24M10.87,32.13l2.24-2.24m0-11.78-2.24-2.24M27.13,32.13l-2.24-2.24M7.5,24h3.17M30.5,24H27.33"
            fill="none"
            stroke="#fbbf24"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
          >
            <animateTransform attributeName="transform" type="rotate" values="0 19 24; 360 19 24" dur="45s" repeatCount="indefinite" />
          </path>
          <path
            d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width="0.5"
            fill="url(#b)"
          />
        </svg> `,
  },
  3: {
    text: "Zataženo",
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <defs>
                  <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#f3f7fe" />
                    <stop offset="0.45" stop-color="#f3f7fe" />
                    <stop offset="1" stop-color="#deeafb" />
                  </linearGradient>
                </defs>
                <path
                  d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  stroke-width="0.5"
                  fill="url(#a)"
                >
                  <animateTransform attributeName="transform" type="translate" values="-3 0; 3 0; -3 0" dur="7s" repeatCount="indefinite" />
                </path>
              </svg> `,
  },
  45: {
    text: "Mlha",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="fog-a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset="0.45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>

    <linearGradient id="fog-b" x1="27.5" y1="50.21" x2="36.5" y2="65.79" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#d4d7dd"/>
      <stop offset="0.45" stop-color="#d4d7dd"/>
      <stop offset="1" stop-color="#bec1c6"/>
    </linearGradient>

    <linearGradient id="fog-c" y1="44.21" y2="59.79" xlink:href="#fog-b"/>
  </defs>

  <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
        stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#fog-a)"/>

  <line x1="17" y1="58" x2="47" y2="58" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" stroke="url(#fog-b)">
    <animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="0s" repeatCount="indefinite"/>
  </line>

  <line x1="17" y1="52" x2="47" y2="52" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" stroke="url(#fog-c)">
    <animateTransform attributeName="transform" type="translate" values="-4 0; 4 0; -4 0" dur="5s" begin="-4s" repeatCount="indefinite"/>
  </line>
</svg>`,
  },
  48: {
    text: "Mrznoucí mlha",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="fogGrad" x1="15.5" y1="44" x2="48.5" y2="44" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#e0f2fe"/>
			<stop offset="0.5" stop-color="#bae6fd"/>
			<stop offset="1" stop-color="#7dd3fc"/>
		</linearGradient>

		<linearGradient id="fogGrad2" x1="15.5" y1="51" x2="48.5" y2="51" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#dbeafe"/>
			<stop offset="0.5" stop-color="#bfdbfe"/>
			<stop offset="1" stop-color="#93c5fd"/>
		</linearGradient>

		<radialGradient id="iceParticle" cx="50%" cy="50%" r="50%">
			<stop offset="0" stop-color="#ffffff"/>
			<stop offset="1" stop-color="#93c5fd"/>
		</radialGradient>
	</defs>

	<!-- Horní mlha -->
	<line x1="17" y1="38" x2="47" y2="38"
		fill="none"
		stroke="url(#fogGrad)"
		stroke-linecap="round"
		stroke-width="3">
		<animateTransform
			attributeName="transform"
			type="translate"
			values="-3 0; 3 0; -3 0"
			dur="6s"
			repeatCount="indefinite"/>
	</line>

	<!-- Spodní mlha -->
	<line x1="17" y1="46" x2="47" y2="46"
		fill="none"
		stroke="url(#fogGrad2)"
		stroke-linecap="round"
		stroke-width="3">
		<animateTransform
			attributeName="transform"
			type="translate"
			values="3 0; -3 0; 3 0"
			dur="7s"
			repeatCount="indefinite"/>
	</line>

	<!-- Ledové částice -->
	<circle cx="24" cy="52" r="1.5" fill="url(#iceParticle)">
		<animate attributeName="cy" values="52;49;52" dur="4s" repeatCount="indefinite"/>
	</circle>

	<circle cx="32" cy="55" r="1.2" fill="url(#iceParticle)">
		<animate attributeName="cy" values="55;51;55" dur="5s" repeatCount="indefinite"/>
	</circle>

	<circle cx="40" cy="52" r="1.5" fill="url(#iceParticle)">
		<animate attributeName="cy" values="52;48;52" dur="4.5s" repeatCount="indefinite"/>
	</circle>
</svg>`,
  },
  51: {
    text: "Slabé mrholení",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#f3f7fe"/>
			<stop offset="0.45" stop-color="#f3f7fe"/>
			<stop offset="1" stop-color="#deeafb"/>
		</linearGradient>
		<linearGradient id="b" x1="23.31" y1="44.3" x2="24.69" y2="46.7" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#4286ee"/>
			<stop offset="0.45" stop-color="#4286ee"/>
			<stop offset="1" stop-color="#0950bc"/>
		</linearGradient>
		<linearGradient id="c" x1="30.31" y1="44.3" x2="31.69" y2="46.7" xlink:href="#b"/>
		<linearGradient id="d" x1="37.31" y1="44.3" x2="38.69" y2="46.7" xlink:href="#b"/>
    <linearGradient id="e" x1="44.31" y1="44.3" x2="45.69" y2="46.7" xlink:href="#b"/>
	</defs>
	<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>
	<line x1="24.08" y1="45.01" x2="23.92" y2="45.99" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#c)">
		<animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="1.5s" repeatCount="indefinite"/>
		<animate attributeName="opacity" values="0;1;1;0" dur="1.5s" repeatCount="indefinite"/>
	</line>
	<line x1="31.08" y1="45.01" x2="30.92" y2="45.99" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#d)">
		<animateTransform attributeName="transform" type="translate" begin="-0.5s" values="1 -5; -2 10" dur="1.5s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-0.5s" values="0;1;1;0" dur="1.5s" repeatCount="indefinite"/>
	</line>
	<line x1="38.08" y1="45.01" x2="37.92" y2="45.99" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#e)">
		<animateTransform attributeName="transform" type="translate" begin="-1s" values="1 -5; -2 10" dur="1.5s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-1s" values="0;1;1;0" dur="1.5s" repeatCount="indefinite"/>
	</line>
</svg>`,
  },
  53: {
    text: "Mírné mrholení",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#f3f7fe"/>
			<stop offset="0.45" stop-color="#f3f7fe"/>
			<stop offset="1" stop-color="#deeafb"/>
		</linearGradient>
	</defs>

	<!-- Mrak -->
	<path fill="url(#a)" d="M20 40h24a10 10 0 0 0 0-20 14 14 0 0 0-27-3A9 9 0 0 0 20 40z"/>

	<!-- Jemné mrholení -->
	<g stroke="#4286ee" stroke-width="0.9" stroke-linecap="round">

		<line x1="28" y1="40" x2="27.7" y2="41.9">
			<animate attributeName="x1" from="28" to="27" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="y1" from="40" to="52" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="x2" from="27.7" to="26.7" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="y2" from="41.9" to="53.9" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="1;0" dur="1.7s" repeatCount="indefinite"/>
		</line>

		<line x1="32" y1="40" x2="31.7" y2="41.9">
			<animate attributeName="x1" from="32" to="31" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="y1" from="40" to="52" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="x2" from="31.7" to="30.7" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="y2" from="41.9" to="53.9" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite"/>
		</line>

		<line x1="36" y1="40" x2="35.7" y2="41.9">
			<animate attributeName="x1" from="36" to="35" dur="1.8s" repeatCount="indefinite"/>
			<animate attributeName="y1" from="40" to="52" dur="1.8s" repeatCount="indefinite"/>
			<animate attributeName="x2" from="35.7" to="34.7" dur="1.8s" repeatCount="indefinite"/>
			<animate attributeName="y2" from="41.9" to="53.9" dur="1.8s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="1;0" dur="1.8s" repeatCount="indefinite"/>
		</line>

		<line x1="40" y1="40" x2="39.7" y2="41.9">
			<animate attributeName="x1" from="40" to="39" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="y1" from="40" to="52" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="x2" from="39.7" to="38.7" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="y2" from="41.9" to="53.9" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="1;0" dur="1.6s" repeatCount="indefinite"/>
		</line>

	</g>
</svg> `,
  },
  55: {
    text: "Husté mrholení",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#f3f7fe"/>
			<stop offset="0.45" stop-color="#f3f7fe"/>
			<stop offset="1" stop-color="#deeafb"/>
		</linearGradient>
	</defs>

	<!-- Mrak -->
	<path fill="url(#a)" d="M20 40h24a10 10 0 0 0 0-20 14 14 0 0 0-27-3A9 9 0 0 0 20 40z"/>

	<!-- Jemné mrholení -->
	<g stroke="#4286ee" stroke-width="0.9" stroke-linecap="round">

		<line x1="24" y1="40" x2="23.7" y2="41.9">
			<animate attributeName="x1" from="24" to="23" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="y1" from="40" to="52" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="x2" from="23.7" to="22.7" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="y2" from="41.9" to="53.9" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="1;0" dur="1.6s" repeatCount="indefinite"/>
		</line>

		<line x1="28" y1="40" x2="27.7" y2="41.9">
			<animate attributeName="x1" from="28" to="27" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="y1" from="40" to="52" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="x2" from="27.7" to="26.7" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="y2" from="41.9" to="53.9" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="1;0" dur="1.7s" repeatCount="indefinite"/>
		</line>

		<line x1="32" y1="40" x2="31.7" y2="41.9">
			<animate attributeName="x1" from="32" to="31" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="y1" from="40" to="52" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="x2" from="31.7" to="30.7" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="y2" from="41.9" to="53.9" dur="1.5s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="1;0" dur="1.5s" repeatCount="indefinite"/>
		</line>

		<line x1="36" y1="40" x2="35.7" y2="41.9">
			<animate attributeName="x1" from="36" to="35" dur="1.8s" repeatCount="indefinite"/>
			<animate attributeName="y1" from="40" to="52" dur="1.8s" repeatCount="indefinite"/>
			<animate attributeName="x2" from="35.7" to="34.7" dur="1.8s" repeatCount="indefinite"/>
			<animate attributeName="y2" from="41.9" to="53.9" dur="1.8s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="1;0" dur="1.8s" repeatCount="indefinite"/>
		</line>

		<line x1="40" y1="40" x2="39.7" y2="41.9">
			<animate attributeName="x1" from="40" to="39" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="y1" from="40" to="52" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="x2" from="39.7" to="38.7" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="y2" from="41.9" to="53.9" dur="1.6s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="1;0" dur="1.6s" repeatCount="indefinite"/>
		</line>

		<line x1="44" y1="40" x2="43.7" y2="41.9">
			<animate attributeName="x1" from="44" to="43" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="y1" from="40" to="52" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="x2" from="43.7" to="42.7" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="y2" from="41.9" to="53.9" dur="1.7s" repeatCount="indefinite"/>
			<animate attributeName="opacity" values="1;0" dur="1.7s" repeatCount="indefinite"/>
		</line>

	</g>
</svg> `,
  },

  56: {
    text: "Slabé mrznoucí mrholení",
    icon: `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <g>
    <ellipse cx="60" cy="55" rx="28" ry="18" fill="#DCE3EA"/>
    <ellipse cx="45" cy="50" rx="18" ry="14" fill="#DCE3EA"/>
    <ellipse cx="75" cy="50" rx="18" ry="14" fill="#DCE3EA"/>
  </g>

  <g fill="#7EC8E3">
    <circle cx="45" cy="80" r="2">
      <animate attributeName="cy" from="80" to="98" dur="1.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="65" cy="75" r="2">
      <animate attributeName="cy" from="75" to="95" dur="1.3s" repeatCount="indefinite"/>
    </circle>
  </g>

  <rect x="35" y="98" width="50" height="5" rx="2" fill="#BFE9FF">
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
  </rect>
</svg>`,
  },

  57: {
    text: "Silné mrznoucí mrholení",
    icon: `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <g>
    <ellipse cx="60" cy="55" rx="28" ry="18" fill="#DCE3EA"/>
    <ellipse cx="45" cy="50" rx="18" ry="14" fill="#DCE3EA"/>
    <ellipse cx="75" cy="50" rx="18" ry="14" fill="#DCE3EA"/>
  </g>

  <g fill="#7EC8E3">
    <circle cx="40" cy="75" r="2"><animate attributeName="cy" from="75" to="100" dur="1.2s" repeatCount="indefinite"/></circle>
    <circle cx="50" cy="80" r="2"><animate attributeName="cy" from="80" to="98" dur="1.4s" repeatCount="indefinite"/></circle>
    <circle cx="60" cy="75" r="2"><animate attributeName="cy" from="75" to="95" dur="1.3s" repeatCount="indefinite"/></circle>
    <circle cx="70" cy="82" r="2"><animate attributeName="cy" from="82" to="100" dur="1.5s" repeatCount="indefinite"/></circle>
  </g>

  <rect x="35" y="98" width="50" height="5" rx="2" fill="#BFE9FF">
    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
  </rect>
</svg>`,
  },
  61: {
    text: "Slabý déšť",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="rain-61-a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset="0.45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>

    <linearGradient id="rain-61-b" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4286ee"/>
      <stop offset="0.45" stop-color="#4286ee"/>
      <stop offset="1" stop-color="#0950bc"/>
    </linearGradient>

    <linearGradient id="rain-61-c" x1="29.53" y1="42.95" x2="32.47" y2="48.05" xlink:href="#rain-61-b"/>
    <linearGradient id="rain-61-d" x1="36.53" y1="42.95" x2="39.47" y2="48.05" xlink:href="#rain-61-b"/>
  </defs>

  <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z" stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#rain-61-a)"/>

  <line x1="24.39" y1="43.03" x2="23.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#rain-61-b)">
    <animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
  </line>

  <line x1="31.39" y1="43.03" x2="30.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#rain-61-c)">
    <animateTransform attributeName="transform" begin="-0.4s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
    <animate attributeName="opacity" begin="-0.4s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
  </line>

  <line x1="38.39" y1="43.03" x2="37.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#rain-61-d)">
    <animateTransform attributeName="transform" begin="-0.2s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
    <animate attributeName="opacity" begin="-0.2s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
  </line>
</svg> `,
  },
  63: {
    text: "Mírný déšť",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#f3f7fe"/>
			<stop offset="0.45" stop-color="#f3f7fe"/>
			<stop offset="1" stop-color="#deeafb"/>
		</linearGradient>
		<linearGradient id="b" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#4286ee"/>
			<stop offset="0.45" stop-color="#4286ee"/>
			<stop offset="1" stop-color="#0950bc"/>
		</linearGradient>
		<linearGradient id="c" x1="29.53" y1="42.95" x2="32.47" y2="48.05" xlink:href="#b"/>
		<linearGradient id="d" x1="36.53" y1="42.95" x2="39.47" y2="48.05" xlink:href="#b"/>
		<linearGradient id="e" x1="27.53" y1="42.95" x2="30.47" y2="48.05" xlink:href="#b"/>
	</defs>

	<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
		stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>

	<!-- LEVÁ KAPKA POSUNUTÁ VÍCE DOLEVA -->
	<line x1="21.39" y1="43.03" x2="20.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#b)">
		<animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>

	<line x1="27.39" y1="43.03" x2="26.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#e)">
		<animateTransform attributeName="transform" begin="-0.2s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-0.2s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>

	<line x1="31.39" y1="43.03" x2="30.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#c)">
		<animateTransform attributeName="transform" begin="-0.4s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-0.4s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>

	<line x1="38.39" y1="43.03" x2="37.61" y2="47.97" fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="url(#d)">
		<animateTransform attributeName="transform" begin="-0.2s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-0.2s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>

</svg>`,
  },
  65: {
    text: "Silný déšť",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
	<defs>
		<linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#f3f7fe"/>
			<stop offset="0.45" stop-color="#f3f7fe"/>
			<stop offset="1" stop-color="#deeafb"/>
		</linearGradient>

		<!-- Kapky -->
		<linearGradient id="b" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="#4286ee"/>
			<stop offset="0.45" stop-color="#4286ee"/>
			<stop offset="1" stop-color="#0950bc"/>
		</linearGradient>
		<linearGradient id="c" x1="29.53" y1="42.95" x2="32.47" y2="48.05" xlink:href="#b"/>
		<linearGradient id="d" x1="36.53" y1="42.95" x2="39.47" y2="48.05" xlink:href="#b"/>
		<linearGradient id="e" x1="17.53" y1="42.95" x2="20.47" y2="48.05" xlink:href="#b"/>
		<linearGradient id="f" x1="43.53" y1="42.95" x2="46.47" y2="48.05" xlink:href="#b"/>
	</defs>

	<!-- Mrak -->
	<path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
		stroke="#e6effc" stroke-miterlimit="10" stroke-width="0.5" fill="url(#a)"/>

	<!-- Kapky (5 ks) -->
	<line x1="20.39" y1="43.03" x2="19.61" y2="47.97" stroke="url(#e)" stroke-width="2" stroke-linecap="round">
		<animateTransform attributeName="transform" type="translate" values="1 -6; -2 12" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>

	<line x1="24.39" y1="43.03" x2="23.61" y2="47.97" stroke="url(#b)" stroke-width="2" stroke-linecap="round">
		<animateTransform attributeName="transform" begin="-0.3s" type="translate" values="1 -6; -2 12" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-0.3s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>

	<line x1="31.39" y1="43.03" x2="30.61" y2="47.97" stroke="url(#c)" stroke-width="2" stroke-linecap="round">
		<animateTransform attributeName="transform" begin="-0.5s" type="translate" values="1 -6; -2 12" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-0.5s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>

	<line x1="38.39" y1="43.03" x2="37.61" y2="47.97" stroke="url(#d)" stroke-width="2" stroke-linecap="round">
		<animateTransform attributeName="transform" begin="-0.2s" type="translate" values="1 -6; -2 12" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-0.2s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>

	<line x1="45.39" y1="43.03" x2="44.61" y2="47.97" stroke="url(#f)" stroke-width="2" stroke-linecap="round">
		<animateTransform attributeName="transform" begin="-0.4s" type="translate" values="1 -6; -2 12" dur="0.7s" repeatCount="indefinite"/>
		<animate attributeName="opacity" begin="-0.4s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
	</line>
</svg>`,
  },
  66: {
    text: "Slabý mrznoucí déšť",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="cloud" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>

    <linearGradient id="dropB" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4286ee"/>
      <stop offset="1" stop-color="#0950bc"/>
    </linearGradient>
    <linearGradient id="dropC" xlink:href="#dropB"/>
    <linearGradient id="dropD" xlink:href="#dropB"/>

    <linearGradient id="iceGrad" x1="20" y1="54" x2="46" y2="62" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#bfe9ff"/>
      <stop offset="1" stop-color="#6cc4ea"/>
    </linearGradient>
  </defs>

  <!-- CLOUD -->
  <path
    d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6A7.5,7.5,0,0,0,18,45.5h28a7,7,0,0,0,0-14Z"
    fill="url(#cloud)" stroke="#e6effc" stroke-width="0.5"
  />

  <g>

    <!-- DROP 1 -->
    <g transform="rotate(10 26 47)">
      <rect x="25.5" y="42" width="1" height="6" rx="0.5"
            stroke="url(#dropB)" stroke-width="1.6"
            stroke-linecap="round" fill="none">

        <animate attributeName="y"
                 values="42;52;56"
                 keyTimes="0;0.65;1"
                 dur="1.8s"
                 repeatCount="indefinite"/>

        <animate attributeName="height"
                 values="6;2;0"
                 keyTimes="0;0.65;1"
                 dur="1.8s"
                 repeatCount="indefinite"/>

        <animate attributeName="opacity"
                 values="1;1;0;0"
                 keyTimes="0;0.45;0.65;1"
                 dur="1.8s"
                 repeatCount="indefinite"
                 calcMode="spline"
                 keySplines="0 0 0.2 1; 0.4 0 0.6 1; 0 0 0.2 1"/>
      </rect>
    </g>

    <circle cx="25" cy="56" r="1.3"
            fill="url(#iceGrad)" opacity="0">
      <animate attributeName="cy"
               values="46;54;56"
               keyTimes="0;0.65;1"
               dur="1.8s"
               repeatCount="indefinite"/>
      <animate attributeName="opacity"
               values="0;0;1;1;0"
               keyTimes="0;0.45;0.65;0.90;1"
               dur="1.8s"
               repeatCount="indefinite"
               calcMode="spline"
               keySplines="0 0 0.2 1; 0.4 0 0.6 1; 0 0 0.2 1; 0.4 0 0.6 1"/>
    </circle>

    <!-- DROP 2 -->
    <g transform="rotate(10 32 47)">
      <rect x="31.5" y="42" width="1" height="6" rx="0.5"
            stroke="url(#dropC)" stroke-width="1.6"
            stroke-linecap="round" fill="none">

        <animate attributeName="y"
                 values="42;52;56"
                 keyTimes="0;0.65;1"
                 dur="2.0s"
                 begin="-0.25s"
                 repeatCount="indefinite"/>

        <animate attributeName="height"
                 values="6;2;0"
                 keyTimes="0;0.65;1"
                 dur="2.0s"
                 begin="-0.25s"
                 repeatCount="indefinite"/>

        <animate attributeName="opacity"
                 values="1;1;0;0"
                 keyTimes="0;0.45;0.65;1"
                 dur="2.0s"
                 begin="-0.25s"
                 repeatCount="indefinite"
                 calcMode="spline"
                 keySplines="0 0 0.2 1; 0.4 0 0.6 1; 0 0 0.2 1"/>
      </rect>
    </g>

    <circle cx="31" cy="56" r="1.3"
            fill="url(#iceGrad)" opacity="0">
      <animate attributeName="cy"
               values="46;54;56"
               keyTimes="0;0.65;1"
               dur="2.0s"
               begin="-0.25s"
               repeatCount="indefinite"/>
      <animate attributeName="opacity"
               values="0;0;1;1;0"
               keyTimes="0;0.45;0.65;0.90;1"
               dur="2.0s"
               begin="-0.25s"
               repeatCount="indefinite"
               calcMode="spline"
               keySplines="0 0 0.2 1; 0.4 0 0.6 1; 0 0 0.2 1; 0.4 0 0.6 1"/>
    </circle>

    <!-- DROP 3 -->
    <g transform="rotate(10 38 47)">
      <rect x="37.5" y="42" width="1" height="6" rx="0.5"
            stroke="url(#dropD)" stroke-width="1.6"
            stroke-linecap="round" fill="none">

        <animate attributeName="y"
                 values="42;52;56"
                 keyTimes="0;0.65;1"
                 dur="1.9s"
                 begin="-0.45s"
                 repeatCount="indefinite"/>

        <animate attributeName="height"
                 values="6;2;0"
                 keyTimes="0;0.65;1"
                 dur="1.9s"
                 begin="-0.45s"
                 repeatCount="indefinite"/>

        <animate attributeName="opacity"
                 values="1;1;0;0"
                 keyTimes="0;0.45;0.65;1"
                 dur="1.9s"
                 begin="-0.45s"
                 repeatCount="indefinite"
                 calcMode="spline"
                 keySplines="0 0 0.2 1; 0.4 0 0.6 1; 0 0 0.2 1"/>
      </rect>
    </g>

    <circle cx="37" cy="56" r="1.3"
            fill="url(#iceGrad)" opacity="0">
      <animate attributeName="cy"
               values="46;54;56"
               keyTimes="0;0.65;1"
               dur="1.9s"
               begin="-0.45s"
               repeatCount="indefinite"/>
      <animate attributeName="opacity"
               values="0;0;1;1;0"
               keyTimes="0;0.45;0.65;0.90;1"
               dur="1.9s"
               begin="-0.45s"
               repeatCount="indefinite"
               calcMode="spline"
               keySplines="0 0 0.2 1; 0.4 0 0.6 1; 0 0 0.2 1; 0.4 0 0.6 1"/>
    </circle>

  </g>

  <line x1="18" y1="58" x2="46" y2="58"
        stroke="url(#iceGrad)"
        stroke-width="2"
        stroke-linecap="round">
    <animate attributeName="opacity"
             values="0.65;1;0.65"
             dur="2.4s"
             repeatCount="indefinite"/>
  </line>

</svg>`,
  },
  67: {
    text: "Silný mrznoucí déšť",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="cloud" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>

    <linearGradient id="dropGrad" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4286ee"/>
      <stop offset="1" stop-color="#0950bc"/>
    </linearGradient>

    <linearGradient id="iceGrad" x1="20" y1="54" x2="46" y2="62" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#bfe9ff"/>
      <stop offset="1" stop-color="#6cc4ea"/>
    </linearGradient>
  </defs>

  <!-- CLOUD -->
  <path
    d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6A7.5,7.5,0,0,0,18,45.5h28a7,7,0,0,0,0-14Z"
    fill="url(#cloud)" stroke="#e6effc" stroke-width="0.5"
  />

  <g>

    <!-- ===== 5 DROPS ===== -->
    <!-- X pozice: 21, 26, 32, 38, 43 -->

    <!-- DROP TEMPLATE START -->

    <!-- 1 -->
    <g transform="rotate(10 21 47)">
      <rect x="20.5" y="42" width="1" height="6" rx="0.5"
            stroke="url(#dropGrad)" stroke-width="1.6"
            stroke-linecap="round" fill="none">
        <animate attributeName="y" values="42;52;56"
                 keyTimes="0;0.65;1"
                 dur="1.8s"
                 repeatCount="indefinite"/>
        <animate attributeName="height"
                 values="6;2;0"
                 keyTimes="0;0.65;1"
                 dur="1.8s"
                 repeatCount="indefinite"/>
        <animate attributeName="opacity"
                 values="1;1;0;0"
                 keyTimes="0;0.45;0.65;1"
                 dur="1.8s"
                 repeatCount="indefinite"/>
      </rect>
    </g>
    <circle cx="21" cy="56" r="1.3"
            fill="url(#iceGrad)" opacity="0">
      <animate attributeName="cy"
               values="46;54;56"
               keyTimes="0;0.65;1"
               dur="1.8s"
               repeatCount="indefinite"/>
      <animate attributeName="opacity"
               values="0;0;1;1;0"
               keyTimes="0;0.45;0.65;0.90;1"
               dur="1.8s"
               repeatCount="indefinite"/>
    </circle>

    <!-- 2 -->
    <g transform="rotate(10 26 47)">
      <rect x="25.5" y="42" width="1" height="6" rx="0.5"
            stroke="url(#dropGrad)" stroke-width="1.6"
            stroke-linecap="round" fill="none">
        <animate attributeName="y" values="42;52;56"
                 keyTimes="0;0.65;1"
                 dur="2.0s"
                 begin="-0.3s"
                 repeatCount="indefinite"/>
        <animate attributeName="height"
                 values="6;2;0"
                 keyTimes="0;0.65;1"
                 dur="2.0s"
                 begin="-0.3s"
                 repeatCount="indefinite"/>
        <animate attributeName="opacity"
                 values="1;1;0;0"
                 keyTimes="0;0.45;0.65;1"
                 dur="2.0s"
                 begin="-0.3s"
                 repeatCount="indefinite"/>
      </rect>
    </g>
    <circle cx="26" cy="56" r="1.3"
            fill="url(#iceGrad)" opacity="0">
      <animate attributeName="cy"
               values="46;54;56"
               keyTimes="0;0.65;1"
               dur="2.0s"
               begin="-0.3s"
               repeatCount="indefinite"/>
      <animate attributeName="opacity"
               values="0;0;1;1;0"
               keyTimes="0;0.45;0.65;0.90;1"
               dur="2.0s"
               begin="-0.3s"
               repeatCount="indefinite"/>
    </circle>

    <!-- 3 -->
    <g transform="rotate(10 32 47)">
      <rect x="31.5" y="42" width="1" height="6" rx="0.5"
            stroke="url(#dropGrad)" stroke-width="1.6"
            stroke-linecap="round" fill="none">
        <animate attributeName="y" values="42;52;56"
                 keyTimes="0;0.65;1"
                 dur="1.9s"
                 begin="-0.6s"
                 repeatCount="indefinite"/>
        <animate attributeName="height"
                 values="6;2;0"
                 keyTimes="0;0.65;1"
                 dur="1.9s"
                 begin="-0.6s"
                 repeatCount="indefinite"/>
        <animate attributeName="opacity"
                 values="1;1;0;0"
                 keyTimes="0;0.45;0.65;1"
                 dur="1.9s"
                 begin="-0.6s"
                 repeatCount="indefinite"/>
      </rect>
    </g>
    <circle cx="32" cy="56" r="1.3"
            fill="url(#iceGrad)" opacity="0">
      <animate attributeName="cy"
               values="46;54;56"
               keyTimes="0;0.65;1"
               dur="1.9s"
               begin="-0.6s"
               repeatCount="indefinite"/>
      <animate attributeName="opacity"
               values="0;0;1;1;0"
               keyTimes="0;0.45;0.65;0.90;1"
               dur="1.9s"
               begin="-0.6s"
               repeatCount="indefinite"/>
    </circle>

    <!-- 4 -->
    <g transform="rotate(10 38 47)">
      <rect x="37.5" y="42" width="1" height="6" rx="0.5"
            stroke="url(#dropGrad)" stroke-width="1.6"
            stroke-linecap="round" fill="none">
        <animate attributeName="y" values="42;52;56"
                 keyTimes="0;0.65;1"
                 dur="1.85s"
                 begin="-0.9s"
                 repeatCount="indefinite"/>
        <animate attributeName="height"
                 values="6;2;0"
                 keyTimes="0;0.65;1"
                 dur="1.85s"
                 begin="-0.9s"
                 repeatCount="indefinite"/>
        <animate attributeName="opacity"
                 values="1;1;0;0"
                 keyTimes="0;0.45;0.65;1"
                 dur="1.85s"
                 begin="-0.9s"
                 repeatCount="indefinite"/>
      </rect>
    </g>
    <circle cx="38" cy="56" r="1.3"
            fill="url(#iceGrad)" opacity="0">
      <animate attributeName="cy"
               values="46;54;56"
               keyTimes="0;0.65;1"
               dur="1.85s"
               begin="-0.9s"
               repeatCount="indefinite"/>
      <animate attributeName="opacity"
               values="0;0;1;1;0"
               keyTimes="0;0.45;0.65;0.90;1"
               dur="1.85s"
               begin="-0.9s"
               repeatCount="indefinite"/>
    </circle>

    <!-- 5 -->
    <g transform="rotate(10 43 47)">
      <rect x="42.5" y="42" width="1" height="6" rx="0.5"
            stroke="url(#dropGrad)" stroke-width="1.6"
            stroke-linecap="round" fill="none">
        <animate attributeName="y" values="42;52;56"
                 keyTimes="0;0.65;1"
                 dur="2.1s"
                 begin="-1.2s"
                 repeatCount="indefinite"/>
        <animate attributeName="height"
                 values="6;2;0"
                 keyTimes="0;0.65;1"
                 dur="2.1s"
                 begin="-1.2s"
                 repeatCount="indefinite"/>
        <animate attributeName="opacity"
                 values="1;1;0;0"
                 keyTimes="0;0.45;0.65;1"
                 dur="2.1s"
                 begin="-1.2s"
                 repeatCount="indefinite"/>
      </rect>
    </g>
    <circle cx="43" cy="56" r="1.3"
            fill="url(#iceGrad)" opacity="0">
      <animate attributeName="cy"
               values="46;54;56"
               keyTimes="0;0.65;1"
               dur="2.1s"
               begin="-1.2s"
               repeatCount="indefinite"/>
      <animate attributeName="opacity"
               values="0;0;1;1;0"
               keyTimes="0;0.45;0.65;0.90;1"
               dur="2.1s"
               begin="-1.2s"
               repeatCount="indefinite"/>
    </circle>

  </g>

  <!-- ICE LINE -->
  <line x1="18" y1="58" x2="46" y2="58"
        stroke="url(#iceGrad)"
        stroke-width="2"
        stroke-linecap="round">
    <animate attributeName="opacity"
             values="0.65;1;0.65"
             dur="2.4s"
             repeatCount="indefinite"/>
  </line>

</svg> `,
  },
  71: {
    text: "Slabé sněžení",
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
                <defs>
                  <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#f3f7fe" />
                    <stop offset="0.45" stop-color="#f3f7fe" />
                    <stop offset="1" stop-color="#deeafb" />
                  </linearGradient>
                  <linearGradient id="b" x1="30.12" y1="43.48" x2="31.88" y2="46.52" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#86c3db" />
                    <stop offset="0.45" stop-color="#86c3db" />
                    <stop offset="1" stop-color="#5eafcf" />
                  </linearGradient>
                  <linearGradient id="c" x1="29.67" y1="42.69" x2="32.33" y2="47.31" xlink:href="#b" />
                  <linearGradient id="d" x1="23.12" y1="43.48" x2="24.88" y2="46.52" xlink:href="#b" />
                  <linearGradient id="e" x1="22.67" y1="42.69" x2="25.33" y2="47.31" xlink:href="#b" />
                  <linearGradient id="f" x1="37.12" y1="43.48" x2="38.88" y2="46.52" xlink:href="#b" />
                  <linearGradient id="g" x1="36.67" y1="42.69" x2="39.33" y2="47.31" xlink:href="#b" />
                </defs>
                <path
                  d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  stroke-width="0.5"
                  fill="url(#a)"
                />
                <g>
                  <circle cx="31" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#b)" />
                  <path
                    d="M33.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M31,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke="url(#c)"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    additive="sum"
                    values="-1 -6; 1 12"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    additive="sum"
                    values="0 31 45; 360 31 45"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite" />
                </g>
                <g>
                  <circle cx="24" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#d)" />
                  <path
                    d="M26.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M24,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke="url(#e)"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    additive="sum"
                    values="1 -6; -1 12"
                    begin="-2s"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    additive="sum"
                    values="0 24 45; 360 24 45"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="opacity" values="0;1;1;1;0" begin="-2s" dur="4s" repeatCount="indefinite" />
                </g>
                <g>
                  <circle cx="38" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#f)" />
                  <path
                    d="M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke="url(#g)"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    additive="sum"
                    values="1 -6; -1 12"
                    begin="-1s"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    additive="sum"
                    values="0 38 45; 360 38 45"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="opacity" values="0;1;1;1;0" begin="-1s" dur="4s" repeatCount="indefinite" />
                </g>
              </svg>`,
  },

  73: {
    text: "Střední sněžení",
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe" />
      <stop offset="0.45" stop-color="#f3f7fe" />
      <stop offset="1" stop-color="#deeafb" />
    </linearGradient>
    <linearGradient id="b" x1="30.12" y1="43.48" x2="31.88" y2="46.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#86c3db" />
      <stop offset="0.45" stop-color="#86c3db" />
      <stop offset="1" stop-color="#5eafcf" />
    </linearGradient>
    <linearGradient id="c" x1="29.67" y1="42.69" x2="32.33" y2="47.31" xlink:href="#b" />
    <linearGradient id="d" x1="23.12" y1="43.48" x2="24.88" y2="46.52" xlink:href="#b" />
    <linearGradient id="e" x1="22.67" y1="42.69" x2="25.33" y2="47.31" xlink:href="#b" />
    <linearGradient id="f" x1="37.12" y1="43.48" x2="38.88" y2="46.52" xlink:href="#b" />
    <linearGradient id="g" x1="36.67" y1="42.69" x2="39.33" y2="47.31" xlink:href="#b" />
  </defs>

  <path
    d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
    stroke="#e6effc"
    stroke-miterlimit="10"
    stroke-width="0.5"
    fill="url(#a)"
  />

  <!-- původní 3 vločky (BEZE ZMĚNY) -->
  <!-- 1 -->
  <g>
    <circle cx="31" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#b)" />
    <path d="M33.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M31,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#c)" />
    <animateTransform attributeName="transform" type="translate" additive="sum"
      values="-1 -6; 1 12" dur="4s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" additive="sum"
      values="0 31 45; 360 31 45" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite"/>
  </g>

  <!-- 2 -->
  <g>
    <circle cx="24" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#d)" />
    <path d="M26.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M24,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#e)" />
    <animateTransform attributeName="transform" type="translate" additive="sum"
      values="1 -6; -1 12" begin="-2s" dur="4s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" additive="sum"
      values="0 24 45; 360 24 45" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" begin="-2s" dur="4s" repeatCount="indefinite"/>
  </g>

  <!-- 3 -->
  <g>
    <circle cx="38" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#f)" />
    <path d="M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#g)" />
    <animateTransform attributeName="transform" type="translate" additive="sum"
      values="1 -6; -1 12" begin="-1s" dur="4s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" additive="sum"
      values="0 38 45; 360 38 45" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" begin="-1s" dur="4s" repeatCount="indefinite"/>
  </g>

  <!-- NOVÁ 4. vločka -->
  <g>
    <circle cx="45" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#b)" />
    <path d="M47.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M45,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#c)" />
    <animateTransform attributeName="transform" type="translate" additive="sum"
      values="-1 -6; 1 12" begin="-3s" dur="4s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" additive="sum"
      values="0 45 45; 360 45 45" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" begin="-3s" dur="4s" repeatCount="indefinite"/>
  </g>
</svg>`,
  },

  75: {
    text: "Silné sněžení",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe" />
      <stop offset="0.45" stop-color="#f3f7fe" />
      <stop offset="1" stop-color="#deeafb" />
    </linearGradient>
    <linearGradient id="b" x1="30.12" y1="43.48" x2="31.88" y2="46.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#86c3db" />
      <stop offset="0.45" stop-color="#86c3db" />
      <stop offset="1" stop-color="#5eafcf" />
    </linearGradient>
    <linearGradient id="c" x1="29.67" y1="42.69" x2="32.33" y2="47.31" xlink:href="#b" />
    <linearGradient id="d" x1="23.12" y1="43.48" x2="24.88" y2="46.52" xlink:href="#b" />
    <linearGradient id="e" x1="22.67" y1="42.69" x2="25.33" y2="47.31" xlink:href="#b" />
    <linearGradient id="f" x1="37.12" y1="43.48" x2="38.88" y2="46.52" xlink:href="#b" />
    <linearGradient id="g" x1="36.67" y1="42.69" x2="39.33" y2="47.31" xlink:href="#b" />
  </defs>

  <path
    d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
    stroke="#e6effc"
    stroke-miterlimit="10"
    stroke-width="0.5"
    fill="url(#a)"
  />

  <!-- 1 -->
  <g>
    <circle cx="31" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#b)" />
    <path d="M33.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M31,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#c)" />
    <animateTransform attributeName="transform" type="translate" additive="sum"
      values="-1 -6; 1 12" dur="4s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" additive="sum"
      values="0 31 45; 360 31 45" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite"/>
  </g>

  <!-- 2 -->
  <g>
    <circle cx="24" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#d)" />
    <path d="M26.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M24,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#e)" />
    <animateTransform attributeName="transform" type="translate" additive="sum"
      values="1 -6; -1 12" begin="-2s" dur="4s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" additive="sum"
      values="0 24 45; 360 24 45" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" begin="-2s" dur="4s" repeatCount="indefinite"/>
  </g>

  <!-- 3 -->
  <g>
    <circle cx="38" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#f)" />
    <path d="M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#g)" />
    <animateTransform attributeName="transform" type="translate" additive="sum"
      values="1 -6; -1 12" begin="-1s" dur="4s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" additive="sum"
      values="0 38 45; 360 38 45" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" begin="-1s" dur="4s" repeatCount="indefinite"/>
  </g>

  <!-- 4 -->
  <g>
    <circle cx="45" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#b)" />
    <path d="M47.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M45,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#c)" />
    <animateTransform attributeName="transform" type="translate" additive="sum"
      values="-1 -6; 1 12" begin="-3s" dur="4s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" additive="sum"
      values="0 45 45; 360 45 45" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" begin="-3s" dur="4s" repeatCount="indefinite"/>
  </g>

  <!-- 5 -->
  <g>
    <circle cx="17" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#d)" />
    <path d="M19.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M17,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
      fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#e)" />
    <animateTransform attributeName="transform" type="translate" additive="sum"
      values="1 -6; -1 12" begin="-1.5s" dur="4s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="rotate" additive="sum"
      values="0 17 45; 360 17 45" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0;1;1;1;0" begin="-1.5s" dur="4s" repeatCount="indefinite"/>
  </g>
</svg>`,
  },
  77: {
    text: "Sněhová krupky",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="a" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe" />
      <stop offset="0.45" stop-color="#f3f7fe" />
      <stop offset="1" stop-color="#deeafb" />
    </linearGradient>
    <linearGradient id="b" x1="30.12" y1="43.48" x2="31.88" y2="46.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#86c3db" />
      <stop offset="0.45" stop-color="#86c3db" />
      <stop offset="1" stop-color="#5eafcf" />
    </linearGradient>
    <linearGradient id="c" x1="29.67" y1="42.69" x2="32.33" y2="47.31" xlink:href="#b" />
    <linearGradient id="d" x1="23.12" y1="43.48" x2="24.88" y2="46.52" xlink:href="#b" />
    <linearGradient id="e" x1="22.67" y1="42.69" x2="25.33" y2="47.31" xlink:href="#b" />
    <linearGradient id="f" x1="37.12" y1="43.48" x2="38.88" y2="46.52" xlink:href="#b" />
    <linearGradient id="g" x1="36.67" y1="42.69" x2="39.33" y2="47.31" xlink:href="#b" />
  </defs>

  <!-- Oblačnost -->
  <path
    d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
    stroke="#e6effc"
    stroke-miterlimit="10"
    stroke-width="0.5"
    fill="url(#a)"
  />

  <!-- Krupka 1 -->
  <g>
    <path
      d="M31 43.7
         l0.6 -0.3
         l0.5 0.4
         l0.7 -0.1
         l0.3 0.6
         l0.6 0.3
         l-0.2 0.7
         l0.4 0.6
         l-0.6 0.4
         l-0.3 0.7
         l-0.7 -0.1
         l-0.5 0.5
         l-0.6 -0.3
         l-0.6 0.2
         l-0.4 -0.6
         l-0.7 -0.2
         l0.2 -0.7
         l-0.3 -0.6
         l0.6 -0.4
         l0.2 -0.7
         z"
      fill="url(#b)"
      stroke="url(#c)"
      stroke-width="0.3"
    />
    <animateTransform attributeName="transform" type="translate" additive="sum" values="-1 -6; 1 12" dur="4s" repeatCount="indefinite" />
    <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 31 45; 360 31 45" dur="9s" repeatCount="indefinite" />
    <animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite" />
  </g>

  <!-- Krupka 2 -->
  <g>
    <path
      d="M24 43.7
         l0.5 -0.4
         l0.7 0.2
         l0.4 -0.5
         l0.6 0.3
         l0.6 0.5
         l-0.1 0.7
         l0.5 0.5
         l-0.5 0.5
         l-0.2 0.7
         l-0.7 -0.2
         l-0.5 0.4
         l-0.6 -0.3
         l-0.7 0.1
         l-0.3 -0.6
         l-0.6 -0.3
         l0.2 -0.7
         l-0.3 -0.6
         l0.6 -0.3
         l0.3 -0.7
         z"
      fill="url(#d)"
      stroke="url(#e)"
      stroke-width="0.3"
    />
    <animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-2s" dur="4s" repeatCount="indefinite" />
    <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 24 45; 360 24 45" dur="9s" repeatCount="indefinite" />
    <animate attributeName="opacity" values="0;1;1;1;0" begin="-2s" dur="4s" repeatCount="indefinite" />
  </g>

  <!-- Krupka 3 -->
  <g>
    <path
      d="M38 43.7
         l0.6 -0.2
         l0.5 0.3
         l0.7 -0.2
         l0.4 0.6
         l0.5 0.4
         l-0.2 0.7
         l0.3 0.6
         l-0.6 0.4
         l-0.3 0.7
         l-0.7 -0.1
         l-0.4 0.5
         l-0.6 -0.3
         l-0.6 0.2
         l-0.4 -0.6
         l-0.6 -0.3
         l0.2 -0.7
         l-0.3 -0.6
         l0.6 -0.4
         l0.2 -0.7
         z"
      fill="url(#f)"
      stroke="url(#g)"
      stroke-width="0.3"
    />
    <animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-1s" dur="4s" repeatCount="indefinite" />
    <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 38 45; 360 38 45" dur="9s" repeatCount="indefinite" />
    <animate attributeName="opacity" values="0;1;1;1;0" begin="-1s" dur="4s" repeatCount="indefinite" />
  </g>
</svg>`,
  },
  80: {
    text: "Slabé dešťové přeháňky",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <!-- SUN -->
    <linearGradient id="sunGrad" x1="26.75" y1="22.91" x2="37.25" y2="41.09" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset="0.45" stop-color="#fbbf24"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>

    <!-- CLOUD LIGHT -->
    <linearGradient id="cloudLight" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset="0.45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>

    <!-- CLOUD DARK -->
    <linearGradient id="cloudDark" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#c8d6ea"/>
      <stop offset="0.45" stop-color="#c8d6ea"/>
      <stop offset="1" stop-color="#9fb5d6"/>
    </linearGradient>

    <!-- RAIN -->
    <linearGradient id="dropB" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4286ee"/>
      <stop offset="0.45" stop-color="#4286ee"/>
      <stop offset="1" stop-color="#0950bc"/>
    </linearGradient>
    <linearGradient id="dropC" x1="29.53" y1="42.95" x2="32.47" y2="48.05" xlink:href="#dropB"/>
    <linearGradient id="dropD" x1="36.53" y1="42.95" x2="39.47" y2="48.05" xlink:href="#dropB"/>
  </defs>

  <!-- SUN -->
  <g>
    <circle cx="23" cy="24" r="8.5" stroke="#f8af18" stroke-width="0.5" fill="url(#sunGrad)"/>
    <path d="M23,10V6m0,36V38M34,15l3-3M9,40l3-3m0-22-3-3M37,40l-3-3M10,24H6m36,0H38"
      fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-width="2.5">
      <animateTransform attributeName="transform" dur="45s" values="0 23 24; 360 23 24" repeatCount="indefinite" type="rotate"/>
    </path>
  </g>

  <!-- CLOUD SYSTEM -->
  <g opacity="0">
    <!-- MOVEMENT: right -> center -> left -->
    <animateTransform
      attributeName="transform"
      type="translate"
      dur="10s"
      repeatCount="indefinite"
      keyTimes="0;0.30;0.75;1"
      values="24 0; 0 0; 0 0; -24 0"
      calcMode="linear"
    />

    <!-- APPEAR / DISAPPEAR -->
    <animate
      attributeName="opacity"
      dur="10s"
      repeatCount="indefinite"
      keyTimes="0;0.12;0.90;1"
      values="0;1;1;0"
      calcMode="linear"
    />

    <!-- LIGHT CLOUD -->
    <path
      d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc"
      stroke-width="0.5"
      fill="url(#cloudLight)"
      opacity="1"
    >
      <!-- light -> fades out during darkening, stays off while dark, fades back in when lightening -->
      <animate
        attributeName="opacity"
        dur="10s"
        repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1"
        values="1;1;0;0;1;1"
        calcMode="linear"
      />
    </path>

    <!-- DARK CLOUD -->
    <path
      d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc"
      stroke-width="0.5"
      fill="url(#cloudDark)"
      opacity="0"
    >
      <!-- fades in while darkening, stays, fades out while lightening -->
      <animate
        attributeName="opacity"
        dur="10s"
        repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1"
        values="0;0;1;1;0;0"
        calcMode="linear"
      />
    </path>

    <!-- RAIN: starts when cloud darkens, stops when cloud lightens -->
    <g opacity="0">
      <animate
        attributeName="opacity"
        dur="10s"
        repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1"
        values="0;0;1;1;0;0"
        calcMode="linear"
      />

      <line x1="26" y1="43" x2="25" y2="48" stroke="url(#dropB)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>

      <line x1="32" y1="43" x2="31" y2="48" stroke="url(#dropC)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" begin="-0.25s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.25s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>

      <line x1="38" y1="43" x2="37" y2="48" stroke="url(#dropD)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" begin="-0.45s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.45s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>
    </g>
  </g>
</svg>`,
  },
  81: {
    text: "Střední dešťové přeháňkly",
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="sunGrad" x1="26.75" y1="22.91" x2="37.25" y2="41.09" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset="0.45" stop-color="#fbbf24"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>

    <linearGradient id="cloudLight" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset="0.45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>

    <linearGradient id="cloudDark" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#c8d6ea"/>
      <stop offset="0.45" stop-color="#c8d6ea"/>
      <stop offset="1" stop-color="#9fb5d6"/>
    </linearGradient>

    <linearGradient id="dropB" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4286ee"/>
      <stop offset="0.45" stop-color="#4286ee"/>
      <stop offset="1" stop-color="#0950bc"/>
    </linearGradient>
    <linearGradient id="dropC" x1="29.53" y1="42.95" x2="32.47" y2="48.05" xlink:href="#dropB"/>
    <linearGradient id="dropD" x1="36.53" y1="42.95" x2="39.47" y2="48.05" xlink:href="#dropB"/>
    <linearGradient id="dropE" x1="43.53" y1="42.95" x2="46.47" y2="48.05" xlink:href="#dropB"/>
  </defs>

  <!-- SUN -->
  <g>
    <circle cx="23" cy="24" r="8.5" stroke="#f8af18" stroke-width="0.5" fill="url(#sunGrad)"/>
    <path d="M23,10V6m0,36V38M34,15l3-3M9,40l3-3m0-22-3-3M37,40l-3-3M10,24H6m36,0H38"
      fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-width="2.5">
      <animateTransform attributeName="transform" dur="45s" values="0 23 24; 360 23 24" repeatCount="indefinite" type="rotate"/>
    </path>
  </g>

  <!-- CLOUD SYSTEM -->
  <g opacity="0">
    <animateTransform attributeName="transform" type="translate" dur="10s" repeatCount="indefinite"
      keyTimes="0;0.30;0.75;1" values="24 0; 0 0; 0 0; -24 0" calcMode="linear"/>
    <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
      keyTimes="0;0.12;0.90;1" values="0;1;1;0" calcMode="linear"/>

    <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc" stroke-width="0.5" fill="url(#cloudLight)" opacity="1">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="1;1;0;0;1;1" calcMode="linear"/>
    </path>

    <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc" stroke-width="0.5" fill="url(#cloudDark)" opacity="0">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="0;0;1;1;0;0" calcMode="linear"/>
    </path>

    <!-- RAIN (starts with darkening, ends with lightening) -->
    <g opacity="0">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="0;0;1;1;0;0" calcMode="linear"/>

      <!-- 4 evenly spaced drops -->
      <line x1="24" y1="43" x2="23" y2="48" stroke="url(#dropB)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>

      <line x1="30" y1="43" x2="29" y2="48" stroke="url(#dropC)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" begin="-0.18s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.18s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>

      <line x1="36" y1="43" x2="35" y2="48" stroke="url(#dropD)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" begin="-0.36s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.36s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>

      <line x1="42" y1="43" x2="41" y2="48" stroke="url(#dropE)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" begin="-0.54s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.54s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>
    </g>
  </g>
</svg>`,
  },
  82: {
    text: "Silné dešťové přeháňky",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="sunGrad" x1="26.75" y1="22.91" x2="37.25" y2="41.09" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset="0.45" stop-color="#fbbf24"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>

    <linearGradient id="cloudLight" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset="0.45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>

    <linearGradient id="cloudDark" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#c8d6ea"/>
      <stop offset="0.45" stop-color="#c8d6ea"/>
      <stop offset="1" stop-color="#9fb5d6"/>
    </linearGradient>

    <linearGradient id="dropB" x1="22.53" y1="42.95" x2="25.47" y2="48.05" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4286ee"/>
      <stop offset="0.45" stop-color="#4286ee"/>
      <stop offset="1" stop-color="#0950bc"/>
    </linearGradient>
    <linearGradient id="dropC" x1="29.53" y1="42.95" x2="32.47" y2="48.05" xlink:href="#dropB"/>
    <linearGradient id="dropD" x1="36.53" y1="42.95" x2="39.47" y2="48.05" xlink:href="#dropB"/>
    <linearGradient id="dropE" x1="43.53" y1="42.95" x2="46.47" y2="48.05" xlink:href="#dropB"/>
    <linearGradient id="dropF" x1="16.53" y1="42.95" x2="19.47" y2="48.05" xlink:href="#dropB"/>
  </defs>

  <!-- SUN -->
  <g>
    <circle cx="23" cy="24" r="8.5" stroke="#f8af18" stroke-width="0.5" fill="url(#sunGrad)"/>
    <path d="M23,10V6m0,36V38M34,15l3-3M9,40l3-3m0-22-3-3M37,40l-3-3M10,24H6m36,0H38"
      fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-width="2.5">
      <animateTransform attributeName="transform" dur="45s" values="0 23 24; 360 23 24" repeatCount="indefinite" type="rotate"/>
    </path>
  </g>

  <!-- CLOUD SYSTEM -->
  <g opacity="0">
    <animateTransform attributeName="transform" type="translate" dur="10s" repeatCount="indefinite"
      keyTimes="0;0.30;0.75;1" values="24 0; 0 0; 0 0; -24 0" calcMode="linear"/>
    <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
      keyTimes="0;0.12;0.90;1" values="0;1;1;0" calcMode="linear"/>

    <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc" stroke-width="0.5" fill="url(#cloudLight)" opacity="1">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="1;1;0;0;1;1" calcMode="linear"/>
    </path>

    <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc" stroke-width="0.5" fill="url(#cloudDark)" opacity="0">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="0;0;1;1;0;0" calcMode="linear"/>
    </path>

    <!-- RAIN (starts with darkening, ends with lightening) -->
    <g opacity="0">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="0;0;1;1;0;0" calcMode="linear"/>

      <!-- 5 evenly spaced drops -->
      <line x1="22" y1="43" x2="21" y2="48" stroke="url(#dropF)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>

      <line x1="27" y1="43" x2="26" y2="48" stroke="url(#dropB)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" begin="-0.14s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.14s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>

      <line x1="32" y1="43" x2="31" y2="48" stroke="url(#dropC)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" begin="-0.28s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.28s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>

      <line x1="37" y1="43" x2="36" y2="48" stroke="url(#dropD)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" begin="-0.42s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.42s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>

      <line x1="42" y1="43" x2="41" y2="48" stroke="url(#dropE)" stroke-width="2" stroke-linecap="round">
        <animateTransform attributeName="transform" begin="-0.56s" type="translate" values="1 -5; -2 10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" begin="-0.56s" values="0;1;1;0" dur="0.7s" repeatCount="indefinite"/>
      </line>
    </g>
  </g>
</svg>`,
  },
  85: {
    text: "Slabé sněhové přeháňky",
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <!-- SUN -->
    <linearGradient id="sunGrad85" x1="26.75" y1="22.91" x2="37.25" y2="41.09" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset="0.45" stop-color="#fbbf24"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>

    <!-- CLOUD -->
    <linearGradient id="cloudLight85" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset="0.45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>

    <linearGradient id="cloudDark85" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#c8d6ea"/>
      <stop offset="0.45" stop-color="#c8d6ea"/>
      <stop offset="1" stop-color="#9fb5d6"/>
    </linearGradient>

    <!-- SNOW (from your sample style) -->
    <linearGradient id="snowB85" x1="30.12" y1="43.48" x2="31.88" y2="46.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#86c3db"/>
      <stop offset="0.45" stop-color="#86c3db"/>
      <stop offset="1" stop-color="#5eafcf"/>
    </linearGradient>
    <linearGradient id="snowC85" x1="29.67" y1="42.69" x2="32.33" y2="47.31" xlink:href="#snowB85"/>

    <linearGradient id="snowD85" x1="23.12" y1="43.48" x2="24.88" y2="46.52" xlink:href="#snowB85"/>
    <linearGradient id="snowE85" x1="22.67" y1="42.69" x2="25.33" y2="47.31" xlink:href="#snowB85"/>

    <linearGradient id="snowF85" x1="37.12" y1="43.48" x2="38.88" y2="46.52" xlink:href="#snowB85"/>
    <linearGradient id="snowG85" x1="36.67" y1="42.69" x2="39.33" y2="47.31" xlink:href="#snowB85"/>
  </defs>

  <!-- SUN -->
  <g>
    <circle cx="23" cy="24" r="8.5" stroke="#f8af18" stroke-width="0.5" fill="url(#sunGrad85)"/>
    <path d="M23,10V6m0,36V38M34,15l3-3M9,40l3-3m0-22-3-3M37,40l-3-3M10,24H6m36,0H38"
      fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-width="2.5">
      <animateTransform attributeName="transform" dur="45s" values="0 23 24; 360 23 24" repeatCount="indefinite" type="rotate"/>
    </path>
  </g>

  <!-- CLOUD SYSTEM -->
  <g opacity="0">
    <!-- movement -->
    <animateTransform attributeName="transform" type="translate" dur="10s" repeatCount="indefinite"
      keyTimes="0;0.30;0.75;1" values="24 0; 0 0; 0 0; -24 0" calcMode="linear"/>
    <!-- appear/disappear -->
    <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
      keyTimes="0;0.12;0.90;1" values="0;1;1;0" calcMode="linear"/>

    <!-- light cloud -->
    <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc" stroke-width="0.5" fill="url(#cloudLight85)" opacity="1">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="1;1;0;0;1;1" calcMode="linear"/>
    </path>

    <!-- dark cloud -->
    <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc" stroke-width="0.5" fill="url(#cloudDark85)" opacity="0">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="0;0;1;1;0;0" calcMode="linear"/>
    </path>

    <!-- SNOW (shows exactly during darkening->dark->lightening) -->
    <g opacity="0">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="0;0;1;1;0;0" calcMode="linear"/>

      <!-- left -->
      <g>
        <circle cx="26" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#snowD85)"/>
        <path d="M28.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M26,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
          fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#snowE85)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum"
          values="1 -6; -1 12" begin="-2s" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum"
          values="0 26 45; 360 26 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" begin="-2s" dur="4s" repeatCount="indefinite"/>
      </g>

      <!-- center -->
      <g>
        <circle cx="32" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#snowB85)"/>
        <path d="M34.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M32,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
          fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#snowC85)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum"
          values="-1 -6; 1 12" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum"
          values="0 32 45; 360 32 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite"/>
      </g>

      <!-- right -->
      <g>
        <circle cx="38" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#snowF85)"/>
        <path d="M40.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M38,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
          fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#snowG85)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum"
          values="1 -6; -1 12" begin="-1s" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum"
          values="0 38 45; 360 38 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" begin="-1s" dur="4s" repeatCount="indefinite"/>
      </g>
    </g>
  </g>
</svg>`,
  },
  86: {
    text: "Silné sněhové přeháňky",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <!-- SUN -->
    <linearGradient id="sunGrad86" x1="26.75" y1="22.91" x2="37.25" y2="41.09" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset="0.45" stop-color="#fbbf24"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>

    <!-- CLOUD -->
    <linearGradient id="cloudLight86" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f3f7fe"/>
      <stop offset="0.45" stop-color="#f3f7fe"/>
      <stop offset="1" stop-color="#deeafb"/>
    </linearGradient>

    <linearGradient id="cloudDark86" x1="22.56" y1="21.96" x2="39.2" y2="50.8" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#c8d6ea"/>
      <stop offset="0.45" stop-color="#c8d6ea"/>
      <stop offset="1" stop-color="#9fb5d6"/>
    </linearGradient>

    <!-- SNOW base -->
    <linearGradient id="snowB86" x1="30.12" y1="43.48" x2="31.88" y2="46.52" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#86c3db"/>
      <stop offset="0.45" stop-color="#86c3db"/>
      <stop offset="1" stop-color="#5eafcf"/>
    </linearGradient>

    <!-- per-flake strokes (same look, different coords like your sample) -->
    <linearGradient id="snowS1_86" x1="20.12" y1="43.48" x2="21.88" y2="46.52" xlink:href="#snowB86"/>
    <linearGradient id="snowS1b_86" x1="19.67" y1="42.69" x2="22.33" y2="47.31" xlink:href="#snowB86"/>

    <linearGradient id="snowS2_86" x1="25.12" y1="43.48" x2="26.88" y2="46.52" xlink:href="#snowB86"/>
    <linearGradient id="snowS2b_86" x1="24.67" y1="42.69" x2="27.33" y2="47.31" xlink:href="#snowB86"/>

    <linearGradient id="snowS3_86" x1="30.12" y1="43.48" x2="31.88" y2="46.52" xlink:href="#snowB86"/>
    <linearGradient id="snowS3b_86" x1="29.67" y1="42.69" x2="32.33" y2="47.31" xlink:href="#snowB86"/>

    <linearGradient id="snowS4_86" x1="35.12" y1="43.48" x2="36.88" y2="46.52" xlink:href="#snowB86"/>
    <linearGradient id="snowS4b_86" x1="34.67" y1="42.69" x2="37.33" y2="47.31" xlink:href="#snowB86"/>

    <linearGradient id="snowS5_86" x1="40.12" y1="43.48" x2="41.88" y2="46.52" xlink:href="#snowB86"/>
    <linearGradient id="snowS5b_86" x1="39.67" y1="42.69" x2="42.33" y2="47.31" xlink:href="#snowB86"/>
  </defs>

  <!-- SUN -->
  <g>
    <circle cx="23" cy="24" r="8.5" stroke="#f8af18" stroke-width="0.5" fill="url(#sunGrad86)"/>
    <path d="M23,10V6m0,36V38M34,15l3-3M9,40l3-3m0-22-3-3M37,40l-3-3M10,24H6m36,0H38"
      fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-width="2.5">
      <animateTransform attributeName="transform" dur="45s" values="0 23 24; 360 23 24" repeatCount="indefinite" type="rotate"/>
    </path>
  </g>

  <!-- CLOUD SYSTEM -->
  <g opacity="0">
    <animateTransform attributeName="transform" type="translate" dur="10s" repeatCount="indefinite"
      keyTimes="0;0.30;0.75;1" values="24 0; 0 0; 0 0; -24 0" calcMode="linear"/>
    <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
      keyTimes="0;0.12;0.90;1" values="0;1;1;0" calcMode="linear"/>

    <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc" stroke-width="0.5" fill="url(#cloudLight86)" opacity="1">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="1;1;0;0;1;1" calcMode="linear"/>
    </path>

    <path d="M46.5,31.5l-.32,0a10.49,10.49,0,0,0-19.11-8,7,7,0,0,0-10.57,6,7.21,7.21,0,0,0,.1,1.14A7.5,7.5,0,0,0,18,45.5a4.19,4.19,0,0,0,.5,0v0h28a7,7,0,0,0,0-14Z"
      stroke="#e6effc" stroke-width="0.5" fill="url(#cloudDark86)" opacity="0">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="0;0;1;1;0;0" calcMode="linear"/>
    </path>

    <!-- SNOW -->
    <g opacity="0">
      <animate attributeName="opacity" dur="10s" repeatCount="indefinite"
        keyTimes="0;0.30;0.35;0.65;0.75;1" values="0;0;1;1;0;0" calcMode="linear"/>

      <!-- x positions: 22, 27, 32, 37, 42 (even spacing 5) -->

      <g>
        <circle cx="22" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#snowS1_86)"/>
        <path d="M24.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M22,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
          fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#snowS1b_86)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-2s" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 22 45; 360 22 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" begin="-2s" dur="4s" repeatCount="indefinite"/>
      </g>

      <g>
        <circle cx="27" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#snowS2_86)"/>
        <path d="M29.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M27,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
          fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#snowS2b_86)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum" values="-1 -6; 1 12" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 27 45; 360 27 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" dur="4s" repeatCount="indefinite"/>
      </g>

      <g>
        <circle cx="32" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#snowS3_86)"/>
        <path d="M34.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M32,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
          fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#snowS3b_86)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-1s" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 32 45; 360 32 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" begin="-1s" dur="4s" repeatCount="indefinite"/>
      </g>

      <g>
        <circle cx="37" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#snowS4_86)"/>
        <path d="M39.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M37,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
          fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#snowS4b_86)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum" values="-1 -6; 1 12" begin="-0.5s" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 37 45; 360 37 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" begin="-0.5s" dur="4s" repeatCount="indefinite"/>
      </g>

      <g>
        <circle cx="42" cy="45" r="1.25" fill="none" stroke-miterlimit="10" stroke="url(#snowS5_86)"/>
        <path d="M44.17,46.25l-1.09-.63m-2.16-1.24-1.09-.63M42,42.5v1.25m0,3.75V46.25m-1.08-.63-1.09.63m4.34-2.5-1.09.63"
          fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke="url(#snowS5b_86)"/>
        <animateTransform attributeName="transform" type="translate" additive="sum" values="1 -6; -1 12" begin="-1.5s" dur="4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" additive="sum" values="0 42 45; 360 42 45" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;1;1;0" begin="-1.5s" dur="4s" repeatCount="indefinite"/>
      </g>
    </g>
  </g>
</svg>`,
  },
  95: {
    text: "Bouřka",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
          <defs>
            <linearGradient id="a" x1="52.7" x2="133.4" y1="9.6" y2="149.3" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#9ca3af" />
              <stop offset=".5" stop-color="#9ca3af" />
              <stop offset="1" stop-color="#6b7280" />
            </linearGradient>
            <linearGradient id="b" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#6b7280" />
              <stop offset=".5" stop-color="#6b7280" />
              <stop offset="1" stop-color="#4b5563" />
            </linearGradient>
            <linearGradient id="c" x1="8.7" x2="80.9" y1="17.1" y2="142.1" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#f7b23b" />
              <stop offset=".5" stop-color="#f7b23b" />
              <stop offset="1" stop-color="#f59e0b" />
            </linearGradient>
            <linearGradient
              id="d"
              x1="1381.3"
              x2="1399.5"
              y1="-1144.7"
              y2="-1097.4"
              gradientTransform="rotate(-9 8002.567 8233.063)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#0b65ed" />
              <stop offset=".5" stop-color="#0a5ad4" />
              <stop offset="1" stop-color="#0950bc" />
            </linearGradient>
            <linearGradient xlink:href="#d" id="e" x1="1436.7" x2="1454.9" y1="-1137" y2="-1089.7" gradientTransform="rotate(-9 8009.537 8233.037)" />
            <linearGradient
              xlink:href="#d"
              id="f"
              x1="1492.1"
              x2="1510.3"
              y1="-1129.3"
              y2="-1082.1"
              gradientTransform="rotate(-9 8016.566 8233.078)"
            />
            <symbol id="h" viewBox="0 0 200.3 126.1">
              <path
                fill="url(#a)"
                stroke="#848b98"
                stroke-miterlimit="10"
                d="M.5 93.2a32.4 32.4 0 0032.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 006.5-68.9 32.4 32.4 0 00-48.5-33 48.6 48.6 0 00-88.6 37.1h-1.5A32.4 32.4 0 00.5 93.1Z"
              />
            </symbol>
            <symbol id="i" viewBox="0 0 350 222">
              <path
                fill="url(#b)"
                stroke="#5b6472"
                stroke-miterlimit="10"
                stroke-width="6"
                d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
              />
            </symbol>
            <symbol id="g" overflow="visible" viewBox="0 0 398 222">
              <use xlink:href="#h" width="200.3" height="126.1" transform="translate(198 27)">
                <animateTransform
                  additive="sum"
                  attributeName="transform"
                  dur="6s"
                  repeatCount="indefinite"
                  type="translate"
                  values="-9 0; 9 0; -9 0"
                />
              </use>
              <use xlink:href="#i" width="350" height="222">
                <animateTransform
                  additive="sum"
                  attributeName="transform"
                  dur="6s"
                  repeatCount="indefinite"
                  type="translate"
                  values="-18 0; 18 0; -18 0"
                />
              </use>
            </symbol>
            <symbol id="j" overflow="visible" viewBox="0 0 129 57">
              <path fill="url(#d)" stroke="#0a5ad4" stroke-miterlimit="10" d="M8.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z" opacity="0">
                <animateTransform
                  id="x1"
                  additive="sum"
                  attributeName="transform"
                  begin="0s; x1.end+.33s"
                  dur=".67s"
                  type="translate"
                  values="0 -60; 0 60"
                />
                <animate id="y1" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0" />
              </path>
              <path fill="url(#e)" stroke="#0a5ad4" stroke-miterlimit="10" d="M64.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z" opacity="0">
                <animateTransform
                  id="x2"
                  additive="sum"
                  attributeName="transform"
                  begin=".33s; x2.end+.33s"
                  dur=".67s"
                  type="translate"
                  values="0 -60; 0 60"
                />
                <animate id="y2" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0" />
              </path>
              <path fill="url(#f)" stroke="#0a5ad4" stroke-miterlimit="10" d="M120.5 56.5a8 8 0 01-8-8v-40a8 8 0 0116 0v40a8 8 0 01-8 8Z" opacity="0">
                <animateTransform
                  id="x3"
                  additive="sum"
                  attributeName="transform"
                  begin="-.33s; x3.end+.33s"
                  dur=".67s"
                  type="translate"
                  values="0 -60; 0 60"
                />
                <animate id="y3" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0" />
              </path>
            </symbol>
            <symbol id="k" viewBox="0 0 102.7 186.8">
              <path fill="url(#c)" stroke="#f6a823" stroke-miterlimit="10" stroke-width="4" d="m34.8 2-32 96h32l-16 80 80-112h-48l32-64h-48z">
                <animate
                  id="x1"
                  attributeName="opacity"
                  begin="0s; x1.end+.67s"
                  dur="1.33s"
                  keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
                  values="1; 1; 0; 1; 0; 1; 0; 1"
                />
              </path>
            </symbol>
          </defs>
          <use xlink:href="#g" width="398" height="222" transform="translate(68.84 145)" />
          <use xlink:href="#j" width="129" height="57" transform="translate(191.5 343.5)" />
          <use xlink:href="#k" width="102.7" height="186.7" transform="translate(205.23 291)" />
        </svg>`,
  },
  96: {
    text: "Bouřka s malými kroupami",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
  <defs>
    <!-- clouds -->
    <linearGradient id="a" x1="52.7" x2="133.4" y1="9.6" y2="149.3" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#9ca3af"/>
      <stop offset=".5" stop-color="#9ca3af"/>
      <stop offset="1" stop-color="#6b7280"/>
    </linearGradient>
    <linearGradient id="b" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#6b7280"/>
      <stop offset=".5" stop-color="#6b7280"/>
      <stop offset="1" stop-color="#4b5563"/>
    </linearGradient>

    <!-- hail (exactly like your reference) -->
    <linearGradient id="c" x1="6.5" x2="18.5" y1="2.1" y2="22.9" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#86c3db"/>
      <stop offset=".5" stop-color="#86c3db"/>
      <stop offset="1" stop-color="#5eafcf"/>
    </linearGradient>
    <linearGradient xlink:href="#c" id="d" x1="62.5" x2="74.5" y1="2.1" y2="22.9"/>
    <linearGradient xlink:href="#c" id="e" x1="118.5" x2="130.5" y1="2.1" y2="22.9"/>

    <!-- lightning gradient (from your sample) -->
    <linearGradient id="lg" x1="8.7" x2="80.9" y1="17.1" y2="142.1" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f7b23b"/>
      <stop offset=".5" stop-color="#f7b23b"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>

    <symbol id="g" viewBox="0 0 200.3 126.1">
      <path fill="url(#a)" stroke="#848b98" stroke-miterlimit="10"
        d="M.5 93.2a32.4 32.4 0 0032.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 006.5-68.9 32.4 32.4 0 00-48.5-33 48.6 48.6 0 00-88.6 37.1h-1.5A32.4 32.4 0 00.5 93.1Z"/>
    </symbol>

    <symbol id="h" viewBox="0 0 350 222">
      <path fill="url(#b)" stroke="#5b6472" stroke-miterlimit="10" stroke-width="6"
        d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"/>
    </symbol>

    <symbol id="f" overflow="visible" viewBox="0 0 398 222">
      <use xlink:href="#g" width="200.3" height="126.1" transform="translate(198 27)">
        <animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"/>
      </use>
      <use xlink:href="#h" width="350" height="222">
        <animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"/>
      </use>
    </symbol>

    <!-- hail symbol (exactly as reference) -->
    <symbol id="i" overflow="visible" viewBox="0 0 137 25">
      <path fill="url(#c)" stroke="#86c3db" stroke-miterlimit="10"
        d="M12.5.5a12 12 0 1012 12 12 12 0 00-12-12Z" opacity="0">
        <animateTransform id="x1" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s"
          keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"/>
        <animate id="y1" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s"
          keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"/>
      </path>

      <path fill="url(#d)" stroke="#86c3db" stroke-miterlimit="10"
        d="M68.5.5a12 12 0 1012 12 12 12 0 00-12-12Z" opacity="0">
        <animateTransform id="x2" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s"
          keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"/>
        <animate id="y2" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s"
          keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"/>
      </path>

      <path fill="url(#e)" stroke="#86c3db" stroke-miterlimit="10"
        d="M124.5.5a12 12 0 1012 12 12 12 0 00-12-12Z" opacity="0">
        <animateTransform id="x3" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s"
          keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"/>
        <animate id="y3" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s"
          keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"/>
      </path>
    </symbol>

    <!-- thinner lightning -->
    <symbol id="kThin" viewBox="0 0 102.7 186.8">
      <path
        fill="url(#lg)"
        stroke="#f6a823"
        stroke-miterlimit="10"
        stroke-width="2"
        d="m34.8 2-32 96h32l-16 80 80-112h-48l32-64h-48z"
        opacity="1"
      >
        <animate
          id="lx1"
          attributeName="opacity"
          begin="0s; lx1.end+.67s"
          dur="1.33s"
          keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
          values="1; 1; 0; 1; 0; 1; 0; 1"
        />
      </path>
    </symbol>
  </defs>

  <!-- clouds -->
  <use xlink:href="#f" width="398" height="222" transform="translate(68.84 145)"/>

  <!-- hail: position + speed exactly as your reference -->
  <use xlink:href="#i" width="137" height="25" transform="translate(187.5 349.5)"/>

  <!-- lightning -->
  <use xlink:href="#kThin" width="102.7" height="186.7" transform="translate(205.23 291)"/>
</svg>`,
  },
  99: {
    text: "Bouřka s velkými kroupami",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
  <defs>
    <!-- clouds -->
    <linearGradient id="a" x1="52.7" x2="133.4" y1="9.6" y2="149.3" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#9ca3af"/>
      <stop offset=".5" stop-color="#9ca3af"/>
      <stop offset="1" stop-color="#6b7280"/>
    </linearGradient>

    <linearGradient id="b" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#6b7280"/>
      <stop offset=".5" stop-color="#6b7280"/>
      <stop offset="1" stop-color="#4b5563"/>
    </linearGradient>

    <!-- hail gradient (stejný jako reference) -->
    <linearGradient id="c" x1="6.5" x2="18.5" y1="2.1" y2="22.9" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#86c3db"/>
      <stop offset=".5" stop-color="#86c3db"/>
      <stop offset="1" stop-color="#5eafcf"/>
    </linearGradient>

    <!-- lightning gradient -->
    <linearGradient id="lg" x1="8.7" x2="80.9" y1="17.1" y2="142.1" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f7b23b"/>
      <stop offset=".5" stop-color="#f7b23b"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>

    <symbol id="g" viewBox="0 0 200.3 126.1">
      <path fill="url(#a)" stroke="#848b98" stroke-miterlimit="10"
        d="M.5 93.2a32.4 32.4 0 0032.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 006.5-68.9 32.4 32.4 0 00-48.5-33 48.6 48.6 0 00-88.6 37.1h-1.5A32.4 32.4 0 00.5 93.1Z"/>
    </symbol>

    <symbol id="h" viewBox="0 0 350 222">
      <path fill="url(#b)" stroke="#5b6472" stroke-miterlimit="10" stroke-width="6"
        d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"/>
    </symbol>

    <symbol id="f" overflow="visible" viewBox="0 0 398 222">
      <use xlink:href="#g" width="200.3" height="126.1" transform="translate(198 27)">
        <animateTransform attributeName="transform" dur="6s" repeatCount="indefinite"
          type="translate" values="-9 0; 9 0; -9 0"/>
      </use>
      <use xlink:href="#h" width="350" height="222">
        <animateTransform attributeName="transform" dur="6s" repeatCount="indefinite"
          type="translate" values="-18 0; 18 0; -18 0"/>
      </use>
    </symbol>

    <!-- VĚTŠÍ KROUPY -->
    <symbol id="hailBig" overflow="visible" viewBox="0 0 137 25">

      <circle cx="12.5" cy="12.5" r="16" fill="url(#c)" stroke="#86c3db" stroke-miterlimit="10" opacity="0">
        <animateTransform id="x1" additive="sum" attributeName="transform"
          begin="0s; x1.end+.42s" dur=".58s"
          keyTimes="0; .71; 1"
          type="translate"
          values="0 -46; 0 86; -18 74"/>
        <animate id="y1" attributeName="opacity"
          begin="0s; y1.end+.42s"
          dur=".58s"
          keyTimes="0; .14; .71; 1"
          values="0; 1; 1; 0"/>
      </circle>

      <circle cx="68.5" cy="12.5" r="16" fill="url(#c)" stroke="#86c3db" stroke-miterlimit="10" opacity="0">
        <animateTransform id="x2" additive="sum" attributeName="transform"
          begin=".67s; x2.end+.42s" dur=".58s"
          keyTimes="0; .71; 1"
          type="translate"
          values="0 -46; 0 86; 0 74"/>
        <animate id="y2" attributeName="opacity"
          begin=".67s; y2.end+.42s"
          dur=".58s"
          keyTimes="0; .14; .71; 1"
          values="0; 1; 1; 0"/>
      </circle>

      <circle cx="124.5" cy="12.5" r="16" fill="url(#c)" stroke="#86c3db" stroke-miterlimit="10" opacity="0">
        <animateTransform id="x3" additive="sum" attributeName="transform"
          begin=".33s; x3.end+.42s" dur=".58s"
          keyTimes="0; .71; 1"
          type="translate"
          values="0 -46; 0 86; 18 74"/>
        <animate id="y3" attributeName="opacity"
          begin=".33s; y3.end+.42s"
          dur=".58s"
          keyTimes="0; .14; .71; 1"
          values="0; 1; 1; 0"/>
      </circle>

    </symbol>

    <!-- thinner lightning -->
    <symbol id="kThin" viewBox="0 0 102.7 186.8">
      <path
        fill="url(#lg)"
        stroke="#f6a823"
        stroke-miterlimit="10"
        stroke-width="2"
        d="m34.8 2-32 96h32l-16 80 80-112h-48l32-64h-48z">
        <animate attributeName="opacity"
          begin="0s; lx1.end+.67s"
          dur="1.33s"
          keyTimes="0;.38;.5;.63;.75;.86;.94;1"
          values="1;1;0;1;0;1;0;1"
          id="lx1"/>
      </path>
    </symbol>

  </defs>

  <!-- clouds -->
  <use xlink:href="#f" width="398" height="222" transform="translate(68.84 145)"/>

  <!-- větší kroupy -->
  <use xlink:href="#hailBig" width="137" height="25" transform="translate(187.5 349.5)"/>

  <!-- lightning -->
  <use xlink:href="#kThin" width="102.7" height="186.7" transform="translate(205.23 291)"/>

</svg>`,
  },
};
