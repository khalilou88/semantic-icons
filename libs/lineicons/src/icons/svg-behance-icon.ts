import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-behance-icon',
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
        d="M10.0968 11.3229C10.6452 11.0971 11.0645 10.7422 11.3226 10.3229C11.5806 9.90351 11.7419 9.35512 11.7419 8.77448C11.7419 8.22609 11.6452 7.74222 11.4839 7.32286C11.2903 6.90351 11.0323 6.58093 10.6774 6.35512C10.3226 6.12932 9.93548 5.93577 9.45161 5.83899C8.93548 5.74222 8.41936 5.70996 7.87097 5.70996H2V17.968H7.96774C8.51613 17.968 9.06452 17.9358 9.54839 17.7422C10.0968 17.6132 10.5484 17.3874 10.9677 17.0971C11.3871 16.839 11.7097 16.4519 11.9355 15.968C12.1613 15.5164 12.2903 14.968 12.2903 14.3229C12.2903 13.5487 12.0968 12.8713 11.7419 12.3551C11.3548 11.9035 10.8065 11.5487 10.0968 11.3229ZM4.74194 7.83899H7.29032C7.51613 7.83899 7.74194 7.87125 7.96774 7.87125C8.19355 7.87125 8.41935 8.00028 8.54839 8.09706C8.74194 8.19383 8.87097 8.32286 8.96774 8.54867C9.06452 8.74222 9.09677 8.96803 9.09677 9.29061C9.09677 9.77448 8.96774 10.1938 8.64516 10.4196C8.32258 10.6132 7.90323 10.7422 7.45161 10.7422H4.74194C4.74194 10.6777 4.74194 7.83899 4.74194 7.83899ZM9.45161 15.0971C9.35484 15.3229 9.22581 15.4519 9 15.5809C8.80645 15.71 8.58065 15.8067 8.35484 15.8067C8.12903 15.839 7.87097 15.839 7.6129 15.839H4.70968V12.5164H7.67742C8.25806 12.5164 8.70968 12.6454 9.09677 12.9358C9.45161 13.1938 9.64516 13.6777 9.64516 14.2906C9.58065 14.6132 9.58065 14.8713 9.45161 15.0971Z"
        fill="#323544"
      />
      <path
        d="M21.8065 12.1938C21.6774 11.5486 21.3871 11.0002 21.0323 10.5164C20.6774 10.0325 20.2258 9.64541 19.6774 9.32283C19.129 9.06476 18.4516 8.87121 17.7097 8.87121C17.0323 8.87121 16.3871 9.00024 15.9032 9.22605C15.3548 9.45186 14.871 9.77444 14.4516 10.2261C14.0323 10.6454 13.7097 11.1293 13.4839 11.7099C13.2581 12.2583 13.129 12.9035 13.129 13.5809C13.129 14.2583 13.2258 14.9035 13.4516 15.4841C13.6774 16.0648 14 16.5164 14.3548 16.968C14.7742 17.3873 15.2258 17.7099 15.8065 17.9357C16.3548 18.1615 17 18.2906 17.7097 18.2906C18.7097 18.2906 19.5806 18.0648 20.2903 17.6131C21.0323 17.1615 21.5161 16.3873 21.871 15.2906H19.7419C19.6452 15.5486 19.4194 15.839 19.0968 16.0648C18.7742 16.2906 18.3226 16.4196 17.8387 16.4196C17.1613 16.4196 16.6129 16.2261 16.2581 15.8712C15.9032 15.5164 15.6774 14.839 15.6774 14.1293H22C22 13.4519 21.9677 12.7744 21.8065 12.1938ZM15.5484 12.6131C15.5484 12.3873 15.6452 12.1615 15.7097 11.968C15.8065 11.7422 15.9032 11.5164 16.0645 11.3551C16.2581 11.1615 16.5161 10.968 16.7742 10.839C17.0323 10.7099 17.3548 10.7099 17.6452 10.7099C18.2258 10.7099 18.7419 10.9035 19 11.1938C19.2581 11.5164 19.4839 11.968 19.5484 12.6131H15.5484Z"
        fill="#323544"
      />
      <path
        d="M20.0319 6.54859H15.0319V7.7744H20.0319V6.54859Z"
        fill="#323544"
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
export class SvgBehanceIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
