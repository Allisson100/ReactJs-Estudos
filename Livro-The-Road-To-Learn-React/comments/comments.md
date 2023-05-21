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

Em JavaScript ES6, você pode usar uma sintaxe abreviada para inicializar seus objetos de forma mais concisa. Exemplo:

    const name = 'Robin'

    const user = {
        name: name,
    }

Nesse caso, em que a propriedade do objeto e a variável são igualmente chamadas de name, você poderia fazer desta forma:

    const name = 'Robin'

    const user = {
        name,
    }

Podemos usar esse conceito em nosso código ficando:

    class App extends Component {
    
        constructor(props) {
            super(props)

            this.state = {
            list,
            }

        }

    ...

    }

Um outro atalho elegante é a declaração concisa de métodos em JavaScript ES6.

    // ES5

    var userService = {
        getUserName: function (user) {
            return user.firstname + ' ' + user.lastname 
        }
    }


    // ES6

    var userService = {
        getUserName(user) {
            return user.firstname + ' ' + user.lastname 
        }
    }

Por último, o uso de nomes computados de propriedades é permitido em JavaScript ES6.

    // ES5

    var user = {
        name: 'Robin',
    }

    //ES6

    const key = 'name'
    const user = {
        [key]: 'Robin',
    }

Talvez ainda esteja um pouco confuso, mas no decorrer do livro vamos nos deparar com a situação em que poderemos utilizá-los para alocar valores por chave, de uma forma dinâmica em um objeto. É uma forma elegante em JavaScript de gerar lookup tables (um tipo de estrutura de dados).


# Fluxo Unidirecional de Dados

Você tem agora em mãos um componente App com estado interno, que ainda não foi mexido. O estado é estático e, consequentemente, o seu componente também. Uma boa maneira de experimentar manipular o estado é criando algum interação entre componentes.

Vamos adicionar um botão para cada item da lista que é exibida. O botão tem o rótulo "Dimiss" (dispensar) e irá remover o item, send útil quando você quer masnter uma lista constando apenas itens ainda não lidos e dispensar os que não tem interese, por exemplo.

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

                <span>
                    <button type='button' onClick={() => this.onDimiss(e.objectID)}>
                    Dimiss
                    </button>
                </span>

                </div>
            )
            }
        </div>
        
        );
    }

Como você pode ver, o método onDimiss() no onClick está encapsulado por uma arrow function. Nela, você tem acesso à propriedade objectId do objeto e, que identifica qual item será removiudo. Uma alternativa à isso seria definir a função fora e apenas passá-la para o onClick.

Vamos implementar o comportamento do onDimiss(). A função recebe um id, para identificar qual item será removido e, por ser amarrada à classe, é um método de classe. Sendo assim, deve ser acessada com this.onDimiss() e não apenas com onDimiss(). O objeto this é a instância da sua classe.

Para definir o onDimiss() como um método de classe, você precisa usar bind no construtor. Binding serão explicados mais adiante no livro.

    constructor(props) {
        super(props)

        this.state = {
        list,
        }

        this.onDimiss = this.onDimiss.bind(this)
    }

O próximo passo é definir a funcionalidade em si, ou a lógica de negócio do método em su classe, da seguinte maneira:

    onDimiss(id) {
        const isNotId = e => e.objectID !== id
        const updatedList = this.state.list.filter(isNotId)
        this.setState({list : updatedList})
    }

Para exemplificar melhor esse código, o método filter utiliza a sintaxe .filter(e => condição) e vai nos retornar onde os elementos do array que deram true na condição.

Desse modo flamos que a const inNotId será a condição do filter que é: par cada elemento, se esse elemento apresentar um objectID !== do id que passamos como parâmetro então coloque nesse nvo array chamado upadtedList.

E a parte this.setState({list: upadatedList}) apenas troca o conteúdo do array por outro.

Isso nada mais é que o fluxo unidirecional de dados em React. Você dispara um ação em sua view com onClick(), uma função ou método de classe que muda o estado interno do componente e render() é de novo executado para atulizar a view.


# Bindings

É importante aprender sobre bindings em classes JavaScript quando se vai trabalhar como componentes de classe em React.

Utilizamos esse recurso para ligar o método onDimiss à classe no construtor:

    this.onDimiss = this.onDimiss.bind(this)

Em primeiro lugar: Por que você teve que fazer isso? Esse passo é necessário porque a amarração do this com a instância de classe não é feita automaticamente pelos métodos. Exemplo:

    <button
        type='button'
        onClick={this.onClickMe}
    >
        Click me
    </button>

    onClickMe() {
        console.log(this)
    }

O componente renderiza normalmente, mas quando você clica no botão, obtém undefined no console. Essa é uma das maiores fontes de bugs quando se usa React. Você deseja usar o this.state em um método de classe e ele não está acessível, porque this é undefinded. Para corrigir isso, você precisa criar o binding entre o método e this .

Exemplo:

    constructor(props) {
        super(props)

        this.state = {
        list,
        }

        this.onDimiss = this.onDimiss.bind(this)
        this.onClickMe = this.onClickMe.bind(this)
    }

No construtor a gente fez o bind do this com o método onClickMe e agora ele reconhece o this.

Executando novamente, o bjeto this (ou, sendo mais específico, a instância da classe) está definido nesse contexto e você tem acesso a this.state, oou this.props.

O binding de métodos também poderia ser feito em outros lugares, como no render():

    render() {
        return (
            <button
                onClick={this.onClickMe.bind(this)}
                type="button"
            >
                Click Me
            </button>
        );
    }

Apesar de possível, esta prática deve ser evitada, porque a vinculação do método seria feita todas as vezes que render() for chamado. Como basicamente ele roda todas as vezes que seu componente é atualizado, isso poderia trazer implicações de performance. Quando binding ocorre no construtor, o processo só ocorre uma vez: quando o componente é instanciado. Essa é a melhor abordagem a ser escolhida.

Outra que não é vista como uma boa prática é definir a lógica dentro do construtor:

    constructor() {
        super();

        this.onClickMe = () => {
            console.log(this);
        }
    }

Isso deve ser evitado, pois isso irá transformar seu construtor em uma bagunça ao longo do tempo. A finalidade d construtor é instanciar sua classe com todas as propriedades. E fazer a lógica fora dele:

    constructor() {
        super();
            this.doSomething = this.doSomething.bind(this);
            this.doSomethingElse = this.doSomethingElse.bind(this);
    }

    doSomething() {
        // do something
    }

    doSomethingElse() {
        // do something else
    }

Por fim, os métodos de classe podem ser automaticamente vinculados sem fazê-lo explicitamente, com o uso de arrow functions:

    onClickMe = () => {
        console.log(this);
    }

# Tratamento de Eventos

Por enquanto em nossa aplicação utilizamos o elemento button para remover um item da lista:

    <button 
        type='button' 
        onClick={() => this.onDimiss(e.objectID)}
    >
        Dimiss
    </button>

Este exemplo é um tant quanto complexo. você tem que passar um valor para o método de classe e, pra tal, precisa encapsulá-lo em outra função (uma arrow function). Basicament, o que precisa ser passado como argumento para o event handler (tratador de eventos) é uma função, não sua chamada. O código a seguir não funcionaria, porque o método de classe seria imediatamente executado quando você abrisse sua aplicação no navegador:

    <button
        onClick={this.onDismiss(item.objectID)}
        type="button"
    >
        Dismiss
    </button>

Quando usamos onClick={executarAlgo()}, a função executarAlgo() seria excutada emediatamente após a aplicação abrir no browser. A expreessão passada para o handler é avaliada e, como o valor não é uma função, nada irá acontecer quando você clicar no botão. Mas, quando fazemos onClick={executarAlgo}, onde excutarAlgo é o nome da função, essa só será executada quando o botão for clicado. A mesma regra se aplica para o método onDimiss usado em nossa aplicação.

Entretanto, não é suficiente declarar onClick = {this.onDimiss}, porque precisamos passar a propriedade item.objectID para o método, para identificar qual item será removido. Por esse motivo, usamos uma arrow function como wrapper, utilizando o conceito conhecido em JavaScript como high-order function.

    <button
        onClick={() => this.onDismiss(item.objectID)}
        type="button"
    >
        Dismiss
    </button>

Uma outra alternativa seria definir um wrapper em algum outro lugar e passá-la como argumento para o tratamento do evento. Uma vez que precisa ter acesso ao item, ela deve residir dentro do bloco da função map:

class App extends Component {

...

    render() {
        return (
            <div className="App">
                {this.state.list.map(item => {
                    const onHandleDismiss = () => this.onDismiss(item.objectID); //Exemplo

                    return (
                        <div key={item.objectID}>
                            <span>
                            <a href={item.url}>{item.title}</a>
                            </span>
                            <span>{item.author}</span>
                            <span>{item.num_comments}</span>
                            <span>{item.points}</span>
                            <span>

                                <button
                                    onClick={onHandleDismiss} //Exemplo
                                    type="button"
                                >
                                    Dismiss
                                </button>
                            </span>
                        </div>
                    );
                }
                )}
            </div>
        );
    }
}

No fim das contas, o event handler do elemento precisa receber uma função. Como exemplo, o código a seguir faz ao contrário:

    <button
        onClick={console.log(item.objectID)}
        type="button"
    >
        Dismiss
    </button>

A função é executada assim que abre a aplicação no navegador, mas quando você clica no botão nada acontece. Enquanto o código a seguir só roda quando clicarmos no botão. É uma função que é executada quando você dispara o evento:

    <button
        onClick={function () {
            console.log(item.objectID)
        }}
        type="button"
    >
        Dismiss
    </button>

Visando manter o código conciso, você pode trasnformá-la de volta em uma arrow function, fazendo o mesmo que fizemos com o método de classe onDimiss():

    <button
        onClick={() => console.log(item.objectID)}
        type="button"
    >
        Dismiss
    </button>

Outro tópico relevante que sempre é mencionado, com relação à preformance, é o das implicações do uso de arrow functions em event handlers. Por exemplo, tomemos o caso do onClick com uma arrow function envolvendo o onDimiss. Toda as vezes que o método render() for executado, o event handler irá instanciar a função. Isso pode ter um certo impacto na performance da sua aplicação. Na maioria dos casos, porém, você não irá notar diferença.

Imagine que vocÊ tenha uma enorme tabela de dados com 1000 itens e cada linha ou coluna tem uma arrow function sendo definida no event handler. Nesse caso, sim, é válida a preucupação a respeito da performance e você poderia implementar um componente dedicado Button com biding ocorrendo no construtor.


# Interações com Forms e Eventos

Adicionamos outra interação com à aplicação, tendo uma experiência com forms e eventos em React. A interação em questão é a funcioalidade de busca. O valor de entrada no campo de busca será usado para filtrar temporariamente sua list, baseado na propriedade title de cada item.

Vamos adicionar o form com um input dentro:

    <form>
        <input 
            type="text" 
        />
    </form>

Você irá digitar no input e filtrar a lista por esse termo de busca. Para tanto, você precisa armazenar o valor digitado em seu estado local. Mas, como acessar o valor? É possível utilizar synthetic events em React para acessar os detalhes do evento.

Vamos definir um event handler onChange para o campo input:

    <form>
        <input 
            type="text" 
            onChange={this.onSearchChange}
        />
    </form>

A função está vinculada ao componente e, portanto, novamente temos um método de clase. Você ainda precisa do binding e definir o método em si:

    constructor(props) {
        super(props)

        this.state = {
            list,
        }

        this.onDimiss = this.onDimiss.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    onSearchChange() {
        ...
    }

Utilizando o event handler em seu elemento, você ganha acesso ao synthetic event de React na assisnatura da função que utilizou como callback:

    onSearchChange(event) {
        ...
    }

O evento tem o value do campo input no seu objeto target. Consequentemente, você consegue atualizar o estado local com o termo de busca utilizando this.setState() novamente:

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })
    }

Ademais, você não deve esquecer de definir o estado inicial para a propriedade searchTerm em seu construtor. O campo input estará vazio de início e, portanto, o valor deverá ser uma string vazia:

    constructor(props) {
        super(props)

        this.state = {
            list,
            searchTerm: '',
        }

        this.onDimiss = this.onDimiss.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }

Agora, toda as vezes que o campo de input muda, você está armazenando o valor digitado no estado interno do seu componente.

Um breve comentário sobre a atualização do estado local em um componente React: Seria normal se achássemos que, quando atualizamos searchTerm com this.setState, também deveriamos informar o valor de list. Mas não é o caso. O método this.setState() de React faz o que chamamos de shallow merge. Ele preserva o valor das outras propriedades do objeto de estado, quando apenas uma delas é atualizada. O estado da lista permanecerá o mesmo, inclusive sem o item que você removeu, quando apenas a propriedade searchTerm for alterada.

Voltando à aplicação. A lista não é temporariamente filtrada com base no valor do campo input que está armazenado no seu estado local, mas você tem em mãos tudo o que precisa para fazê-lo. Como? No seu método render(), antes de iterar sobre sobre a lista usando map, você pode aplicar um filtro à ela, que apenas avaliaria se searchTerm coincide com o da propriedade title do item. Vamos usar a funcionalidade filter, nativa do JavaScript. Como o filter retorna um novo array, você pode convenientemente chamá-la antes de map:

    {this.state.list.filter(...).map(e => ... )}

Desta vez, iremos adotar uma abordagem diferente sobre a função filter. Queremos definir o seu argumento (outra função) fora do componente. Lá, não temos acesso ao estado do componente e, por consequência, à propriedade searchTerm para avaliar a condição de filtragem. Teremos que passar o searchTerm como argumento e retornar uma nova função, que avalia a condição. Esse tipo de função retornada por outra função é chamada de high-order function.

Normalmente eu não mencionaria higher-order functions, mas faz todo o sentido em um livro sobre React. Faz sentido porque React trabalha com um conceito chamado de high-order components. Mais tarde, você aprenderá mais sobre isso. Vamos focar agora na funcionalidade filter.

Primeiro, você terá que definir a high-order function fora do componente App:

    // ES5
    function isSearched(searchTerm) {
        return function(item) {
            // some condition which returns treu or false
        }
    }

A função recebe o searchTerm e retorna outra função, porque é o que filter espera como entrada. A função retornada terá acesso ao objeto item, pois será argumento da função filter. A filtragem será feita baseada na condição definida nela, que é o que faremos agora:

    // ES5
    function isSearched(searchTerm) {
        return function(item) {

            return item.title.toLoweCase().includes(searchTerm.toLowerCase())

            // some condition which returns treu or false
        }
    }

A condição diz que devemos comparar o padrão recebido em searchTerm com a propriedade title do item da lista. Você pode fazê-lo utilizando includes, funcionalidade nativa de JavaScript. Quando o padrão coincide, você retorna true e o item permanece na lista. Senão, o item é removido. Mas, tenha cuidado com comparações de padrões: Você não pode esquecer de formatar ambas as strings, transformando seus caracteres em minúsculas. Caso contrário, o título “Redux” e o termo de busca “redux” serão considerados diferentes. Uma vez que estamos trabalhando com listas imutáveis e uma nova lista é retornada pela função filter, a lista original permanecerá sem ser modificada.

Uma última coisa a mencionar: “Apelamos” um pouco, utilizando o recurso includes já de ES6. Como faríamos o mesmo, em JavaScript ES5? Você usaria a função inderOf() para pegar o índice do item na list.

Outra refatoração elegante pode ser feita utilizando-se novamente uma arrow function, tornando a função mais concisa:

    ES5
    function isSearched(searchTerm) {
        return function(item) {

            return item.title.toLoweCase().includes(searchTerm.toLowerCase())

            // some condition which returns treu or false
        }
    }

    //ES6
    const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase())

Por fim, você tem que usar a função definida isSearched() para filtrar sua lista. Você passa a propriedade searchTerm do seu estado local para a função, ela retorna outra função como input de filter e filtra sua lista baseada na condição descrita. Depois disso tudo, iteramos sobre a lista filtrada usando map para exibir um elemento para cada item da lista:

    {this.state.list.filter(isSearched(this.state.searchTerm)).map(e => ...)}








