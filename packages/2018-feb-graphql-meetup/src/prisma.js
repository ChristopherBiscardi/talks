import React, { Component, Fragment } from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import FA from "@fortawesome/react-fontawesome";
import { faNpm, faTwitterSquare } from "@fortawesome/fontawesome-free-brands";
import { faCoffee } from "@fortawesome/fontawesome-free-solid";

export default class Prisma extends Component {
  render() {
    return (
      <svg width="353px" height="115px" viewBox="0 0 353 115" version="1.1">
        <desc>Created with Sketch.</desc>
        <defs>
          <path
            d="M96.9924066,82.3903664 L50.8302131,2.12770588 C49.9319117,0.565455545 47.6861581,0.565455545 46.7890233,2.12770588 L0.625663214,82.3903664 C-0.662291034,84.6306849 0.101848488,87.4952009 2.33360254,88.7892688 L46.4763678,114.371996 C47.9206498,115.209335 49.6985867,115.209335 51.1428687,114.371996 L95.2844673,88.7892688 C97.5162213,87.4952009 98.2803609,84.6306849 96.9924066,82.3903664 Z"
            id="path-1"
          />
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Artboard-2-Copy" transform="translate(-56.000000, -56.000000)">
            <g id="Group-4" transform="translate(56.000000, 56.000000)">
              <g id="Rectangle-3">
                <mask id="mask-2" fill="white">
                  <use />
                </mask>
                <g id="Mask" />
                <rect
                  fill="#A4E5AD"
                  mask="url(#mask-2)"
                  x="-3.99805731"
                  y="-1.38554217"
                  width="51.974745"
                  height="120.398837"
                />
                <rect
                  fill="#FFFFFF"
                  mask="url(#mask-2)"
                  x="47.9766877"
                  y="-1.38554217"
                  width="51.974745"
                  height="120.398837"
                />
              </g>
            </g>
            <text
              id="PRISMA"
              font-family=".SFNSDisplay, .SF NS Display"
              font-size="60"
              font-weight="normal"
              letter-spacing="2.25000054"
              fill="#FFFFFF"
            >
              <tspan x="190" y="131">
                PRISMA
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    );
  }
}
