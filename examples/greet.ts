class User {
    fullName: string;
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName+' '+this.lastName;
    }
}

// 自定义类型，接口可以看做是个对象,类型和个数。
interface Person {
    firstName: string,
    lastName: string
}

function greeter (person: Person): string{
    return 'Hello, ' + person.firstName+' ,'+person.lastName;
}

/*let user: Person = {
    name: 'lichuyan',
    age: 12
}*/
let user = new User('Yee', 'Huang');
console.log('user是',user)
console.log(greeter(user));

let isDone: boolean = false
console.log(isDone);

let names: string = 'lichuyan';
console.log(`hello muy name is
${names}`);

let list: number[] = [1, 2, 3];
console.log(list);


enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;
console.log(c)


let info: string | number | undefined; // 联合类型
info = 2;
console.log('ddd',info);

let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length
