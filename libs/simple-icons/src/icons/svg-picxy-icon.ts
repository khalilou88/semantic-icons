import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-picxy-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Picxy</title>
      <path
        d="M23.214 9.193a.742.742 0 0 0-.488.276c-.072.093-.124.205-.215.46a246.024 246.024 0 0 1-.792 2.17 40.979 40.979 0 0 0-.408 1.147 2.913 2.913 0 0 1-.053.167 7.924 7.924 0 0 1-.228-.553 178.6 178.6 0 0 0-1.23-3.074c-.08-.202-.094-.228-.157-.32a.59.59 0 0 0-.328-.247c-.07-.022-.08-.022-.485-.022h-.413v.893l.157.002c.185 0 .218.012.284.087.037.04.091.166.476 1.076a367.899 367.899 0 0 0 .653 1.54l.332.776c.18.435.406.982.408.994l.01.04c.01.042-.018.123-.12.369-.197.47-.3.644-.495.813-.258.23-.529.3-.807.21a2.95 2.95 0 0 1-.427-.206 1.035 1.035 0 0 0-.177-.086 5.68 5.68 0 0 0-.094.162c-.05.086-.095.16-.1.168-.02.024-.21.376-.21.387 0 .03.215.177.387.264a1.897 1.897 0 0 0 .903.215c.32 0 .56-.055.827-.19.42-.212.704-.57.982-1.242.12-.287.56-1.374 1.22-3.01.81-2.003.784-1.94.862-2.098.074-.148.106-.185.198-.234.047-.024.063-.027.183-.032L24 10.09v-.903h-.364c-.2-.002-.39 0-.422.006zM10.32 9.17c-.492.05-.865.169-1.238.389a2.75 2.75 0 0 0-.856.834 2.6 2.6 0 0 0-.39 1.098 4.8 4.8 0 0 0 .004.844c.044.348.112.579.252.862.1.2.157.292.285.45a2.863 2.863 0 0 0 1.71.984c.124.02.166.022.48.022.38 0 .5-.011.753-.072.422-.101.742-.256 1.137-.55.064-.048.157-.115.206-.15.065-.045.09-.07.09-.084 0-.021-.029-.082-.04-.088a1.463 1.463 0 0 0-.124-.204c-.013-.017-.02-.031-.017-.031.003 0-.002-.01-.013-.022-.01-.01-.017-.024-.015-.03.003-.003.001-.007-.002-.007-.006 0-.013-.008-.018-.02a7.3 7.3 0 0 0-.157-.26l-.032-.051-.314.21a3.806 3.806 0 0 1-.448.278c-.17.08-.36.145-.535.18a1.387 1.387 0 0 1-.359.027 1.599 1.599 0 0 1-.62-.093 2.378 2.378 0 0 1-.506-.258 2.19 2.19 0 0 1-.362-.36 1.741 1.741 0 0 1-.307-.64 1.983 1.983 0 0 1-.066-.532c0-.2.02-.343.07-.544.053-.208.101-.324.21-.504.28-.462.714-.746 1.245-.816a3.167 3.167 0 0 1 .533-.005c.131.015.281.052.367.092a.74.74 0 0 1 .317.267c.042.072.086.274.086.397v.06h.854v-.29c0-.321-.01-.392-.067-.541-.087-.225-.316-.462-.563-.586a2.73 2.73 0 0 0-.545-.194c-.213-.05-.328-.062-.656-.064a7.058 7.058 0 0 0-.349.002zm-4.765.028c-.004.004-.007.19-.007.413v.407h.256c.283 0 .3.003.363.068.067.072.063-.088.062 1.92 0 1.882.002 2.11.037 2.246.051.2.168.32.356.364.107.024.608.045.62.025.001-.004 0-1.12-.005-2.478l-.006-2.47-.02-.076c-.048-.175-.134-.29-.259-.352-.13-.065-.139-.066-.797-.07a12.303 12.303 0 0 0-.6.003zm7.484.006a9.846 9.846 0 0 0-.003.44l.003.427h.17c.13 0 .184.006.232.018.17.046.263.123.401.326a110.633 110.633 0 0 1 .952 1.405.126.126 0 0 1 .017.04c0 .006-.41.634-.908 1.395a371.04 371.04 0 0 0-.908 1.39c0 .002.26.004.576.004h.575l.643-1.003a321.842 321.842 0 0 1 .655-1.02c.011-.015.026.003.144.175.072.106.373.565.67 1.02l.536.828h.572c.541 0 .57-.002.562-.018l-.912-1.395c-.78-1.196-.9-1.382-.89-1.398.005-.01.216-.333.47-.717.48-.723.531-.795.662-.896a.993.993 0 0 1 .142-.084l.085-.041.418-.01v-.893h-.384c-.412 0-.483.006-.626.05a.813.813 0 0 0-.36.222c-.072.073-.108.124-.226.323-.165.28-.832 1.34-.838 1.335-.02-.012-.25-.372-.765-1.197-.225-.36-.266-.42-.352-.501-.197-.19-.406-.237-1.05-.237-.198 0-.26.003-.263.012zM.461 7.104a.4.4 0 0 0-.168.042.508.508 0 0 0-.276.338c-.02.072-.018-.307-.014 4.27v2.875l.529-.002.526-.003V11.89h.45c.8-.002 1.372-.015 1.557-.037.295-.037.503-.094.72-.2a2.03 2.03 0 0 0 .803-.71 2.21 2.21 0 0 0 .392-1.058 4.769 4.769 0 0 0 0-.79 2.185 2.185 0 0 0-.783-1.465 2.383 2.383 0 0 0-.95-.452 4.01 4.01 0 0 0-.461-.066A72.454 72.454 0 0 0 .46 7.105Zm2.15.953a1.498 1.498 0 0 1 .688.24c.09.058.265.227.338.326.164.219.252.453.28.743.014.125.014.11 0 .235-.028.29-.116.524-.28.743a1.855 1.855 0 0 1-.338.327 1.517 1.517 0 0 1-.693.24c-.124.013-.108.013-.233 0a1.52 1.52 0 0 1-.692-.24 1.9 1.9 0 0 1-.34-.327 1.423 1.423 0 0 1-.28-.743c-.012-.125-.012-.11 0-.235.03-.29.118-.524.28-.743a1.9 1.9 0 0 1 .34-.327c.2-.133.507-.237.706-.24a.39.39 0 0 0 .074-.01.072.072 0 0 1 .038-.002c.008.002.059.008.112.013zm-.13.58a.64.64 0 0 0-.422.428.872.872 0 0 0 0 .332c.047.16.163.304.302.376.11.057.163.07.294.07.13 0 .182-.013.294-.07a.633.633 0 0 0 .302-.376.872.872 0 0 0 0-.332.642.642 0 0 0-.43-.43.855.855 0 0 0-.34.003zM6.46 7.15a.634.634 0 0 0-.443.445.8.8 0 0 0-.015.155c0 .183.053.312.18.438a.565.565 0 0 0 .437.179.806.806 0 0 0 .156-.015.632.632 0 0 0 .446-.446.877.877 0 0 0 0-.311.633.633 0 0 0-.446-.447.876.876 0 0 0-.316.002z"
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
export class SvgPicxyIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
