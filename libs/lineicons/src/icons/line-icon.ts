import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 10.6222C22 6.13836 17.4839 2.46094 12 2.46094C6.51613 2.46094 2 6.1061 2 10.6222C2 14.6222 5.54839 17.9771 10.3548 18.6222C10.6774 18.6545 11.129 18.848 11.2258 19.1061C11.3226 19.3319 11.2581 19.7513 11.2581 20.0093C11.2581 20.0093 11.129 20.7513 11.129 20.8803C11.0968 21.1061 10.9355 21.8803 12 21.3642C13.0323 20.9126 17.7419 17.9448 19.871 15.5577C21.3226 14.0093 22 12.3964 22 10.6222ZM8.45161 12.9771C8.45161 13.0738 8.35484 13.1706 8.25806 13.1706H5.45161C5.41935 13.1706 5.35484 13.1384 5.32258 13.1384C5.29032 13.1061 5.29032 13.0416 5.29032 13.0093V8.62223C5.29032 8.52546 5.3871 8.42868 5.48387 8.42868H6.16129C6.25806 8.42868 6.35484 8.52546 6.35484 8.62223V12.0738H8.25806C8.35484 12.0738 8.45161 12.1706 8.45161 12.2674V12.9771ZM10.129 12.9771C10.129 13.0738 10.0323 13.1706 9.93548 13.1706H9.25806C9.16129 13.1706 9.06452 13.0738 9.06452 12.9771V8.62223C9.06452 8.52546 9.16129 8.42868 9.25806 8.42868H9.93548C10.0323 8.42868 10.129 8.52546 10.129 8.62223V12.9771ZM15 12.9771C15 13.0738 14.9032 13.1706 14.8065 13.1706H14.129C14.0968 13.1706 14.0968 13.1706 14.0968 13.1706C14.0645 13.1706 14.0645 13.1384 14.0645 13.1384L12 10.4287V13.0093C12 13.1061 11.9032 13.2029 11.8065 13.2029H11.129C11.0323 13.2029 10.9355 13.1061 10.9355 13.0093V8.65449C10.9355 8.55772 11.0323 8.46094 11.129 8.46094H11.8065C11.8065 8.46094 11.8065 8.46094 11.8387 8.4932L13.8387 11.1706V8.58997C13.8387 8.4932 13.9355 8.39642 14.0323 8.39642H14.8065C14.9032 8.39642 15 8.4932 15 8.58997V12.9771ZM18.871 9.33191C18.871 9.42868 18.7742 9.52546 18.6774 9.52546H16.7742V10.2674H18.6774C18.7742 10.2674 18.871 10.3642 18.871 10.4609V11.1384C18.871 11.2351 18.7742 11.3319 18.6774 11.3319H16.7742V12.0093H18.6774C18.7742 12.0093 18.871 12.1061 18.871 12.2029V12.8803C18.871 12.9771 18.7742 13.0738 18.6774 13.0738H15.871C15.8387 13.0738 15.7742 13.0416 15.7419 13.0416C15.7097 13.0093 15.7097 12.9448 15.7097 12.9126V8.55772C15.7097 8.52546 15.7419 8.46094 15.7419 8.42868C15.7742 8.39642 15.8387 8.39642 15.871 8.39642H18.6774C18.7742 8.39642 18.871 8.4932 18.871 8.58997V9.33191Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
