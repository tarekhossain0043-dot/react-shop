import {
  ArrowRight,
  Heart,
  SearchX,
  SearchXIcon,
  ShoppingCart,
} from "lucide-react";
import feature_pro_1 from "../assets/feature-pro-1.svg";
import feature_pro_2 from "../assets/feature-pro-2.svg";
import feature_pro_3 from "../assets/feature-pro-3.svg";
import feature_pro_4 from "../assets/feature-pro-4.svg";

export const sub_product = [
  {
    id: "48rjfhwurf",
    productImg: feature_pro_1,
    productBg: "#C4C4C4",
  },
  {
    id: "85ifjru1r",
    productImg: feature_pro_2,
    productBg: "#C4C4C4",
  },
  {
    id: "094u7fjgu2",
    productImg: feature_pro_3,
    productBg: "#C4C4C4",
  },
];
export const featureProduct = [
  {
    id: "a4xdgye2sic9edgh",
    img: feature_pro_1,
    title: "Cantilever chair",
    bio: "Code - Y523201",
    icons: [ShoppingCart, Heart, SearchXIcon],
    color_screem: [
      {
        id: "4dt8uryfhe1gejmvnfy6rjf",
        color1: "#05E6B7",
        color2: "#F701A8",
        color3: "#00009D",
      },
    ],
    price: 42.0,
  },
  {
    id: "85jfdufokhlkmndrefvxvfg",
    img: feature_pro_2,
    title: "Cantilever chair",
    bio: "Code - Y523201",
    icons: [ShoppingCart, Heart, SearchXIcon],
    color_screem: [
      {
        id: "0oirufhbnavxre4dgdplkfit_ifr",
        color1: "#05E6B7",
        color2: "#F701A8",
        color3: "#FFEAC1",
      },
    ],
    price: 42.0,
  },
  {
    id: "5r8futugjn",
    img: feature_pro_3,
    title: "Cantilever chair",
    bio: "Code - Y523201",
    icons: [ShoppingCart, Heart, SearchXIcon],
    color_screem: [
      {
        id: 1,
        color1: "#05E6B7",
        color2: "#F701A8",
        color3: "#00009D",
      },
    ],
    price: 42.0,
  },
  {
    id: "48kgj1hqjksofkjyui",
    img: feature_pro_4,
    title: "Cantilever chair",
    bio: "Code - Y523201",
    icons: [ShoppingCart, Heart, SearchXIcon],
    color_screem: [
      {
        id: 1,
        color1: "#05E6B7",
        color2: "#F701A8",
        color3: "#00009D",
      },
    ],
    price: 42.0,
  },
];

// product tabs
export const productTabs = [
  {
    id: "description",
    label: "Description",
    title: "Varius tempor.",
    content:
      "Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
    desc_title: "More details",
    Icon: ArrowRight,
    desc: [
      "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
      "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
      "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
      "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
    ],
  },
  {
    id: "additionalInfo",
    label: "Additional Info",
    weight: "0.34 kg",
    dimensions: "123 x 175 x 70cm",
    size: ["with non-handle", "with 2-handle"],
  },
  {
    id: "reviews",
    label: "Reviews",
  },
  {
    id: "video",
    label: "Video",
  },
];
