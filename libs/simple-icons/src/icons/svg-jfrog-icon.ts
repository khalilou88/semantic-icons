import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jfrog-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>JFrog</title>
      <path
        d="M10.655 15.631l-1.268.353c.11.32.2.893.2 1.665v3.795h1.421v-4.015c.265-.32.552-.474.86-.474.156 0 .277.033.409.11l.386-1.312a1.05 1.05 0 00-.53-.122 1.22 1.22 0 00-.463.09c-.265.131-.596.43-.805.715 0-.32-.077-.573-.21-.805zM5.76 13.757h-.154v7.676h1.477v-3.398h1.864v-1.268H7.082v-1.764H9.41l.088-.673c-1.4-.1-2.668-.32-3.738-.573zm-3.452 8.7l.684.796c.662-.265 1.49-.86 1.71-1.81.077-.308.1-.506.1-1.51v-6.165H3.308v6.33c0 .828-.032 1.136-.142 1.423-.144.32-.486.695-.86.938zm13.422-3.892c0 1.346-.264 1.92-.871 1.92a.782.782 0 01-.717-.464c-.11-.286-.176-.773-.176-1.434 0-.563.055-.96.143-1.268.11-.353.386-.574.728-.574.254 0 .474.11.606.298.199.265.287.76.287 1.522zm.87 2.206c.465-.551.674-1.225.674-2.195 0-.916-.187-1.544-.617-2.073-.464-.574-1.06-.85-1.831-.85-1.456 0-2.426 1.18-2.426 2.967 0 1.787.96 2.934 2.426 2.934.827.01 1.367-.297 1.775-.783zm4.038-3.177c0 .52-.31.805-.86.805-.497 0-.828-.23-.828-.805 0-.529.31-.838.838-.838.53 0 .85.31.85.838zm2.503-1.213l-.585-.937c-.33.31-.727.485-1.113.485-.177 0-.276-.022-.662-.12a3.282 3.282 0 00-.97-.145c-1.38 0-2.272.75-2.272 1.92 0 .837.375 1.367 1.158 1.576-.32.077-.662.243-.816.43a.79.79 0 00-.166.52c0 .176.044.33.11.463a.68.68 0 00.31.275c.253.1.66.166 1.29.177.33 0 .529.01.595.01.386.023.584.09.739.166.143.089.253.287.253.508 0 .22-.132.44-.341.573-.188.132-.497.188-.894.188-.65 0-1.014-.243-1.014-.695 0-.2.022-.243.066-.364h-1.301c-.055.11-.122.265-.122.573 0 .386.144.717.442 1.004.485.474 1.279.606 2.04.606.838 0 1.654-.198 2.128-.727.298-.331.43-.695.43-1.17 0-.507-.143-.893-.463-1.212-.375-.364-.805-.497-1.632-.508l-.761-.01c-.143 0-.232-.056-.232-.133 0-.154.199-.288.563-.464.11.01.143.01.21.01 1.146 0 1.984-.705 1.984-1.686 0-.375-.11-.662-.32-.927.177.022.232.033.364.033.375 0 .673-.12.982-.419zM5.384 7.085c-1.764.43-2.966 1.279-2.966 2.25 0 .606.463 1.157 1.224 1.587a2.155 2.155 0 01-.353-1.157c.01-1.004.794-1.941 2.095-2.68zM24 10.889c0-.64-.397-1.224-1.059-1.709.055.2.1.397.1.596 0 1.82-2.548 3.385-6.165 4.036.408.044.827.066 1.268.066 3.23-.01 5.856-1.345 5.856-2.989zm-2.084-.992c0-.673-.574-1.29-1.555-1.798.23.276.353.574.353.883 0 1.62-3.44 2.933-7.698 2.933-4.246 0-7.698-1.312-7.698-2.933 0-.21.055-.408.165-.596-.683.452-1.07.97-1.07 1.522 0 1.753 3.916 3.176 8.747 3.176 4.83 0 8.756-1.445 8.756-3.187zM18.1 9.81c-1.786 1.147-7.279 1.588-9.639.11-1.853-1.158-1.213-3-6.518-7.036-.694-.53.133-1.092.651-.728.518.364.044.453 1.092 1.5 2.117 2.118 2.095.21 2.426.938.706 1.51 2.25 3.032 2.25 3.032 1.555 1.015 2.79 1.235 5.084-.32 1.456-.981.86 1.566 4.423-.275 1.3-.673 1.246-.22 2.569-2.063.55-.76 1.6.585.408.772-.474.078-1.28.596-1.621 1.412-.496 1.224-.287 2.128-1.125 2.658zM8.196 6.7c-.44-.199-.904-.95-1.08-1.246.496-.486.297-1.29.01-1.732-.275-.44-.617-.32-.98-.727-.376-.41.142-1.467.617-.651 1.775 3.055 2.944 1.786 4.39 1.599 1.39-.177 2.624.584 3-1.566.065-.353.407-.43.44.143.033.585.254 1.996 1.015 2.173.76.187 1.378-.177 1.555-.375.176-.2.275-.177.353.33.077.497.275 1.192 1.345.42 2.195-1.566 1.566-2.173 2.426-2.58.485-.232 1.257.518.144 1.08-1.588.805-1.754 1.797-2.757 2.426-1.688 1.059-1.17.044-3.882-.342-1.048-.143-1.38 1.015-2.195.684-1.864-.772-3.177-.618-4.4.364zm5.879-5.657c.066.463.143.452.309.485.165.044.375-.22.375-.463.01-.254-.11-.408-.353-.397-.254.01-.342.132-.331.375zm8.16.827c.2.187.728.066.85-.078.32-.352.33-.562.165-.805-.165-.231-.507-.198-.85.056-.341.253-.275.727-.164.827zm-.143 2.338c-.165.22-.176.386-.055.507.132.132.397.242.585.1.187-.155.187-.376.033-.563-.166-.2-.386-.2-.563-.044zM5.352 1.45c.253.077.374.32.584.044.11-.133.12-.32-.023-.52-.088-.12-.507-.21-.683-.032-.177.177-.01.464.121.508zM.178 1.295c.463.287.76.717 1.114.33.121-.131.264-.363.01-.826C1.117.457.511.325.301.457c-.22.12-.485.618-.121.838zM4.447 3.49c.143.154.397.143.551.055.144-.088.121-.32-.022-.518-.088-.122-.353-.188-.53 0-.176.187-.098.352 0 .463z"
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
export class SvgJfrogIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
