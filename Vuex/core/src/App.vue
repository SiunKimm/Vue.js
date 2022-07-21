<template>
    <div>
        <h1>Count: {{ count }}</h1>
        <h1>Double: {{ double }}</h1>
        <button @click="increase">increase</button>
        <button @click="decrease">decrease</button>
    </div>
</template>

<script>
import { reactive, computed } from '@vue/composition-api';

const useCount = () => {
    const count = ref(0);
    const double = computed(() => count.value * 2);

    const increase = () => ++state.count;
    const decrease = () => --state.count;

    return { count, double, increase, decrease }
}

export default {
    setup () {
        const { count, double, increase, decrease } = useCount();

        return {
            count,
            double,
            increase,
            decrease
        }
    }
}
</script>