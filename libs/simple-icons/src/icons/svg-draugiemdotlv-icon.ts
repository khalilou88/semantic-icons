import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-draugiemdotlv-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Draugiem.lv</title>
      <path
        d="M17.12 7.694c4.3.056 6.808 2.693 3.96 6.3-1.307 1.662-3.517 3.303-6.465 4.373l-.422.144c-.278.09-.553.173-.823.258-.638.18-1.26.34-1.863.455-.645.134-1.268.229-1.87.298-.43.042-.844.07-1.245.078-2.743.07-4.806-.68-5.477-2.285-.81-1.919.83-4.592 4.116-6.627C4.597 11.661.188 13.96 0 17.256v.404a4.307 4.307 0 0 0 .193 1.029c.7 2.228 4.003 3.267 8.21 2.894a19.43 19.43 0 0 0 1.244-.147 24.08 24.08 0 0 0 3.733-.874c.137-.05.275-.09.414-.14.283-.09.561-.184.831-.29 3.64-1.322 6.342-3.087 7.921-5.101.898-1.155 1.364-2.236 1.454-3.185v-.723c-.26-2.403-3.064-3.815-6.88-3.43zm-2.788-1.192a1.237 1.237 0 0 0 .283-.033c.61-.152.908-.803.934-1.572.028-.815-.257-1.495-.934-1.592a.826.826 0 0 0-.18 0 1.111 1.111 0 0 0-1.065.79 2.526 2.526 0 0 0-.154.815 2.192 2.192 0 0 0 .154.954.993.993 0 0 0 .962.638zm-.013.273a2.946 2.946 0 0 0-.7.075l.057.077.103.185.085.196.07.2.046.206.036.208.02.217v.427l-.015.216v.213l-.028.216-.029.214-.041.216-.041.214-.041.208-.05.208-.04.201-.05.193-.048.188-.049.18-.041.172-.041.165-.02.105-.03.116-.025.126-.023.131-.026.14-.02.118v.025l-.029.155-.028.151-.02.16-.037.175-.02.167-.028.165-.021.175-.026.164-.023.175-.02.173-.021.172c.041.5.077.921.098 1.163a1.253 1.253 0 0 0 .167.61.772.772 0 0 0 .648.295.947.947 0 0 0 .597-.213 1.178 1.178 0 0 0 .278-.692c.11-.713.43-3.054.705-4.057.396-1.446 1.343-4.078-.983-4.278a2.259 2.259 0 0 0-.296-.016zm-2.83-.743h.016c.9 0 1.322-.829 1.322-1.84 0-1.01-.42-1.842-1.32-1.85h-.018c-.913 0-1.335.831-1.335 1.85 0 1.019.425 1.84 1.335 1.84zm-1.852 4.273c.082.352.167.679.237.97.283 1.155.56 3.84.663 4.65.103.811.389.991.97 1.045.574-.054.865-.226.963-1.044.097-.818.38-3.496.656-4.651.069-.291.159-.618.257-.97.257-1.06.463-2.316 0-3.108-.299-.515-.867-.854-1.863-.854-.995 0-1.58.34-1.87.854-.476.803-.27 2.048-.013 3.108zM8.402 6.469a1.237 1.237 0 0 0 .283.033.993.993 0 0 0 .952-.65 2.403 2.403 0 0 0 .152-.955 2.673 2.673 0 0 0-.152-.815 1.122 1.122 0 0 0-1.065-.79.803.803 0 0 0-.18 0c-.672.098-.962.772-.937 1.592.021.782.327 1.433.947 1.585zm-.288 8.654a1.13 1.13 0 0 0 .288.692.944.944 0 0 0 .594.214.772.772 0 0 0 .651-.296 1.451 1.451 0 0 0 .168-.61l.095-1.155v-.015l-.02-.173-.021-.172-.029-.175-.02-.165-.02-.175-.027-.164-.033-.157-.026-.165-.026-.17-.02-.151-.028-.155v-.02L9.616 12l-.028-.14-.028-.131-.02-.126-.026-.116-.029-.105-.036-.165-.049-.172-.04-.18-.047-.188-.049-.193-.049-.2-.041-.222-.049-.208-.041-.214-.036-.214-.026-.213-.028-.216-.02-.214V8.14l.02-.216.033-.208.05-.206.061-.2.09-.196.105-.186.055-.077a2.977 2.977 0 0 0-.7-.074 2.218 2.218 0 0 0-.296 0c-2.315.2-1.379 2.83-.983 4.278.275 1.014.594 3.355.705 4.067z"
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
export class SvgDraugiemdotlvIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
