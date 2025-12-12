import { Moon, Sun } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import type { Emotion, ILanguageOption, INavItem, IThemeOption } from "./types";

export const BACKEND_URL = "iojiojo/";
export const LANG_KEY = "i18nextLng";
export const THEME_KEY = "theme";

export const MAIN_NAV_DATA: INavItem[] = [
  {
    title: "mainNav.home",
    href: "/",
  },
  {
    title: "mainNav.about",
    href: "/products",
  },
  {
    title: "mainNav.exemple",
    href: "/Team",
  },
  {
    title: "mainNav.team",
    href: "/Team",
  },
  {
    title: "mainNav.faq",
    href: "/faq",
  },
];

export const LANG_OPTIONS: ILanguageOption[] = [
  {
    title: "lang.en",
    icon: "/icons/english-flag.svg",
    value: "en",
  },
  {
    title: "lang.fr",
    icon: "/icons/french-flag.svg",
    value: "fr",
  },
];

export const THEME_OPTIONS: IThemeOption[] = [
  {
    title: "theme.light",
    icon: Sun,
    value: "light",
  },
  {
    title: "theme.dark",
    icon: Moon,
    value: "dark",
  },
];

export const TEXT_ELEMENTS =
  "p, span, a, h1, h2, h3, h4, h5, h6, url, pre, a, b, i, span, strong, small";

export const INTERACTIVE_ELEMENTS =
  "a, button, input, textarea, select, label, [role='button'], [role='link'], .interactive-list";

export const useScrollDefaultOptions = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  const start = isMobile ? "+=25 88%" : isTablet ? "+=50 74%" : "+=50 81%";

  return {
    start,
    end: "bottom 30%",
    toggleActions: "play reverse play reverse",
  };
};

export const EMOTIONS_AVAILABLE: Emotion[] = [
  {
    emoji: "🥲",
    labelFr: "Joie libératrice",
    constant: "LIBERATING_JOY",
    labelEn: "Liberating Joy",
  },
  {
    emoji: "😢",
    labelFr: "Tristesse",
    constant: "SADNESS",
    labelEn: "Sadness",
  },
  {
    emoji: "🤢",
    labelFr: "Dégoût",
    constant: "DISGUST",
    labelEn: "Disgust",
  },
  {
    emoji: "😡",
    labelFr: "Colère explosive",
    constant: "EXPLOSIVE_ANGER",
    labelEn: "Explosive Anger",
  },
  {
    emoji: "🤨",
    labelFr: "Ironie détachée",
    constant: "DETACHED_IRONY",
    labelEn: "Detached Irony",
  },
  {
    emoji: "😂",
    labelFr: "Hilarant",
    constant: "HILARIOUS",
    labelEn: "Hilarious",
  },
  {
    emoji: "🤔",
    labelFr: "Poétique",
    constant: "POETIC",
    labelEn: "Poetic",
  },
  {
    emoji: "🕳️",
    labelFr: "Vide existentiel",
    constant: "EXISTENTIAL_VOID",
    labelEn: "Existential Void",
  },
  {
    emoji: "🙂",
    labelFr: "Acceptation",
    constant: "ACCEPTANCE",
    labelEn: "Acceptance",
  },
  {
    emoji: "🫣",
    labelFr: "Confus",
    constant: "CONFUSED",
    labelEn: "Confused",
  },
];
