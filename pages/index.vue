<script setup>
const config = useRuntimeConfig();
const isProduction = config.public.isProduction;
const baseURLImage = isProduction ? config.public.baseURL : '.';
const foods = useState("foods", () => {
    return [
        {
            image: `${baseURLImage}/images/image-baklava-desktop.jpg`,
            title: "Hello",
            description: "FSDAF",
            price: 12.34,
            isAddToCart: false,
            total: 0,
        },
        {
            image: `${baseURLImage}/images/image-brownie-desktop.jpg`,
            title: "A",
            description: "FSD",
            price: 23.1,
            isAddToCart: false,
            total: 0,
        },
        {
            image: `${baseURLImage}/images/image-cake-desktop.jpg`,
            title: "B",
            description: "FSD",
            price: 23.1,
            isAddToCart: false,
            total: 0,
        },
        {
            image: `${baseURLImage}/images/image-creme-brulee-desktop.jpg`,
            title: "C",
            description: "FSD",
            price: 23.1,
            isAddToCart: false,
            total: 0,
        },
        {
            image: `${baseURLImage}/images/image-macaron-desktop.jpg`,
            title: "D",
            description: "FSD",
            price: 23.1,
            isAddToCart: false,
            total: 0,
        },
        {
            image: `${baseURLImage}/images/image-panna-cotta-desktop.jpg`,
            title: "E",
            description: "FSD",
            price: 23.1,
            isAddToCart: false,
            total: 0,
        }
    ]
})

const addedToCart = useState("addedToCart", () => [])
const totalPrice = computed(() => {
    addedToCart.value.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
})


const onAddToCart = (index) => {
    foods.value[index].isAddToCart = true
    foods.value[index].total = 1
    addedToCart.value.push(foods.value[index])
}

const increment = (index) => {
    foods.value[index].total += 1
};

const decrement = (index) => {
    if (foods.value[index].total > 0) {
        foods.value[index].total -= 1
    }

};
</script>


<template>
    <div class="flex">
        <div>
            <div class="mx-2 mt-4 text-lg font-semibold">Desserts</div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3">
                <div v-for="(food, index ) of foods" :key="index" class="mx-2 my-2">
                    <FoodItem :title="food.title" :descripiton="food.description" :img="food.image"
                        :is-add-to-cart="food.isAddToCart" :price="food.price" @on-add-to-cart="onAddToCart(index)"
                        @decrement="decrement(index)" @increment="increment(index)" :count="food.total" />
                </div>
            </div>
        </div>
        <div class="mx-2 mt-4 p-3 bg-slate-100 rounded-md h-fit" style="width: 500px; margin-top: 50px;">
            <div class="text-center my-2">Your Cart </div>
            <div v-for="(food, index) of addedToCart" :key="index" class="border-b pb-2">
                <div>{{ food.title }}</div>
                <div class="text-sm"><span class="text-red-500 mr-2">{{ food.total }}x</span>${{ food.price }}</div>
            </div>
            <div class="flex justify-between">
                <div>Order Total</div>
                <div class="font-semibold">${{ totalPrice }}</div>
            </div>
            <div class="flex justify-center mt-3">
                <UButton>Confirm Order</UButton>
            </div>
        </div>
    </div>
</template>