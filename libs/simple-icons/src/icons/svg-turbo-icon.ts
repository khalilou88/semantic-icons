import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-turbo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Turbo</title>
      <path
        d="M23.26718 0H.7368A.7368.7368 0 0 0 0 .7368v3.09061h12a8.17657 8.17656 0 0 1 6.80252 12.70494h5.17757V.73681A.73282.73282 0 0 0 23.26718 0ZM3.82741 12a8.15267 8.15267 0 0 1 1.37007-4.53236H0v15.79952A.73282.73282 0 0 0 .7368 24h22.53038A.73282.73282 0 0 0 24 23.26716v-3.09458H12A8.17259 8.17258 0 0 1 3.82741 12Z M17.94225 11.7929a9.21208 9.21208 0 0 1-2.28211.5536 3.98274 3.98274 0 0 0-.0239-.92002 9.74179 9.74178 0 0 0 1.9635-2.31397.88172.88172 0 0 0-1.48955-.94391 8.76203 8.76203 0 0 1-1.21474 1.54928 3.61235 3.61234 0 0 0-.75672-.72087 7.26452 7.26452 0 0 0-.12346-1.5453 12.43412 12.43411 0 0 0-.56157-2.01129.88019.88019 0 0 0-1.1311-.52572.84036.84036 0 0 0-.3226.20312.88815.88815 0 0 0-.2071.92798c.07966.21108.14736.39827.2071.60936.08762.28277.15931.54962.21905.79655a7.5234 7.5234 0 0 1 .12745.91204 3.43312 3.43312 0 0 0-.91603.0239A9.76568 9.76568 0 0 0 9.1125 6.42018a.88417.88417 0 0 0-.9439 1.49352 8.78991 8.7899 0 0 1 1.55326 1.19483 3.72386 3.72386 0 0 0-.72486.75672 9.49884 9.49883 0 0 0-3.55659.68901.88198.88198 0 0 0 .60538 1.65682 9.27182 9.27182 0 0 1 2.31796-.56953c0 .11948-.01992.23896-.01992.35844a3.67607 3.67607 0 0 0 .04381.55759 9.66213 9.66213 0 0 0-1.96747 2.31397.88019.88019 0 0 0 .74477 1.35413.8762.8762 0 0 0 .74876-.39827 8.60272 8.60272 0 0 1 1.19482-1.54929 3.95486 3.95486 0 0 0 .75672.72486 7.01759 7.01759 0 0 0 .12745 1.54132 12.03585 12.03584 0 0 0 .56157 2.01128.8762.8762 0 0 0 .82442.56157.89612.89612 0 0 0 .3027-.05177.92001.92001 0 0 0 .31861-.2071.8762.8762 0 0 0 .2071-.924c-.07567-.21507-.14736-.39828-.2071-.61335-.08762-.28277-.15931-.54563-.21507-.79654a6.60339 6.60338 0 0 1-.14338-.87222H12a3.72785 3.72784 0 0 0 .56157-.03983 9.7139 9.7139 0 0 0 2.30999 1.96349.88172.88172 0 1 0 .9439-1.48955 8.89744 8.89744 0 0 1-1.54928-1.21473 3.73581 3.73581 0 0 0 .72486-.75672h.20312a9.95685 9.95685 0 0 0 3.34948-.68902.88417.88417 0 0 0-.60139-1.6608zM13.95951 12v.1593a1.95154 1.95154 0 0 1-.693 1.35015 1.79622 1.79622 0 0 1-.24294.17524 1.99137 1.99137 0 0 1-1.03153.29074h-.15931a1.95154 1.95154 0 0 1-1.34617-.68901 2.306 2.306 0 0 1-.17922-.24693 1.99137 1.99137 0 0 1-.29074-1.03153v-.15931a1.8679 1.8679 0 0 1 .04779-.2987 1.99137 1.99137 0 0 1 .64122-1.04747 2.78792 2.78792 0 0 1 .24693-.17922 1.99137 1.99137 0 0 1 1.03153-.29074h.1593a1.9157 1.9157 0 0 1 .3027.0478 1.99137 1.99137 0 0 1 1.04746.6452 1.79622 1.79622 0 0 1 .17524.24294A1.99137 1.99137 0 0 1 13.97544 12z"
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
export class SvgTurboIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
