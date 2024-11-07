<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps({
    img: {
        type: String,
        default: "/images/image-creme-brulee-desktop.jpg"
    },
    price: {
        type: Number,
        default: 12.2
    },
    title: {
        type: String,
        default: "Test"
    },
    descripiton: {
        type: String,
        default: "Test"
    },
    isAddToCart: {
        type: Boolean,
        default: false
    },
    count: {
        type: Number,
        default: 0
    }
})
const emit = defineEmits(["onAddToCart", "increment", "decrement"])

const increment = () => {
    emit("increment")
}

const decrement = () => {
    emit("decrement")
};

const onAddToCart = () => {
    emit("onAddToCart")
}


</script>

<template>
    <div>
        <div class="relative">
            <img :src="props.img" alt="" srcset="" class="rounded-lg w-full">
            <div class="absolute bottom-0 left-0 w-full flex justify-center">
                <UButton v-if="!isAddToCart" @click="onAddToCart" class="" size="lg"
                    icon="i-mingcute-shopping-cart-2-fill" label="Button" color="white">Add To
                    Cart
                </UButton>
                <div v-if="isAddToCart">
                    <div class="flex items-center bg-red-500 rounded-md px-4 py-1">
                        <button @click="decrement" class="counter-bt">
                            <span class="text-white text-2xl">−</span>
                        </button>
                        <span class="mx-3 text-white text-lg">{{ count }}</span>
                        <button @click="increment" class="counter-btn">
                            <span class="text-white text-2xl">+</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="text-gray-400">{{ title }}</div>
            <div class="font-semibold">{{ descripiton }}</div>
            <div class="text-red-500">${{ price }}</div>
        </div>
    </div>
</template>