import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-eac-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      id="eac-a"
      fill="#fff"
      fill-opacity="1"
      fill-rule="nonzero"
      stroke="none"
      stroke-dasharray="none"
      stroke-miterlimit="4"
      stroke-opacity="1"
      stroke-width="3.1"
      d="M0 326.4h640V348H0z"
    />
    <use
      xlink:href="#eac-a"
      width="600"
      height="330"
      transform="translate(0 -194.4)"
    />
    <svg:path
      id="eac-b"
      fill="#0087ff"
      fill-opacity="1"
      fill-rule="nonzero"
      stroke="none"
      stroke-dasharray="none"
      stroke-miterlimit="4"
      stroke-opacity="1"
      stroke-width="3.1"
      d="M0 348h640v132H0z"
    />
    <use
      xlink:href="#eac-b"
      width="600"
      height="330"
      transform="translate(0 -348)"
    />
    <svg:path fill="red" d="M0 290.4h640v36H0z" />
    <svg:path fill="#000001" d="M0 153.6h640v36H0z" />
    <svg:path fill="#ff0" d="M0 206.4h640v67.2H0z" />
    <svg:path
      id="eac-c"
      fill="#008300"
      fill-opacity="1"
      fill-rule="nonzero"
      stroke="none"
      stroke-dasharray="none"
      stroke-miterlimit="4"
      stroke-opacity="1"
      stroke-width="3.1"
      d="M0 273.6h640v16.8H0z"
    />
    <use
      xlink:href="#eac-c"
      width="600"
      height="330"
      transform="translate(0 -84)"
    />
    <g transform="translate(41.1 674.6)scale(.87273)">
      <svg:path
        fill="#fff"
        stroke="#000"
        stroke-width="2"
        d="M319.6-589.5a80 80 0 0 0-56.7 136.3l-34.2 11 3.1 7.8-11 2.4 8 25.6h181.6l7.9-25.6-11-2.4 3.1-7.9-34.2-10.9a80 80 0 0 0-56.6-136.3z"
      />
      <svg:path fill="#008300" d="m230.5-431.6 7 22.6h164.2l6.9-22.6z" />
      <svg:path fill="#fff" d="m234.9-428.7 5.1 16.8h159.1l5.1-16.8H275.4z" />
      <svg:path
        d="M140.8 811.3q0 2.6-.6 5-.6 2.3-2.1 4-1.5 1.8-4 2.8-2.5 1-6.4 1-3.5 0-6-.8-2.6-.9-4.3-2l2.7-6.3q1.5.9 3.3 1.5 1.7.7 3.7.7 3 0 4.3-1.5 1.3-1.4 1.3-4.9v-23.5h8.1zm22 12.8q-3.9 0-6.6-1-2.8-1.1-4.6-3-1.8-1.9-2.7-4.5-.8-2.7-.8-5.8v-22.5h8.1V809q0 2.2.5 3.7t1.4 2.5q.8 1 2 1.4 1.3.4 2.8.4 3 0 4.8-1.8 1.8-1.8 1.8-6.2v-21.8h8.2v22.5q0 3.1-1 5.8-.8 2.6-2.6 4.6-1.9 1.9-4.7 2.9-2.8 1-6.6 1zm32.2-36.8q1 1.7 2.2 4.3l2.6 5.4 2.6 6 2.5 5.8 2.4-5.8 2.6-6 2.6-5.4q1.2-2.6 2.2-4.3h7.4l1 8 .7 9.3q.4 4.8.6 9.7l.5 9.1H217l-.4-11.5-.8-12.5-2 4.9-2.4 5.3q-1 2.7-2.1 5.1l-1.8 4.1h-5.7l-1.7-4.1-2.2-5.1-2.3-5.3-2-4.9q-.6 6.3-.8 12.5l-.4 11.5h-8l.5-9.1.6-9.7.8-9.2 1-8.1zm51.4 36.8q-3.8 0-6.6-1-2.8-1.1-4.6-3-1.8-1.9-2.7-4.5-.8-2.7-.8-5.8v-22.5h8.1V809q0 2.2.5 3.7t1.4 2.5q.9 1 2 1.4 1.3.4 2.8.4 3 0 4.8-1.8 1.8-1.8 1.8-6.2v-21.8h8.2v22.5q0 3.1-1 5.8-.8 2.6-2.6 4.6-1.9 1.9-4.7 2.9-2.8 1-6.6 1zm22.6-36.8h8.2v36.1h-8.1zm29.8 14.8 4.2-7.4q2-3.7 3.6-7.4h9q-3 5.8-6.2 11.3-3.2 5.5-6.7 11v13.8h-8.1v-13.7q-3.6-5.5-6.8-11-3.2-5.6-6.2-11.4h9.5q1.6 3.7 3.6 7.4zm40.2 21.3-1.3-3.8-1.4-4h-14l-1.5 4-1.2 3.8H311l3.9-10.8 3.5-9.3 3.5-8.3q1.7-4 3.5-7.7h7.8q1.8 3.7 3.5 7.7l3.4 8.3 3.6 9.3 3.9 10.8zm-9.8-28q-.2.9-.8 2.2l-1.2 3.1-1.5 4-1.6 4.4h10.3l-1.6-4.5-1.5-3.9-1.2-3zm48.9 6.7 4.2-7.4q2-3.7 3.6-7.4h9q-3 5.8-6.1 11.3-3.2 5.5-6.8 11v13.8h-8v-13.7l-6.8-11q-3.2-5.6-6.1-11.4h9.4l3.6 7.4zm40.2 21.3-1.3-3.8-1.4-4h-14l-1.4 4-1.3 3.8h-8.4l3.8-10.8 3.6-9.3 3.4-8.3q1.7-4 3.6-7.7h7.7q1.8 3.7 3.5 7.7l3.5 8.3 3.6 9.3 3.8 10.8zm-9.7-28-.8 2.2-1.2 3.1-1.5 4-1.6 4.4h10.2l-1.6-4.5-1.5-3.9-1.2-3zm59.8 28-1.3-3.8-1.4-4h-14l-1.4 4-1.3 3.8h-8.4l3.8-10.8q1.8-5 3.6-9.3l3.4-8.3q1.7-4 3.5-7.7h7.8q1.8 3.7 3.5 7.7l3.4 8.3 3.6 9.3 3.9 10.8zm-9.8-28-.7 2.2-1.2 3.1-1.5 4-1.7 4.4h10.3l-1.6-4.5-1.5-3.9-1.2-3zm23.2 28v-36.1H506v6.8h-16v7.6h14.2v6.8h-14.3v15zm40.5-36.5q8.1 0 12.4 2.9 4.4 2.9 4.4 9 0 3.8-1.8 6.2-1.7 2.3-5 3.7l2.3 3 2.3 3.7 2.3 4 2 4h-9l-2.1-3.6-2-3.5-2.2-3.3-2-2.8h-4v13.2h-8.2v-35.6q2.7-.5 5.5-.7l5-.2zm.5 6.9H521l-1.3.2v9.8h2.3q4.6 0 6.6-1.2 2-1.1 2-3.9 0-2.7-2-3.7-2-1.2-6-1.2zm23.7-6.5h8.1v36.1h-8.1zm37.8 36.1q-1.1-1.8-2.6-3.8l-3.3-4.1q-1.7-2.1-3.6-4-1.9-1.9-3.7-3.4v15.3h-8.2v-36.1h8.2v13.6q3.2-3.3 6.3-6.9l6-6.7h9.7q-3.7 4.4-7.5 8.4-3.7 4.1-7.8 8.2 4.3 3.6 8.3 8.6 4.1 5 7.8 11zm39.7 0-1.2-3.8-1.4-4h-14l-1.5 4-1.2 3.8h-8.5l3.9-10.8 3.5-9.3 3.5-8.3q1.7-4 3.5-7.7h7.8q1.8 3.7 3.5 7.7l3.4 8.3 3.6 9.3 3.9 10.8zm-9.7-28-.7 2.2-1.2 3.1-1.6 4-1.6 4.4h10.3l-1.6-4.5-1.5-3.9-1.2-3zm45.3-8.1q1 1.7 2.1 4.3l2.6 5.4 2.6 6 2.5 5.8 2.4-5.8 2.6-6 2.6-5.4q1.2-2.6 2.2-4.3h7.4l1 8 .7 9.3q.4 4.8.6 9.7l.5 9.1h-7.9l-.4-11.5-.8-12.5-2 4.9-2.4 5.3q-1 2.7-2.1 5.1l-1.8 4.1h-5.7l-1.7-4.1-2.2-5.1-2.3-5.3-2-4.9q-.6 6.3-.8 12.5l-.4 11.5h-8l.5-9.1.6-9.7.8-9.2 1-8.1zm61.4 36.1-1.4-3.8-1.3-4h-14.1l-1.4 4-1.3 3.8h-8.4l3.8-10.8 3.6-9.3 3.4-8.3q1.7-4 3.6-7.7h7.7q1.8 3.7 3.5 7.7 1.8 4 3.5 8.3l3.6 9.3 3.8 10.8zm-9.8-28-.8 2.2-1.2 3.1-1.5 4-1.6 4.4h10.2l-1.6-4.5-1.5-3.9-1.2-3zm34 21.8q1.7 0 2.8-.3 1.1-.3 1.8-.7.7-.6 1-1.2.2-.7.2-1.5 0-1.8-1.7-3-1.6-1.2-5.7-2.5l-3.6-1.4q-1.7-.9-3.1-2-1.4-1.3-2.3-3-1-1.8-1-4.3t1-4.5q1-2 2.7-3.4 1.7-1.4 4.2-2.2 2.4-.7 5.5-.7 3.6 0 6.3.7 2.6.8 4.4 1.8l-2.4 6.4q-1.5-.8-3.4-1.4-1.8-.6-4.4-.6-3 0-4.2.8-1.3.8-1.3 2.5 0 1 .5 1.6.5.7 1.3 1.3l2 1 2.5.9q2.8 1 4.9 2 2 1 3.4 2.4t2.1 3.2q.7 1.8.7 4.4 0 5-3.6 7.9-3.5 2.7-10.6 2.7-2.4 0-4.4-.3-1.9-.2-3.4-.7l-2.6-.8-1.7-1 2.3-6.4q1.6.9 4 1.6 2.3.7 5.8.7m42.2-29.9h8.2v36.1h-8.2v-15.3h-13.6v15.3h-8.2v-36.1h8.2V801h13.6zm40.6 36.1-1.2-3.8-1.4-4h-14l-1.5 4-1.2 3.8h-8.5q2-5.8 4-10.8 1.7-5 3.5-9.3l3.4-8.3q1.7-4 3.5-7.7h7.8q1.8 3.7 3.5 7.7l3.4 8.3 3.6 9.3 3.9 10.8zm-9.7-28-.7 2.2-1.2 3.1-1.6 4-1.6 4.4h10.3l-1.6-4.5-1.5-3.9-1.2-3zm33.7-8.5q8.2 0 12.5 2.9 4.3 2.9 4.3 9 0 3.8-1.7 6.2-1.8 2.3-5 3.7l2.3 3 2.3 3.7 2.3 4 2 4h-9l-2.1-3.6-2.1-3.5-2-3.3-2.2-2.8h-4v13.2h-8.1v-35.6q2.6-.5 5.4-.7zm.5 6.9H851l-1.3.2v9.8h2.3q4.6 0 6.6-1.2 2-1.1 2-3.9 0-2.7-2-3.7-2-1.2-6-1.2zm23.7-6.5h8.2v36.1h-8.2zm37.8 36.1q-1-1.8-2.6-3.8-1.4-2-3.2-4.1-1.7-2.1-3.6-4-1.9-1.9-3.8-3.4v15.3h-8v-36.1h8v13.6q3.2-3.3 6.4-6.9l6-6.7h9.6q-3.7 4.4-7.4 8.4-3.7 4.1-7.8 8.2 4.3 3.6 8.3 8.6 4 5 7.8 11zm14.4-36.1h8v36.1h-8z"
        aria-label="JUMUIYA YA AFRIKA MASHARIKI"
        font-family="Times New Roman"
        font-size="52.1"
        font-weight="700"
        style='-inkscape-font-specification:"Ubuntu Bold"'
        transform="matrix(.18901 0 0 .21163 219.5 -590.5)"
      />
      <g id="eac-d" fill-rule="evenodd">
        <svg:path
          fill="#008300"
          d="m230.5-431.6 10.4-2.8-3.2-5.7 17.9-6.7v6.1h5.5v9.3h-30Z"
        />
        <svg:path
          fill="#fff"
          d="M258.5-431.4h-21.8l21.8-5.9zm-4.8-9.2H244l10-3.8zM241-439l2.2 4 14.5-4z"
        />
      </g>
      <use
        xlink:href="#eac-d"
        width="600"
        height="330"
        transform="matrix(-1 0 0 1 639.1 0)"
      />
      <svg:path
        fill="#ff0"
        stroke="#000"
        stroke-width="1.2"
        d="M317.7-580A70.8 70.8 0 0 0 294-443.4v-7.8a63.5 63.5 0 0 1 25.2-121.6h.5a63.5 63.5 0 0 1 25.6 121.6v7.8A70.7 70.7 0 0 0 319.6-580z"
      />
      <svg:path
        fill="#fff"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width=".9"
        d="m339-458.3.1 10.6c-6.4 1-13.5 7.6-15.4 8.8-1.9 1.3-5 3.8-6.7 3.6-2.9-.4-.8-2.7-.8-2.7s-2 2.4-3.4 1.3c-1.4-.9.8-2.7.8-2.7s-.7 1-2.2.5c-1.4-.4-.4-2-.4-2s-3.8 2-4.5 1.3c-1-1.3.4-2.5.4-2.5l8.9-7.5s-5.8 2.1 0 0c4.9-2 6.3.8 8.5.6a28 28 0 0 0 10.2-5.1c1.7-1.7 1.2-3.5 2.5-4s2-.2 2-.2z"
      />
      <svg:path
        fill="#fff"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width=".8"
        d="m300-457.5-.1 9.8c6 .8 12.7 7.2 14.5 8.4 1.7 1.1 4.7 3 6.3 2.8 2.6-.3 2-1.3 2-1.3s1.2.6 2.8 0c1.6-.6.8-1.7.8-1.7s2.4.7 3.4-.6c1-1.1-1-2.3-1-2.3s1-.7-.6.2c-1.6.8-4.8-2.8-8-3-3.3 0-3.6 3.2-5.6 1.7-2.1-1.6 1.6-4.2 2.9-4.6 5.1-1.7 9.9.4 3.7-2-3.2-1.2-5.7 1.1-7.8 1-2.2-.1-7.6-3-9-4.6-1.6-1.6-1.2-3.2-2.4-3.7-1.2-.4-1.9-.2-2-.1z"
      />
      <svg:path
        fill="none"
        stroke="#000"
        stroke-width=".8"
        d="m326.4-439.5-4.3-1.8m1.1 3.7-5-3"
      />
      <g
        id="eac-e"
        fill="#008300"
        fill-rule="evenodd"
        stroke="#000"
        stroke-dasharray="none"
        stroke-miterlimit="4"
        stroke-opacity="1"
        stroke-width=".4"
      >
        <svg:path
          d="M291.8-462.6c-12.4 6-13-9.8-18.6-9.6 10.5-7 8.8 6 18.6 9.6zM287-480c-6.2 11.3 8.3 12.8 7.8 18.3 7.1-9.6-5-8.8-7.8-18.3z"
        />
        <svg:path
          d="M281-475.6c-15.3 2.6-11.1-10.6-17.5-11.7 13.5-4 7.7 6.2 17.5 11.7z"
        />
        <svg:path
          d="M279.4-491.2c-8.4 9.9 3.7 10.4 2.3 15.6 8.7-8-.3-7.7-2.3-15.6zm-8.8 1.8c-15.2-2.2-5.6-17.7-10.2-21 12.5.9 4.4 14.5 10.2 21z"
        />
        <svg:path
          d="M276.4-509c-14 6.7.1 13.9-5.4 20 13.8-.7 1.6-9.7 5.4-19.8zm-7.8.5c-16.3-7.4.7-21.4-2.2-26.5 11.1 11.3-5.8 15.5 2.2 26.5z"
        />
        <svg:path
          d="M279-527.3c-14 1.8-7 14.7-9.9 19.3 11-2.5 2.2-9 10-19.3zm-6.8-3.9c-7.9-12 5.3-14.7 6.2-20.8 3.8 15.8-5.2 10.7-6.2 20.8z"
        />
        <svg:path
          d="M288-541.2c-13-3.7-10.6 9.4-15 12.5 11 1.8 8.7-8.7 15-12.5zm-6-5.6c-2.6-10.4 2.6-8.7 8.5-13.3 3.2 8.4-4.7 7.4-8.5 13.3zm16.6-1.6c-10-7.4-11.1 2.6-16.3 4 9.6 5.7 10-2.8 16.3-3.9zm-6-5c.3-4.5 6.3-10.4 12.5-8.4-.3 7.5-7.5 9.4-12.5 8.5z"
        />
      </g>
      <use
        xlink:href="#eac-e"
        width="600"
        height="330"
        transform="matrix(-1 0 0 1 639.1 0)"
      />
      <svg:path fill="none" d="M304.6-557s7.3-2 14.7-1.8c7.3 0 14.7 2 14.7 2" />
      <svg:path
        d="m188.2-240.9.8 4.7 2.5-.5c.7 0 1.1-.3 1.3-.5.3-.3.4-.8.3-1.5h.3l.7 4h-.3l-.4-1-.6-.4h-1.1l-2.6.5.6 3.9.3 1 .3.1h.6l2-.3 1.4-.4.8-.7c.3-.4.6-1 .8-1.8h.4l-.5 3-9 1.6-.1-.3h.4l.7-.4c.2-.2.3-.3.3-.5v-1.2l-1.4-7.6c0-.7-.2-1.2-.4-1.3-.3-.2-.6-.3-1.1-.2h-.4v-.2l9-1.6.5 2.6h-.3a4 4 0 0 0-.6-1.2l-.8-.4a4 4 0 0 0-1.2 0zm17.2 5.7h-4.6l-.8 1.9a3 3 0 0 0-.3 1c0 .2.1.4.3.5.2.2.5.2 1.1.3v.3h-3.7v-.3c.5 0 .8-.2 1-.3l1-1.8 4-9.8h.4l4.2 9.9c.3.8.6 1.3.9 1.5.3.3.6.4 1.1.4v.4h-4.7v-.3c.5 0 .8-.1 1-.3.2-.1.2-.3.2-.5s0-.6-.3-1.2zm-.2-.7-2-4.8-2.1 4.9zm17.8-5.5-.4 4h-.3a5.1 5.1 0 0 0-1-2.8 4 4 0 0 0-2.3-1.2 4 4 0 0 0-2.2.2 4 4 0 0 0-1.9 1.6c-.5.8-.8 1.9-1 3.2a7 7 0 0 0 0 2.8c.2.9.6 1.6 1.2 2 .6.6 1.4 1 2.3 1.1.7.1 1.4.1 2-.1.7-.2 1.4-.8 2.3-1.6l.3.2c-.8 1-1.6 1.6-2.5 2-.9.3-1.8.4-3 .2-1.9-.4-3.3-1.3-4-3a6.3 6.3 0 0 1-.6-4c.2-1.1.6-2.2 1.3-3 .7-1 1.6-1.6 2.6-2a5.6 5.6 0 0 1 5.6.8l.4.3.5-.1.4-.6z"
        font-family="Times New Roman"
        font-size="18"
        font-weight="400"
        style="line-height:125%;text-align:start"
        transform="translate(167 -386.8)scale(.74556)"
      />
      <svg:path
        fill="red"
        d="M317.2-550.3c-1 0-2 .2-2.9.4a13 13 0 0 1-7 5.8l-.6.2a13.4 13.4 0 0 1-9.7.3 41.5 41.5 0 0 0-7.6 6.5 13.1 13.1 0 0 1-2 9.5 13.4 13.4 0 0 1-7.2 6.4c-1 3.2-1.6 6.6-1.7 10 2 1.5 3.7 4.4 4.4 7.9l.2.7c.7 3.8 0 7.4-1.4 9.5 1.3 3.1 3 6 5 8.7 2.4-.2 5.6 1 8.4 3.1l.5.5c3 2.5 4.8 5.6 5 8.2 3.1 1.6 6.3 2.8 9.7 3.5 1.8-1.7 5-3 8.6-3h.7c3.9 0 7.3 1.2 9.2 3 3.4-.7 6.6-2 9.6-3.5a13.2 13.2 0 0 1 5-8.3 13.6 13.6 0 0 1 9-3.5c2-2.6 3.7-5.5 5-8.5a13 13 0 0 1-1.5-8.9v-.6c.8-3.9 2.6-7 4.7-8.6a41 41 0 0 0-1.7-10 13 13 0 0 1-6.8-5.9l-.4-.6c-2-3.4-2.6-7-2-9.5a39 39 0 0 0-7.9-6.7 13 13 0 0 1-9 0l-.7-.3a13.5 13.5 0 0 1-7.6-6c-1.6-.2-3.3-.3-5-.3h-1.8a1 1 0 0 0-.1 0h-.5zm8 81.9"
      />
      <svg:path
        fill="#fbf014"
        stroke="#000"
        stroke-width=".4"
        d="M354.7-509.4a35.1 35.1 0 1 1-70.3 0 35.1 35.1 0 0 1 70.3 0z"
      />
      <svg:path
        fill="#fbf014"
        stroke="#000"
        stroke-width=".4"
        d="M351.7-509.4a32.2 32.2 0 1 1-64.4 0 32.2 32.2 0 0 1 64.4 0z"
      />
      <g fill-rule="evenodd" stroke="#000" stroke-width=".4">
        <svg:path
          fill="#0087ff"
          d="m310-525.2 10.6 1.9-1.4 10.6-9 6.2-5-5.5.3-8.7z"
        />
        <svg:path
          fill="#fff"
          d="m307-517.4-4.2.2h-.4v.2h-.1l-.1.3-.4.2v.2l-.3.2-.4.2h-.1l-.1-.4h-.6l-.3.1v-.5l-.1-.1v-1h.2v-.9l.1-.2v-.2l.3-.3.3-.1v-.3l.1-.3.1-.1-.1-.2-.3.2-.3-.2v-.6l.3-.2.1.1.2-.8.3-.3-.2-.5.2-.3-.1-.4.9-.3v-.3l.1-.4.4-.1.3-.2.2.5v.3h.2l.2-.4.2-.1v-.3l.6-.7.2-.2.4-.2h.4l.3-.4v-.4h.2l.2-.2-.1-.3v-.7h-.2v-.2l-.2.3-.2-.1v-.3h-.6l-.2-.4-.2.1v.3l-.2-.1v-.4h-.4l.1-.4.4-.7v-.4l-.4-.4.3-.8.4-.4v-.5l-.3.1.4-.5.7-.3h.4l.6.4.2-.1h.3l.5-.4.5.4v.3h.4l.1.2h.3v-.3l.7-.3 1-.1.9-.5.5.4h1.1l1.7-1.5 5.2 1.2-.3 9-5.4 3-.3-.2-.1.1h-.1v-.5h-.3v.6h-.4l-.4-.2v-.2h.4v-.1l-.3-.1h-.3v-.2l.3-.2v-.1l-.3.2-.2-.1-.2.1.2.3-.3.2v.2l-.4-.1v.2h.2l-.6.4-.2-.2v-.1l-.3.2h-.4v-.1l.4-.1-.1-.1h-.3v-.3l-.1.3h-.2v.5h-.4l-.1-.2s-.3 0-.2.2v.3l-.3-.2h-.2v.3h-.2l-.4-.2.2.3h-.4l-.2.1.2.2.1.2.2.2-.1.1h-.1l-.3.3h-.2l-.1.3-.2.1.1.2h.1v.2h-.1l-.4.4v.1h.3z"
        />
        <svg:path
          fill="#fff"
          d="m314.2-517.3 11.5 6.3.1.9-.4.2.1.4.4.1.1.4 4.5 3.2.3-.2.4.2.1-.4.3-.3.5-1.1-.3-.1.2-.4h.2l.4-.5v-.4l-.2-.3.3.1.4-.9.4-.1.1-.7.2-.2s-.2-.8 0-1.1c.3-.3 1.3-.3 1.3-.3l.6-.7v-.2l.4-.3-.4-.7.8.2.6-.2h.4l.6-.8v-.3l-1.9-2.4v-11.7l1.1-1 1.8-2.5-.5-.2-1.8.2-.5-.6h-.2l-.1-.4-.4-.2-3 1.4-.1.5-.7.6v.4h-.2l-.2-.1-3.1-.7-.2.2h-1l-3.7-2.7h-2.7l-.6-.2v-.3h-5l-1 1 .2 1.3h.5l.2.6h.5l-.1.6h-.1v.7l.2.3.3.2v.5l.6.3.1.7.4.2v.3l-.2.4.4.6-.1.4.2.5v.2l-.1.6-.3.2-.1.4h-.2v.8h-.5l-.2.3-.3-.1v.7l-.3.4h-.3v.3l-.4.2-.1.5v.5l-.5.2v.9l.3.1h.2l-.1.3.3.1.2.5.4-.3v-.3h.5l.6-.3.2.4.2.3h-.4l-.1.2h-.3l-.5-.1v.2l.2.2-.3.2-.1-.2-.3.1h-.2l-.3-.2v.4h-.2l-.2.5.3.3.3.2-.3.4zm17.6 21.8.4-.3v-.2h.4l.2-.5v.5l-.2.2v.3h-.2v.3l-.1-.2zm-1.2-5.6v-.7l-.1-.1.4-.3v-.4l.5-.2v.4h-.3v.6l.2.3v.3l.3.2.3.4v.3l-.3.1-.4-.5-.4.1zm1.5-2.6v-.4l.2-.4-.3-.8h.4l.1.4h.2v-.3s.2-.1.2 0l-.1.9.1.4-.2.3-.3.3z"
        />
        <svg:path
          fill="#fff"
          d="m334.4-487.5-1.3 1-1.8.8-.5.3h-.9l-.7.2-.4.2-.5.5-.8-.5h-1l-.3.3v.5l-.7.3h-.3l-.3.2-1-.1-.4-.4-.5.1-.8.6-.4-.1v-.2h-.3l-.2.2-.5-.1v-.4h-.3l-.4-.6h-.5l-.1.3-.4.3-.4-.1h-1.5l-.4-.7h-.4l-.4-1v-.5l.2-.2v-.6l-.4-.3.1-1-.1-.2-.1-.4-.7-.7v-.3l-.8-.6h-.3v.6l-.4-.1-.2-.3-1 .2-.4-.5-.5.1-.4-.3h-.5l-.4-.4h-.9l-.2-.6h-.6l-.2-.1h-.7v-.3l-.8-.1-.4-.3v-.5l-.6-.3-.5.1-.2-.6-.5-.4-.1-.6-.7-1v-.4l-.4-.4v-.8l-.3-.4v-.4h.2v-.3l-.5-.4-.2-.4-.8-.6h-.6l-.7-.8v-.4l.3-.4h.4l.1-.3v-.3l-.7-1v-.5l.3-.2-.1-.6-.6-.6v-.6l.1-.5v-.2l.6-.2.3-.2.3-.3v-.3l.6-.2v-.3l.5-.6v-.3l.3-.5.7-.3v-.2l.5-.3v-1l-.2-.1h-.3l-.3-.1h-.5v-.3l.3-.4-.2-.2.3-.6 1-.1v-.7l.1-.3-.4-.5v-1l-.2-.3v-.3l-.5-.3-.4-.7h.6l.3-.3h3.5l.1.3v.4l-.2.5-.1.3v.2l-.1.4v.4l-.2.2v.3l-.2.2h.3v.5l-.2.4h.8l-.3.6-.1.4.1.6.4-.4.3.3v-.5l.1-.4.4.2.1-.2-.2-.4.4-.4.4.5.3.1.2.5.3-.6.1.4h.4v.4l.3.4-.4.2v.5h.3v-.5h.4l-.2-.5-.1-.4.4-.6h.4l.2.5h.7l.6-.6.8-.3-.2-.5h-.2l-.3.3-.9-.1-.3-.2-.2.2h-.3l-.8-.3v-.3l-.2-.1.4-.2.2.3h.2l.3-.1.4.3.6-.1v-.3l-.4-.1v-.3h.7l.1-.2.5-.2-.3-.4v-.2l1 .2-.5-.4.1-.4.6.4v-.2l-.4-.3.6-.6 11.6 6.3.1.9-.4.3v.4h.5v.4l4.5 3 .3.5-.3.3-.2.4-.1.7-.2.4v.6l-.4.4-.3.7v.5l.3.4-.2.6.5.4h.3l.9 1 .4.4.2.5-.2.5-.3.1-.3 1v.6l.4.4-.1.4-.2.6-.2.6.2.6.2.5.2.2v.4h-.2l.3.5.4.2v.8h-.1v.2l.4.3.2 1-.2.3v.2h.6l.2.5.4-.1.7.3.3.5z"
        />
      </g>
      <svg:path
        class="eac-landxx eac-rw"
        fill="#fff"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width=".5"
        d="M298.1-512.9c-.3-.3 1-1 .8-1.5 0-1 .5-1.3 1.6-1.7l.6-.4c.3.2.3.7.6.4.3-.2 1-1.3 1.5-1.1-.3.4.3 1.2.7 1.5l.6 1.9c-.2.7-.6.7-1.4.6-.8-.3-1 .3-1.6-.2-.1.7 0 1.3-.9 1.6-.5 0-1 0-1-.3-.4-.5-1-.5-1.2 0-.1-.2-.3-.3-.3-.8"
      />
      <svg:path
        class="eac-landxx eac-bi"
        fill="#fff"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width=".5"
        d="M298.4-512.1c.5-1.1 1.1.1 1.3.1 1.5.2 1.5-.1 1.8-1.5.8.6.5 0 2.2.4-.3 0-1 .8-.5.8-.4 1.1.5 1.1 1.1 1-.3.4.5.6-.3 1-.5.3-.5 0-.5.7l-.6.1c-.1.2.3.6.2.6 0 0-.2.5-.6.8-.5.3-.7.8-1.3 1l-.7.2-1-1.8c-.1-.5 0-1.1-.3-1.6v-.9c-.3-.3-.6-.5-.8-1"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiEacFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
