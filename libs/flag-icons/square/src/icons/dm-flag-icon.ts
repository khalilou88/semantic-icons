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
  selector: 'svg[si-dm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="dm-a">
        <svg:path fill-opacity=".7" d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
    <svg:g fill-rule="evenodd" clip-path="url(#dm-a)">
      <svg:path fill="#108c00" d="M-258.3 0H769.2v512H-258.3z" />
      <svg:path fill="#ffd600" d="M-260 178.2H772.6v50.1H-260z" />
      <svg:path fill="#ffd600" d="M181 0h48.5v512h-48.4z" />
      <svg:path fill="#000001" d="M227.8 0h48.4v512h-48.4z" />
      <svg:path fill="#000001" d="M-260 226.6H772.6v50.2H-260z" />
      <svg:path fill="#fff" d="M-260 276.8H772.6v50.1H-260z" />
      <svg:path fill="#fff" d="M276.2 0h48.5v512h-48.5z" />
      <svg:rect
        width="273.8"
        height="275"
        x="-394.6"
        y="-393.9"
        fill="#e72910"
        ry="137.5"
        transform="scale(-1)"
      />
      <svg:g stroke-width="1pt">
        <svg:path
          d="m250.5 137 5.6-16 5.1 15.7s17.1.5 17.1.2-13.5 10.3-13.5 10.3l6.1 17.6c-.2-.5-14.8-10.9-14.8-10.9s-14.8 10.4-14.5 10.4 5.6-17 5.6-17l-13.3-10.1 16.6-.3z"
        />
        <svg:path
          fill="#ffe700"
          d="M251.3 137.7 256 124l4.4 13.6s14.9.4 14.9.2-11.7 9-11.7 9l5.2 15.2c-.2-.5-12.8-9.4-12.8-9.4s-12.8 9-12.6 9 5-14.8 5-14.8l-11.6-8.8 14.4-.2z"
        />
        <svg:path
          fill="#108c00"
          d="m253.3 140 2.8-8 2.6 7.9s8.5.2 8.5 0-6.7 5.2-6.7 5.2l3 8.8c-.1-.3-7.4-5.4-7.4-5.4l-7.2 5.2c.2 0 2.8-8.5 2.8-8.5l-6.6-5z"
        />
      </svg:g>
      <svg:g stroke-width="1pt">
        <svg:path
          d="m356.9 211.8 5.6-16 5 15.7s17.2.6 17.2.3-13.5 10.3-13.5 10.3l6 17.6c-.2-.5-14.7-10.9-14.7-10.9s-14.8 10.4-14.5 10.4 5.6-17 5.6-17L340.3 212l16.6-.3z"
        />
        <svg:path
          fill="#ffe700"
          d="m357.6 212.6 4.9-13.9 4.4 13.7s14.8.4 14.8.2-11.7 9-11.7 9l5.3 15.1c-.2-.4-12.8-9.4-12.8-9.4s-12.8 9-12.6 9 4.9-14.8 4.9-14.8l-11.5-8.7z"
        />
        <svg:path
          fill="#108c00"
          d="m359.7 214.9 2.8-8 2.5 7.8 8.6.2-6.8 5.1s3.2 9 3 8.8c0-.3-7.3-5.4-7.3-5.4l-7.3 5.1 2.8-8.5-6.6-5z"
        />
      </svg:g>
      <svg:g stroke-width="1pt">
        <svg:path
          d="m325.9 330.6 5.6-16 5 15.8s17.2.5 17.2.3-13.5 10.3-13.5 10.3l6 17.5c-.2-.5-14.7-10.8-14.7-10.8S316.7 358 316.9 358s5.7-17 5.7-17l-13.3-10z"
        />
        <svg:path
          fill="#ffe700"
          d="m326.6 331.4 4.9-13.8 4.4 13.6s14.8.5 14.8.2-11.7 9-11.7 9l5.3 15.2c-.2-.5-12.8-9.4-12.8-9.4s-12.8 9-12.6 9 4.9-14.8 4.9-14.8l-11.5-8.7z"
        />
        <svg:path
          fill="#108c00"
          d="m328.7 333.7 2.8-8 2.5 7.9s8.6.3 8.6.1-6.8 5.2-6.8 5.2l3 8.7c0-.2-7.3-5.4-7.3-5.4l-7.3 5.2 2.8-8.5-6.6-5z"
        />
      </svg:g>
      <svg:g stroke-width="1pt">
        <svg:path
          d="m177.2 330.6 5.6-16 5 15.8s17.1.5 17.1.3-13.5 10.3-13.5 10.3l6.2 17.5c-.3-.5-14.8-10.8-14.8-10.8S168 358 168.2 358s5.7-17 5.7-17l-13.3-10z"
        />
        <svg:path
          fill="#ffe700"
          d="m178 331.4 4.8-13.8 4.4 13.6s14.8.5 14.8.2-11.7 9-11.7 9l5.3 15.2c-.2-.5-12.8-9.4-12.8-9.4s-12.8 9-12.6 9 4.9-14.8 4.9-14.8l-11.5-8.7z"
        />
        <svg:path
          fill="#108c00"
          d="m180 333.7 2.8-8 2.5 7.9s8.6.3 8.6.1-6.8 5.2-6.8 5.2l3 8.7c0-.2-7.3-5.4-7.3-5.4l-7.3 5.2 2.8-8.5-6.6-5z"
        />
      </svg:g>
      <svg:g stroke-width="1pt">
        <svg:path
          d="m150 208.7 5.6-16 5.1 15.8s17.1.5 17.1.2-13.5 10.4-13.5 10.4l6.1 17.5c-.3-.5-14.8-10.8-14.8-10.8S140.8 236 141.1 236s5.6-17 5.6-17l-13.3-10z"
        />
        <svg:path
          fill="#ffe700"
          d="m150.8 209.5 4.8-13.8 4.5 13.6s14.7.5 14.7.2-11.7 9-11.7 9l5.3 15.2c-.2-.5-12.8-9.4-12.8-9.4s-12.8 9-12.5 9 4.8-14.8 4.8-14.8l-11.5-8.7z"
        />
        <svg:path
          fill="#108c00"
          d="m152.8 211.8 2.8-8 2.6 7.9 8.5.1-6.7 5.2 3 8.7c-.1-.2-7.4-5.4-7.4-5.4l-7.2 5.2c.2 0 2.8-8.5 2.8-8.5l-6.6-5z"
        />
      </svg:g>
      <svg:g stroke-width="1pt">
        <svg:path
          d="m324.6 174.1-5.6 16-5-15.7s-17.2-.5-17.2-.3 13.5-10.3 13.5-10.3l-6-17.5c.2.5 14.7 10.8 14.7 10.8s14.8-10.3 14.5-10.3-5.6 17-5.6 17l13.3 10z"
        />
        <svg:path
          fill="#ffe700"
          d="M323.9 173.3c0 .3-5 13.9-5 13.9l-4.3-13.6s-14.8-.5-14.8-.3 11.7-8.9 11.7-8.9l-5.3-15.2c.2.5 12.8 9.4 12.8 9.4s12.8-9 12.6-9-4.9 14.8-4.9 14.8l11.5 8.7z"
        />
        <svg:path
          fill="#108c00"
          d="m321.8 171-2.8 8-2.5-7.8s-8.6-.3-8.6-.1 6.8-5.2 6.8-5.2l-3-8.7c0 .2 7.3 5.4 7.3 5.4l7.3-5.2c-.2 0-2.9 8.5-2.9 8.5l6.7 5-8.3.2z"
        />
      </svg:g>
      <svg:g stroke-width="1pt">
        <svg:path
          d="m367.3 290.3-5.6 16-5-15.8s-17.2-.5-17.2-.2S353 280 353 280l-6-17.6c.2.5 14.7 10.8 14.7 10.8s14.8-10.3 14.5-10.3-5.6 17-5.6 17L384 290z"
        />
        <svg:path
          fill="#ffe700"
          d="m366.6 289.5-4.9 13.8-4.4-13.6s-14.8-.4-14.8-.2 11.7-9 11.7-9l-5.3-15.2c.2.5 12.8 9.4 12.8 9.4s12.8-9 12.6-9-4.9 14.8-4.9 14.8l11.5 8.8z"
        />
        <svg:path
          fill="#108c00"
          d="m364.5 287.2-2.8 8-2.5-7.9s-8.6-.2-8.6 0 6.8-5.2 6.8-5.2l-3-8.8c0 .3 7.3 5.4 7.3 5.4l7.3-5.2c-.2 0-2.9 8.6-2.9 8.6l6.7 5z"
        />
      </svg:g>
      <svg:g stroke-width="1pt">
        <svg:path
          d="m261.4 375.3-5.6 16-5-15.8s-17.2-.5-17.2-.3 13.5-10.3 13.5-10.3l-6-17.5c.2.5 14.7 10.8 14.7 10.8s14.8-10.3 14.5-10.3-5.6 17-5.6 17L278 375z"
        />
        <svg:path
          fill="#ffe700"
          d="m260.7 374.4-4.9 14-4.4-13.7s-14.8-.5-14.8-.2 11.7-9 11.7-9l-5.3-15.2c.2.5 12.8 9.4 12.8 9.4s12.8-9 12.6-9-4.9 14.8-4.9 14.8l11.5 8.7-14.3.3z"
        />
        <svg:path
          fill="#108c00"
          d="m258.6 372.2-2.8 8-2.5-7.9s-8.6-.3-8.6-.1 6.8-5.2 6.8-5.2l-3-8.7c0 .2 7.3 5.4 7.3 5.4l7.3-5.2-2.8 8.5 6.6 5z"
        />
      </svg:g>
      <svg:g stroke-width="1pt">
        <svg:path
          d="m162 290.3-5.7 16-5-15.8s-17.2-.5-17.2-.2 13.5-10.3 13.5-10.3l-6-17.6c.2.5 14.7 10.8 14.7 10.8L171 263l-5.7 17 13.3 10.1-16.6.3z"
        />
        <svg:path
          fill="#ffe700"
          d="m161.2 289.5-4.9 13.8-4.4-13.6s-14.8-.4-14.8-.2 11.7-9 11.7-9l-5.3-15.2c.2.5 12.8 9.4 12.8 9.4s12.8-9 12.6-9-4.9 14.8-4.9 14.8l11.5 8.8z"
        />
        <svg:path
          fill="#108c00"
          d="m159.1 287.2-2.8 8-2.5-7.9s-8.6-.2-8.6 0 6.8-5.2 6.8-5.2l-3-8.8c0 .3 7.3 5.4 7.3 5.4l7.3-5.2-2.8 8.6 6.6 5z"
        />
      </svg:g>
      <svg:g stroke-width="1pt">
        <svg:path
          d="m198.7 175.8-5.6 16-5.2-15.7s-17-.5-17-.3 13.5-10.3 13.5-10.3l-6.1-17.5c.2.5 14.7 10.8 14.7 10.8s14.8-10.3 14.6-10.3-5.6 17-5.6 17l13.2 10z"
        />
        <svg:path
          fill="#ffe700"
          d="m197.9 175-4.9 14-4.4-13.7s-14.8-.5-14.8-.2 11.7-9 11.7-9l-5.3-15.2c.2.5 12.8 9.4 12.8 9.4s12.8-9 12.6-9-4.8 14.8-4.8 14.8l11.4 8.7-14.3.3z"
        />
        <svg:path
          fill="#108c00"
          d="m195.8 172.8-2.8 8-2.5-7.9s-8.5-.3-8.5-.1 6.7-5.2 6.7-5.2l-3-8.7c0 .2 7.3 5.4 7.3 5.4l7.3-5.2-2.8 8.5 6.6 5z"
        />
      </svg:g>
      <svg:g transform="translate(-250.6 359.4)scale(1.036)">
        <svg:g
          fill="#009200"
          stroke="#000"
          stroke-width="2.5"
          transform="matrix(.164 -.016 .012 .184 429.8 -215.6)"
        >
          <svg:ellipse
            cx="680.2"
            cy="586.1"
            rx="30.8"
            ry="189.8"
            transform="matrix(1.405 -.006 .008 1 -534.3 263.7)"
          />
          <svg:ellipse
            cx="680.2"
            cy="586.1"
            rx="30.8"
            ry="189.8"
            transform="matrix(1.486 -.006 .01 1 -547.2 267)"
          />
          <svg:ellipse
            cx="680.2"
            cy="586.1"
            rx="30.8"
            ry="189.8"
            transform="matrix(1.19 -.006 .007 1.105 -365 214.1)"
          />
        </svg:g>
        <svg:g stroke="#000" transform="translate(72.9 -9.8)">
          <svg:path
            fill="#a95600"
            stroke-width="2.5"
            d="M238.3 971.8c30-1.7 16.7-16.7 31.7-25s36.6-3.3 43.3 6.7c6.6 10 1.6 20 10 20 8.3 0 234.5-12.7 242.8-4.4 8.4 8.3 10 25 1.7 31.6s-294.5 14.4-304.5 7.7c-10-6.6-25-35-25-36.6z"
            transform="matrix(.202 .003 -.004 .214 340.9 -247.3)"
          />
          <svg:path
            fill="#ff0"
            stroke-width="3.9"
            d="M529.6 405.5c0 40 45.6 27.8 46.8 61.2-.7 35.4-76.7 3.5-78.6-61.2 1.9-64.8 75-98 76.7-61 1.2 30.6-45 21-45 61z"
            transform="matrix(.148 .002 -.003 .115 340.4 -81.7)"
          />
          <svg:path
            fill="#ff0"
            stroke-width="3.9"
            d="M529.6 405.5c0 40 45.6 27.8 46.8 61.2-.7 35.4-76.7 3.5-78.6-61.2 1.9-64.8 75-98 76.7-61 1.2 30.6-45 21-45 61z"
            transform="matrix(.148 .002 -.003 .115 344.4 -81.6)"
          />
          <svg:path
            fill="#ff0"
            stroke-width="3.9"
            d="M529.6 405.5c0 40 45.6 27.8 46.8 61.2-.7 35.4-76.7 3.5-78.6-61.2 1.9-64.8 75-98 76.7-61 1.2 30.6-45 21-45 61z"
            transform="matrix(.148 .002 -.003 .115 348.7 -81.8)"
          />
          <svg:path
            fill="#ff0"
            stroke-width="3.9"
            d="M529.6 405.5c0 40 45.6 27.8 46.8 61.2-.7 35.4-76.7 3.5-78.6-61.2 1.9-64.8 75-98 76.7-61 1.2 30.6-45 21-45 61z"
            transform="matrix(.148 .002 -.003 .115 352.7 -81.8)"
          />
          <svg:ellipse
            cx="478.4"
            cy="-41.1"
            fill="#a95600"
            stroke-width=".4"
            rx="3.5"
            ry="3.4"
            transform="matrix(1.095 .016 -.024 1.154 -75.6 4.7)"
          />
        </svg:g>
        <svg:g
          fill="#009200"
          stroke="#000"
          stroke-width="2.5"
          transform="rotate(-5.8 688.4 -625.2)"
        >
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.166 -.008 .002 .315 369.8 -361.6)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.166 -.008 .002 .315 364 -362.7)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.166 -.008 .002 .315 360.6 -370.6)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.16 -.01 .002 .348 369.3 -399.4)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.16 -.008 .002 .326 377.4 -379)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.16 -.008 .002 .326 373.2 -382.2)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.16 -.008 .002 .326 368 -386.7)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.16 -.008 .002 .326 363 -389.5)"
          />
        </svg:g>
        <svg:path
          fill="#804bff"
          stroke="#000"
          stroke-width="2.5"
          d="M173.2 346.4s-54.2 64.9-21.3 208.8C186 699.8 331 745 331 745s26.5-47.5 1.7-164c-40-170-116.1-234.6-116.1-234.6h-43.3z"
          transform="matrix(.177 .032 -.03 .182 461.8 -208.6)"
        />
        <svg:g
          fill="#009200"
          stroke="#000"
          stroke-width="2.5"
          transform="rotate(4.5 181 769.9)"
        >
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.166 -.008 .002 .315 369.8 -361.6)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.166 -.008 .002 .315 364 -362.7)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.166 -.008 .002 .315 360.6 -370.6)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.16 -.01 .002 .348 369.3 -399.4)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.16 -.008 .002 .326 377.4 -379)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.16 -.008 .002 .326 373.2 -382.2)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.16 -.008 .002 .326 368 -386.7)"
          />
          <svg:ellipse
            cx="427.1"
            cy="905"
            rx="20.8"
            ry="24.1"
            transform="matrix(.16 -.008 .002 .326 363 -389.5)"
          />
        </svg:g>
        <svg:ellipse
          cx="624.4"
          cy="606.1"
          fill="#c90000"
          stroke="#000"
          stroke-width="1pt"
          rx="58.3"
          ry="186.5"
          transform="matrix(.157 -.06 .064 .148 369.6 -145)"
        />
        <svg:g fill="#009200" stroke="#000" transform="rotate(1 242.4 -1957.8)">
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.5"
            rx="10.8"
            ry="12.9"
            transform="matrix(.395 0 0 .293 445 -230.5)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.354 0 0 .293 457.2 -236)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.354 0 0 .293 452 -236)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.37 0 0 .275 449.5 -233.5)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.37 0 0 .275 449 -238)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.354 0 0 .293 447 -238.8)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.354 0 0 .287 448 -241.6)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.5"
            rx="10.8"
            ry="12.9"
            transform="matrix(.395 0 0 .293 432.8 -243.5)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.37 0 0 .275 446 -243.5)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.354 0 0 .287 444.2 -247)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.354 0 0 .293 436.1 -243.2)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.354 0 0 .287 437.4 -243.9)"
          />
          <svg:ellipse
            cx="218.1"
            cy="356.8"
            stroke-width="1.6"
            rx="10.8"
            ry="12.9"
            transform="matrix(.354 0 0 .287 439 -247)"
          />
        </svg:g>
        <svg:g
          fill="#009200"
          stroke="#000"
          transform="matrix(.18 -.005 .004 .185 421 -216.8)"
        >
          <svg:ellipse
            cx="528.7"
            cy="564.5"
            stroke-width="2.5"
            rx="67.4"
            ry="205.6"
            transform="matrix(.976 -.308 .363 .874 -245.8 324.4)"
          />
          <svg:ellipse
            cx="528.7"
            cy="646.1"
            stroke-width="2.5"
            rx="13.3"
            ry="40.8"
            transform="rotate(-23.4 630.5 660.9)"
          />
          <svg:path
            stroke-width="1.5"
            d="M139.9 644c0 57.7-18.8 86.2-34.6 110.3 7.5-32.5 13-52.6 13-110.3 0-57.7 29.5-85.3 40.3-102-4.2 16.7-18.7 44.3-18.7 102z"
            transform="matrix(1.883 -.456 .953 1.182 -352.3 -10)"
          />
          <svg:path
            stroke-width="1.5"
            d="M139.9 644c0 57.7-18.8 86.2-34.6 110.3 7.5-32.5 13-52.6 13-110.3 0-57.7 29.5-85.3 40.3-102-4.2 16.7-18.7 44.3-18.7 102z"
            transform="matrix(1.883 -.456 .953 1.182 -348.4 44)"
          />
          <svg:path
            stroke-width="1.5"
            d="M139.9 644c0 57.7-18.8 86.2-34.6 110.3 7.5-32.5 13-52.6 13-110.3 0-57.7 29.5-85.3 40.3-102-4.2 16.7-18.7 44.3-18.7 102z"
            transform="matrix(1.873 -.495 .978 1.162 -362 105.8)"
          />
          <svg:ellipse
            cx="528.7"
            cy="646.1"
            stroke-width="1.4"
            rx="13.3"
            ry="40.8"
            transform="matrix(1.81 -.4 .7 1.635 -915.6 -221)"
          />
          <svg:ellipse
            cx="528.7"
            cy="646.1"
            stroke-width="1.6"
            rx="13.3"
            ry="40.8"
            transform="matrix(1.626 -.23 .542 1.353 -739.5 -91.8)"
          />
          <svg:ellipse
            cx="528.7"
            cy="646.1"
            stroke-width="1.6"
            rx="13.3"
            ry="40.8"
            transform="matrix(1.63 -.197 .513 1.363 -750.6 -91.8)"
          />
          <svg:ellipse
            cx="528.7"
            cy="646.1"
            stroke-width="2.1"
            rx="13.3"
            ry="40.8"
            transform="matrix(1.314 -.2 .47 1.01 -531 47.6)"
          />
          <svg:ellipse
            cx="528.7"
            cy="646.1"
            stroke-width="2.1"
            rx="13.3"
            ry="40.8"
            transform="matrix(1.326 -.13 .403 1.033 -517.9 12.2)"
          />
          <svg:path
            stroke-width="2.1"
            d="M145.7 569.5c0 34-6.7 61.6-15 61.6s-15-27.6-15-61.6"
            transform="matrix(1.025 -.493 .464 1.177 12.8 -14.5)"
          />
          <svg:ellipse
            cx="528.7"
            cy="646.1"
            stroke-width="2.1"
            rx="13.3"
            ry="40.8"
            transform="matrix(1.326 -.13 .403 1.033 -519.5 -34.4)"
          />
          <svg:ellipse
            cx="528.7"
            cy="646.1"
            stroke-width="2.1"
            rx="13.3"
            ry="40.8"
            transform="matrix(1.33 -.105 .38 1.04 -534 -40.1)"
          />
          <svg:path
            stroke-width="2.9"
            d="M145.7 569.5c0 34-6.7 61.6-15 61.6s-15-27.6-15-61.6"
            transform="matrix(.672 -.472 .46 .8 39.5 143.3)"
          />
          <svg:path
            stroke-width="2.9"
            d="M145.7 569.5c0 34-6.7 61.6-15 61.6s-15-27.6-15-61.6"
            transform="matrix(.672 -.472 .46 .8 51.1 125.8)"
          />
          <svg:path
            stroke-width="2.1"
            d="M145.7 569.5c0 34-6.7 61.6-15 61.6s-15-27.6-15-61.6"
            transform="matrix(.937 -.645 .64 1.092 -40.2 -10.7)"
          />
          <svg:path
            stroke-width="2.7"
            d="M145.7 569.5c0 34-6.7 61.6-15 61.6s-15-27.6-15-61.6"
            transform="matrix(.672 -.52 .46 .88 68.6 71.2)"
          />
        </svg:g>
        <svg:g fill="#804bff" stroke="#000" stroke-width="2.5">
          <svg:path
            d="M276.3 345.4c-12.3 9.2.4 25.2 12 30.7 13 7.7 86.6 58.2 136.3 12-40.8.8-118.7-63.2-148.3-42.7z"
            transform="matrix(.156 .007 -.004 .225 458 -214.3)"
          />
          <svg:path
            d="M276.3 345.4c-12.3 9.2.4 25.2 12 30.7 13 7.7 86.6 58.2 136.3 12-40.8.8-118.7-63.2-148.3-42.7z"
            transform="matrix(.156 .007 -.004 .225 456.6 -220.2)"
          />
          <svg:path
            d="M276.3 345.4c-12.3 9.2.4 25.2 12 30.7 13 7.7 86.6 58.2 136.3 12-40.8.8-118.7-63.2-148.3-42.7z"
            transform="matrix(.156 .007 -.004 .225 454.8 -225.8)"
          />
          <svg:path
            d="M276.3 345.4c-12.3 9.2.4 25.2 12 30.7 13 7.7 86.6 58.2 136.3 12-40.8.8-118.7-63.2-148.3-42.7z"
            transform="matrix(.156 .007 -.004 .225 450.9 -232.2)"
          />
        </svg:g>
        <svg:g transform="rotate(1 -589.6 681.6)">
          <svg:path
            fill="#804bff"
            stroke="#000"
            stroke-width="2.5"
            d="M211.2 247.3c21.7-12 56.6-9.8 79.7 11.2 19.4 17 45.3 75.2 70.3 92.8a57.7 57.7 0 0 1-42.2-15.2c-28.8 15.5-38.1 16.7-64 15.7-35.8-1.4-62.4-17.7-68-40.6-6.3-21.8 4.8-52.5 24.2-63.9z"
            transform="matrix(.21 -.04 .047 .18 407.8 -213.6)"
          />
          <svg:ellipse
            cx="287.2"
            cy="323"
            fill="red"
            stroke="#000"
            stroke-width="2.5"
            rx="14.2"
            ry="15"
            transform="matrix(.245 0 0 .134 401.8 -215.2)"
          />
          <svg:ellipse
            cx="204.6"
            cy="348.3"
            fill="#ff0"
            stroke="#000"
            stroke-width="2.5"
            rx="23.3"
            ry="15.9"
            transform="matrix(.194 -.076 .068 .173 398.7 -208)"
          />
          <svg:circle
            cx="283.9"
            cy="333.9"
            r="5.8"
            transform="matrix(.214 0 0 .185 411.3 -233.7)"
          />
          <svg:path
            fill="#ff0"
            stroke="#000"
            stroke-width="6.6"
            d="M516.8 260.3c4.4 18-6.7 43-33.1 52.6-26.8 13.2-46.1 41.8-55.7 88-47.2-103.2-23-148.3 20.6-160.3 37.4-14.4 60.4-13.4 68.2 19.7z"
            transform="matrix(.092 0 -.003 .085 417.9 -191.5)"
          />
          <svg:circle
            cx="199"
            cy="362.4"
            r="4.7"
            transform="matrix(.187 -.013 .014 .19 418.7 -235)"
          />
        </svg:g>
      </svg:g>
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDmFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
