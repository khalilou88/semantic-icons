import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tga-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TGA</title>
      <path
        d="M19.878 12.482c-.043.03-.06.038-.074.051-.649.647-1.298 1.294-1.943 1.945-.04.04-.061.119-.061.18-.005.602-.003 1.203-.003 1.805 0 .035.007.07.013.13.303-.295.584-.575.873-.846.106-.1.18-.207.226-.346.256-.778.519-1.553.779-2.33.062-.186.12-.374.19-.589m-4.345 1.916c.068-.061.105-.092.139-.126l2.001-1.95c1.023-.994 2.047-1.987 3.068-2.982a.44.44 0 0 0 .108-.183c.234-.78.463-1.562.693-2.343.044-.148.084-.298.135-.477-.047.033-.064.041-.077.054-.588.584-1.178 1.168-1.765 1.753-.682.682-1.363 1.367-2.045 2.05-.723.724-1.448 1.446-2.169 2.172a.3.3 0 0 0-.079.19c-.008.456-.007.912-.009 1.368v.474M23.543.024 23.512 0c-.228.232-.454.465-.683.695-.946.948-1.891 1.896-2.839 2.842-1.058 1.056-2.12 2.108-3.177 3.164a1195.962 1195.962 0 0 0-3.466 3.473.3.3 0 0 0-.073.19c-.01.558-.01 1.117-.013 1.675 0 .042.006.083.01.144.04-.033.068-.05.09-.073 1.04-1.02 2.078-2.04 3.116-3.062l3.432-3.384c.898-.885 1.799-1.77 2.695-2.657a.45.45 0 0 0 .11-.181c.15-.492.293-.985.438-1.478l.39-1.324M4.148 12.48c.013.064.017.101.029.135.327.96.653 1.92.985 2.877a.633.633 0 0 0 .146.227c.3.303.607.6.914.897.11.107.227.207.355.323-.23.225-.427.423-.63.617-.06.057-.081.107-.048.19.115.287.223.578.334.868.054.143.11.285.166.427l.06.035 1.1-1.173a12206.887 12206.887 0 0 0 1.221 1.284c-.006.007-.027.033-.05.056-.515.513-1.03 1.029-1.547 1.54-.062.062-.073.111-.038.19.061.137.11.28.166.419l.352.879 2.158-2.125 1.18 1.208-2.634 2.636c.032.003.054.008.076.008.621 0 1.243.002 1.865-.003a.27.27 0 0 0 .163-.072c.16-.148.314-.303.47-.456a1578.776 1578.776 0 0 0 1.117-1.1c.042.04.078.07.112.103.488.48.974.96 1.468 1.434.055.053.15.09.227.09.544.008 1.088.005 1.632.005h.13L4.149 12.48m12.148 9.842c.031-.04.043-.05.047-.061.166-.425.327-.852.497-1.275.038-.093-.016-.133-.067-.183-1.235-1.23-2.47-2.46-3.703-3.691-1.59-1.588-3.177-3.179-4.766-4.768C6.526 10.566 4.747 8.79 2.97 7.011c-.19-.19-.374-.389-.56-.584l-.042.03c.009.045.013.091.026.135.242.824.482 1.648.73 2.47.041.134.09.287.184.383.703.71 1.418 1.41 2.13 2.113 1.056 1.043 2.112 2.088 3.17 3.13a.32.32 0 0 1 .105.255c-.007.427-.006.855-.007 1.282v.5c.015.01.031.018.047.027l.917-.992c.068.058.098.08.125.107.356.351.71.705 1.07 1.052a.35.35 0 0 1 .118.28c-.006.524-.004 1.049-.004 1.573 0 .047.004.093.008.175a2221.442 2221.442 0 0 1 .96-.928c.027.013.037.015.044.022.412.405.824.809 1.233 1.217a.222.222 0 0 1 .058.14c.002.302-.005.603-.006.903-.002.26 0 .518 0 .818l.966-.933 2.054 2.136m1.258-3.252-1.059-1.138a1624.888 1624.888 0 0 1-.942.91v-.207c0-.48.002-.96-.003-1.442 0-.063-.013-.144-.052-.185-.406-.431-.818-.856-1.242-1.295l-.984.953v-.192c0-.52.002-1.04-.003-1.559a.29.29 0 0 0-.062-.181c-.39-.42-.787-.832-1.215-1.281l-.95 1.037a6.332 6.332 0 0 0-.056-.037c-.002-.045-.007-.09-.007-.135 0-.549.006-1.098-.002-1.647a.377.377 0 0 0-.097-.238 1129.433 1129.433 0 0 0-3.293-3.275A15517.212 15517.212 0 0 0 2.77 4.38c-.451-.447-.908-.89-1.355-1.342a.67.67 0 0 1-.16-.268C.988 1.89.73 1.004.47.121.462.09.462.058.458.027L.495 0C.66.174.823.353.993.523c1.696 1.695 3.394 3.387 5.09 5.082 1.531 1.53 3.06 3.063 4.591 4.594 1.38 1.38 2.762 2.758 4.142 4.137 1.079 1.077 2.157 2.154 3.233 3.235.035.035.065.115.05.156-.16.432-.33.86-.497 1.29-.003.008-.012.014-.048.053"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTgaIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
