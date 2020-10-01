import { defineComponent, PropType, ref, toRefs, watch } from 'vue';

import style from './book-style.module.scss';

export { style };

export interface Options {
  duration: number;
  perspective: number;
  delay: number;
  autoplay: number;
  loop: number;
}

const { setInterval, setTimeout, clearInterval } = window;

export const Book = defineComponent({
  props: {
    options: {
      type: Object as PropType<Options>,
      default: () => ({
        duration: 1500,
        perspective: 1500,
        delay: 1000,
        autoplay: false,
        loop: false
      })
    },

    list: {
      type: Array,
      default: () => []
    }
  },

  setup({ options, list }, { slots }) {
    const { autoplay, delay, duration, loop, perspective } = toRefs(options);

    const interval = ref(0);
    const active = ref(0);
    const direction = ref(0);
    const zIndex = ref<number[]>([]);
    const skip = ref(false);

    const isFlipped = (i: number) => i < active.value;

    const getStyle = (i: number) => ({
      zIndex: zIndex.value[i] || -i,
      transitionDuration: `${duration.value}ms`
    });

    const calcDirection = () => {
      if (active.value === 0) {
        if (direction.value < 0) {
          direction.value = 0;
        } else {
          direction.value = 1;
        }
      } else if (active.value === list.length) {
        if (direction.value > 0) {
          direction.value = 0;
        } else {
          direction.value = -1;
        }
      }
    };

    const onCardClick = (i: number, s: boolean) => {
      zIndex.value[i] = i;

      if (isFlipped(i)) {
        active.value -= 1;

        setTimeout(() => {
          if (!isFlipped(i)) zIndex.value[i] *= -1;
        }, duration.value / 2);
      } else {
        active.value += 1;
      }

      skip.value = s;
      calcDirection();
    };

    const goToStart = () => {
      const l = list.length - 1;
      const getT = (i: number) => (duration.value / 6) * (l + 1 - i);

      for (let i = l; i >= 0; i--) {
        setTimeout(() => {
          onCardClick(i, false);
        }, getT(i));
      }
    };

    watch(
      autoplay,
      val => {
        if (val) {
          interval.value = setInterval(() => {
            const i = active.value + direction.value;

            if (loop.value && i === list.length - 1 && direction.value < 0) {
              goToStart();
              return;
            }

            if (!skip.value) {
              onCardClick(i, false);
            }

            skip.value = false;
          }, duration.value + delay.value);
        } else {
          clearInterval(interval.value);
        }
      },
      {
        immediate: true
      }
    );

    return () => (
      <div class={`${style.scene}`} style={{ perspective: `${perspective.value}px` }}>
        <div class={`${style.scene_card} ${style.right} ${style.is__flipped}`} style={getStyle(0)}>
          <div class={`${style.card__face} ${style.card__face__back}`}>{slots.first?.()}</div>
        </div>

        {list.map((el, i) => (
          <div
            class={`${style.scene_card} ${style.right} ${isFlipped(i) && style.is__flipped}`}
            style={getStyle(i)}
            onClick={() => onCardClick(i, true)}
          >
            <div class={`${style.card__face} ${style.card__face__front}`}>
              {slots.faceFront?.({ item: el })}
            </div>
            <div class={`${style.card__face} ${style.card__face__back}`}>
              {slots.faceBack?.({ item: el })}
            </div>
          </div>
        ))}

        <div class={`${style.scene_card} ${style.right}`} style={getStyle(list.length)}>
          <div class={`${style.card__face} ${style.card__face__front}`}>{slots.last?.()}</div>
        </div>
      </div>
    );
  }
});

export default Book;
