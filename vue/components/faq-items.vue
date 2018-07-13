<template>
    <div>
        <ul class="faq-listing">
            <li
                v-for="item in items"
                @click="toggleActive(item)"
                :class="{ 'is-active': activeItems.includes(item) }">
                <h2 class="question">{{ item.question }}</h2>

                <div class="answer">
                    {{ item.answer }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                activeItems: [],
                items: [
                    {
                        question: 'Lorem ipsum dolor sit amet, consectetur ?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                    }, {
                        question: 'Lorem ipsum dolor sit amet, consectetur ?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                    }, {
                        question: 'Lorem ipsum dolor sit amet, consectetur ?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                    }
                ]
            }
        },
        methods: {
            toggleActive(item) {
                if (this.activeItems.includes(item)) {
                    this.activeItems = this.activeItems.filter(function(activeItem) {
                        return item != activeItem;
                    });
                } else{
                    this.activeItems.push(item);
                }
            }
        }
    }
</script>