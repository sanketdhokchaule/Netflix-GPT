/* eslint-disable no-unused-vars */
const lang = {
  en: {
    search: "Search",
    gptSearchPlaceHolder: "What would you like to watch today ?",
  },
  hindi: {
    search: "खोज",
    gptSearchPlaceHolder: "आज आप क्या देखना चाहेंगे ?",
  },
  spanish: {
    search: "buscar",
    gptSearchPlaceHolder: "¿Qué te gustaría ver hoy ?",
  },
};

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export default lang;
