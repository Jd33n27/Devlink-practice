"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import BlockContainer from "./_Builtin/BlockContainer";
import Heading from "./_Builtin/Heading";
import Image from "./_Builtin/Image";
import Section from "./_Builtin/Section";

export function TrustedBy({
  as: _Component = Section,
  image1 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8d53007ba1997cdabac_SpaceX.svg",
  image2 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8d5e082e6da043de4ac_United-Federation-of-Planets.svg",
  image3 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8d503a686f0acf5262a_Avenue-5.svg",
  image4 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8d5fe9c4f4eb75629cb_NASA.svg",
  image5 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8d58c099f6b7adaec6d_Space-dot-com.svg",
  image6 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8d5a88f8ca629bbb5a2_ESA.svg",
  title = "Trusted by",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Heading
        className={_utils.cx(_styles, "heading-2", "logo-holder-text")}
        tag="h3"
      >
        {title}
      </Heading>
      <BlockContainer
        className={_utils.cx(_styles, "container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <Block className={_utils.cx(_styles, "logo-holder")} tag="div">
          <Image
            alt=""
            height="auto"
            id={_utils.cx(
              _styles,
              "w-node-_922dc275-9f24-9a2f-fb6f-ce225ac4f9b8-5ac4f9b3"
            )}
            loading="lazy"
            src={image1}
            width="auto"
          />
          <Image
            alt=""
            height="auto"
            id={_utils.cx(
              _styles,
              "w-node-_922dc275-9f24-9a2f-fb6f-ce225ac4f9b9-5ac4f9b3"
            )}
            loading="lazy"
            src={image2}
            width="auto"
          />
          <Image
            alt=""
            height="auto"
            loading="lazy"
            src={image3}
            width="auto"
          />
          <Image
            alt=""
            height="auto"
            id={_utils.cx(
              _styles,
              "w-node-_922dc275-9f24-9a2f-fb6f-ce225ac4f9bb-5ac4f9b3"
            )}
            loading="lazy"
            src={image4}
            width="auto"
          />
          <Image
            alt=""
            height="auto"
            loading="lazy"
            src={image5}
            width="auto"
          />
          <Image
            alt=""
            height="auto"
            id={_utils.cx(
              _styles,
              "w-node-_922dc275-9f24-9a2f-fb6f-ce225ac4f9bd-5ac4f9b3"
            )}
            loading="lazy"
            src={image6}
            width="auto"
          />
        </Block>
      </BlockContainer>
    </_Component>
  );
}
