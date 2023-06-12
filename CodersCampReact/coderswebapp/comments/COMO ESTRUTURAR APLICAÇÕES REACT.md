# COMO ESTRUTURAR APLICAÇÕES REACT

### Como criar um projeto React?

- Create rect app
- Webpack / Rollup
- Vite
- Next (Server Side Rendering / Static Side Generating)

Critérios para se penadar na hora de tomar uma decisão:

- Benefícios
- Custos (performace, tempo/curva de aprendizado)
- Uso no mercado
- Conhecimento do time
- Regra da simplicidade

### Padronização do projeto

- Eslint (EchmaScript + lit (indicador/aviso de algum erro no nosso código))

Para adicionar o lint no nosso porjeto digitamos no terminal:

    npx eslint --init

Outra ferramenta muito boa para apdronização é o Prettier.

- Prettier

O Prettier complement bem o Eslint.

Para adicionar o Prettier digitamos no terminal:

    yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

Vamos criar um arquivo de configuração do Prettier chamado .prettierrc e nele digitamos:

    {
        "singleQuote": true,
        "trailingComma": "es5",
        "tabWidth": 2
    }

Dentro do arquivo de configuração do vsCode digitamos:

"editor.formatOnSave": true,
