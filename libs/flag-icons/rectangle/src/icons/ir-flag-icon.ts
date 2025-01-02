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
  selector: 'svg[si-ir-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="ir-a">
        <svg:path fill-opacity=".7" d="M-85.3 0h682.7v512H-85.3z" />
      </clipPath>
    </defs>
    <g
      fill-rule="evenodd"
      clip-path="url(#ir-a)"
      transform="translate(80)scale(.9375)"
    >
      <svg:path fill="#fff" d="M-192 0h896v512h-896z" />
      <svg:path fill="#da0000" d="M-192 343.8h896V512h-896z" />
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M-21.6 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"
        />
        <svg:path d="M52.4 367.7v3.4H33.8v-3.4zm-34.6-7.9H21v11.3h-3.3z" />
        <svg:path
          d="M49.6 351H53v20h-3.4zm-8.4 0h3.3v20h-3.3zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"
        />
        <svg:path d="M17.8 359.9H21V371h-3.3z" />
        <svg:path d="M17.8 359.9H21V371h-3.3z" />
        <svg:path
          d="M17.8 359.9H21V371h-3.3zm-39.3 0h3.3V371h-3.3zm28.8 0h3.4V371H7.3zm-14.3 0h3.4V371H-7z"
        />
        <svg:path d="M9.6 367.7v3.4H-5.5v-3.4zm1-8.7v3.4H1V359z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M-102.2 351h49v3.3h-49zm7.3 16.8h3.4v3.3H-95zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"
        />
        <svg:path d="M-28.2 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z" />
        <svg:path
          d="M-31 351h3.4v20H-31zm-8.4 0h3.3v20h-3.3zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"
        />
        <svg:path d="M-62.8 359.9h3.3V371h-3.3z" />
        <svg:path d="M-62.8 359.9h3.3V371h-3.3z" />
        <svg:path
          d="M-62.8 359.9h3.3V371h-3.3zm-39.3 0h3.3V371h-3.3zm28.8 0h3.3V371h-3.3zm-14.3 0h3.4V371h-3.4z"
        />
        <svg:path d="M-71 367.7v3.4h-15v-3.4zm1-8.7v3.4h-9.6V359z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M58.3 351h49v3.3h-49zm7.3 16.8H69v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.3-16.8h3.4v20h-3.4z"
        />
        <svg:path d="M132.3 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M129.5 351h3.4v20h-3.4zm-8.4 0h3.4v20H121zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"
        />
        <svg:path d="M97.7 359.9h3.4V371h-3.4z" />
        <svg:path d="M97.7 359.9h3.4V371h-3.4z" />
        <svg:path
          d="M97.7 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"
        />
        <svg:path d="M89.6 367.7v3.4H74.4v-3.4zm1-8.7v3.4H81V359z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M622.7 351h49v3.3h-49zm7.3 16.8h3.4v3.3H630zm41.9 0v3.3H662v-3.4zm5.3-16.8h3.3v20h-3.4z"
        />
        <svg:path d="M696.7 367.7v3.4H678v-3.4zm-34.6-7.9h3.4v11.3H662z" />
        <svg:path
          d="M694 351h3.3v20h-3.4zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"
        />
        <svg:path d="M662 359.9h3.5V371H662z" />
        <svg:path d="M662 359.9h3.5V371H662z" />
        <svg:path
          d="M662 359.9h3.5V371H662zm-39.2 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"
        />
        <svg:path d="M654 367.7v3.4h-15.2v-3.4zm1-8.7v3.4h-9.6V359z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M138.7 351h49.1v3.3h-49zm7.4 16.8h3.3v3.3h-3.3zm41.8 0v3.3h-9.8v-3.4zm5.3-16.8h3.4v20h-3.4z"
        />
        <svg:path d="M212.8 367.7v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M210 351h3.4v20H210zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-17.9V359zm39.3 0v3.4h-17.9V359z"
        />
        <svg:path d="M178.1 359.9h3.4V371h-3.4z" />
        <svg:path d="M178.1 359.9h3.4V371h-3.4z" />
        <svg:path
          d="M178.1 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.2 0h3.3V371h-3.3z"
        />
        <svg:path d="M170 367.7v3.4h-15.1v-3.4zm1-8.7v3.4h-9.6V359z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M219.5 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zM274 351h3.3v20H274z"
        />
        <svg:path d="M293.5 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M290.7 351h3.4v20h-3.4zm-8.4 0h3.4v20h-3.4zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"
        />
        <svg:path d="M258.9 359.9h3.4V371h-3.4z" />
        <svg:path d="M258.9 359.9h3.4V371h-3.4z" />
        <svg:path
          d="M258.9 359.9h3.4V371h-3.4zm-39.3 0h3.3V371h-3.3zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371H234z"
        />
        <svg:path d="M250.8 367.7v3.4h-15.2v-3.4zm1-8.7v3.4H242V359z" />
      </g>
      <svg:path fill="#239f40" d="M-192 0h896v168.2h-896z" />
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M300.7 351h49v3.3h-49zm7.3 16.8h3.4v3.3H308zm41.9 0v3.3H340v-3.4zm5.3-16.8h3.3v20h-3.3z"
        />
        <svg:path d="M374.7 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3H340z" />
        <svg:path
          d="M372 351h3.3v20H372zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"
        />
        <svg:path d="M340 359.9h3.5V371H340z" />
        <svg:path d="M340 359.9h3.5V371H340z" />
        <svg:path
          d="M340 359.9h3.5V371H340zm-39.2 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"
        />
        <svg:path d="M332 367.7v3.4h-15.2v-3.4zm1-8.7v3.4h-9.6V359z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M381.4 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm42 0v3.3h-9.9v-3.4zm5.2-16.8h3.4v20h-3.4z"
        />
        <svg:path d="M455.4 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M452.7 351h3.3v20h-3.3zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-17.9V359zm39.3 0v3.4h-17.9V359z"
        />
        <svg:path d="M420.8 359.9h3.4V371h-3.4z" />
        <svg:path d="M420.8 359.9h3.4V371h-3.4z" />
        <svg:path
          d="M420.8 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.3z"
        />
        <svg:path d="M412.7 367.7v3.4h-15.1v-3.4zm1-8.7v3.4H404V359z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M462.2 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"
        />
        <svg:path d="M536.2 367.7v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M533.4 351h3.4v20h-3.4zm-8.4 0h3.3v20H525zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"
        />
        <svg:path d="M501.6 359.9h3.3V371h-3.3z" />
        <svg:path d="M501.6 359.9h3.3V371h-3.3z" />
        <svg:path
          d="M501.6 359.9h3.3V371h-3.3zm-39.4 0h3.4V371h-3.4zm28.9 0h3.3V371h-3.3zm-14.3 0h3.4V371h-3.4z"
        />
        <svg:path d="M493.4 367.7v3.4h-15.1v-3.4zm1-8.7v3.4h-9.6V359z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M543.4 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"
        />
        <svg:path d="M617.4 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z" />
        <svg:path
          d="M614.6 351h3.4v20h-3.4zm-8.4 0h3.3v20h-3.3zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"
        />
        <svg:path d="M582.8 359.9h3.3V371h-3.3z" />
        <svg:path d="M582.8 359.9h3.3V371h-3.3z" />
        <svg:path
          d="M582.8 359.9h3.3V371h-3.3zm-39.3 0h3.3V371h-3.3zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371H558z"
        />
        <svg:path d="M574.6 367.7v3.4h-15.1v-3.4zm1-8.7v3.4H566V359z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M-183.8 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm42 0v3.3h-9.9v-3.4zm5.2-16.8h3.4v20h-3.4z"
        />
        <svg:path d="M-109.8 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M-112.5 351h3.3v20h-3.3zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-17.9V359zm39.3 0v3.4h-17.9V359z"
        />
        <svg:path d="M-144.4 359.9h3.4V371h-3.4z" />
        <svg:path d="M-144.4 359.9h3.4V371h-3.4z" />
        <svg:path
          d="M-144.4 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"
        />
        <svg:path d="M-152.5 367.7v3.4h-15.2v-3.4zm1-8.7v3.4h-9.6V359z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M-21.6 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"
        />
        <svg:path d="M52.4 160.2v3.4H33.8v-3.4zm-34.6-7.9H21v11.3h-3.3z" />
        <svg:path
          d="M49.6 143.4H53v20.2h-3.4zm-8.4 0h3.3v20.2h-3.3zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"
        />
        <svg:path d="M17.8 152.3H21v11.3h-3.3z" />
        <svg:path d="M17.8 152.3H21v11.3h-3.3z" />
        <svg:path
          d="M17.8 152.3H21v11.3h-3.3zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.4v11.3H7.3zm-14.3 0h3.4v11.3H-7z"
        />
        <svg:path d="M9.6 160.2v3.4H-5.5v-3.4zm1-8.7v3.3H1v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M-102.2 143.4h49v3.4h-49zm7.3 17h3.4v3.2H-95zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"
        />
        <svg:path d="M-28.2 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z" />
        <svg:path
          d="M-31 143.4h3.4v20.2H-31zm-8.4 0h3.3v20.2h-3.3zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"
        />
        <svg:path d="M-62.8 152.3h3.3v11.3h-3.3z" />
        <svg:path d="M-62.8 152.3h3.3v11.3h-3.3z" />
        <svg:path
          d="M-62.8 152.3h3.3v11.3h-3.3zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.3v11.3h-3.3zm-14.3 0h3.4v11.3h-3.4z"
        />
        <svg:path d="M-71 160.2v3.4h-15v-3.4zm1-8.7v3.3h-9.6v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M58.3 143.4h49v3.4h-49zm7.3 17H69v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.3-16.8h3.4v20.2h-3.4z"
        />
        <svg:path d="M132.3 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M129.5 143.4h3.4v20.2h-3.4zm-8.4 0h3.4v20.2H121zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"
        />
        <svg:path d="M97.7 152.3h3.4v11.3h-3.4z" />
        <svg:path d="M97.7 152.3h3.4v11.3h-3.4z" />
        <svg:path
          d="M97.7 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"
        />
        <svg:path d="M89.6 160.2v3.4H74.4v-3.4zm1-8.7v3.3H81v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M622.7 143.4h49v3.4h-49zm7.3 17h3.4v3.2H630zm41.9-.2v3.4H662v-3.4zm5.3-16.8h3.3v20.2h-3.4z"
        />
        <svg:path d="M696.7 160.2v3.4H678v-3.4zm-34.6-7.9h3.4v11.3H662z" />
        <svg:path
          d="M694 143.4h3.3v20.2h-3.4zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"
        />
        <svg:path d="M662 152.3h3.5v11.3H662z" />
        <svg:path d="M662 152.3h3.5v11.3H662z" />
        <svg:path
          d="M662 152.3h3.5v11.3H662zm-39.2 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"
        />
        <svg:path d="M654 160.2v3.4h-15.2v-3.4zm1-8.7v3.3h-9.6v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M138.7 143.4h49.1v3.4h-49zm7.4 17h3.3v3.2h-3.3zm41.8-.2v3.4h-9.8v-3.4zm5.3-16.8h3.4v20.2h-3.4z"
        />
        <svg:path d="M212.8 160.2v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M210 143.4h3.4v20.2H210zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-17.9v-3.3zm39.3 0v3.4h-17.9v-3.3z"
        />
        <svg:path d="M178.1 152.3h3.4v11.3h-3.4z" />
        <svg:path d="M178.1 152.3h3.4v11.3h-3.4z" />
        <svg:path
          d="M178.1 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.2 0h3.3v11.3h-3.3z"
        />
        <svg:path d="M170 160.2v3.4h-15.1v-3.4zm1-8.7v3.3h-9.6v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M219.5 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.3-16.8h3.3v20.2H274z"
        />
        <svg:path d="M293.5 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M290.7 143.4h3.4v20.2h-3.4zm-8.4 0h3.4v20.2h-3.4zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"
        />
        <svg:path d="M258.9 152.3h3.4v11.3h-3.4z" />
        <svg:path d="M258.9 152.3h3.4v11.3h-3.4z" />
        <svg:path
          d="M258.9 152.3h3.4v11.3h-3.4zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3H234z"
        />
        <svg:path d="M250.8 160.2v3.4h-15.2v-3.4zm1-8.7v3.3H242v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M300.7 143.4h49v3.4h-49zm7.3 17h3.4v3.2H308zm41.9-.2v3.4H340v-3.4zm5.3-16.8h3.3v20.2h-3.3z"
        />
        <svg:path d="M374.7 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3H340z" />
        <svg:path
          d="M372 143.4h3.3v20.2H372zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"
        />
        <svg:path d="M340 152.3h3.5v11.3H340z" />
        <svg:path d="M340 152.3h3.5v11.3H340z" />
        <svg:path
          d="M340 152.3h3.5v11.3H340zm-39.2 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"
        />
        <svg:path d="M332 160.2v3.4h-15.2v-3.4zm1-8.7v3.3h-9.6v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M381.4 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm42-.2v3.4h-9.9v-3.4zm5.2-16.8h3.4v20.2h-3.4z"
        />
        <svg:path d="M455.4 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M452.7 143.4h3.3v20.2h-3.3zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-17.9v-3.3zm39.3 0v3.4h-17.9v-3.3z"
        />
        <svg:path d="M420.8 152.3h3.4v11.3h-3.4z" />
        <svg:path d="M420.8 152.3h3.4v11.3h-3.4z" />
        <svg:path
          d="M420.8 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.3z"
        />
        <svg:path d="M412.7 160.2v3.4h-15.1v-3.4zm1-8.7v3.3H404v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M462.2 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"
        />
        <svg:path d="M536.2 160.2v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M533.4 143.4h3.4v20.2h-3.4zm-8.4 0h3.3v20.2H525zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"
        />
        <svg:path d="M501.6 152.3h3.3v11.3h-3.3z" />
        <svg:path d="M501.6 152.3h3.3v11.3h-3.3z" />
        <svg:path
          d="M501.6 152.3h3.3v11.3h-3.3zm-39.4 0h3.4v11.3h-3.4zm28.9 0h3.3v11.3h-3.3zm-14.3 0h3.4v11.3h-3.4z"
        />
        <svg:path d="M493.4 160.2v3.4h-15.1v-3.4zm1-8.7v3.3h-9.6v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M543.4 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"
        />
        <svg:path d="M617.4 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z" />
        <svg:path
          d="M614.6 143.4h3.4v20.2h-3.4zm-8.4 0h3.3v20.2h-3.3zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"
        />
        <svg:path d="M582.8 152.3h3.3v11.3h-3.3z" />
        <svg:path d="M582.8 152.3h3.3v11.3h-3.3z" />
        <svg:path
          d="M582.8 152.3h3.3v11.3h-3.3zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3H558z"
        />
        <svg:path d="M574.6 160.2v3.4h-15.1v-3.4zm1-8.7v3.3H566v-3.3z" />
      </g>
      <g fill="#fff" stroke-width="1pt">
        <svg:path
          d="M-183.8 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm42-.2v3.4h-9.9v-3.4zm5.2-16.8h3.4v20.2h-3.4z"
        />
        <svg:path d="M-109.8 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z" />
        <svg:path
          d="M-112.5 143.4h3.3v20.2h-3.3zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-17.9v-3.3zm39.3 0v3.4h-17.9v-3.3z"
        />
        <svg:path d="M-144.4 152.3h3.4v11.3h-3.4z" />
        <svg:path d="M-144.4 152.3h3.4v11.3h-3.4z" />
        <svg:path
          d="M-144.4 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"
        />
        <svg:path d="M-152.5 160.2v3.4h-15.2v-3.4zm1-8.7v3.3h-9.6v-3.3z" />
      </g>
      <svg:path
        fill="#d90000"
        d="M-68.8 339.5h6V350h-6zm160.5 0h6V350h-6zm-283.7 0h6V350h-6zm81.5 0h6V350h-6zm80.9 0h6V350h-6zm40 0h6V350h-6zm40.9 0h6V350h-6zm80.4 0h6V350h-6zm203 0h6.1V350h-6zm-162.1 0h6V350h-6zm40 0h6V350h-6zm40.5 0h6V350h-6zm40.4 0h6V350h-6zm323.2 0h6V350h-6zm-242.7 0h6V350h-6zm40.8 0h6V350h-6zm41.3 0h6V350h-6zm38.8 0h6V350h-6zm41.3 0h6V350h-6zm40.4 0h6V350h-6zm119.7 0h6V350h-6zm-38.8 0h6V350h-6zm-808.9 0h6V350h-6z"
      />
      <svg:path
        fill="#239e3f"
        d="M-68.8 162.6h6v10.5h-6zm160.5 0h6v10.5h-6zm-283.7 0h6v10.5h-6zm81.5 0h6v10.5h-6zm80.9 0h6v10.5h-6zm40 0h6v10.5h-6zm40.9 0h6v10.5h-6zm80.4 0h6v10.5h-6zm203 0h6.1v10.5h-6zm-162.1 0h6v10.5h-6zm40 0h6v10.5h-6zm40.5 0h6v10.5h-6zm40.4 0h6v10.5h-6zm323.2 0h6v10.5h-6zm-242.7 0h6v10.5h-6zm40.8 0h6v10.5h-6zm41.3 0h6v10.5h-6zm38.8 0h6v10.5h-6zm41.3 0h6v10.5h-6zm40.4 0h6v10.5h-6zm119.7 0h6v10.5h-6zm-38.8 0h6v10.5h-6zm-808.9 0h6v10.5h-6z"
      />
      <g fill="#da0000">
        <svg:path
          d="M279.8 197.5c8.4 10.4 34.5 67.6-15.7 105.2-23.7 17.8-9 18.6-8.3 21.6 38-20.1 50.3-47.5 50-72-.2-24.4-13.2-46-26-54.8"
        />
        <svg:path
          d="M284.8 194.8a73.3 73.3 0 0 1 15.7 112.4c27.2-6 62-86.4-15.7-112.4m-57.6 0a73.3 73.3 0 0 0-15.6 112.4c-27.3-6-62-86.4 15.6-112.4"
        />
        <svg:path
          d="M232.2 197.5c-8.4 10.4-34.5 67.6 15.7 105.2 23.6 17.8 9 18.6 8.3 21.6-38-20.1-50.3-47.5-50-72 .2-24.4 13.2-46 26-54.8"
        />
        <svg:path
          d="M304.2 319.1c-14.9.2-33.6-2-47.5-9.3 2.3 4.5 4.2 7.3 6.5 11.7 13.2 1.3 31.5 2.8 41-2.4m-95 0c14.9.2 33.6-2 47.5-9.3-2.3 4.5-4.2 7.3-6.5 11.7-13.2 1.3-31.5 2.8-41-2.4m27.3-138.7c3 8 10.9 9.2 19.3 4.5 6.2 3.6 15.7 3.9 19-4.1 2.5 19.8-18.3 15-19 11.2-7.8 7.5-22.2 3.2-19.3-11.6"
        />
        <svg:path d="m256.4 331.6 7.8-9 1.1-120.1-9.3-8.2-9.3 7.8 1.9 121z" />
      </g>
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIrFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
