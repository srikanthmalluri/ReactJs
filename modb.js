module.exports.modb = function (){
    this.funa = function(){
        console.log('hi from funa');
        
    }
    this.funb=function(){
        console.log('this is from funb');
        
    }
    this.Books = class {
        constructor(name,auth){
            this.name=name;
            this.auth=auth;
        }
    }
}