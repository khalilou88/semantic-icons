import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-zenodo-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Zenodo</title>
      <path
        d="M23.82698 11.163a2.2419 2.2419 0 00-.46698-.68697 2.1499 2.1499 0 00-1.52393-.62697 2.10991 2.10991 0 00-1.20695.36499 2.2469 2.2469 0 00-.49498.45398c-.06.075-.125.17499-.163.23599a2.68689 2.68689 0 00-.20498.46398c.006-.27.046-.67197.20499-.89797V8.52212a.42698.42698 0 00-.137-.32199.44298.44298 0 00-.31698-.132.43998.43998 0 00-.32299.132.43998.43998 0 00-.13.32199v1.73292a2.3699 2.3699 0 00-.59197-.29898 2.1239 2.1239 0 00-1.49994.06 2.1599 2.1599 0 00-1.15295 1.14695l-.024.06a2.2419 2.2419 0 00-.48997-.74697 2.1529 2.1529 0 00-1.52394-.62698 2.10991 2.10991 0 00-.84296.167 2.2299 2.2299 0 00-.68697.45998 2.10591 2.10591 0 00-.46598.68697l-.023.056-.023-.056a2.1549 2.1549 0 00-1.98992-1.31395c-.30098 0-.58197.056-.84196.167a2.2299 2.2299 0 00-.68597.45998c-.2.19599-.35499.42398-.46698.68697l-.02.053-.022-.053a2.2429 2.2429 0 00-.46698-.68698 2.1479 2.1479 0 00-1.52293-.62697 2.10991 2.10991 0 00-.84197.167 2.2289 2.2289 0 00-.64197.41798v-.072a.46298.46298 0 00-.46198-.46298H.53398a.46298.46298 0 000 .92596h2.54889L.091 14.84985a.46198.46198 0 00-.091.27499v.30198c0 .256.207.46298.46298.46298h3.44985a.46198.46198 0 00.46198-.42998 2.1689 2.1689 0 001.34695.47198c.44598 0 .84396-.12 1.19494-.35998.283-.192.50698-.43098.66998-.71997v.62597c0 .127.043.235.13.32199a.43598.43598 0 00.32398.132c.12 0 .22399-.044.31598-.132a.42698.42698 0 00.138-.32199V13.8579h-.002l.002-.003H7.36069a.43998.43998 0 00-.41799.28699l-.074.152a1.23395 1.23395 0 01-.45997.53197 1.23395 1.23395 0 01-.68697.197c-.168 0-.32999-.031-.48498-.095a1.17495 1.17495 0 01-.39999-.27 1.38194 1.38194 0 01-.26998-.39998 1.16495 1.16495 0 01-.1-.47698v-.40598h4.02783v-1.37494a1.23695 1.23695 0 01.36498-.87796 1.23995 1.23995 0 01.88996-.36499c.167 0 .32899.032.48398.095.155.065.289.154.39999.27.112.11499.19999.24898.26898.39997.067.151.102.311.102.47798v3.47686c0 .12799.043.23599.13.32298a.43798.43798 0 00.32398.132c.12 0 .224-.044.31599-.132a.43098.43098 0 00.137-.32299v-.62297a2.1439 2.1439 0 001.86791 1.07795c.29399 0 .57398-.056.83697-.168.26199-.11099.49298-.26398.69297-.45997a2.11191 2.11191 0 00.48398-.73297l.018.047c.111.26199.26699.48998.46598.68697.19999.195.42798.34799.68697.45998.25799.11.53997.167.84296.167a2.1469 2.1469 0 001.52294-.62698c.19499-.196.35098-.42498.46698-.68697l.024-.06.024.06c.115.26199.26998.48998.46598.68697a2.1439 2.1439 0 001.52393.62697c.29398 0 .57397-.056.83696-.168a2.2199 2.2199 0 00.69297-.45997 2.11691 2.11691 0 00.63498-1.52194v-1.78192a2.07991 2.07991 0 00-.173-.83696zM1.15995 14.96485l2.4199-3.25886c-.012.096-.02.194-.02.29399v1.77992c0 .296.058.57398.174.83797.05399.123.11799.23899.18998.34698zm5.81775-2.49989H4.4678v-.46498a1.24195 1.24195 0 01.76498-1.14695c.15199-.064.31498-.096.48998-.096.16799 0 .32998.032.48398.095.15599.065.28998.154.39998.26999.112.115.19999.24899.26999.39998.068.151.1.31099.1.47798zm8.05766 1.31594a1.24895 1.24895 0 01-1.25395 1.24295c-.168 0-.32898-.032-.48498-.096a1.16795 1.16795 0 01-.39998-.26999 1.37594 1.37594 0 01-.26899-.39998 1.15895 1.15895 0 01-.1-.47698v-1.78092a1.23995 1.23995 0 011.25495-1.24295c.16599 0 .32798.032.48198.095.15599.065.28998.154.39998.26999.112.115.201.24899.26999.39998.067.152.101.31099.101.47798zm4.02783 0c0 .167-.033.32599-.1.47798a1.37994 1.37994 0 01-.27.39999 1.15995 1.15995 0 01-.39998.26998 1.25995 1.25995 0 01-.48397.094 1.23195 1.23195 0 01-.88997-.36398 1.24195 1.24195 0 01-.36598-.87796v-1.78093c0-.16699.035-.32598.102-.47798a1.39994 1.39994 0 01.26998-.39998 1.15995 1.15995 0 01.39999-.26999 1.26995 1.26995 0 01.48398-.095 1.24995 1.24995 0 01.88996.36499 1.24995 1.24995 0 01.36398.87796zm4.02782 0a1.22395 1.22395 0 01-.36398.87797c-.116.116-.24999.20499-.39998.26998a1.24995 1.24995 0 01-.48998.094 1.26995 1.26995 0 01-.48498-.095 1.16895 1.16895 0 01-.39999-.26998 1.37994 1.37994 0 01-.26998-.39999 1.15695 1.15695 0 01-.1-.47698v-1.78092a1.23995 1.23995 0 011.25494-1.24295c.167 0 .32799.032.48298.095.156.065.29.154.39999.27.112.11499.20099.24898.26998.39997.067.152.1.311.1.47798v1.77993z"
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
export class SvgZenodoIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
