import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gunicorn-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Gunicorn</title>
      <path
        d="M10.145 20.014c-.266-.085-.267-.122-.022-.865.244-.743.132-1.432-.32-1.974-.617-.737-.914-1.366-1.009-2.135-.08-.66-.107-.713-.376-.764-.18-.035-.43.034-1.023.281-.864.36-1.07.52-1.273.98-.108.242-.12.387-.06.667.075.342.378.892.494.893.03 0 .196.114.368.252.287.23.307.27.225.458-.176.408-.595.902-.764.902-.095 0-.482-.272-.91-.637-.836-.717-.872-.79-.96-1.965-.1-1.403.244-2.058 1.78-3.375l.964-.827.062-.5c.063-.518-.026-1.748-.177-2.427-.09-.4-.382-.783-.66-.86-.303-.084-.48.09-.712.694-.25.654-.486.882-.92.882-.27 0-.52-.173-.694-.477C4.033 9 3.96 7.691 4.035 7.002c.036-.33.038-.666.005-.745-.054-.128-.52-.405-1.62-.962a4.343 4.343 0 0 1-.518-.303 3.053 3.053 0 0 0-.49-.267C.994 4.54-.095 3.903.007 3.903c.193 0 1.01.252 1.446.445.266.118.52.215.565.215.045 0 .558.165 1.14.366.58.202 1.111.367 1.18.367.16 0 .185-.14.134-.746-.024-.275-.023-.5.002-.5s.132.053.238.118c.324.198 1.02.32 1.84.32.783.002 1.806.157 2.196.335.56.254 1.211 1.05 2.036 2.49.574 1.002 1.19 1.426 2.073 1.427.357 0 1.31-.147 2.6-.4 1.063-.21 2.467-.259 3.012-.103.665.19 1.545.7 2.27 1.314.68.576.786.704 1.204 1.468.5.912 1.05 2.207 1.54 3.622.07.202.216.54.326.753.294.568.28.603-.255.603-.58 0-.853-.092-1.233-.415-.365-.31-.46-.5-1.032-2.05-.292-.796-.577-1.273-.76-1.273-.124 0-.376.852-.376 1.273 0 .3.187.702.67 1.447.788 1.21 1.202 2.922 1.036 4.28l-.07.586-.526.022c-.825.034-.817.046-.817-1.135 0-1.257-.085-1.529-.64-2.035-.23-.21-.748-.81-1.149-1.33-.402-.52-.786-.946-.854-.946-.158 0-.236.428-.244 1.332-.006.595-.03.696-.205.88-.476.497-.81 1.403-1.016 2.754-.046.3-.085.355-.279.398-.285.064-1.075.075-1.143.015-.059-.05.044-.863.278-2.19.088-.504.185-1.18.214-1.503.053-.574-.065-1.65-.204-1.867-.058-.09-.353-.11-1.732-.116-.915-.003-1.918-.033-2.23-.066l-.565-.06v.25c0 .27.07.506.53 1.822.162.464.397 1.17.523 1.57l.227.728-.192.592a6.11 6.11 0 0 1-.348.867c-.152.266-.17.274-.595.27a2.97 2.97 0 0 1-.677-.083z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgGunicornIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
