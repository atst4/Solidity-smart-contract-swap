import { buildSize } from "../../config"
import { Accessory } from "../types"

export const backgroundStars: Accessory = {
  name: "Background stars",
  value: (
    `<g id="background-stars">
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(40.826 72.601) rotate(20)" fill="#edcb0f" opacity="0.846"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.951, 0.309, -0.309, -0.951, 66.056, 55.985)" fill="#f20ce9" opacity="0.886"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.839, 0.545, -0.545, -0.839, 68.112, 66.187)" fill="#535aff" opacity="0.902"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.839, 0.545, -0.545, -0.839, 49.524, 5.591)" fill="#535aff" opacity="0.902"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.839, 0.545, -0.545, -0.839, 12.75, 81.917)" fill="#535aff" opacity="0.902"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.848, 0.53, -0.53, -0.848, 84.059, 76.884)" fill="#f20ce9" opacity="0.929"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.848, 0.53, -0.53, -0.848, 80.637, 92.248)" fill="#f20ce9" opacity="0.929"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.848, 0.53, -0.53, -0.848, 51.17, 47.468)" fill="#f20ce9" opacity="0.929"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.978, 0.208, -0.208, -0.978, 5.895, 4.937)" fill="#edcb0f" opacity="0.953"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.978, 0.208, -0.208, -0.978, 83.99, 44.364)" fill="#edcb0f" opacity="0.953"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.978, 0.208, -0.208, -0.978, 73.859, 48.895)" fill="#edcb0f" opacity="0.953"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(0.07, 0.998, -0.998, 0.07, 86.541, 19.229)" fill="#f20ce9" opacity="0.976"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.899, -0.438, 0.438, -0.899, 34.236, 64.905)" fill="#535aff" opacity="0.995"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(47.006 88.553) rotate(-98)" fill="#f20ce9" opacity="0.931"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(14.473 66.395) rotate(-98)" fill="#f20ce9" opacity="0.931"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(0.105, 0.995, -0.995, 0.105, 47.703, 17.165)" fill="#f20ce9" opacity="0.961"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(0.105, 0.995, -0.995, 0.105, 10.587, 85.712)" fill="#f20ce9" opacity="0.961"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(0.921, 0.391, -0.391, 0.921, 84.125, 2.681)" fill="#535aff" opacity="0.932"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(79.004 27.094) rotate(107)" fill="#f20ce9" opacity="0.931"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(55.343 7.382) rotate(107)" fill="#f20ce9" opacity="0.931"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(43.867 27.566) rotate(107)" fill="#f20ce9" opacity="0.931"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(26.752 31.174) rotate(107)" fill="#f20ce9" opacity="0.931"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(24.579 58.285) rotate(107)" fill="#f20ce9" opacity="0.931"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(55.876 93.293) rotate(169)" fill="#f20ce9" opacity="0.996"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(23.287 44.62) rotate(169)" fill="#f20ce9" opacity="0.996"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(11.886 17.125) rotate(169)" fill="#f20ce9" opacity="0.996"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(89.599 63.059) rotate(169)" fill="#f20ce9" opacity="0.996"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.174, -0.985, 0.985, -0.174, 63.318, 12.333)" fill="#f20ce9" opacity="0.867"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.174, -0.985, 0.985, -0.174, 34.892, 49.875)" fill="#f20ce9" opacity="0.867"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.174, -0.985, 0.985, -0.174, 5.984, 38.679)" fill="#f20ce9" opacity="0.867"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.174, -0.985, 0.985, -0.174, 42.757, 55.529)" fill="#f20ce9" opacity="0.867"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(77.236 55.667) rotate(-149)" fill="#535aff" opacity="0.985"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(65.708 72.655) rotate(-149)" fill="#535aff" opacity="0.985"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(30.406 23.983) rotate(-149)" fill="#535aff" opacity="0.985"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(1.3 44.432) rotate(-149)" fill="#535aff" opacity="0.985"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(0.588, 0.809, -0.809, 0.588, 69.602, 20.139)" fill="#f20ce9" opacity="0.924"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(0.588, 0.809, -0.809, 0.588, 60.048, 41.394)" fill="#f20ce9" opacity="0.924"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(0.588, 0.809, -0.809, 0.588, 27.325, 70.32)" fill="#f20ce9" opacity="0.924"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(0.588, 0.809, -0.809, 0.588, 37.131, 2.238)" fill="#f20ce9" opacity="0.924"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(0.588, 0.809, -0.809, 0.588, 13.892, 26.324)" fill="#f20ce9" opacity="0.924"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.891, 0.454, -0.454, -0.891, 71.303, 80.411)" fill="#f20ce9" opacity="0.872"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.891, 0.454, -0.454, -0.891, 52.773, 37.817)" fill="#f20ce9" opacity="0.872"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.951, 0.309, -0.309, -0.951, 7.567, 60.456)" fill="#f20ce9" opacity="0.886"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.999, -0.052, 0.052, -0.999, 97.233, 74.841)" fill="#f20ce9" opacity="0.948"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="translate(96.975 18.94) rotate(48)" fill="#f20ce9" opacity="0.833"/>
			<path d="M4.3,5.264l.309.186L4.524,5.1,4.8,4.862l-.36-.031L4.3,4.5l-.14.332-.36.031L4.07,5.1l-.082.352Z" transform="matrix(-0.995, -0.105, 0.105, -0.995, 96.419, 26.161)" fill="#f20ce9" opacity="0.806"/>
		</g>`
  ),
  attr: ["below-dick"]
}

export const backgrounds: Accessory[] = [
  // { name: "transparent", value: "transparent"},
  { name: "light-pink", value: "#ffc6ff" },
  { name: "light-purple", value: "#bdb2ff" },
  { name: "light-blue", value: "#a0c4ff" },
  { name: "light-cyan", value: "#9bf6ff" },
  { name: "light-green", value: "#caffbf" },
  { name: "light-yellow", value: "#fdffb6" },
  { name: "light-orange", value: "#ffd6a5" },
  { name: "light-orange-red", value: "#ffadad" },
  { name: "green2", value: "#20d09a" },
  { name: "green", value: "#136F63" },
  { name: "purple", value: "rgba(117,42,219,0.89)" },
  { name: "rainbow-vertical", value: "url(#rainbow-vertical)" },
  { name: "yellow-to-pink-circle", value: "url(#yellow-to-pink-circle)" },
  { name: "purple-to-green-circle", value: "url(#purple-to-green-circle)" },
  { name: "shades-of-grey-vertical", value: "url(#shades-of-grey-vertical)" },
  { name: "galaxy", value: "rgba(0,0,0,0.89)", children: [backgroundStars] },
]


export const createBackground = (background: Accessory) => {
  const color = background.value

  return `<rect width="${buildSize}" height="${buildSize}" fill="${color}"/>`
}