

// Used to paint background and others shapes
export const defs: Record<string, string> = {
	"url(#purple-to-green-45)": (
		`<linearGradient id="purple-to-green-45" x1="0.105" y1="1.077" x2="0.933" y2="-0.048" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#50ffb1" />
			<stop offset="0.094" stop-color="#4fb286" />
			<stop offset="0.665" stop-color="#9381ff" />
			<stop offset="1" stop-color="#ff50f8" />
		</linearGradient>`
	),
	"url(#yellow-to-pink-45)": (
		`<linearGradient id="yellow-to-pink-45" x1="1.015" y1="-0.888" x2="-0.045" y2="1.333" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#cb429f"/>
			<stop offset="1" stop-color="#c4d6b0"/>
		</linearGradient>`
	),
	"url(#blue-to-pink-vertical)": (
		`<linearGradient id="blue-to-pink-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#8e94f2"/>
			<stop offset="0.148" stop-color="#9fa0ff"/>
			<stop offset="0.271" stop-color="#ada7ff"/>
			<stop offset="0.419" stop-color="#bbadff"/>
			<stop offset="0.586" stop-color="#cbb2fe"/>
			<stop offset="0.744" stop-color="#dab6fc"/>
			<stop offset="0.892" stop-color="#ddbdfc"/>
			<stop offset="1" stop-color="#e0c3fc"/>
  		</linearGradient>`
	),
	"url(#rainbow-vertical)": (
		`<linearGradient id="rainbow-vertical" x1="1" y1="0.008" x2="0.014" y2="0.979" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#ffc6ff"/>
			<stop offset="0.148" stop-color="#bdb2ff"/>
			<stop offset="0.276" stop-color="#a0c4ff"/>
			<stop offset="0.435" stop-color="#9bf6ff"/>
			<stop offset="0.567" stop-color="#caffbf"/>
			<stop offset="0.685" stop-color="#fdffb6"/>
			<stop offset="0.857" stop-color="#ffd6a5"/>
			<stop offset="1" stop-color="#ffadad"/>
		</linearGradient>`
	),
	"url(#rainbow-circle)": (
		`<radialGradient id="rainbow-circle" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#ffc6ff"/>
			<stop offset="0.099" stop-color="#fdffb6" stop-opacity="0.988"/>
			<stop offset="0.217" stop-color="#bdb2ff"/>
			<stop offset="0.335" stop-color="#adbcff"/>
			<stop offset="0.458" stop-color="#a0c4ff"/>
			<stop offset="0.596" stop-color="#9bf6ff"/>
			<stop offset="0.729" stop-color="#caffbf"/>
			<stop offset="0.857" stop-color="#ffd6a5"/>
			<stop offset="1" stop-color="#ffadad"/>
		</radialGradient>`
	),
	"url(#rainbow-circle-transparent)": (
		`<radialGradient id="rainbow-circle-transparent" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#ffc6ff" stop-opacity="0.82"/>
			<stop offset="0.099" stop-color="#fdffb6" stop-opacity="0.565"/>
			<stop offset="0.148" stop-color="#bdb2ff" stop-opacity="0.678"/>
			<stop offset="0.153" stop-color="#adbcff" stop-opacity="0.718"/>
			<stop offset="0.276" stop-color="#a0c4ff" stop-opacity="0.749"/>
			<stop offset="0.435" stop-color="#9bf6ff" stop-opacity="0.745"/>
			<stop offset="0.567" stop-color="#caffbf" stop-opacity="0.765"/>
			<stop offset="0.857" stop-color="#ffd6a5" stop-opacity="0.745"/>
			<stop offset="1" stop-color="#ffadad" stop-opacity="0.82"/>
		</radialGradient>`
	),
	"url(#cyan-to-green-vertical)": (
		`<linearGradient id="cyan-to-green-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#67f8fd"/>
			<stop offset="1" stop-color="#d2fcaf"/>
		</linearGradient>`
	),
	"url(#white-to-yellow-vertical)": (
		`<linearGradient id="white-to-yellow-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
		<stop offset="0" stop-color="#fff"/>
		<stop offset="1" stop-color="#e8eb88"/>
	  </linearGradient>`
	),
    "url(#female-cycloid-filter)": (
        `<filter id="female-cycloid-filter" x="34.642" y="20.887" width="26.488" height="22.729" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
        </filter>`
    ),
    "url(#male-cycloid-filter)": (
        `<filter id="male-cycloid-filter" x="34.643" y="20.586" width="26.284" height="24.26" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
        </filter>`
    ),
	"url(#male-cycloid-top-filter)": (
        `<filter id="male-cycloid-top-filter" x="35.643" y="19.577" width="24.964" height="23.268" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#small-male-cycloid-filter)": (
        `<filter id="small-male-cycloid-filter" x="34.643" y="20.586" width="26.284" height="24.26" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
        </filter>`
    ),
	"url(#black-male-cycloid-filter)": (
        `<filter id="black-male-cycloid-filter" x="35.566" y="22.915" width="25.906" height="23.623" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#picasso-big-eye-filter)": (
        `<filter id="picasso-big-eye-filter" x="37.643" y="21.577" width="24.964" height="23.268" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#picasso-small-eye-filter)": (
        `<filter id="picasso-small-eye-filter" x="34.462" y="26.542" width="21.656" height="20.781" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur-2"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur-2"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#blue-pink-purple-45)": (
        `<linearGradient id="blue-pink-purple-45" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#7089f9"/>
			<stop offset="0.483" stop-color="#e588d0"/>
			<stop offset="1" stop-color="#9c65fa"/>
		</linearGradient>`
    ),
	"url(#green-pink-purple-45)": (
        `<linearGradient id="green-pink-purple-45" x1="0.024" y1="0.045" x2="0.98" y2="0.976" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#68fced"/>
			<stop offset="0.474" stop-color="#eeb7fe"/>
			<stop offset="1" stop-color="#9c65fa"/>
		</linearGradient>`
    ),
	"url(#red-to-pink-vertical)": (
        `<linearGradient id="red-to-pink-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#ff5ba2"/>
			<stop offset="1" stop-color="#ed45f6"/>
		</linearGradient>`
    ),
	"url(#fade-pink-to-green-vertical)": (
        `<linearGradient id="fade-pink-to-green-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#dcc6ff"/>
			<stop offset="1" stop-color="#63f6b4"/>
		</linearGradient>`
    ),
	"url(#small-eyes-filter)": (
        `<filter id="small-eyes-filter" x="33.642" y="27.524" width="21.683" height="20.087" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#small-eyes-makeup-filter)": (
        `<filter id="small-eyes-makeup-filter" x="33.642" y="27.524" width="21.683" height="20.087" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#mouse-filter)": (
        `<filter id="mouse-filter" x="33.642" y="27.524" width="21.683" height="20.087" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#small-mouse-filter)": (
        `<filter id="small-mouse-filter" x="37.566" y="32.676" width="21.655" height="20.857" filterUnits="userSpaceOnUse">
			<feOffset dy="3" input="SourceAlpha"/>
			<feGaussianBlur stdDeviation="3" result="blur-2"/>
			<feFlood flood-opacity="0.161"/>
			<feComposite operator="in" in2="blur-2"/>
			<feComposite in="SourceGraphic"/>
		</filter>`
    ),
	"url(#green-yellow-orange-vertical)": (
        `<linearGradient id="green-yellow-orange-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#c6ffdd"/>
			<stop offset="0.498" stop-color="#fbd786"/>
			<stop offset="1" stop-color="#f7797d"/>
		</linearGradient>`
    ),
	"url(#blue-purple-red-vertical)": (
        `<linearGradient id="blue-purple-red-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#12c2e9"/>
			<stop offset="0.488" stop-color="#c471ed"/>
			<stop offset="1" stop-color="#f64f69"/>
		</linearGradient>`
    ),
	"url(#blue-to-blue-45)": (
        `<linearGradient id="blue-to-blue-45" x1="1.015" y1="-0.888" x2="-0.045" y2="1.333" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#6f73d2"/>
			<stop offset="1" stop-color="#83c9f4"/>
		</linearGradient>`
    ),
	"url(#purple-to-salmon-45)": (
        `<linearGradient id="purple-to-salmon-45" x1="1.015" y1="-0.888" x2="-0.045" y2="1.333" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#6f73d2"/>
			<stop offset="1" stop-color="#ffafbd"/>
		</linearGradient>`
    ),
	"url(#pink-to-purple-rounded)": (
        `<radialGradient id="pink-to-purple-rounded" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#eeaeca" stop-opacity="0.451"/>
			<stop offset="1" stop-color="#94bbe9" stop-opacity="0.451"/>
		</radialGradient>`
    ),
	"url(#blue-green-yellow-vertical)": (
        `<linearGradient id="blue-green-yellow-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#67f8fd"/>
			<stop offset="0.537" stop-color="#a0fad3"/>
			<stop offset="1" stop-color="#d2fcaf"/>
		</linearGradient>`
    ),
	"url(#purple-green-vertical)": (
        `<linearGradient id="purple-green-vertical" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
			<stop offset="0" stop-color="#74ebd5"/>
			<stop offset="1" stop-color="#acb6e5"/>
		</linearGradient>`
    ),
}
