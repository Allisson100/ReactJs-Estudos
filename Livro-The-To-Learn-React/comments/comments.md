### Introdução

SPA - single page applications

A primeira versão do React foi lançada em 2013 pelo Facebook como uma bibilioteca. Ele é apenas o "V" do MVC (Model View Controller), que lhe permite renderizar componentes como elementos visualizáveis em browser. O ecossistema em que o React se insere é que torna possível a construção de single page applications.

React apenas te ajuda a criar views.

Em React você consegue manter o foco na criação das suas views antes de introduzir outros aspectos na aplicação. Cada outro aspecto é como uma peça aclopável na sua SPA. Essa divisão em partes integráveis é essencial para construir uma aplicação mais madura, trazendo duas vantagens:

Primeiro, você pode aprender passo-a-passo cada parte, sem precisar se preucupar em entender tudo de uma só vez. Bem diferente de um framework, que lhe entrega todas as peças para montar desde o início. 

Segundo, todas as partes são substituíveis. Isso torna o ecossistema de React um lugar de inovação.

### Node e NPM

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

