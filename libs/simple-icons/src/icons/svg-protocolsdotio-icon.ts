import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-protocolsdotio-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>protocols.io</title>
      <path
        d="M4.55.927c-.723.046-1.266.47-1.614 1.261a4.653 4.653 0 0 0-.215.6 11.007 11.007 0 0 0-.42 3.585c.052 1.007-.187 1.888-.6 2.797C.858 11.024.27 12.967.03 15.004c-.136 1.164.169 2.15 1.13 2.871.41.308.834.603 1.28.855 1.24.702 2.573 1.192 3.924 1.634a.825.825 0 0 1 .297.162c1.12 1.033 2.423 1.75 3.846 2.276 1.011.373 2.005.364 3.016-.01 1.057-.391 2.089-.853 2.944-1.576.76-.642 1.612-1.011 2.527-1.334 1.307-.462 2.566-1.037 3.69-1.872.934-.695 1.413-1.596 1.298-2.778-.023-.238-.04-.476-.076-.712-.3-1.942-.888-3.802-1.705-5.58-.356-.776-.658-1.524-.441-2.403-.075-.856-.128-1.726-.233-2.588-.083-.687-.24-1.365-.574-1.983-.442-.82-1.126-1.164-2.037-1-.32.057-.642.144-.94.273-1.61.698-2.904 1.8-3.95 3.198-.1.137-.194.184-.368.182a190.382 190.382 0 0 0-3.329-.002c-.144 0-.24-.014-.334-.144-.623-.877-1.389-1.615-2.256-2.247-.735-.536-1.51-1-2.406-1.22a2.601 2.601 0 0 0-.783-.08zm.096 1.152c.087-.002.183.012.292.04a4.5 4.5 0 0 1 .996.357c1.43.747 2.596 1.793 3.443 3.174.088.144.178.186.338.178.904-.042 1.806-.097 2.71-.103.62-.004 1.24.06 1.86.103.164.012.25-.04.337-.182.855-1.387 2.024-2.44 3.469-3.182a4.55 4.55 0 0 1 .973-.348c.43-.107.702.006.863.418.188.484.352.99.43 1.5.123.816.166 1.643.226 2.282-.037.648-.07 1.108-.086 1.569a.68.68 0 0 0 .08.322 21.82 21.82 0 0 1 2.174 6.377c.073.416.077.85.064 1.273-.013.481-.324.812-.673 1.1-.873.72-1.888 1.188-2.926 1.602-.714.284-1.452.51-2.174.775-.15.055-.3.149-.418.259-1.224 1.13-2.625 1.94-4.26 2.285-.37.078-.805.014-1.175-.098-1.473-.445-2.788-1.18-3.892-2.27a.692.692 0 0 0-.272-.149c-1.35-.43-2.684-.905-3.931-1.588-.35-.19-.676-.42-1.014-.632-.81-.51-1.026-1.267-.893-2.166.355-2.387 1.13-4.632 2.235-6.772a.745.745 0 0 0 .07-.375c-.106-1.522-.064-3.034.293-4.525.064-.266.162-.529.281-.775.146-.299.32-.442.58-.449zm9.222 6.72c-.354.04-.54.264-.72.72-.031.084-.06.168-.081.253-.197.782-.122 1.563-.025 2.352.108.89.498 1.492 1.367 1.832 1.379.54 2.11 1.645 2.442 3.047.08.343.148.688.228 1.068.39-.138.764-.265 1.135-.404.998-.373 1.972-.794 2.863-1.39.15-.1.224-.212.195-.393-.091-.586-.142-1.18-.273-1.758-.409-1.806-1.407-3.178-3.08-4.018-.61-.305-1.222-.614-1.861-.845a9.586 9.586 0 0 0-1.774-.444 1.586 1.586 0 0 0-.416-.02zm-4.208.01a2.26 2.26 0 0 0-.264.036c-1.57.32-2.996.965-4.298 1.892-.489.348-.91.766-1.225 1.282-.727 1.193-1.073 2.5-1.152 3.886-.01.178.053.288.199.364.722.375 1.433.777 2.172 1.117.583.268 1.2.462 1.824.697.083-.39.15-.737.23-1.08.331-1.402 1.073-2.48 2.436-3.06.05-.02.093-.052.143-.069.723-.249 1.07-.77 1.185-1.516.143-.919.26-1.829-.03-2.736-.22-.7-.494-.872-1.22-.812zm2.594 7.503c-.96.045-1.653.137-2.274.505-.426.254-.559.555-.396.98.366.951 1 1.69 1.89 2.19.33.184.685.193 1.02.01.919-.498 1.555-1.252 1.929-2.22.14-.365.044-.626-.274-.864-.147-.11-.312-.219-.486-.266-.544-.146-1.097-.263-1.409-.335z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgProtocolsdotioIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
