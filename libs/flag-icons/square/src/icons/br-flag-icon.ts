import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-br-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g stroke-width="1pt">
      <svg:path fill="#229e45" fill-rule="evenodd" d="M0 0h512v512H0z" />
      <svg:path
        fill="#f8e509"
        fill-rule="evenodd"
        d="m261.4 405.4 229.8-149.2L260 106.6l-230.7 150z"
      />
      <svg:path
        fill="#2b49a3"
        fill-rule="evenodd"
        d="M361.5 256a97.2 97.2 0 1 1-194.3-.2 97.2 97.2 0 0 1 194.3.2"
      />
      <svg:path
        fill="#ffffef"
        fill-rule="evenodd"
        d="m232.3 314.2-3-1.8-3.1 1.6.7-3.5-2.4-2.5 3.4-.4 1.6-3.2 1.5 3.3 3.4.6-2.6 2.4m65.7 20-3-1.8-3.2 1.6.7-3.5-2.4-2.5 3.5-.4 1.6-3.2 1.4 3.3 3.4.6-2.5 2.4m-27.6-22.9-2.6-1.5-2.7 1.3.6-3-2-2.2 2.9-.3 1.4-2.7 1.2 2.8 3 .5-2.2 2m66.2-6.4-2.6-1.5-2.6 1.3.6-2.9-2-2.1 2.9-.4 1.3-2.6 1.3 2.7 2.9.5-2.2 2m-66.6-16.7-3-1.8-3.1 1.6.7-3.5-2.4-2.5 3.4-.4 1.6-3.1 1.5 3.2 3.4.6-2.6 2.4M188 245l-3-1.8-3 1.6.6-3.5-2.4-2.5 3.5-.4 1.6-3.2 1.4 3.3 3.4.6-2.5 2.4m10.1 43.5-3-1.7-3.1 1.5.7-3.4-2.4-2.6 3.4-.4 1.6-3 1.5 3.1 3.4.7-2.6 2.3m100.6-51.3-2.6-1.5-2.8 1.3.6-3-2-2.3 3-.3 1.4-2.8 1.3 2.9 3 .5-2.3 2.1m-5 29.2L290 255l-2.1 1 .4-2.4-1.6-1.7 2.4-.3 1.1-2.2 1 2.3 2.4.4-1.8 1.6m-108.4 38.5-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.4-.2 1-2 1 2 2.3.5-1.7 1.6m152.6 11.5-1.7-.8-1.7.7.4-1.7-1.3-1.3 1.9-.2.9-1.5.7 1.6 1.9.3-1.4 1.2"
      />
      <svg:path
        fill="#ffffef"
        fill-rule="evenodd"
        d="m183.5 292.3-2-1.2-2.1 1 .5-2.3-1.7-1.7 2.3-.2 1.1-2 1 2 2.3.5-1.7 1.6"
      />
      <svg:path
        fill="#ffffef"
        fill-rule="evenodd"
        d="m183.5 292.3-2-1.2-2.1 1 .5-2.3-1.7-1.7 2.3-.2 1.1-2 1 2 2.3.5-1.7 1.6m32.2 2.3-2-1.2-2 1 .4-2.3-1.6-1.7 2.3-.2 1-2.1 1 2.1 2.3.5-1.7 1.6m-3.7 13-2-1.2-2 1 .4-2.3-1.6-1.7 2.3-.3 1-2 1 2 2.3.5-1.7 1.6m66.7-17-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.3-.2 1.1-2.1 1 2.1 2.2.4-1.7 1.6m-19.1 2.4-2-1.2-2.1 1 .5-2.3-1.6-1.7 2.3-.2 1-2.1 1 2.1 2.3.4-1.7 1.6m-52.5-4.4-1.2-.7-1.3.6.2-1.5-1-1 1.5-.2.7-1.3.5 1.4 1.5.2-1 1M333.2 310l-2-1.1-2.1 1 .5-2.3-1.6-1.7 2.3-.3 1-2 1 2 2.3.5-1.7 1.6m-16 4.4-1.6-1-1.7 1 .4-2-1.4-1.4 2-.2.8-1.7.8 1.7 2 .4-1.5 1.3m8 1.8-1.6-1-1.6.9.3-1.8-1.2-1.3 1.8-.2.8-1.6.7 1.6 1.8.3-1.3 1.3m22.2-17.4-1.5-.9-1.6.8.4-1.7-1.2-1.3 1.7-.2.8-1.5.7 1.6 1.7.3-1.3 1.2M317 322.9l-2-1.1-2 1 .5-2.2-1.6-1.5 2.2-.3 1.1-1.9 1 2 2.1.4-1.6 1.4m.4 10.9-1.8-1-1.8.9.4-2.2-1.4-1.5 2-.3 1-1.9.8 2 2 .4-1.5 1.4M302.3 312l-1.5-.9-1.6.8.4-1.8-1.2-1.2 1.7-.2.8-1.6.7 1.6 1.7.3-1.3 1.2m-13.5 1.8-1.5-.9-1.6.8.4-1.8-1.2-1.2 1.7-.2.8-1.6.7 1.6 1.7.3-1.2 1.2M265 291.4l-1.5-.9-1.6.8.4-1.7-1.2-1.3 1.7-.2.8-1.5.7 1.6 1.7.3-1.3 1.1m2.9 43.5-1.3-.7-1.3.7.3-1.5-1-1 1.4-.3.7-1.3.6 1.4 1.5.2-1.1 1m-35.2-66-3-1.7-3.1 1.5.7-3.4-2.4-2.6 3.4-.4 1.6-3.1 1.5 3.2 3.4.6-2.6 2.4"
      />
      <svg:path
        fill="#fff"
        fill-rule="evenodd"
        d="M355.1 291a95 95 0 0 0 4.4-15.1c-51.6-45.4-109.2-68.7-182-63.9a95 95 0 0 0-6.4 15.9 233 233 0 0 1 184 63z"
      />
      <svg:path
        fill="#309e3a"
        d="m331.9 265.4 1.8 1a3 3 0 0 0-.2 1.8q.2.7 1 1.2t1.6.6q.6 0 1-.6.2-.3.1-.7l-.3-.8-1.2-1.3a6 6 0 0 1-1.4-2.3 3 3 0 0 1 1.6-3.3 3 3 0 0 1 1.7-.2 5 5 0 0 1 2 .9 6 6 0 0 1 2 2.4 3 3 0 0 1-.5 2.6l-1.8-1.1q.3-.8.2-1.4-.2-.5-1-1t-1.4-.5l-.6.3-.1.7q0 .6 1.2 1.7l1.5 2a3 3 0 0 1-.2 3.2 3 3 0 0 1-1.4 1.1 3 3 0 0 1-1.9.2 6 6 0 0 1-2.1-1 5 5 0 0 1-2-2.5q-.5-1.3.4-3m-8.8-5.7 2 1a3 3 0 0 0-.2 1.6q.2.8 1 1.3t1.6.4q.6 0 1-.6l.1-.6q0-.4-.4-.8l-1.2-1.3a6 6 0 0 1-1.5-2.2 3 3 0 0 1 .3-2.4 3 3 0 0 1 1.2-1 3 3 0 0 1 1.7-.2q.9 0 2 .8 1.6 1 2 2.3a3 3 0 0 1-.3 2.6l-1.9-1.1q.4-.8.2-1.3t-1-1a2 2 0 0 0-1.5-.5l-.6.4v.7q0 .5 1.2 1.7t1.6 1.8a3 3 0 0 1-.1 3.3 3 3 0 0 1-3.2 1.4 6 6 0 0 1-2.2-.9 5 5 0 0 1-2.1-2.4 4 4 0 0 1 .3-3m-10.8-3 5.6-9 6.7 4-1 1.6-4.8-3-1.3 2 4.6 2.8-1 1.6-4.5-2.8-1.5 2.5 5 3-.9 1.6zm-15.8-12.9.9-1.6 4 2.2-1.9 3.7a7 7 0 0 1-4.8-.6 6 6 0 0 1-2.2-2 5 5 0 0 1-.8-2.6q0-1.5.8-2.8a6 6 0 0 1 2-2.3q1.1-.9 2.7-.9 1.1 0 2.5.7a5 5 0 0 1 2.3 2.2q.6 1.2.3 2.7l-2.1-.6a2 2 0 0 0-.2-1.5 3 3 0 0 0-1.2-1.1 3 3 0 0 0-2.4-.3q-1 .5-2 2a5 5 0 0 0-.5 3q.3 1.2 1.6 1.8l1.3.4h1.3l.6-1.2zm-68.8-17 1.6-10.6 3.2.5.8 7.5 3-7 3.1.5-1.5 10.6-2-.3 1.2-8.3-3.3 8-2-.3-.9-8.7-1.2 8.4zm-10.7-1.3 1-10.6 7.8.7-.1 1.8-5.8-.5-.2 2.3 5.3.5-.1 1.8-5.3-.5-.3 3 5.9.5-.2 1.8z"
      />
      <svg:g stroke-opacity=".5">
        <svg:path
          fill="#309e3a"
          d="M181.4 218.8q0-1.6.5-2.7l1-1.4 1.5-1a6 6 0 0 1 2.3-.3 5 5 0 0 1 3.7 1.6q1.4 1.5 1.3 4 0 2.7-1.5 4a5 5 0 0 1-3.8 1.4 5 5 0 0 1-3.7-1.5 5 5 0 0 1-1.3-4z"
        />
        <svg:path
          fill="#f7ffff"
          d="M183.6 218.8q0 1.8.8 2.8t2 1a3 3 0 0 0 2.2-.9q.8-.9.9-2.7 0-2-.8-2.8a3 3 0 0 0-2-1q-1.5 0-2.2.9-.9.9-1 2.7z"
        />
      </svg:g>
      <svg:g stroke-opacity=".5">
        <svg:path
          fill="#309e3a"
          d="m194 224.4.1-10.7h4.5q1.8 0 2.5.4 1 .4 1.2 1 .4.8.5 1.7 0 1.2-.7 2-.7.7-2.2 1 .8.3 1.2.8l1.2 1.8 1.3 2H201l-1.5-2.3-1.2-1.6-.6-.4-1-.2h-.5v4.5z"
        />
        <svg:path
          fill="#fff"
          d="M196.2 218.2h3.6l.5-.5q.3-.3.3-.8t-.3-.9l-.8-.4h-3.2z"
        />
      </svg:g>
      <svg:g stroke-opacity=".5">
        <svg:path
          fill="#309e3a"
          d="m206.2 214.2 3.9.2 2 .3a4 4 0 0 1 1.5 1 5 5 0 0 1 1 1.9q.3 1 .2 2.5a5 5 0 0 1-1.7 4.1q-.6.5-1.5.8h-2l-4-.1z"
        />
        <svg:path
          fill="#fff"
          d="m208.2 216.1-.3 7 1.6.2h1.3l.9-.5q.4-.3.6-1l.3-2-.1-1.8q-.2-.7-.6-1l-1-.6-1.7-.2z"
        />
      </svg:g>
      <svg:g stroke-opacity=".5">
        <svg:path
          fill="#309e3a"
          d="m258.5 233.3 2.5-10.4 3.3.8q2 .5 2.5.8.8.4 1.2 1.3t.1 2.2a3 3 0 0 1-1.9 2.3l-1.1.3-2.2-.4-1.4-.3-1 3.9z"
        />
        <svg:path
          fill="#fff"
          d="m262.6 225.2-.7 3 1.2.2q1.2.3 1.7.2a1.4 1.4 0 0 0 1.2-1l-.1-1.1-.8-.7-1.5-.4z"
        />
      </svg:g>
      <svg:g stroke-opacity=".5">
        <svg:path
          fill="#309e3a"
          d="m268.4 236.3 3.5-10.1 4.3 1.5 2.2 1q.6.6.9 1.5c.3.9 0 1.1-.2 1.7q-.3 1.2-1.3 1.6a3 3 0 0 1-2.3.3l.8 1.2.6 2 .5 2.4-2.4-.8-.7-2.7-.6-1.9-.4-.6-1-.5-.4-.1-1.5 4.2z"
        />
        <svg:path
          fill="#fff"
          d="m272.4 231.2 1.5.5 1.9.5q.4 0 .7-.2l.5-.7v-1l-.6-.6-1.5-.5-1.6-.6z"
        />
      </svg:g>
      <svg:g stroke-opacity=".5">
        <svg:path
          fill="#309e3a"
          d="M280.9 235.9a7 7 0 0 1 1.3-2.5q.5-.7 1.3-1.1l1.6-.5q1 0 2.3.3a5 5 0 0 1 3.2 2.5q1 1.9.1 4.3a6 6 0 0 1-2.5 3.5 5 5 0 0 1-4 .2 5 5 0 0 1-3.2-2.5 6 6 0 0 1-.1-4.2"
        />
        <svg:path
          fill="#fff"
          d="M283 236.5q-.5 1.6 0 2.8t1.8 1.6q1.2.3 2.2-.3t1.7-2.4q.4-1.7 0-2.9a3 3 0 0 0-1.8-1.5 3 3 0 0 0-2.3.3q-1 .6-1.6 2.4"
        />
      </svg:g>
      <svg:g stroke-opacity=".5">
        <svg:path
          fill="#309e3a"
          d="m301.7 250.8 4.9-9.5 4 2q1.5.9 2 1.4.6.7.7 1.5.2 1-.4 1.7-.4 1-1.5 1.5-1 .3-2.3-.1.4.6.6 1.3l.3 2.1.2 2.5-2.3-1.2-.3-2.8-.3-2-.4-.6-.9-.6-.4-.2-2 4z"
        />
        <svg:path
          fill="#fff"
          d="m306.4 246.3 1.4.7 1.8.8q.4 0 .7-.2a2 2 0 0 0 .8-1.5l-.6-.7-1.3-.8-1.5-.7z"
        />
      </svg:g>
      <svg:g stroke-opacity=".5">
        <svg:path
          fill="#309e3a"
          d="M341.2 270.3q.8-1.4 2-2l1.6-.7h1.6q1.1.1 2.2 1a5 5 0 0 1 2.3 3.3 6 6 0 0 1-1.1 4.1 6 6 0 0 1-3.5 2.6 5 5 0 0 1-3.9-.9 5 5 0 0 1-2.3-3.3 6 6 0 0 1 1-4.1z"
        />
        <svg:path
          fill="#fff"
          d="M343 271.4q-1 1.6-.8 2.8a3 3 0 0 0 1.3 2 3 3 0 0 0 2.2.4q1.2-.3 2.3-1.9t.8-2.7q0-1.1-1.2-2c-1.2-.9-1.5-.6-2.3-.4q-1.2.3-2.2 1.8z"
        />
      </svg:g>
      <svg:path
        fill="#309e3a"
        d="m246.4 229 1.7-7.6 5.6 1.3-.3 1.3-4-1-.4 1.7 3.7.9-.3 1.3-3.7-1-.5 2.1 4.2 1-.3 1.3z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
