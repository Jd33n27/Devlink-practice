"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import BlockContainer from "./_Builtin/BlockContainer";
import Heading from "./_Builtin/Heading";
import Image from "./_Builtin/Image";
import Paragraph from "./_Builtin/Paragraph";
import Section from "./_Builtin/Section";

export function Features({
  as: _Component = Section,
  image1 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8ca3f225e1c5c6aeb20_Daily-digest.jpg",
  image2 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8c92b27c9fce9c157ec_AI-assistant.jpg",
  image3 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8c9fdc6dc8b4971c8c1_Checker.jpg",
  image4 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8c902eaafa25cd741ed_Calculator.jpg",
  image5 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8c9a62866423649c30e_Time-zoner.jpg",
  image6 = "https://cdn.prod.website-files.com/69283f7b08762ce878217127/69d4f8ca813eeecb31010a8b_Connector.jpg",
  text1 = "Confusion is over. Daily Digest makes your calendar easy to use so you know exactly what's next.",
  text2 = "No writing required, AI will take care of your rescheduling messages.",
  text3 = "Checker will find & resolve every conflict whatever orbit you're on.",
  text4 = "No more math for you. Temporal field, orbital radiation and numbers, Calculator does it all.",
  text5 = "You'd expect Calculator & Checker to do this. This is another feature.",
  text6 = "No more socialization required. Connectors finds and books the people you need to meet.",
  title1 = "Features for every need",
  title2 = "Daily Digest",
  title3 = "AIassistant",
  title4 = "Checker",
  title5 = "Calculator",
  title6 = "Time Zoner",
  title7 = "Connector",
}) {
  return (
    <_Component
      grid={{
        type: "section",
      }}
      id={_utils.cx(_styles, "features")}
      tag="section"
    >
      <BlockContainer
        className={_utils.cx(_styles, "container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <Heading className={_utils.cx(_styles, "heading")} tag="h2">
          {title1}
        </Heading>
        <Block className={_utils.cx(_styles, "div-block")} tag="div">
          <Block
            className={_utils.cx(_styles, "card")}
            id={_utils.cx(
              _styles,
              "w-node-b2ae854b-35d9-4744-e107-03ff7fd278e9-7fd278e4"
            )}
            tag="div"
          >
            <Image
              alt=""
              className={_utils.cx(_styles, "feature-image")}
              height="auto"
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278ea-7fd278e4"
              )}
              loading="lazy"
              src={image1}
              width="auto"
            />
            <Heading
              className={_utils.cx(_styles, "card-title")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278eb-7fd278e4"
              )}
              tag="h3"
            >
              {title2}
            </Heading>
            <Paragraph
              className={_utils.cx(_styles, "card-paragraph")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278ed-7fd278e4"
              )}
            >
              {text1}
            </Paragraph>
          </Block>
          <Block
            className={_utils.cx(_styles, "card")}
            id={_utils.cx(
              _styles,
              "w-node-b2ae854b-35d9-4744-e107-03ff7fd278ef-7fd278e4"
            )}
            tag="div"
          >
            <Image
              alt=""
              className={_utils.cx(_styles, "feature-image")}
              height="auto"
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278f0-7fd278e4"
              )}
              loading="lazy"
              src={image2}
              width="auto"
            />
            <Heading
              className={_utils.cx(_styles, "card-title")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278f1-7fd278e4"
              )}
              tag="h3"
            >
              {title3}
            </Heading>
            <Paragraph
              className={_utils.cx(_styles, "card-paragraph")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278f3-7fd278e4"
              )}
            >
              {text2}
            </Paragraph>
          </Block>
          <Block
            className={_utils.cx(_styles, "card")}
            id={_utils.cx(
              _styles,
              "w-node-b2ae854b-35d9-4744-e107-03ff7fd278f5-7fd278e4"
            )}
            tag="div"
          >
            <Image
              alt=""
              className={_utils.cx(_styles, "feature-image")}
              height="auto"
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278f6-7fd278e4"
              )}
              loading="lazy"
              src={image3}
              width="auto"
            />
            <Heading
              className={_utils.cx(_styles, "card-title")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278f7-7fd278e4"
              )}
              tag="h3"
            >
              {title4}
            </Heading>
            <Paragraph
              className={_utils.cx(_styles, "card-paragraph")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278f9-7fd278e4"
              )}
            >
              {text3}
            </Paragraph>
          </Block>
          <Block
            className={_utils.cx(_styles, "card")}
            id={_utils.cx(
              _styles,
              "w-node-b2ae854b-35d9-4744-e107-03ff7fd278fb-7fd278e4"
            )}
            tag="div"
          >
            <Image
              alt=""
              className={_utils.cx(_styles, "feature-image")}
              height="auto"
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278fc-7fd278e4"
              )}
              loading="lazy"
              src={image4}
              width="auto"
            />
            <Heading
              className={_utils.cx(_styles, "card-title")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278fd-7fd278e4"
              )}
              tag="h3"
            >
              {title5}
            </Heading>
            <Paragraph
              className={_utils.cx(_styles, "card-paragraph")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd278ff-7fd278e4"
              )}
            >
              {text4}
            </Paragraph>
          </Block>
          <Block
            className={_utils.cx(_styles, "card")}
            id={_utils.cx(
              _styles,
              "w-node-b2ae854b-35d9-4744-e107-03ff7fd27901-7fd278e4"
            )}
            tag="div"
          >
            <Image
              alt=""
              className={_utils.cx(_styles, "feature-image")}
              height="auto"
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd27902-7fd278e4"
              )}
              loading="lazy"
              src={image5}
              width="auto"
            />
            <Heading
              className={_utils.cx(_styles, "card-title")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd27903-7fd278e4"
              )}
              tag="h3"
            >
              {title6}
            </Heading>
            <Paragraph
              className={_utils.cx(_styles, "card-paragraph")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd27905-7fd278e4"
              )}
            >
              {text5}
            </Paragraph>
          </Block>
          <Block
            className={_utils.cx(_styles, "card")}
            id={_utils.cx(
              _styles,
              "w-node-b2ae854b-35d9-4744-e107-03ff7fd27907-7fd278e4"
            )}
            tag="div"
          >
            <Image
              alt=""
              className={_utils.cx(_styles, "feature-image")}
              height="auto"
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd27908-7fd278e4"
              )}
              loading="lazy"
              src={image6}
              width="auto"
            />
            <Heading
              className={_utils.cx(_styles, "card-title")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd27909-7fd278e4"
              )}
              tag="h3"
            >
              {title7}
            </Heading>
            <Paragraph
              className={_utils.cx(_styles, "card-paragraph")}
              id={_utils.cx(
                _styles,
                "w-node-b2ae854b-35d9-4744-e107-03ff7fd2790b-7fd278e4"
              )}
            >
              {text6}
            </Paragraph>
          </Block>
        </Block>
      </BlockContainer>
    </_Component>
  );
}
