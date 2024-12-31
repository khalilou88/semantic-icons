import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-py-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-py"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#0038a8" d="M0 341h512v171H0z" />
      <path fill="#fff" d="M0 170.7h512v170.6H0z" />
      <path fill="#d52b1e" d="M0 0h512v170.7H0z" />
      <g fill="none" stroke="#000" transform="translate(-209)scale(1.55152)">
        <circle cx="300" cy="165" r="42.2" stroke-width="1.1" />
        <circle cx="300" cy="165" r="34.7" stroke-width=".5" />
        <circle cx="300" cy="165" r="26.6" stroke-width=".4" />
      </g>
      <path
        d="m221.6 281.3-7.6 4.5-2.3-4a6.6 6.6 0 0 1-.8-1.7 2 2 0 0 1 .2-1.3c.2-.5.5-.8 1-1.1a2.4 2.4 0 0 1 2.4-.1l.8.6a2.7 2.7 0 0 1 0-.7l.1-.6.3-.7 1.5-2.4 1.6 2.6-1.6 2.7a2 2 0 0 0-.3.8 1.1 1.1 0 0 0 .1.6l.2.2 3-1.8zm-5.9.3-.6-1a5 5 0 0 0-.4-.6.7.7 0 0 0-.5-.2.8.8 0 0 0-.5.1c-.3.2-.4.3-.5.6l.4 1 .6 1zm-7.1-5.9-2.3-7 1.8-.5 1.4 4.3 1.3-.4-1.3-4 1.7-.6 1.3 4 1.7-.5-1.5-4.5 2-.6 2.3 7zm-3-10.3-.6-4.5c0-1 0-1.8.5-2.3.4-.5 1-.9 1.9-1 .9 0 1.6.1 2.2.6.5.5.9 1.3 1 2.4l.2 1.4 3.2-.3.3 2.7zm3.4-3.1-.1-.7c0-.5-.2-.9-.4-1a.9.9 0 0 0-.7-.3 1 1 0 0 0-.7.3c-.2.2-.2.6-.2 1.1l.1.8zm-3.7-13.5.3-2.7 5.2.6c.5 0 1 .2 1.4.4.5.2.9.5 1.2.9l.6 1.2a4 4 0 0 1 0 1.9c0 .4 0 .9-.2 1.4 0 .5-.2.9-.5 1.2l-.8.8a2.8 2.8 0 0 1-1.1.5c-.6.1-1 .2-1.5.1l-5.2-.6.3-2.7 5.3.6c.5 0 .9 0 1.2-.3.3-.2.4-.6.5-1a1.5 1.5 0 0 0-.3-1.2c-.2-.3-.6-.4-1-.5zm1.1-6.4 1.7-4.9c.3-.8.7-1.3 1.3-1.6a2 2 0 0 1 1.7-.1 2 2 0 0 1 1.3 2c.4-.6.8-1 1.2-1a2 2 0 0 1 1.5 0 2.4 2.4 0 0 1 1.6 1.8v1l-.4 1.2-1.5 4.5zm4.2-1.5.4-1.1c.2-.4.2-.7.1-1 0-.1-.2-.3-.5-.4a.8.8 0 0 0-.7 0l-.5.8-.4 1.2zm3.3 1.2.5-1.4v-1a.8.8 0 0 0-.5-.5.8.8 0 0 0-.7 0c-.2.2-.4.5-.5 1l-.5 1.3zm-3.3-10.3 1.4-2.4 5.7 3.4 2.2-3.6 1.9 1.1-3.6 6zm5.4-8.1 1.7-2.1 6.8 5.6-1.8 2.1zm11.8-4.6 2.3-1c.3.6.5 1.2.5 1.8a3.3 3.3 0 0 1-.3 1.6 5 5 0 0 1-1.2 1.5 5.7 5.7 0 0 1-2 1.2c-.7.2-1.4.2-2.2 0a5 5 0 0 1-2.3-1.7c-1-1-1.4-2.2-1.3-3.3 0-1.1.6-2.1 1.7-3a4.5 4.5 0 0 1 2.4-1.2 4 4 0 0 1 2.5.6l-1.5 2a2 2 0 0 0-.6-.3 1.6 1.6 0 0 0-.7 0 1.6 1.6 0 0 0-.7.4c-.5.4-.7.9-.6 1.5 0 .4.3 1 .9 1.5.6.8 1.2 1.2 1.6 1.3.5 0 .9 0 1.3-.4s.6-.7.6-1.1c0-.4-.1-.9-.4-1.4m9.4-3.4-2.7 1.5.3 1.5-2.5 1.3-1.2-9.4 2.6-1.4 7.1 6.3-2.5 1.3zm-1.4-1.4-2.3-2.3.6 3.2zm8.4-9 4-.7a4.8 4.8 0 0 1 2 0c.5.1.9.3 1.3.7.4.3.7.7 1 1.2l.4 1.7c.2 1 .2 1.7 0 2.2a3.6 3.6 0 0 1-.6 1.5 2.9 2.9 0 0 1-1 .9l-1.6.5-4 .7zm3 1.5.8 4.7h.7c.5-.2 1-.3 1.1-.5.3-.1.4-.4.5-.7v-1.6c-.2-.9-.5-1.5-.8-1.8-.4-.3-1-.4-1.6-.2zm8.3-3 7.3.2v2l-4.6-.2-.1 1.4 4.2.1v1.8l-4.3-.1v1.7l4.7.2-.1 2-7.5-.3zm10.6.8 2.7.6-1.6 6.5 4.1 1-.5 2.1-6.8-1.6zm14.2 4.7 3.9 2.3c.9.5 1.4 1 1.6 1.7.1.7 0 1.4-.4 2.1a2.7 2.7 0 0 1-1.8 1.4c-.7.2-1.5 0-2.5-.6l-1.3-.7-1.6 2.8-2.4-1.4zm.5 4.6.5.4 1.1.3a.9.9 0 0 0 .6-.4 1 1 0 0 0 .2-.8c-.1-.3-.3-.5-.8-.8l-.6-.4zm7.6 10.3-2.3-2.1-1.3.8-2-2 8.4-4.1 2.2 2-3.6 8.7-2-2zm.9-1.8 1.4-3-2.8 1.7zm1 5.9 7.3-5 2.6 3.7 1 1.8-.1 1.3c-.2.4-.5.8-1 1.1a2 2 0 0 1-1.2.5 2.5 2.5 0 0 1-1.2-.2 3.3 3.3 0 0 1-.8-.6v1.4l-.3.6-1.4 2.5-1.7-2.5 1.4-2.7.3-.8c0-.2 0-.5-.2-.7l-.2-.2-3 2zm6-.7.6 1 .5.4a.7.7 0 0 0 .5.3c.1 0 .3 0 .5-.2a.8.8 0 0 0 .4-.6l-.4-1-.7-1zm2.7 13.2-1.2-2.9-1.5.1-1-2.5 9.4-.2 1 2.7-6.9 6.4-1-2.7zm1.5-1.2 2.6-2.1-3.3.2zm2.3 9.6 1.8-.3.7 4.2-3.8.6a8.6 8.6 0 0 1-1.4-2 7.4 7.4 0 0 1-.5-4.8c.3-.7.7-1.2 1.4-1.7a5.3 5.3 0 0 1 2.3-.9 5 5 0 0 1 2.6.2 3.9 3.9 0 0 1 1.9 1.5c.3.6.6 1.3.7 2.3a7 7 0 0 1 0 2.2 2.8 2.8 0 0 1-.5 1.3l-1.3 1-.9-2.6c.3-.1.5-.3.7-.6.1-.3.2-.7.1-1a1.8 1.8 0 0 0-.8-1.4c-.5-.3-1.2-.3-2-.2-1 .1-1.7.4-2 .8a1.9 1.9 0 0 0-.4 1.6l.3.9.6.8h.8zm5.8 12.8-.3 2.7-5.2-.4a4.4 4.4 0 0 1-1.4-.4 3.2 3.2 0 0 1-1.2-.9 3 3 0 0 1-.6-1.1 5.5 5.5 0 0 1-.1-2c0-.4 0-.9.2-1.4l.4-1.2a3.2 3.2 0 0 1 .9-.9 2.8 2.8 0 0 1 1-.5 5.3 5.3 0 0 1 1.6 0l5.2.4-.2 2.7-5.4-.5c-.5 0-.9 0-1.2.3-.3.3-.4.6-.5 1.1 0 .5 0 .8.3 1.1.3.3.6.5 1.1.5zm-9.8 9.4 1-3-1.2-.9.8-2.6 7.4 5.9-1 2.8-9.4.4 1-2.7zm2 0h3.3l-2.7-1.8zm3.2 7.2-1.6 2.6H299l1.6 3-1.6 2.6-2.6-5.6-3.2-1.8 1.4-2.4 3.2 1.9z"
      />
      <g fill="#009b3a" stroke="#000" stroke-width=".1">
        <path
          d="M265.2 225.4s24.9 10.8 20.5 33c-4.3 22.1-18.2 22-23.6 24.4-5.5 2.5-9.2 6-11.4 5.5-2.1-.5-5-2.2-5-2.2s-.2 3.7 4.2 4.3c4.4.7 10-5.7 12.9-6.4s19.6-2.6 23.8-25.1c4.8-24.1-21.3-32.8-21.4-33.5z"
        />
        <path
          d="M277.7 230.2a3.4.8 75.1 0 1-1.6 0 3.4.8 75.1 1 1 1.6 0zm-.8.2a3.5.8 63.3 1 1-1.5.5 3.5.8 63.3 0 1 1.5-.5zm-2.5 1.6a3.3.8 17 0 1-.2 1.7 3.3.8 17 0 1 .2-1.7z"
        />
        <path d="M274.8 231.1a3.5.8 34.2 1 1-.8 1.4 3.5.8 34.2 1 1 .7-1.4z" />
        <path d="M275.8 230.7a3.6.8 46.2 1 1-1 1 3.6.8 46.2 0 1 1-1z" />
        <path
          d="m277.5 233.8-1.1.6c-.3.1-.6-.3-1.2 0-.6.4-1 1-1.2 1.3-.1.4.2.5 1 .2.7-.4 1-1 1.3-1.2.3-.3 1-.6 1.3-.7l1-1.5c.2-.4 1.2-1 1.6-1.9.3-.6.2-1.2-.3-1a4 4 0 0 0-1.2 1.4c-.3.5 0 1-.3 1.5zm7.8 2.6a1.1 5.1-1.6 1 1-2.4-.6 1.1 5.1-1.6 1 1 2.4.6z"
        />
        <path d="M284 236.3a5.3 1.1 77.5 1 1-2.3.1 5.3 1.1 77.5 1 1 2.3 0z" />
        <path d="M280 237.6a5 1.2 35 1 1-.8 2.3 5 1.2 35 1 1 .8-2.4z" />
        <path
          d="M280.8 236.4a5.3 1.1 50.9 0 1-1.5 1.7 5.3 1.1 50.9 1 1 1.5-1.7z"
        />
        <path d="M282.4 236.3a5.4 1 61.8 1 1-1.9 1 5.4 1 61.8 1 1 1.9-1z" />
        <path
          d="m283.8 241.5-1.9.4c-.3 0-.6-.7-1.6-.5-1 .2-1.8.9-2 1.3-.4.4 0 .8 1.2.6 1.2-.2 1.6-1 2.2-1.1l2.1-.4 1.8-1.7c.5-.5 2-1 2.8-2 .7-.8.7-1.6 0-1.5a5 5 0 0 0-2.1 1.4c-.5.6-.4 1.5-1 2zm5.5 5.2a1.1 5.2 8.7 1 1-2.2-1 1.1 5.2 8.7 1 1 2.2 1z"
        />
        <path d="M288 246.4a1.1 5.4-2 1 1-2.1-.3 1.1 5.4-2 1 1 2.2.3z" />
        <path d="M284 246.8a5 1.2 46 1 1-1.2 2.2 5 1.2 46 1 1 1.1-2.2z" />
        <path
          d="M285 245.9a5.4 1.1 61.8 1 1-1.8 1.4 5.4 1.1 61.8 1 1 1.7-1.4z"
        />
        <path d="M286.5 246a5.5 1 72.5 1 1-2 .8 5.5 1 72.5 1 1 2-.8z" />
        <path
          d="M287 251.5h-2c-.3 0-.4-.8-1.4-.8-1 0-2 .5-2.3.9-.4.3 0 .8 1.1.8 1.2 0 1.8-.6 2.4-.7h2.1l2-1.3c.6-.4 2.3-.6 3.2-1.4.8-.6 1-1.5.3-1.4a5 5 0 0 0-2.4 1c-.6.4-.6 1.3-1.3 1.7l-1.8 1.2m2.7 6.7a1.1 5.2 31.3 0 1-1.6-1.8 1.1 5.2 31.3 0 1 1.6 1.8"
        />
        <path
          d="M288.6 257.4a1 5.4 20.6 0 1-1.9-1.2 1 5.4 20.6 0 1 1.9 1.2m-3.9-1.3a5 1.2 70 0 1-2 1.6 5 1.2 70 0 1 2-1.6"
        />
        <path d="M286 255.7a1 5.5-4.9 0 1-2.2.6 1 5.5-4.9 1 1 2.2-.6" />
        <path d="M287.4 256.5a1 5.5 5.5 1 1-2.2-.2 1 5.5 5.5 1 1 2.2.2" />
        <path
          d="m285.6 261.7-1.7-.8c-.3-.2-.1-.9-1-1.3-1-.4-2-.4-2.4-.2-.5.2-.4.7.7 1.3 1 .5 1.8.1 2.4.4l2 .8 2.2-.4c.7 0 2.3.4 3.4 0 1-.2 1.5-1 .9-1.2a4.8 4.8 0 0 0-2.6-.1c-.7.2-1.1 1-1.8 1.2-.5 0-2 .4-2.1.3m1 8.2a1.3 5.9 48.5 1 1-1.2-2.6 1.3 5.9 48.5 1 1 1.1 2.6"
        />
        <path d="M285.6 268.7a1.3 6.2 37.5 1 1-1.6-2 1.3 6.2 37.5 1 1 1.6 2" />
        <path d="M281.8 265.8a1.3 6-3.5 1 1-2.6 1 1.3 6-3.5 1 1 2.6-1" />
        <path d="M283.3 265.8a1.3 6.3 11.6 0 1-2.5-.2 1.3 6.3 11.6 1 1 2.5.2" />
        <path d="M284.6 267.1a1.2 6.4 22.1 1 1-2.3-.9 1.2 6.4 22.1 1 1 2.3 1" />
        <path
          d="m281 272.3-1.7-1.5c-.2-.3.2-1-.7-1.8a3.9 3.9 0 0 0-2.6-1c-.6 0-.6.6.4 1.6s2 .8 2.5 1.3a10 10 0 0 1 1.9 1.6l2.7.4c.7.1 2.3 1.3 3.7 1.3 1.2 0 2-.6 1.3-1.1a5.6 5.6 0 0 0-2.7-1c-.9 0-1.6.7-2.5.6l-2.4-.4m-2.4 7.8a1.5 6.5 79.8 1 1 .3-3 1.5 6.5 79.8 1 1-.3 3"
        />
        <path
          d="M278.4 278.4a1.4 6.8 68.5 0 1-.5-2.8 1.4 6.8 68.5 0 1 .5 2.8"
        />
        <path d="M276.1 273.5a1.5 6.5 26.2 0 1-3-.6 1.5 6.5 26.2 1 1 3 .6" />
        <path
          d="M277.7 274.4a1.4 6.9 41.8 0 1-2.4-1.6 1.4 6.9 41.8 0 1 2.4 1.6"
        />
        <path d="M278.1 276.4a1.4 7 52.7 1 1-1.7-2.2 1.4 7 52.7 0 1 1.8 2.2" />
        <path
          d="m271.8 279.2-.7-2.3c-.1-.5.7-1 .3-2.2a4.5 4.5 0 0 0-2-2.5c-.5-.3-1 .3-.5 1.8.4 1.5 1.5 2 1.8 2.7l.8 2.6c.6.3 1.7 1.4 2.4 2 .7.5 1.6 2.5 3 3.3 1 .7 2 .6 1.8-.3a6.5 6.5 0 0 0-2.1-2.5c-.8-.6-2-.3-2.7-.9-.5-.4-2.1-1.6-2-1.7"
        />
        <path d="M268 285.9a1.9 6.5 89 0 1 0-3.8 1.9 6.5 89 0 1 0 3.8" />
        <path
          d="M267.1 280a1.8 6.8 37.6 0 1-2.8-2.4 1.8 6.8 37.6 1 1 2.8 2.4"
        />
        <path
          d="M268 283a1.9 6.6 66.5 0 1-1.3-3.5 1.9 6.6 66.5 0 1 1.3 3.5m1.8-57a4 .8 41.1 0 1-1.5.8 4 .8 41.1 1 1 1.5-.8m-2 1.7a4.1.8 8.2 0 1 .3 1.7 4.1.8 8.2 1 1-.3-1.7"
        />
        <path
          d="M268.6 226.6a4.3.8 26.8 1 1-.8 1.4 4.3.8 26.8 0 1 .8-1.4m-29.5 52.9s5.5 1.2 10.3 2.9c4.7 1.7 12 7.7 14 8 2.1.1 5.1-.6 6.3-3.8-3.4 1-5.4 2.3-8.6.5-1.1-.4-4.8-3.8-9-5.6a103 103 0 0 0-12.2-3.9l-.8 1.9m5.9-49.6 6.3-3.4-7 1.8-.8 1.2 1.5.4"
        />
        <path
          d="M251 231.4c-2.5-.4-6.3-1.3-8.7-1.5 1.7-1.8 4-4.9 5.4-6.8-1 1.8-2.4 4.2-3 6 1.7.9 4.4 1.6 6.3 2.3"
        />
        <path d="m243.8 230.3 5.6-4.4-6.5 3-.6 1.3h1.5" />
        <path
          d="M249.8 231.3c-2.5-.4-6.2-1.3-8.6-1.5 1.6-1.9 3.8-5 5.2-7-1 1.8-2.3 4.3-2.9 6.1 1.7 1 4.4 1.7 6.3 2.4"
        />
        <path d="m242.9 230.6 6.6-2.7-7.1 1.1-1 1.2 1.5.4" />
        <path
          d="M249 231.4c-2.4-.2-6.3-.7-8.7-.6 1.4-2.1 3.2-5.6 4.4-7.7-.7 2-1.8 4.6-2.1 6.5 1.8.8 4.5 1.3 6.5 1.8"
        />
        <path d="m242.2 230.7 4.5-5.5-5.7 4.2-.2 1.5 1.4-.3" />
        <path
          d="M249 231.8c-2.6 0-6.8-.3-9.3 0 1.3-2.5 2.8-6.4 3.8-8.8-.5 2.2-1.4 5.2-1.6 7.3 2 .7 5 1 7.1 1.5"
        />
        <path d="M241.3 232a321.4 321.4 0 0 1 5.4-5.3l-6.5 3.7-.5 1.5h1.6" />
        <path
          d="M247.8 232c-2.8 0-7.2-.2-10 .1 1.8-2.7 4.4-7 6-9.7-1 2.4-2.7 5.8-3.3 8 2 .8 5.1 1 7.3 1.5"
        />
        <path d="m239.5 232.3 7-5.9-8 4.2-.7 1.7h1.7" />
        <path
          d="M246.8 232.1c-2.8.4-7.2.9-10 1.6a129 129 0 0 0 4.5-10.3c-.6 2.5-1.7 6-2 8.3 2.1.4 5.2.3 7.5.4"
        />
        <path d="M238.6 233.5a498.6 498.6 0 0 1 5.3-7.4l-6.7 6-.3 1.9 1.6-.5" />
        <path
          d="M245.2 233c-2.8.3-7.2.5-10 1 1.6-2.7 3.8-7.2 5-10-.7 2.5-2 5.9-2.4 8.2 2 .5 5.2.5 7.4.8"
        />
        <path d="m237.6 234.3 6.8-6-7.7 4.2-.8 1.8h1.7" />
        <path
          d="M244.4 233.3c-2.9.6-7.3 1.3-10 2.2 1.3-2.9 3-7.6 4-10.5-.5 2.6-1.4 6-1.6 8.4 2.1.3 5.3-.1 7.6-.1"
        />
        <path d="m236.5 234.6 4.3-8.1-5.9 7v1.8l1.6-.7" />
        <path
          d="M244.4 233.8c-3 .7-7.8 1.8-10.7 2.9 1.1-3.3 2.4-8.6 3.2-11.9-.3 2.9-1 6.8-.8 9.4 2.3.2 5.8-.3 8.3-.4"
        />
        <path d="m235.6 236.4 5.5-8-7 6.5-.3 2 1.8-.5" />
        <path
          d="M243.2 234.7c-3 1-7.7 2.2-10.5 3.4 1-3.3 2-8.6 2.6-11.9-.2 2.9-.6 6.8-.4 9.3 2.4.1 5.8-.6 8.3-.8"
        />
        <path d="m234.5 237.6 4.2-9-6 7.8v2l1.8-.8" />
        <path
          d="M242 235.9c-3 .7-7.8 1.6-10.8 2.6 1.3-3.2 2.8-8.5 3.7-11.7-.4 2.9-1.2 6.7-1.2 9.3 2.4.3 5.8-.2 8.3-.2"
        />
        <path d="m233.5 238.5 6.8-7-8 5.2-.7 2 2-.2" />
        <path
          d="M240.7 237.1c-3 .4-7.8.8-10.7 1.6 1.4-3.2 3.2-8.3 4.3-11.5-.6 2.8-1.6 6.7-1.8 9.3 2.3.5 5.7.4 8.2.6"
        />
        <path d="m232.2 237.8 4.6-8.8-6.3 7.4v2l1.7-.6" />
        <path
          d="M241 236c-3.3 1.4-8.4 3.3-11.5 5 1-4 2-10.2 2.7-14-.1 3.3-.6 7.9-.3 10.8 2.7 0 6.4-1.2 9.2-1.7"
        />
        <path d="m231.5 240.4 5.6-10-7.3 8.5-.2 2.4 2-.9" />
        <path
          d="M239.8 237.3c-3.3 1.5-8.4 3.7-11.4 5.5.8-4 1.6-10.1 2.1-14 0 3.3-.2 7.9.2 10.7 2.7-.2 6.3-1.5 9-2.2"
        />
        <path d="m230.4 242 4-10.8-6 9.6.1 2.3 1.9-1.1" />
        <path
          d="M238.3 238.2c-3.2 1.6-8.3 3.8-11.3 5.6.8-4 1.6-10.1 2-14 .1 3.3-.1 7.8.3 10.7 2.6-.3 6.3-1.6 9-2.3"
        />
        <path d="m229.5 243.3 6.2-9.6-7.9 7.8-.3 2.4 2-.6" />
        <path
          d="M238 237.7c-2.8 2.3-7.4 5.7-10 8.3 0-4-.6-10.2-.9-14 .8 3.2 1.5 7.6 2.5 10.2 2.5-.9 5.9-3.1 8.5-4.5"
        />
        <path d="m229.8 243.7.7-11.4-3 11 .8 2.2 1.5-1.8" />
        <path
          d="M237.2 238.8c-2.9 2.3-7.5 5.6-10 8.1 0-4-.6-10-.9-13.9.7 3.2 1.4 7.6 2.4 10.2 2.6-.9 6-3.1 8.5-4.4"
        />
        <path d="M229 245.6a633.9 633.9 0 0 1 3-11.1l-5 10.2.3 2.3 1.8-1.4" />
        <path
          d="M236.9 239c-2.7 2.7-7.1 6.7-9.5 9.6-.5-4-1.7-10.3-2.4-14.1 1 3.1 2.3 7.5 3.6 10.1 2.6-1.2 5.8-3.9 8.3-5.6"
        />
        <path d="m229 247 .6-11.8-2.9 11.5.9 2.2 1.5-1.8" />
        <path
          d="M236 241c-2.9 2.4-7.5 6-10.2 8.7 0-4.2-.8-10.5-1.2-14.5.9 3.3 1.7 7.8 2.8 10.5 2.6-1 6-3.3 8.6-4.7"
        />
        <path d="m228.2 248.4 4.1-11.2-6.2 10 .2 2.4 1.9-1.2" />
        <path
          d="M236 241c-2.6 2.8-6.7 6.9-9 9.8-.4-4.1-1.6-10.4-2.3-14.3 1 3.1 2.2 7.6 3.5 10.2 2.4-1.2 5.4-4 7.8-5.7"
        />
        <path d="m228.4 249-.5-11.8-2 11.7 1.2 2 1.3-2" />
        <path
          d="M234.7 242c-2.5 2.7-6.5 6.8-8.7 9.8-.5-4.2-1.9-10.5-2.7-14.4 1.1 3.2 2.4 7.7 3.8 10.3 2.3-1.3 5.3-4 7.6-5.8"
        />
        <path d="m227.7 250.2 1.3-12-3.5 11.3.7 2.3 1.5-1.6" />
        <path
          d="M234.2 242.4c-2.3 3-6 7.5-8 10.6-.8-4-2.6-10.2-3.7-14 1.3 3 3 7.4 4.5 9.9 2.2-1.5 5-4.6 7.2-6.5"
        />
        <path d="m227.6 251.3-.7-12-1.5 11.9 1 2 1.2-2" />
        <path
          d="M234 243c-2.2 3.2-5.7 8-7.5 11.2-1-4-3.2-10.1-4.5-13.9 1.5 3 3.4 7.3 5 9.7 2.2-1.6 4.8-4.8 7-7"
        />
        <path d="m228.4 252.4 1.2-12-3.4 11.3.7 2.4 1.5-1.7" />
        <path
          d="M233.5 244.2c-1.9 3.4-4.9 8.6-6.4 12.1-1.4-3.9-4-9.6-5.7-13.2 1.8 2.8 4 6.8 5.9 9 2-2 4.3-5.5 6.2-8"
        />
        <path d="m228 253.4-3.4-11.4 1.1 12 1.6 1.7.7-2.3" />
        <path
          d="M233.4 245.5c-2 3.4-5 8.6-6.6 12.1-1.5-3.9-4.1-9.6-5.8-13.2 1.8 2.8 4 6.8 6 9 2-2 4.5-5.5 6.4-7.9"
        />
        <path d="m228.1 255.6-1.2-12-1.1 12 1.2 2 1.1-2" />
        <path
          d="M233.6 246.6c-2 3.4-5.2 8.4-6.8 11.9-1.4-3.9-4-9.7-5.6-13.3 1.8 2.8 4 6.8 5.8 9 2.2-1.8 4.6-5.3 6.6-7.6"
        />
        <path d="m228 256.5-2.2-11.8-.1 12.1 1.3 1.9 1-2.2" />
        <path
          d="M232.8 248.3c-2.2 3.2-5.6 8-7.4 11.4-1.2-4-3.5-10-5-13.6 1.7 2.9 3.7 7 5.4 9.4 2.2-1.8 4.9-5 7-7.2"
        />
        <path d="m227 257.8 1-12-3.3 11.4.8 2.3 1.5-1.7" />
        <path
          d="M232.9 248.6c-1.8 3.5-4.8 8.8-6.3 12.3-1.5-3.8-4.4-9.4-6.2-12.9 2 2.7 4.3 6.6 6.3 8.6 2-2 4.3-5.6 6.2-8"
        />
        <path d="m226.6 258.8-3.7-11.2 1.4 12 1.6 1.6.7-2.4" />
        <path
          d="M232.4 249.5c-1.3 3.8-3.4 9.7-4.4 13.5-2-3.4-5.7-8.3-8-11.3 2.3 2.2 5.2 5.5 7.5 7 1.7-2.3 3.4-6.4 4.9-9.2"
        />
        <path d="m229.9 259.8-4-11.1 1.7 11.9 1.6 1.5.7-2.4" />
        <path
          d="M232.4 250.7c-1.3 3.8-3.4 9.7-4.3 13.5-2-3.4-5.8-8.2-8-11.2 2.2 2.2 5.1 5.4 7.4 7 1.7-2.4 3.4-6.5 4.9-9.3"
        />
        <path d="m229.9 261.6-5.2-10.3 3 11.5 1.8 1.3.4-2.5" />
        <path
          d="M232 251.6c-.8 4-2.2 10.1-2.7 14-2.5-3-6.7-7.3-9.3-10 2.5 2 5.8 4.7 8.2 6 1.4-2.7 2.6-7 3.8-10"
        />
        <path d="m230.2 263.3-2.7-11.7.4 12.1 1.5 1.8.8-2.2" />
        <path
          d="M232 252.9c-.4 4-1.3 10.3-1.3 14.3-2.8-2.7-7.4-6.4-10.2-8.7 2.7 1.5 6.2 3.9 8.7 4.8 1.1-2.8 2-7.3 2.8-10.4"
        />
        <path d="m230.4 264.1-7.4-8.4 5.6 10.2 2 .7-.2-2.5" />
        <path
          d="M232.2 254.3c-.5 4-1.4 10.3-1.4 14.3-2.8-2.7-7.4-6.4-10.2-8.7 2.7 1.5 6.2 3.9 8.7 4.8 1.2-2.8 2-7.2 2.9-10.4"
        />
        <path d="M231.2 266a602.2 602.2 0 0 1-5.7-10l3.6 11.3 1.9 1.2.2-2.4" />
        <path
          d="M232.5 256c-.3 4-.9 10.4-.8 14.4-2.9-2.6-7.6-6-10.5-8.1 2.7 1.3 6.3 3.5 8.9 4.2 1-2.9 1.6-7.3 2.4-10.5"
        />
        <path d="M232 268c-.2 0-7-9-7-9l5 10.6 2 .8V268" />
        <path
          d="M232.6 257.9c-.3 4-.8 10.4-.7 14.4a128 128 0 0 0-10.6-8c2.7 1.3 6.4 3.4 9 4.1 1-2.9 1.5-7.3 2.3-10.5"
        />
        <path d="m232.6 269.4-5-10.6 2.8 11.6 1.7 1.5.5-2.5" />
        <path
          d="M232.8 259c0 4.2.1 10.6.6 14.5-3-2-8.1-4.9-11.2-6.6 2.8 1 6.6 2.7 9.2 3 .7-3 1-7.5 1.3-10.8"
        />
        <path d="m233.4 269-9-6.1 7.6 8.3 2.1.2-.7-2.4" />
        <path
          d="M233 259.5c.4 4.1.7 10.5 1.4 14.4a128 128 0 0 0-11.5-6.1c2.8.8 6.7 2.3 9.3 2.6.6-3 .6-7.6.8-10.9"
        />
        <path d="m234.4 271.3-7.5-8.6 5.7 10.3 2 .8-.2-2.5" />
        <path
          d="M233.7 261c.5 4.2 1.1 10.5 2 14.4-3.3-1.8-8.5-4-11.8-5.5 3 .7 6.8 2 9.5 2.1.4-3 .2-7.6.3-11"
        />
        <path d="m235.8 272.7-8.8-6.2 7.5 8.5h2l-.7-2.3" />
        <path
          d="M234 262.8c.8 4 1.8 10.3 2.9 14.2-3.4-1.6-8.7-3.3-12-4.4 2.9.4 6.9 1.3 9.5 1.2.2-3.1-.3-7.6-.4-11"
        />
        <path d="m236.8 274-7.3-8.7 5.5 10.4 2 .8-.2-2.5" />
        <path
          d="M234.4 264c1.2 3.9 2.8 10 4.3 13.7-3.5-1-9-2.1-12.3-2.8 2.9 0 6.9.4 9.5 0 0-3.2-1-7.6-1.5-11"
        />
        <path d="m237.2 274-10.2-2.2 9.7 4.8 2-.7-1.5-1.9" />
        <path
          d="M235.1 265.2c1.2 3.9 2.8 10 4.2 13.7-3.5-1-9-2.1-12.3-2.8 2.9 0 7 .4 9.5 0 0-3.2-1-7.6-1.4-11"
        />
        <path d="M238.9 275c0 .2-9.8-4.7-9.8-4.7l8.8 7.2 2-.2-1-2.2" />
        <path
          d="M234.6 265.9c2 3.5 4.8 9.2 7 12.5-3.6-.3-9.2-.1-12.6 0 2.8-.7 6.8-1.2 9.2-2.2-.6-3-2.5-7.2-3.6-10.3"
        />
        <path d="m240.4 276.1-10.2-2.8 9.6 5.4 2-.6-1.4-2" />
        <path
          d="M235.7 267.4c2 3.5 4.8 9.2 7 12.4-3.6-.2-9.2 0-12.6.2 2.9-.7 6.9-1.3 9.3-2.3-.8-3-2.6-7.2-3.8-10.3"
        />
        <path d="m241.7 277-9.5-5.7 8.3 8h2.2l-1-2.3" />
        <path
          d="M236.4 268.3c2.3 3.3 5.7 8.6 8.2 11.6-3.6.2-9 1.2-12.4 1.8 2.8-1 6.6-2.2 8.9-3.6-1-3-3.3-6.8-4.7-9.8"
        />
        <path
          d="m242.4 277.8-10.2-.2 10.1 3 1.8-1.1-1.7-1.7m6-49.6 7.3-1.3-7.3.2-1.3.7 1.3.4"
        />
        <path
          d="M252.4 229.7c-2.1-.6-5.4-1.7-7.6-2.2a97 97 0 0 0 8-3.6c-1.7 1-4 2.4-5.3 3.4 1.2.8 3.4 1.7 5 2.4"
        />
        <path d="m248 228.4 7.2-2-7.4 1-1.1.8 1.3.2" />
        <path
          d="M252.8 230.3c-2.5-.3-6.4-.8-8.8-.8 1.8-1.6 4.4-4.4 6-6-1 1.5-2.8 3.6-3.5 5.1 1.7.7 4.4 1.1 6.3 1.7"
        />
        <path d="m245.4 229 7.4-1-7.2-.1-1.4.6 1.2.4" />
        <path
          d="M250.9 230.5c-2.3-.4-5.7-1.2-8-1.4 2.1-1 5.3-3 7.3-4-1.5 1-3.6 2.5-4.7 3.5 1.4.7 3.7 1.3 5.4 2"
        />
        <path d="m244.8 228.8 6.5-2.8-7.2 2-.8.8h1.5" />
        <path
          d="M250.7 231.4c-2-.8-4.8-2.1-6.7-2.7 1.5-1.3 3.5-3.7 4.8-5.1-1 1.4-2.3 3.3-2.8 4.7 1.2 1 3.2 2.1 4.7 3"
        />
        <path
          d="m245.1 229.3 5.1-2.2-5.5.8-.7 1 1.1.4M241 277h-10.6l10.7 2.7 1.8-1.2-2-1.5"
        />
        <path d="M242.8 277.6 232 275l10.3 5 2-.6-1.6-2" />
        <path d="m244.5 278.3-10.6-.6 10.6 3.3 1.8-1-1.8-1.7" />
        <path
          d="M237.8 270.8c2.7 3 6.9 7.9 9.8 10.6-3.6.5-9 2-12.2 2.8 2.6-1.2 6.3-2.7 8.4-4.2-1.4-2.8-4.2-6.4-6-9.2"
        />
        <path d="m246 278.8-10.6-3.5 10 6 2-.5-1.4-2" />
        <path
          d="M238.8 271.5c3 2.7 7.5 7.1 10.6 9.5-3.4 1-8.5 3.1-11.6 4.4 2.4-1.6 6-3.5 7.8-5.3-1.6-2.7-4.8-6-6.8-8.6"
        />
        <path d="m246.8 279.5-10 2 10.6.7 1.5-1.5-2-1.2" />
        <path d="m244.8 278.8-10.5.8 10.8 1.9 1.7-1.3-2-1.4" />
        <path d="m246.7 279.4-10.9-1.7 10.7 4.3 2-.8z" />
        <path d="m248.5 280-10.6.2 10.8 2.4 1.7-1.1z" />
        <path
          d="M241.2 273c3 2.8 7.5 7.4 10.6 9.8-3.6.8-8.8 2.6-12 3.7 2.5-1.4 6.1-3 8.1-4.7-1.6-2.8-4.7-6.2-6.7-8.8z"
        />
        <path d="m250 280.4-10.8-2.7 10.4 5.2 2-.6z" />
        <path
          d="M242.2 273.6c3.3 2.5 8.1 6.6 11.4 8.7a168 168 0 0 0-11.3 5.2c2.3-1.7 5.7-3.9 7.4-5.8-1.8-2.6-5.2-5.6-7.5-8.1z"
        />
        <path d="m251 281-10 2.7h10.7l1.3-1.6z" />
      </g>
      <path
        fill="#fedf00"
        stroke="#000"
        stroke-width=".5"
        d="m264.6 266.1-8.1-5.6-8 5.6 3-9-7.1-5.5h9l3.1-9 3 9h9.1l-7 5.6 3 9z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPyFlagIcon {
  readonly class = input<string>('');
}
