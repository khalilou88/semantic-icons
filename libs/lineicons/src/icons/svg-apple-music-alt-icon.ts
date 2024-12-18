import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-apple-music-alt-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3739 14.3489V11.0952H10.3527L9.04357 14.3489H8.54381L7.23152 11.0952H7.21055V14.3489H6.59657V9.92793H7.3761L8.78164 13.4511H8.80574L10.2082 9.92817H10.9908V14.3491L10.3739 14.3489ZM14.3858 14.3489H13.7626V13.8036H13.7477C13.573 14.1896 13.2511 14.407 12.7665 14.407C12.0773 14.407 11.6556 13.9506 11.6556 13.2123V11.1258H12.3058V13.0836C12.3058 13.5737 12.5347 13.8371 12.9829 13.8371C13.4527 13.8371 13.7356 13.5063 13.7356 13.0038V11.1258H14.3855L14.3858 14.3489ZM16.1674 11.0675C16.9048 11.0675 17.3834 11.4843 17.4046 12.0785H16.7935C16.7573 11.7662 16.5315 11.5701 16.1674 11.5701C15.8152 11.5701 15.5805 11.7446 15.5805 12.0022C15.5805 12.2043 15.725 12.3419 16.0679 12.4217L16.5826 12.5412C17.2299 12.6944 17.4766 12.9518 17.4766 13.4173C17.4766 14.0058 16.9378 14.4101 16.1915 14.4101C15.4 14.4101 14.9241 14.0149 14.8641 13.4022H15.5082C15.5684 13.739 15.7942 13.9046 16.1915 13.9046C16.5826 13.9046 16.8236 13.739 16.8236 13.4757C16.8236 13.2672 16.7062 13.1448 16.36 13.065L15.8453 12.9426C15.2434 12.8017 14.9453 12.5075 14.9453 12.039C14.9453 11.4629 15.439 11.0675 16.1674 11.0675ZM17.9277 10.2742C17.9277 10.0626 18.0964 9.89419 18.3038 9.89419C18.5116 9.89419 18.6773 10.0629 18.6773 10.2742C18.6773 10.4824 18.5116 10.654 18.3038 10.654C18.2037 10.6531 18.108 10.6127 18.0376 10.5416C17.9672 10.4704 17.9275 10.3743 17.9277 10.2742ZM17.9788 11.1258H18.6289V14.3489H17.9788V11.1258ZM21.3737 12.2349C21.3075 11.8918 21.0547 11.619 20.6304 11.619C20.1277 11.619 19.7966 12.0448 19.7966 12.7371C19.7966 13.445 20.1306 13.8557 20.6364 13.8557C21.0364 13.8557 21.2986 13.632 21.3737 13.2581H22C21.9308 13.9443 21.392 14.4101 20.6306 14.4101C19.7246 14.4101 19.1347 13.7788 19.1347 12.7373C19.1347 11.714 19.7246 11.0675 20.6246 11.0675C21.4402 11.0675 21.9369 11.6007 21.994 12.2349H21.3737ZM4.60813 10.3593C4.43994 10.5602 4.17319 10.7197 3.9062 10.6961C3.87126 10.4243 4.005 10.1347 4.15584 9.95757C4.3238 9.75034 4.61392 9.60287 4.85175 9.59082C4.88091 9.87468 4.77079 10.1523 4.60838 10.3595L4.60813 10.3593ZM4.84886 10.7494C4.99922 10.7612 5.4332 10.8082 5.71103 11.2265C5.6879 11.2443 5.19609 11.533 5.20187 12.1397C5.20765 12.865 5.82669 13.1065 5.83248 13.1125C5.82669 13.1304 5.7344 13.4544 5.50862 13.7901C5.31175 14.0851 5.10934 14.3737 4.78524 14.3798C4.47271 14.3855 4.36837 14.1911 4.00982 14.1911C3.65102 14.1911 3.53512 14.3737 3.24018 14.3855C2.92765 14.3971 2.69078 14.073 2.49391 13.7783C2.08861 13.1831 1.7821 12.0988 2.19873 11.3679C2.40114 11.0026 2.7715 10.7728 3.17078 10.7667C3.47753 10.7612 3.76114 10.9732 3.9462 10.9732C4.13151 10.9732 4.46115 10.726 4.84886 10.7494Z"
        fill="#323544"
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
export class SvgAppleMusicAltIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
