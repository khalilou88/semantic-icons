import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-egnyte-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Egnyte</title>
      <path
        d="M16.742 11.214l-.447-.78a.062.062 0 0 0-.082-.022l-2.014 1.162-1.986-1.167a.062.062 0 0 0-.082.021l-.458.78a.062.062 0 0 0 .021.083l2.009 1.178v2.363c0 .033.027.06.06.06h.89a.06.06 0 0 0 .06-.06v-2.374l2.007-1.162c.028-.016.039-.055.022-.082zm-3.863 1.583c-.017-.028-.055-.038-.088-.022l-1.342.797c-.027.016-.038.054-.022.087l.191.327c.016.028.055.039.087.022l1.343-.797c.027-.016.038-.054.022-.087zm1.533-3.69l-.442.006c-.016 0-.027.011-.027.033l.005 1.62c0 .017.011.028.033.028h.442c.016 0 .027-.01.027-.033l-.005-1.62a.035.035 0 0 0-.033-.033zm2.554 4.377l-1.413-.791c-.017-.005-.033-.005-.039.011l-.218.387c-.005.017-.005.033.011.039l1.413.79c.017.006.033.006.039-.01l.218-.388c.01-.01.005-.032-.011-.038zm-14.057.12h-1.9v-.584h1.687a.075.075 0 0 0 .076-.076v-.65a.075.075 0 0 0-.076-.076H1.01v-.556h1.87a.075.075 0 0 0 .077-.077v-.715a.075.075 0 0 0-.077-.076H.076A.075.075 0 0 0 0 10.87v3.526c0 .043.033.076.076.076H2.91a.075.075 0 0 0 .076-.076v-.715a.078.078 0 0 0-.076-.077zm3.967-1.282H5.26v.748h.725v.442c0 .005 0 .01-.005.01-.153.099-.338.148-.584.148-.584 0-.999-.426-.999-1.02v-.012c0-.562.41-1.01.939-1.01.338 0 .584.11.83.301.032.027.081.022.103-.01l.502-.607a.078.078 0 0 0-.01-.109c-.377-.305-.82-.485-1.436-.485-1.14 0-1.98.84-1.98 1.915v.01c0 1.114.856 1.905 2.002 1.905a2.49 2.49 0 0 0 1.572-.545.088.088 0 0 0 .027-.06v-1.545c.005-.043-.027-.076-.071-.076zm4.044-1.533h-.857a.075.075 0 0 0-.077.076v1.866l-1.49-1.915a.088.088 0 0 0-.06-.027h-.834a.075.075 0 0 0-.077.076v3.525c0 .044.033.077.077.077h.856a.075.075 0 0 0 .077-.077v-1.943l1.55 1.992a.088.088 0 0 0 .06.028h.78a.075.075 0 0 0 .076-.077v-3.525c-.005-.038-.043-.076-.081-.076zm9.571 0H17.42a.075.075 0 0 0-.077.076v.742c0 .044.033.076.077.076h1.026v2.713c0 .043.032.076.076.076h.868a.075.075 0 0 0 .076-.076v-2.702c0-.005.006-.01.011-.01h1.015a.075.075 0 0 0 .077-.077v-.742a.078.078 0 0 0-.077-.076zm3.433 2.815h-1.9v-.584h1.692a.075.075 0 0 0 .077-.076v-.65a.075.075 0 0 0-.077-.076h-1.691v-.556h1.871a.075.075 0 0 0 .077-.077v-.715a.075.075 0 0 0-.077-.076h-2.805a.075.075 0 0 0-.076.076v3.526c0 .043.033.076.076.076h2.833a.075.075 0 0 0 .076-.076v-.715a.075.075 0 0 0-.076-.077Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgEgnyteIcon {
  readonly class = input<string>('');
}
