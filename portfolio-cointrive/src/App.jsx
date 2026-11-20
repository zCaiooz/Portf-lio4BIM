
import { useState } from "react";
import "./App.css";

function App() {

const telas = [
   {
    nome: "Sobre Mim",
    imagem: "/assets/Logo.png",
    descricao: "Bem vindo ao meu portfólio, aqui é possível visualizar o projeto Cointrive relacionado ao Trabalho de Conclusão de Curso (TCC) que foi feito durante o ano do curso técnico de Desenvolvimento de Sistemas em 2026 com o objetivo de auxiliar principalmente os jovens adultos a gerenciar melhor seu dinheiro para evitar problemas financeiros e divídas futuras."
   },
   {
    nome: "Cadastro",
    imagem: "/assets/Cadastro.png",
    imagem2: "/assets/Login.png",
    descricao: "Interface de cadastro criada para começar a utilizar o site, através do registro de dados nome, sobrenome, email e senha. Pós conclusão do registro de dados, poderá ser realizado o login para uso do site, e mesmo que esqueça sua senha, poderá redefini-la através da opção \"esqueci minha senha.\""
  },
  {
    nome: "Dashboard",
    imagem: "/assets/DashBoard.png",
    descricao: "Começando pela área de DashBoard, é nela que é possível visualizar seus ganhos, gastos e quanto sobrou no total na carteira. E com a visualização do seus gastos recentes também é possível controlar melhor seus hábitos financeiros além do gráfico mostrando a distribuição de gastos."
  },
  {
    nome: "Transações",
    imagem: "/assets/Transacoes.png",
    descricao: "Em transações, o usuário pode registrar os valores de suas rendas ou suas despesas, além dos valores gastos em diversos para que possam observar e gerenciar suas finanças observando principalmente para onde estão indo graças a opção de categorias, o que facilita o controle financeiro."
  },
  {
    nome: "Relatórios",
    imagem: "/assets/Relatorios.png",
    descricao: "Na parte de Relatórios, assim como em DashBoard, podemos visualizar renda e gastos totais, porém, também podemos ver com mais detalhes os dados da renda, gasto e a distribuição de gastos, além de conseguir visualizar o quanto foi poupado no mês e uma comparação de renda com os gastos podendo ver o quanto foi gasto nas categorias selecionadas."
  },
  {
    nome: "Feedback",
    imagem: "/assets/FeedBack.png",
    descricao: "FeedBack, serve para que após uma breve utilização do site, o usuário possa nos dar sugestões de melhorias ou como podemos melhorar a experiência do próprio, bem como nos avaliar de 1 a 5 estrelas, sendo 1 péssimo e 5 ótima."
  },
  {
    nome: "Configurações",
    imagem: "/assets/Configuracoes.png",
    descricao: "Por fim, em configurações é onde o usuário pode alterar os dados cadastrados caso deseje ou haja necessidade, bem como alterar as configurações de notificações a aparência, além de haver um centro de notificações que exibe alerta de gastos que ultrapassaram o limite ou contas com data próxima."
  },
];

  const [telaAtiva, setTelaAtiva] = useState(telas[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageView, setImageView] = useState(0);

  return (
    <>
      
      <div 
        className={`image-view ${modalOpen ? "viewer-open" : ""}`}
        onClick = {()=>{setModalOpen(false)}}
      >
        <img src={imageView === 0 ? telaAtiva.imagem : telaAtiva.imagem2  } />
      </div>

      <div className={`app ${modalOpen ? "blur-main" : ""}`}>
        
        <aside className="sidebar">
          <div className="logo">
            <span className="logo-icon">◆</span>
            <h2>Meu Portfólio</h2>
          </div>

          <p className="menu-label">MENU PRINCIPAL</p>

          <nav>
            {telas.map((tela) => (
              <button
                key={tela.nome}
                className={`menu-item ${
                  telaAtiva.nome === tela.nome ? "active" : ""
                }`}
                onClick={() => setTelaAtiva(tela)}
              >
                <span>▣</span>
                {tela.nome}
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <span>PORTFÓLIO</span>
            <p>Desenvolvido com React</p>
          </div>
        </aside>

        <main className={`main-content ${modalOpen ? "blur-main" : ""}`}>
          <header className="topbar">
            <div>
              <p className="welcome">MEU PROJETO</p>
              <h1>{telaAtiva.nome}</h1>
            </div>
          </header>

          <section className="content">
            <div className="section-heading">
              <div>
                <h2>
                  {
                    telaAtiva.nome === "Sobre Mim" ? (
                      "Eu sou Caio Oliveira Coelho"
                    ) : (
                      `Tela de ${telaAtiva.nome}`
                    )
                  }
                </h2>
            <p>
              {telaAtiva.descricao}
            </p>
              </div>

              <button className="status" onClick={()=>{setModalOpen(true); setImageView(0)}}>Visualização{telaAtiva.nome==="Cadastro"?": Imagem 1":""}</button>

              {
                telaAtiva.nome === "Cadastro" && (
                  <button className="status" onClick={()=>{setModalOpen(true); setImageView(1)}}>Visualização: Imagem 2</button>
                )
              }

            </div>

            <div className="preview">
              <img
                src={telaAtiva.imagem}
                alt={`Tela de ${telaAtiva.nome}`}
              />
            </div>
            
            {
              telaAtiva.nome === "Cadastro" && (
                <div className="preview">
                <img
                  src={telaAtiva.imagem2}
                  alt={`Tela de ${telaAtiva.nome}`}
                />
              </div>
              )
            }

          </section>

          <footer className="footer">
            <p>© 2026 - Meu Portfólio. Todos os direitos reservados.</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
