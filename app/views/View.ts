export abstract class View<T>{

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const element = document.querySelector(seletor);

        if(element){
            this.elemento = document.querySelector(seletor) as HTMLElement;
        }else{
            throw Error(`Seletor ${seletor} não existe no DOM`)
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string;

    update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}