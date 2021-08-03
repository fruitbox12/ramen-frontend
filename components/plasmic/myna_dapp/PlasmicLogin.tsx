// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6YWbAhS5tQQRFkLE21F4kw
// Component: syT_kopKCz
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as ethers from 'ethers';

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

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: FMUrbbttkcp2/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_myna_dapp.module.css"; // plasmic-import: 6YWbAhS5tQQRFkLE21F4kw/projectcss
import * as sty from "./PlasmicLogin.module.css"; // plasmic-import: syT_kopKCz/css

export type PlasmicLogin__VariantMembers = {};

export type PlasmicLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogin__VariantsArgs;
export const PlasmicLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicLogin__ArgsType = {};
type ArgPropType = keyof PlasmicLogin__ArgsType;
export const PlasmicLogin__ArgProps = new Array<ArgPropType>();

export type PlasmicLogin__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<"img">;
  残高?: p.Flex<"div">;
  button?: p.Flex<"button">;
};

export interface DefaultLoginProps {
  dataFetches: PlasmicLogin__Fetches;
}



let accounts;
let myContract;

const ContractAbi = [ // solidityから持ってきたやつ
  {
      "inputs": [],
      "name": "retrieve",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "msg_in",
              "type": "string"
          }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }
];




const ContractAddress = "0xAf763d8b60E51d646A77f0859cf6b1B65aF98af3"; // solidityから持ってきたやつ
const isMetaMaskConnected = () => accounts && accounts.length > 0

const isMetaMaskInstalled = () => { //metamaskがあるかの検証
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask); //ethがあり、metamaskがあるか
};

const MetaMaskClientCheck = async () => {
  if (!isMetaMaskInstalled()) {
      console.log("Please install MetaMask");
  } else {

      try {
        const newAccounts = await ethereum.request({
            method: 'eth_requestAccounts', //アカウントへの接続を要求
        });
        accounts = newAccounts;
        if (isMetaMaskConnected()) { //もし繋がっていたら
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner(0);
            myContract = new ethers.Contract(ContractAddress, ContractAbi, signer);
            console.log(myContract);
        }
      } catch (error) {
          console.error(error);
      }
  }
};






function PlasmicLogin__RenderFunc(props: {
  variants: PlasmicLogin__VariantsArgs;
  args: PlasmicLogin__ArgsType;
  overrides: PlasmicLogin__OverridesType;
  dataFetches?: PlasmicLogin__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.freeBox__sSjyE)}>
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__e5JxO
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "ログイン"
                : "ログイン"}
            </div>
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__hsbkn)}>
            <div className={classNames(defaultcss.all, sty.freeBox___42ABd)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(defaultcss.all, sty.freeBox__kowCi)}>
                  <div
                    className={classNames(defaultcss.all, sty.freeBox__wuL7A)}
                  >
                    <img
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(defaultcss.img, sty.img)}
                      role={"img"}
                      src={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "/plasmic/myna_dapp/images/loginpng.png"
                          : "/plasmic/myna_dapp/images/loginpng.png"
                      }
                    />

                    <div
                      data-plasmic-name={"残高"}
                      data-plasmic-override={overrides.残高}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.残高
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "ログイン"
                        : "ログイン"}
                    </div>
                  </div>

                  <button
                  type="button"
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames(defaultcss.button, sty.button)}
                    onClick={MetaMaskClientCheck}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__m3Wix
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "マイナンバーカードに接続"
                        : "マイナンバーカードに接続"}
                    </div>
                  </button>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__qgs2C
                    )}
                  >
                    {"※外部アプリが起動します"}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "残高", "button"],
  img: ["img"],
  残高: ["残高"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: "img";
  残高: "div";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogin__VariantsArgs;
    args?: PlasmicLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLogin__Fetches;
  } & Omit<PlasmicLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLogin__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLogin__ArgProps,
      internalVariantPropNames: PlasmicLogin__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    残高: makeNodeComponent("残高"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
