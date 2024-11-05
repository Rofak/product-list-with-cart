<script setup>
const foods = useState("foods", () => {
    return [
        {
            image: "/images/image-baklava-desktop.jpg",
            title: "Hello",
            description: "FSDAF",
            price: 12.34,
            isAddToCart: false
        },
        {
            image: "/images/image-brownie-desktop.jpg",
            title: "HdaSD",
            description: "FSD",
            price: 23.1,
            isAddToCart: false
        },
        {
            image: "/images/image-cake-desktop.jpg",
            title: "HdaSD",
            description: "FSD",
            price: 23.1,
            isAddToCart: false
        },
        {
            image: "/images/image-creme-brulee-desktop.jpg",
            title: "HdaSD",
            description: "FSD",
            price: 23.1,
            isAddToCart: false
        },
        {
            image: "/images/image-macaron-desktop.jpg",
            title: "HdaSD",
            description: "FSD",
            price: 23.1,
            isAddToCart: false
        },
        {
            image: "/images/image-panna-cotta-desktop.jpg",
            title: "HdaSD",
            description: "FSD",
            price: 23.1,
            isAddToCart: false
        }
    ]
})
const onAddToCart = (index) => {
    foods.value[index].isAddToCart = true
}
</script>


<template>
    <div class="container mx-auto px-4">
        <div class="mx-2 mt-4 text-lg font-semibold">Desserts</div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3">
            <div v-for="(food, index ) of foods" :key="index" class="mx-2 my-2">
                <FoodItem :title="food.title" :descripiton="food.description" :img="food.image"
                    :is-add-to-cart="food.isAddToCart" :price="food.price" @on-add-to-cart="onAddToCart(index)" />
            </div>
        </div>
    </div>
</template>