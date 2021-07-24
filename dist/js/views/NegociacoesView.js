import { View } from "./View.js";
export class NegociacoesView extends View {
    template(model) {
        return `
            <table class= "table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>valor</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
