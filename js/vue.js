const app = new Vue({
    el: '#app',
    data: {
        currentIndex : 0,
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
        _downImage(){
            if(this.currentIndex === images.length - 1){
                this.currentIndex = 0 ;
            } else{
                this.currentIndex++; 
                
            }
        },

        downImage(){
            this._downImage();
            this.startSlideTimer();
        },

        upImage(){
            if(this.currentIndex === 0 ){
                this.currentIndex = images.length - 1 ;
            } else{
                this.currentIndex--;
            }
            // this.startSlideTimer();
        },

        changeImage(index){
            this.currentIndex = index;
        },

        startSlideTimer(){
            this.autoplayInterval = setInterval(() => {
                this._downImage();
            }, 3000);
        },

        mounted(){
            this.startSlideTimer();
        },

        clearSlider(){
            clearInterval(this.autoplayInterval);
        },
       
    },
})