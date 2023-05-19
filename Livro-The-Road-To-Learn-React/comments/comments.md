# Introdução

SPA - single page applications

A primeira versão do React foi lançada em 2013 pelo Facebook como uma bibilioteca. Ele é apenas o "V" do MVC (Model View Controller), que lhe permite renderizar componentes como elementos visualizáveis em browser. O ecossistema em que o React se insere é que torna possível a construção de single page applications.

React apenas te ajuda a criar views.

Em React você consegue manter o foco na criação das suas views antes de introduzir outros aspectos na aplicação. Cada outro aspecto é como uma peça aclopável na sua SPA. Essa divisão em partes integráveis é essencial para construir uma aplicação mais madura, trazendo duas vantagens:

Primeiro, você pode aprender passo-a-passo cada parte, sem precisar se preucupar em entender tudo de uma só vez. Bem diferente de um framework, que lhe entrega todas as peças para montar desde o início. 

Segundo, todas as partes são substituíveis. Isso torna o ecossistema de React um lugar de inovação.

# Node e NPM

O node package manager (npm) possibilita a instalação de pacotes (node packages) externos pla linha de comando. Esses pacotes podem conter desde um conjunto de funções utilitárias até bibliotecas ou frmeworks completos, e quando adicionados, tornam-se dependências da sua aplicação. Você pode instalá-los tanto globalmente (no seu diretório global de pacotes node), quanto na pasta local do seu projeto.

Pacotes node globais são acessíveis de qualquer pasta no terminal e você só precisa fazer a instalação de cada pacote uma vez. Então no terminal digitamos:

    npm install -g <package>

A flag -g diz ao npm para instalar o pacote globalmente.

Já os pacotes locais são usados apenas na sua aplicação. React,  por exemplo, por se tratar de uma biblioteca, será adicionado como um pacote local que poderá ser importado para uso interno.

No caso específico do React teríamos:

    npm install react

O pacote instalado irá aparecer automaticamente em uma pasta chamada node_modules/ e será listado no arquivo package.json juntamente com as outras dependências do projeto.

E como inicializar o projeto com a pasta node_modules/ e o arquivo package.jason ? Existe um comando npm para isso. Quando executado, package.json é criado e somente com a existência desse arquivo no projeto é que é possível a instalação de novos pacotes locais. O comando é:

    npm init -y

A flag -y é um atalho para inicializar seu package.json com as configurações padrão. Caso não a use, você terá que informar alguns dados adicionais para configurar o arquivo. Feita a inicialização, você está apto a instalar novos pacotes com o comando npm install <package>.

Mais uma coisa sobre o package.json: O arquivo habilita você a compartilhar o projeto com outros desenvolvedores sem ter que incluir todos os pacotes node. Ele contém todas as referências dos pacotes utilizados no projeto, chamados de dependências. Todos podem copiar seu projeto sem baixar as dependências e simplesmente instalar todos os pacotes utilizando npm install na linha de comando. O script considera todas as entradas listadas no package.json e instala cada uma das pasta node_modules/.

Falando um pouco sobre o comando npm install --save-dev <package>.

A flag --save-dev indica que o pacote node é usado apenas em ambiente de desenvolvimento, ou seja, não será usado em produção quando você implantar a aplicação no servidor. Mas, que tipo de pacote se enquadraria nesse caso ?

Imagine que você queira instalar um pacote para lhe ajudar a testar a aplicação. Você precisa intalá-lo via npm, mas deseja evitar que seja adicionado no seu ambiente de produção. Atividades de teste devem acontecer durante o processo de desenvolvimento, não quando a aplicação já foi disponibilizada para o usuário e já deveria ter sido testada e estar funcionando plenamente. Este é apenas um dos casos onde você desejaria utilizar a flag --save-dev.

Vale ressaltar que muitas pessoas optam por utilizar outro gerenciador de dependências qu eé o Yarn. Yarn é um gerenciador que funciona de maneira muito similar com o npm. Ele tem sua própria lista de comandos para executar as mesmas tarefas que o npm, mas o Yarn nasceu para resolver alguns problemas que o npm não podia. Contudo, atualmente as duas ferramentas estão evoluindo realmente muito rápido e você pode escolher a que achar melhor.

### Exercício

Após instalar um pacote pelo npm, por exemplo npm install react, para desinstalá-lo digitamos:

    npm remove React


# Instalação

Existem muitas formas para começar a trabalhar com uma aplicação React.

A primeira delas é usar uma CDN. CDN é uma sigla para content delivery network. Muitas empresas possuem CDNs que hospedam arquivos publicamente para que as pessoas possam consumi-los. Esses arquivos podem ser de bibliotecas como o React, j´que toda a biblioteca é empacotada em um simples arquivo JavaScript react.js. Ele pode ser hospedado em algum lugar e você pode requisitá-lo em sua aplicação.

Para usar uma CDN basta colocar um script inline no HTML com a url da CDN.

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js\"></script>

Mas podemos utilizar o npm para instalar o React com o seguinte comando:

    npm install react react-dom

Essa é uma abordagem frequentemente utilizada para adicionar React em uma aplicação existente, caso esta seja gerada com npm.

Mas, infelizmente, isso não é o bastante. Você teria que configurar também o Babel para fazr com que sua aplicação seja capaz de de reconhecer JSX (a sintaxe React) e JavaScript JS6. O Babel "transpila" (tradução informal adotada pela comunidade para transpile) o seu código para que navegadores possam interpretar ES6 e JSX, pois nem todos conseguem fazê-lo naturalmente. Isso demanda muita configuração e uso de ferramentas, podendo ser dificil para um iniciante em React.

Por esta razão, o Facebook introduziu create-react-app como solução para que não seja necessária fazer toda essa configuração. 


# Setup sem nenhuma configuração 

Vamos utilizar o create-react-app para montar a estrutura inicial da aplicação. Para isso vamos digitar:

    npm install -g create-react-app 

Para saber sua versão digitamos

    create-react-app --version

E vamos criar a aplicação que vai chamar hackernews com o comando

    create-react-app hackernews

Tentei executar esses comandos e não funcionou então utilizei os comando que aprendi na Alura:

    npx create-react-app NOME_DA_PASTA --use-npm

No nosso caso ficou:

    npx create-react-app hackernews --use-npm

Pelo o que eu pesquisei parece que o comando estava tentando instalar o react app com o yarn e não com o npm por isso utilizei o --use-npm.

Mas agora deu certo.

Temos alguns comandos padrões para utilizar:

    // Roda a aplicação em http://localhost:3000
    npm start

    // Executa os testes
    npm test

    // Pepara a aplicação para produção
    npm run build


# Introdução à JSX

JSX lhe permite misturar HTML com JavaScript.

Dentro do arquivo App.js é onde podemos mudar nosso projeto e começar a desenvolver com React.

    import './App.css';

    function App() {
    return (
        <div className="App">
        <h2>Welcome to the Road to Learn React</h2> 
        </div>
    );
    }

    export default App;

Essa estrutura padrão vai nos retornar somente a frase Welcome to the Road to Learn React.

Mas podemos adcionar variávei JavaScript também:

    import './App.css';

    function App() {

        var helloWord = 'Welcome to the Road to Learn React';

        return (
        
            <div className="App">
            <h2>{helloWord}</h2> 
            </div>
        );
    }

    export default App;

Os dois código vai nos retornar a frase Welcome to the Road to Learn React.

O atribute className faz referência ao class do HTML. Por razões técnicas, JSX teve que substituir um punhado de atributos HTML. 

Tirei o App.js do strict mode, pois estava renderizando minha página duas vezes.


# ES6 const e let

No JavaScript ES6 temos a adição de const e let para serem utilizadas.

Lembrando que se a const tiver um valor definido, esse valor não pode mais ser redefinido, mas caso a const tiver guardando um array, então o conteúdo dentro desse array pode ser modificado.


# Hot Module Replacement

Hot Module Replacement é algo como "recarregamento de módulos em tempo real" ou (HRM) é uma ferramenta que permite a atualização da aplicação em seu navegador, sem que este faça o recarregamento da página.

O HRM nos traz muitas vantagens:

- Imagine que você está duparando o código fazendo chamdas console.log(). Como o navegador não atualiza mais a página todas as vezes que você altera e salva o código, as chamadas anteriores irão permanecer no console até que você não queira mais. Isso pode ajudar bastante no processo de depuração.

- Em uma aplicação que já está ficando grande, recarregamentos de página podem tirar sua produtividade. O tempo todo você tem que esperar que a página carregue novamente e isso pode demorar vários segundos em um app um pouco maior. HMR remove essa desvantagem.

- Mas o maior benefício de usar HMR é o de que você consegue conservar o estado da aplicação por mais tempo. Imagine que você tenha uma caixa de diálogo com uma sequência de passos e você está no passo 3 (procedimento bastante conhecido como um wizard). Sem o HMR, ao realizar alterações no código-fonte, seu navegador automaticamente recarregará a página. Você terá que reiniciar o procedimento do passo 1 até passo 3 para ver a modificação. Com HMR, sua janela permanece ativa no passo 3, mantendo o estado da aplicação mesmo depois das mudanças de código fonte. A aplicação em si recarrega, mas a página não.


# JavaScript dentro do código JSX

No arquivo App.js vamos definir uma lista de itens:

    import './App.css';

    function App() {

    const list = [
        {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walker',
        num_comment: 3,
        points: 4,
        objectID: 0
        },
        {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Calrk',
        num_comment: 2,
        points: 5,
        objectID: 1
        }
    ]

    return (
    
        <div className="App">
        {list.map((e) => {
            return (
            <div key={e.objectID}>
                <span>
                <a href={e.url}>{e.title}</a>
                </span><br />

                <span>{e.author}</span><br />
                <span>{e.num_comment}</span><br />
                <span>{e.points}</span><br />
                
            </div>
            )
        })}
        </div>
    );
    }

    export default App;

Nesse caso criamos uma lista que nada mais é que um array de objetos.

Utilizamos o map() para percorrer o array e transformar os itens que qeuremos em tags e conteúdos HTML, por ter ter essa lateração devemos utilizar o map(), pois com o forEach não irá funcionar, pois o forEach apenas percorre o array sem fazer qualquer alteração.


# ES6 Arrow Function

JavaScript ES6 introduziu arrow function. Uma expressão com arrow function é mais curta do que uma expressão com uma função convecional (utilizando a palavra function).

A arrow funciton tras um comportamente diferente com o objeto this. Uma função tradicional sempre define seu próprio objeto this. Arrow functions tem o obejto this do contexto que as contem. 

Podemos usar por exemplo a função map sem o return ficando:

    <div className="App">
      {list.map(e => 
        
          <div key={e.objectID}>
            <span>
              <a href={e.url}>{e.title}</a>
            </span><br />

            <span>{e.author}</span><br />
            <span>{e.num_comment}</span><br />
            <span>{e.points}</span><br />
            
          </div>
        )
      }
    </div>


# Classes ES6

JavaSCript ES6 introduziu classes, que são normalmentes utilizadas em lingaugens de programação orientadas a objetos. JavaScript sempre foi e ainda é muito flexível quanto ao seus paradigmas de programação. Você pode usar programação funcional e programação orientada a objeto lado a lado, quando mais apropriado for.

Apesar do React adotar programação funcional, por exemplo com estruturas de dados imutáveis, classes sõa usadas para declarar componentes. Elas são chamdas de classes de ES6 (ES6 class components). React mistura as boas partes de ambos os paradigmas de programação.

Consideramos a classe Developer a seguir, para que possamos examinar uma classe JavaScript ES6 sem ter que pensar sobre componentes. 

    class Developer {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        getName() {
            return this.firstname + ' ' + this.lastname; 
        }
    }

Uma classe tem um construtor para torná-la instanciável e ele pode receber argumentos para atribuílos à instância da classe. Além disso, uma classe pode definir funções que, por estarem associadas, são chamadas de métodos. Geralmente, são chamados de métodos de classe.

Developer é apenas a declaração da classe. Você pode criar múltiplas instâncias invocando-a. É o mesmo raciocínio ao componente de classe de ES6, que tem uma declaração, mas que você precisa usá-lo em algum outro lugar para instanciá-lo.

Exemplo:

    const robin = new Developer('Robin', 'Wieruch');
    console.log(robin.getName())
    //saída: Robin Wieruch


# Estado Interno do Componente

O estado local, também chamado de estado interno do componente, lhe permite salvar, modificar e apagar propriedades que nele são armazenadas. Componentes de classe inicializam seu estado interno utilizando um construtor. Ele é chamado apenas uma vez (quando o componente é inicializado).

    class App extends Component {
    
        constructor(props) {
            super(props)

            this.state = {
            list: list,
            }

        }

    ...

    }

Quando seu componente possui um construtor, torna-se obrigatório a chamada de super(). Porque o componente App é uma subclasse de Component (class App extends Component). Você também pode invocar supre(props) para definir this.props no contexto de seu construtor. Caso contrário, se tentar acessar this.props, receberá o valor undefined. 

Por enquanto o estado inicial do componente é composto por apenas uma lista de itens:

    const list = [
        {
            title: 'React',
            url: 'https://facebook.github.io/react/',
            author: 'Jordan Walker',
            num_comment: 3,
            points: 4,
            objectID: 0
        },
        {
            title: 'Redux',
            url: 'https://github.com/reactjs/redux',
            author: 'Dan Abramov, Andrew Calrk',
            num_comment: 2,
            points: 5,
            objectID: 1
        }
    ]

O estado inicial está amarrado à classe através do objeto this. Dessa forma, você pode acessá-lo em qualquer lugar do componente. Por exemplo, no método render(). Antes, usei o map como uma lista estática de itens (definida fora do componente). Agora, você irá usar a list obtida do seu estado local:

    render() {
        return (

        <div className="App">
            {this.state.list.map(e => 
    
                <div key={e.objectID}>
                <span>
                    <a href={e.url}>{e.title}</a>
                </span><br/>
    
                <span>{e.author}</span><br/>
                <span>{e.num_comment}</span><br/>
                <span>{e.points}</span><br/>
                </div>
            )
            }
        </div>
        
        );
    }

A lista agora é parte do componente, residindo em seu estado interno. Você pode adicionar, alterar ou remover itens. Toda vez que o estado do componente mudar, o método render() será chamado novamente. Você simplesmente altera o estado interno, sabendo que o componente será de novo renderizado exibindo os dados corretos. 

Mas temos que usar o método setState() para mudá-lo.


# Inicilizando Objetos em ES6












