import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-polars-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Polars</title>
      <path
        d="M20.954 7.714h.434c.106 0 .193.087.193.197v3.726a.197.197 0 0 1-.193.193h-.434a.197.197 0 0 1-.197-.193V7.911c0-.11.087-.197.197-.197zm1.213 1.085h.435c.105 0 .192.087.192.196v2.521a.197.197 0 0 1-.192.193h-.435a.197.197 0 0 1-.197-.193v-2.52c0-.114.087-.197.197-.197zm1.206 1.383h.43c.11 0 .197.087.197.197v.718a.197.197 0 0 1-.197.192h-.43a.197.197 0 0 1-.197-.196v-.718a.189.189 0 0 1 .197-.19zm-3.629-2.827h.431a.197.197 0 0 1 .197.196v.719a.197.197 0 0 1-.197.189h-.435a.197.197 0 0 1-.196-.19v-.718a.197.197 0 0 1 .196-.196Zm0 1.444h.431a.197.197 0 0 1 .197.196v.658a.197.197 0 0 1-.197.193h-.435a.197.197 0 0 1-.196-.193v-.658a.197.197 0 0 1 .196-.196zm0 1.387h.431a.197.197 0 0 1 .197.193v1.08a.197.197 0 0 1-.197.193h-.435a.197.197 0 0 1-.196-.192v-1.081a.197.197 0 0 1 .196-.193zm-1.24-3.133h.435a.197.197 0 0 1 .193.196v1.138a.197.197 0 0 1-.193.196h-.434a.197.197 0 0 1-.197-.196V7.249a.197.197 0 0 1 .197-.196Zm0 1.927h.435a.197.197 0 0 1 .193.197v2.162a.197.197 0 0 1-.193.192h-.434a.197.197 0 0 1-.197-.192V9.177a.197.197 0 0 1 .197-.197ZM17.3 6.694h.435a.197.197 0 0 1 .196.192v4.574a.197.197 0 0 1-.196.192H17.3a.197.197 0 0 1-.197-.192V6.886a.197.197 0 0 1 .197-.192zm0 10.174h.435a.197.197 0 0 1 .196.197v.718a.197.197 0 0 1-.196.192H17.3a.197.197 0 0 1-.197-.196v-.718a.197.197 0 0 1 .197-.19zm-1.24-.964h.435a.197.197 0 0 1 .196.197v1.678a.197.197 0 0 1-.196.196h-.431a.197.197 0 0 1-.193-.196V16.1a.197.197 0 0 1 .193-.197zm0-5.117h.435a.197.197 0 0 1 .196.196v1.134a.197.197 0 0 1-.196.2h-.431a.197.197 0 0 1-.193-.196v-1.138a.197.197 0 0 1 .193-.196zm0-4.396h.435a.197.197 0 0 1 .196.197v3.605a.197.197 0 0 1-.196.197h-.431a.197.197 0 0 1-.193-.197V6.588a.197.197 0 0 1 .193-.197zm-1.22.06h.434a.197.197 0 0 1 .197.197V8.75a.197.197 0 0 1-.197.192h-.435a.197.197 0 0 1-.192-.192V6.648a.197.197 0 0 1 .192-.196zm0 2.892h.434a.197.197 0 0 1 .197.193v6.138a.197.197 0 0 1-.197.196h-.435a.197.197 0 0 1-.192-.196V9.536a.197.197 0 0 1 .192-.193Zm0 6.924h.434a.197.197 0 0 1 .197.193v1.14a.197.197 0 0 1-.197.193h-.435a.197.197 0 0 1-.192-.193v-1.14a.197.197 0 0 1 .192-.193zm-1.21-9.638h.43a.197.197 0 0 1 .197.2v4.925a.197.197 0 0 1-.196.197h-.435a.197.197 0 0 1-.193-.197V6.83a.197.197 0 0 1 .193-.197Zm0 5.722h.43a.197.197 0 0 1 .197.197v3.908a.197.197 0 0 1-.196.197h-.435a.197.197 0 0 1-.193-.197v-3.908a.197.197 0 0 1 .193-.197Zm-1.217-5.9h.435a.197.197 0 0 1 .192.197v3.179a.197.197 0 0 1-.192.196h-.435a.197.197 0 0 1-.197-.196V6.652a.197.197 0 0 1 .197-.197zm0 3.977h.435a.197.197 0 0 1 .192.192v2.646a.197.197 0 0 1-.192.193h-.435a.197.197 0 0 1-.197-.193V10.62a.197.197 0 0 1 .197-.192zm0 3.428h.435a.197.197 0 0 1 .192.196v1.198a.197.197 0 0 1-.192.197h-.435a.197.197 0 0 1-.197-.197v-1.198a.197.197 0 0 1 .197-.196zm-1.22-7.522h.434a.197.197 0 0 1 .196.19v1.443a.197.197 0 0 1-.196.193h-.439a.197.197 0 0 1-.196-.193v-1.44a.197.197 0 0 1 .196-.196zm0 2.227h.434a.197.197 0 0 1 .196.192v5.534a.197.197 0 0 1-.196.196h-.439a.197.197 0 0 1-.196-.196V8.753a.197.197 0 0 1 .196-.192Zm-1.225 8.182h.434a.197.197 0 0 1 .197.197v.835a.197.197 0 0 1-.197.197h-.434a.197.197 0 0 1-.193-.197v-.835a.197.197 0 0 1 .193-.197zm0-10.658h.434a.197.197 0 0 1 .197.197v5.113a.197.197 0 0 1-.197.193h-.434a.197.197 0 0 1-.193-.193v-5.11a.197.197 0 0 1 .193-.196Zm0 5.904h.434a.197.197 0 0 1 .197.192v2.102a.197.197 0 0 1-.197.196h-.434a.197.197 0 0 1-.193-.196V12.18a.197.197 0 0 1 .193-.192zm-1.221 3.855h.434a.197.197 0 0 1 .193.189v1.742a.197.197 0 0 1-.193.197h-.434a.197.197 0 0 1-.197-.197v-1.738a.197.197 0 0 1 .197-.197zm0-6.025h.434a.197.197 0 0 1 .193.197v4.27a.197.197 0 0 1-.193.193h-.434a.197.197 0 0 1-.197-.196v-4.267a.197.197 0 0 1 .197-.19Zm0-3.794h.434a.197.197 0 0 1 .193.196v3.005a.197.197 0 0 1-.193.196h-.434a.197.197 0 0 1-.197-.196V6.22a.197.197 0 0 1 .197-.196Zm-1.221.06h.435a.197.197 0 0 1 .196.197V7a.197.197 0 0 1-.196.192h-.435A.197.197 0 0 1 7.332 7v-.718a.197.197 0 0 1 .193-.197Zm0 1.448h.435a.197.197 0 0 1 .196.192v5.541a.197.197 0 0 1-.196.193h-.435a.197.197 0 0 1-.193-.193V7.73a.197.197 0 0 1 .193-.193Zm0 6.323h.435a.197.197 0 0 1 .196.193v1.5a.197.197 0 0 1-.196.197h-.435a.197.197 0 0 1-.193-.197v-1.5a.197.197 0 0 1 .193-.193zm0 2.286h.435a.197.197 0 0 1 .196.197v.956a.197.197 0 0 1-.196.197h-.435a.197.197 0 0 1-.193-.197v-.956a.197.197 0 0 1 .193-.197ZM6.305 6.57h.434a.197.197 0 0 1 .193.196v3.606a.197.197 0 0 1-.193.193h-.435a.197.197 0 0 1-.196-.193V6.765a.197.197 0 0 1 .196-.196Zm0 4.395h.434a.197.197 0 0 1 .193.193v.84a.197.197 0 0 1-.193.196h-.435a.197.197 0 0 1-.196-.197v-.839a.197.197 0 0 1 .196-.193Zm0 1.505h.43a.197.197 0 0 1 .197.196v3.727a.197.197 0 0 1-.197.196h-.43a.197.197 0 0 1-.197-.196v-3.727a.197.197 0 0 1 .196-.196ZM5.018 9.577h.56a.136.136 0 0 1 .132.136v2.763a.136.136 0 0 1-.132.136h-.556a.136.136 0 0 1-.136-.136V9.717a.136.136 0 0 1 .136-.14zm0 3.432h.56a.136.136 0 0 1 .132.136v2.483a.136.136 0 0 1-.132.136h-.556a.136.136 0 0 1-.136-.136v-2.475a.136.136 0 0 1 .136-.136zm0-5.96h.56a.136.136 0 0 1 .132.136v1.92a.136.136 0 0 1-.132.136h-.556a.136.136 0 0 1-.136-.136v-1.92a.136.136 0 0 1 .136-.136Zm-1.217.597h.552a.136.136 0 0 1 .136.132v2.884a.136.136 0 0 1-.136.132h-.552a.136.136 0 0 1-.136-.132V7.778a.136.136 0 0 1 .136-.132Zm0 3.5h.552a.136.136 0 0 1 .136.136v3.904a.136.136 0 0 1-.136.136h-.556a.136.136 0 0 1-.132-.136v-3.9a.136.136 0 0 1 .132-.136Zm-1.168 5.722h.435a.197.197 0 0 1 .197.197v.718a.197.197 0 0 1-.197.192h-.43a.197.197 0 0 1-.194-.196v-.718a.197.197 0 0 1 .193-.19zm-.06-2.562h.563a.136.136 0 0 1 .136.136v1.262a.136.136 0 0 1-.136.136h-.56a.136.136 0 0 1-.132-.136v-1.262a.136.136 0 0 1 .133-.136zm0-4.725h.563a.136.136 0 0 1 .136.132v4.075a.136.136 0 0 1-.136.136h-.56a.136.136 0 0 1-.132-.136V9.713a.136.136 0 0 1 .133-.132Zm-1.213 5.95h.555a.136.136 0 0 1 .136.135v2.173a.136.136 0 0 1-.136.136h-.56a.136.136 0 0 1-.135-.136v-2.173a.136.136 0 0 1 .136-.136zm.06-3.225h.431a.197.197 0 0 1 .197.193v2.506a.197.197 0 0 1-.197.196h-.435a.197.197 0 0 1-.196-.196v-2.506a.197.197 0 0 1 .196-.193ZM.14 15.001h.552c.075 0 .136.06.136.136v2.052c0 .076-.06.136-.136.136H.136A.136.136 0 0 1 0 17.19v-2.052c0-.076.06-.136.136-.136z"
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
export class SvgPolarsIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
