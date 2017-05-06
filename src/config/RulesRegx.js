const RulesRegx ={
    expressions:{
        email:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        alphaOnly:/^[A-z]+$/,
        numbersOnly:/[^0-9]+$/,
        alphaNumeric:/^[a-zA-Z0-9]*$/,
        password:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    },
    messages:{
        email:'Not Valid Email',
        alphaOnly:'Not Valid Alpha input',
        numbersOnly:'Not Valid Number input',
        alphaNumeric:'Not Valid Alphanumeric input',
        password:'Not Valid password',
        required:'Feild is mandatory',
        mapError:'Values not mapped',
    }
}

export default RulesRegx