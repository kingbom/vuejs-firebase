new Vue({
    el: "#comment",
    data: {
        messageText: '',
        messages:[],
        name: 'kimbom'
    },
    methods: {
        storeMessage:function(){
            this.messages.push({text:this.messageText, name:this.name})
            this.messageText = '';
            console.log(this.messages);
        }
    }
})