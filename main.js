const app = new Vue (
    {
        el: '#app',
        data: {
            title: 'Cosa vuoi guardare stasera?',
            activeImage : 0,
            images: [
                {
                    name: 'Daredevil',
                    image: 'img/daredevil.jpg',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    name: 'The Sinner',
                    image: 'img/sinner.jpg',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    name: 'Revolution',
                    image: 'img/rivoluzione.jpg',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    name: 'The Witcher',
                    image: 'img/witcher.jpg',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    name: 'Ghoul',
                    image: 'img/ghoul.jpg',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
            ],
        },

        methods: {
            previousSlide () {
                if (this.activeImage == 0) {
                    this.activeImage = this.images.length - 1;
                } else {
                    this.activeImage--;
                }
            },
            
            nextSlide () {
                if (this.activeImage == this.images.length - 1) {
                    this.activeImage = 0;
                } else {
                    this.activeImage++;
                }
            },

            changeSlideIndex (imageIndex) {
                this.activeImage = imageIndex;
            }
        }
    });
