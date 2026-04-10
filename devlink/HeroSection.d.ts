import * as React from "react";
import * as Types from "./types";

declare function HeroSection(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  link?: Types.Basic.Link;
  text1?: React.ReactNode;
  text2?: React.ReactNode;
  title?: React.ReactNode;
}): React.JSX.Element;
