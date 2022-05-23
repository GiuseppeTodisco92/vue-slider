const app = new Vue({
    el: '#app',
    data: {
        currentIndex : 0,
        autoplayID : null,
        images : [
            {
                src: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                src: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                src: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                src: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                src: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
    },

    methods: {
       
        downImage(){
            this.currentIndex === images.length - 1 ? this.currentIndex = 0 : this.currentIndex++;
            
            // this._downImage();
            // this.startSlideTimer();
        },

        upImage(){
            this.currentIndex === 0 ? this.currentIndex = images.length - 1 : this.currentIndex--;
        },

        changeImage(index){
            this.currentIndex = index;
        },

        clearSlider(){
            clearInterval(this.autoplayID);
        },

        startAutoplay(){
            this.autoplayID = setInterval(() => {
                this.downImage();
            }, 2000);
        }
        
       
    },

    created(){
        this.startAutoplay();
    }
})