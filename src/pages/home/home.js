import React from "react";
import TelaInicial from "../tela-inicial/TelaInicial";
import TelaServicos from "../tela-servicos/TelaServicos";
import TelaDetalhe from "../tela-detalhe/TelaDetalhe";
import TelaCarrinho from "../tela-carrinho/TelaCarrinho";
import TelaCadastro from "../tela-cadastro/TelaCadastro"
export default class Home extends React.Component {

  state = {

    paginaAtual: "tela-inicial",
    // paginaAtual: "tela-cadastro",
    // paginaAtual: "tela-carrinho",
    carrinho: [],
    valorTotal: 0
  }

  procuraPagina = () => {
    switch (this.state.paginaAtual) {
      case "tela-inicial":
        return <TelaInicial
          goToTelaCadastro={this.goToTelaCadastro} 
          goToTelaServicos={this.goToTelaServicos} 
          />

      case "tela-cadastro":
        return <TelaCadastro />

      case "tela-servicos":
        return <TelaServicos />

      case "tela-detalhe":
        return <TelaDetalhe />

      case "tela-carrinho":
        return <TelaCarrinho />

      default:
        return "Erro ao Encontrar pagina"

    }
  }

  goToTelaInicial = () => {
    this.setState({ paginaAtual: "tela-inicial" })
  }

  goToTelaCadastro = () => {
    this.setState({ paginaAtual: "tela-cadastro" })
  }

  goToTelaServicos = () => {
    this.setState({ paginaAtual: "tela-servicos" })
  }

  goToTelaDetalhe = () => {
    this.setState({ paginaAtual: "tela-detalhe" })
  }

  goToTelaCarrinho = () => {
    this.setState({ paginaAtual: "tela-carrinho" })
  }

  render() {

    return (

      <div>
        <TelaCarrinho
        valorTotal={this.state.valorTotal}
        itensDoCarrinho={this.state.carrinho}
        onCLick={this.removerItemDoCarrinho}
        />
        {this.procuraPagina()}
      </div>
    );

  }

}



