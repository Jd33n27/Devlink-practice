"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import BlockContainer from "./_Builtin/BlockContainer";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import Section from "./_Builtin/Section";

export function Footer({
  as: _Component = Section,
  image = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8b78adf0daf2b8ab8ec_Calendar-logo.svg",

  link1 = {
    href: "#",
  },

  link2 = {
    href: "#",
  },

  link3 = {
    href: "#",
  },

  link4 = {
    href: "#",
  },

  link5 = {
    href: "#",
  },

  link6 = {
    href: "#",
  },

  text1 = "YouTube",
  text2 = "LinkedIn",
  text3 = "Twitter",
  text4 = "Facebook",
  text5 = "Instagram",
  text6 = "Dribbble",
  text7 = "Copyright © 2040, Calendar.All rights reserved",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-2")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <BlockContainer
        className={_utils.cx(_styles, "container", "centered")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <Image
          alt=""
          className={_utils.cx(_styles, "footer-logo")}
          height="auto"
          loading="lazy"
          src={image}
          width="auto"
        />
        <Block className={_utils.cx(_styles, "footer-link-block")} tag="div">
          <Link
            block=""
            button={false}
            className={_utils.cx(_styles, "footer-link")}
            options={link1}
          >
            {text1}
          </Link>
          <Link
            block=""
            button={false}
            className={_utils.cx(_styles, "footer-link")}
            options={link2}
          >
            {text2}
          </Link>
          <Link
            block=""
            button={false}
            className={_utils.cx(_styles, "footer-link")}
            options={link3}
          >
            {text3}
          </Link>
          <Link
            block=""
            button={false}
            className={_utils.cx(_styles, "footer-link")}
            options={link4}
          >
            {text4}
          </Link>
          <Link
            block=""
            button={false}
            className={_utils.cx(_styles, "footer-link")}
            options={link5}
          >
            {text5}
          </Link>
          <Link
            block=""
            button={false}
            className={_utils.cx(_styles, "footer-link")}
            options={link6}
          >
            {text6}
          </Link>
        </Block>
        <Block tag="div">{text7}</Block>
      </BlockContainer>
    </_Component>
  );
}
