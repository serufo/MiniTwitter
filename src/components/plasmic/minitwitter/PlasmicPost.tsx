// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gT4hmyT4Gfq9iSDYjENowj
// Component: dOZy09vtnC
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_minitwitter.module.css"; // plasmic-import: gT4hmyT4Gfq9iSDYjENowj/projectcss
import * as sty from "./PlasmicPost.module.css"; // plasmic-import: dOZy09vtnC/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 9nQKOzEv7H/icon

export type PlasmicPost__VariantMembers = {
  state: "liked";
};

export type PlasmicPost__VariantsArgs = {
  state?: SingleChoiceArg<"liked">;
};

type VariantPropType = keyof PlasmicPost__VariantsArgs;
export const PlasmicPost__VariantProps = new Array<VariantPropType>("state");

export type PlasmicPost__ArgsType = {
  children?: React.ReactNode;
  timestamp?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPost__ArgsType;
export const PlasmicPost__ArgProps = new Array<ArgPropType>(
  "children",
  "timestamp"
);

export type PlasmicPost__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultPostProps {
  children?: React.ReactNode;
  timestamp?: React.ReactNode;
  state?: SingleChoiceArg<"liked">;
  className?: string;
}

function PlasmicPost__RenderFunc(props: {
  variants: PlasmicPost__VariantsArgs;
  args: PlasmicPost__ArgsType;
  overrides: PlasmicPost__OverridesType;
  dataFetches?: PlasmicPost__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__state_liked]: hasVariant(variants, "state", "liked")
      })}
    >
      <div className={classNames(defaultcss.all, sty.freeBox___9DtPg)}>
        {p.renderPlasmicSlot({
          defaultContents:
            "What state management framework do you use for React?",
          value: args.children,
          className: classNames(sty.slotChildren, {
            [sty.slotChildren__state_liked]: hasVariant(
              variants,
              "state",
              "liked"
            )
          })
        })}
      </div>

      <div className={classNames(defaultcss.all, sty.freeBox__mXPdV)}>
        {p.renderPlasmicSlot({
          defaultContents: "1 hour ago",
          value: args.timestamp,
          className: classNames(sty.slotTimestamp)
        })}
      </div>

      {(hasVariant(variants, "state", "liked") ? true : false) ? (
        <IconIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg, {
            [sty.svg__state_liked]: hasVariant(variants, "state", "liked")
          })}
          role={"img"}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPost__VariantsArgs;
    args?: PlasmicPost__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPost__Fetches;
  } & Omit<PlasmicPost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPost__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPost__ArgProps,
      internalVariantPropNames: PlasmicPost__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPost__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPost";
  } else {
    func.displayName = `PlasmicPost.${nodeName}`;
  }
  return func;
}

export const PlasmicPost = Object.assign(
  // Top-level PlasmicPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicPost
    internalVariantProps: PlasmicPost__VariantProps,
    internalArgProps: PlasmicPost__ArgProps
  }
);

export default PlasmicPost;
/* prettier-ignore-end */