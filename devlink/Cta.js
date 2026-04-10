"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./utils";
import Block from "./_Builtin/Block";
import BlockContainer from "./_Builtin/BlockContainer";
import FormBlockLabel from "./_Builtin/FormBlockLabel";
import FormButton from "./_Builtin/FormButton";
import FormErrorMessage from "./_Builtin/FormErrorMessage";
import FormForm from "./_Builtin/FormForm";
import FormSuccessMessage from "./_Builtin/FormSuccessMessage";
import FormTextInput from "./_Builtin/FormTextInput";
import FormWrapper from "./_Builtin/FormWrapper";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import Section from "./_Builtin/Section";

export function Cta({ as: _Component = Section }) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "w-node-_47ed19e9-a82e-d67d-1de8-b7bd1f5b8382-1f5b8382"
      )}
      grid={{
        type: "section",
      }}
      id={_utils.cx(_styles, "CTA")}
      tag="section"
    >
      <BlockContainer
        className={_utils.cx(_styles, "container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <FormWrapper>
          <Block
            className={_utils.cx(_styles, "form-content-wrapper")}
            tag="div"
          >
            <Heading tag="h2">{"Request a demo"}</Heading>
            <Paragraph>
              {
                "Experience the future of space travel and see for yourself how it can revolutionize your space travel planning."
              }
            </Paragraph>
          </Block>
          <FormForm
            className={_utils.cx(_styles, "form")}
            data-name="Email Form"
            id={_utils.cx(_styles, "email-form")}
            method="get"
            name="email-form"
          >
            <Block className={_utils.cx(_styles, "field-wrapper")} tag="div">
              <FormBlockLabel htmlFor="name">{"Name"}</FormBlockLabel>
              <FormTextInput
                autoFocus={false}
                className={_utils.cx(_styles, "text-field", "text-field")}
                data-name="Name"
                disabled={false}
                id={_utils.cx(_styles, "name")}
                maxLength={256}
                name="name"
                required={false}
                type="text"
              />
            </Block>
            <Block className={_utils.cx(_styles, "field-wrapper")} tag="div">
              <FormBlockLabel htmlFor="email">{"Email Address"}</FormBlockLabel>
              <FormTextInput
                autoFocus={false}
                className={_utils.cx(_styles, "text-field")}
                data-name="Email"
                disabled={false}
                id={_utils.cx(_styles, "email")}
                maxLength={256}
                name="email"
                required={true}
                type="email"
              />
            </Block>
            <Block className={_utils.cx(_styles, "field-wrapper")} tag="div">
              <FormBlockLabel htmlFor="Company">{"Company"}</FormBlockLabel>
              <FormTextInput
                autoFocus={false}
                className={_utils.cx(_styles, "text-field")}
                data-name="Company"
                disabled={false}
                id={_utils.cx(_styles, "Company")}
                maxLength={256}
                name="Company"
                required={false}
                type="text"
              />
            </Block>
            <FormButton
              className={_utils.cx(_styles, "button", "form")}
              data-wait="Please wait..."
              type="submit"
              value="Submit"
            />
          </FormForm>
          <FormSuccessMessage className={_utils.cx(_styles, "message")}>
            <Block tag="div">{"Thanks. Stay tuned."}</Block>
          </FormSuccessMessage>
          <FormErrorMessage className={_utils.cx(_styles, "message", "error")}>
            <Block tag="div">
              {"Oops! Something went wrong while submitting the form."}
            </Block>
          </FormErrorMessage>
        </FormWrapper>
      </BlockContainer>
    </_Component>
  );
}
