/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
    [key: string]: any;
}

class Component<T extends Props> {
    constructor(public props: T) {}
}

class Page extends Component<{ title: string }> {
    pageInfo() {
        console.log(this.props.title);
    }
}

export {};
