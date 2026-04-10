"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Icon from "./_Builtin/Icon";
import Image from "./_Builtin/Image";
import NavbarBrand from "./_Builtin/NavbarBrand";
import NavbarButton from "./_Builtin/NavbarButton";
import NavbarContainer from "./_Builtin/NavbarContainer";
import NavbarLink from "./_Builtin/NavbarLink";
import NavbarMenu from "./_Builtin/NavbarMenu";
import NavbarWrapper from "./_Builtin/NavbarWrapper";

export function Navbar({ as: _Component = NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      config={{
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
        animation: "default",
        collapse: "medium",
      }}
      tag="div"
    >
      <NavbarContainer className={_utils.cx(_styles, "container")} tag="div">
        <NavbarBrand
          options={{
            href: "#",
          }}
        >
          <Image
            alt=""
            className={_utils.cx(_styles, "logo")}
            height="auto"
            loading="lazy"
            src="https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8b78adf0daf2b8ab8ec_Calendar-logo.svg"
            width="auto"
          />
        </NavbarBrand>
        <NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          role="navigation"
          tag="nav"
        >
          <NavbarLink
            className={_utils.cx(_styles, "nav-link")}
            options={{
              href: "#21d0715b-d3d7-2443-4a09-c91299a14e1d",
            }}
          >
            {"Features"}
          </NavbarLink>
          <NavbarLink
            className={_utils.cx(_styles, "nav-link")}
            options={{
              href: "#4b4496d3-5827-9508-a267-14384365f409",
            }}
          >
            {"Request a demo"}
          </NavbarLink>
          <NavbarLink
            className={_utils.cx(_styles, "nav-link", "cta")}
            options={{
              href: "#",
              preload: "none",
            }}
          >
            {"Sign up for the waitlist"}
          </NavbarLink>
        </NavbarMenu>
        <NavbarButton className={_utils.cx(_styles)} tag="div">
          <Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </NavbarButton>
      </NavbarContainer>
    </_Component>
  );
}
