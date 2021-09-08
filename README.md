# 使用TypeScript实现简易版贪吃蛇游戏
# TypeScript基础语法
## TypeScript基础类型
1. number 数字
2. string 字符串
3. boolean 布尔
4. object 对象
5. Array 数组
6. any 任意类型
7. unknown 未知类型
8. Tuple 元祖
9. enum 枚举
10. never
11. null 和 undefined
12. void 函数无返回值

## 类型断言两种形式
    let someValue: any = "this is a string";

    let strLength: number = (<string>someValue).length;

## 泛型
    function identity<T>(arg: T): T {
    return arg;
    }

## 函数
    function add(x: number, y?: number = 0): number {
        return x + y;
    }
    let myAdd: (x: number, y?: number) => number =
    function(x: number, y?: number = 0): number { return x + y; };

## 类
### 普通类
    class Animal {
        age: number;
        name: string;
        constructor(name: string,   age: number) {
            this.name = name;
            this.age = age;
        }
        bark() {
            console.log('动物叫');
        }
    }
### 抽象类
    abstract class Animal {
        name: string;
        age: number;
        constructor(name: string,   age:number) {
            this.name = name;
            this.age = age;
        }

        abstract bark(): void; // 抽象方法
    }

### 继承与重写
    class Cat extends Animal{
        constructor(name: string, age: number) {
            super(name, age);
        }
        bark() {
            console.log('喵喵喵');
        }
    }

### 接口
**接口的方法只能是抽象方法**

    interface Animal {
        name: string;
        age: number;
        abstract bark(): void; // 抽象方法
    }

接口之间可以继承且一个接口可以继承多个接口

### 类实现接口
    class Dog implements Animal{
        name: string;
        age: number;
        color: string;
        constructor(name: string, age: number, color: string) {
            this.name = name;
            this.age = age;
            this.color = color;
        }
        bark() {
            console.log('汪汪汪');
        }
}

### 修饰符
public, private, protected, readonly