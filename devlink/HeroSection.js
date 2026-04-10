"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import BlockContainer from "./_Builtin/BlockContainer";
import Heading from "./_Builtin/Heading";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import Paragraph from "./_Builtin/Paragraph";
import Section from "./_Builtin/Section";

export function HeroSection({
  as: _Component = Section,
  image = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8b8e676c763bbd0ae82_Calendar-app.jpg",

  link = {
    href: "#4b4496d3-5827-9508-a267-14384365f409",
  },

  text1 = "The scheduling tool to help you stay organized on Earth & beyond. With multi-device sync, including those on spacecraft, you'll never miss a meeting or important event no matter where you are in the galaxy.",
  text2 = "Join the waitlist for early access",
  title = "A calendar for space travel",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <BlockContainer
        className={_utils.cx(_styles, "container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <Heading className={_utils.cx(_styles, "big-heading")} tag="h1">
          {title}
        </Heading>
        <Paragraph className={_utils.cx(_styles, "hero-paragraph")}>
          {text1}
        </Paragraph>
        <Link
          block=""
          button={true}
          className={_utils.cx(_styles, "button")}
          options={{
            href: "#47ed19e9-a82e-d67d-1de8-b7bd1f5b8382",
          }}
        >
          {text2}
        </Link>
        <Image
          alt=""
          className={_utils.cx(_styles, "image")}
          height="auto"
          loading="lazy"
          src={image}
          width="auto"
        />
      </BlockContainer>
    </_Component>
  );
}
