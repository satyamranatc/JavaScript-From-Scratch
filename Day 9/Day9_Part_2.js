let Person = {
    name: "John",
    age: 30,
    job: "Software Engineer",
    run:function()
    {
        console.log(this.name) //? Here This will point current Object
    },
    runn:()=>
    {
        console.log(this.name) //? Here This Will point Gobal Object
    }
}

Person.run();