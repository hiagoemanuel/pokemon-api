<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=ee1515&height=120&section=header"/>

<img width="100%" src="./public/readme/pokemon-logo.png" width="200px"/>

<h1>Introdução 🐲</h1>
<p>Este aplicativo lista todos os pokémons existentes, ao clicar em um pokémon o usuário poderá visualizar informações importantes como: <em>movimentos; habilidades; tipo(s).</em></p>

<h1>Funcionalidades 💡</h1>
<ul>
    <li>Filtro pelos 18 tipos de pokémons;</li>
    <li>Botão que mostra mais 10 pokémos ao usuário;</li>
    <li>Botão que retorna para o topo da página;</li>
    <li>Sistema de carregamento para uma melhor usabilidade;</li>
    <li>Alteração de tema (escuro/claro);</li>
    <li>Tema secundário, referente ao pokémon escolhido.</li>
</ul>

<h1>Ferramentas ⚙</h1>
<div style="text-align: center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>
<p>A decisão de usar <em>Styled-Components</em> é pelo fato de ser uma biblioteca — que junto do <em>React</em> — facilita a estilização dos componentes, evitando conflito entre as classes de mesmo nome. Sem contar a ajuda da biblioteca <em>React Router</em>, que facilitou a criação das rotas.</p>

<h1>Tomada de Decições 🤔</h1>
<p>Comecei pelo layout da página criando um esboço, para assim ter uma base de como seria o produto final.</p>
<details style="margin-bottom: 12px">
<summary><strong>Ideia Inicial</strong></summary>
<img width="100%" src="./public/readme/project-template.png"/>
</details>
<p>Logo depois montei uma lista <em>to-do</em>, com as ideias que tinha em mente, e ao decorrer do projeto eu finalizava pouco a pouco está lista.</p>
<p>Algumas das dificuldades que tive, foi com a criação do filtro, que inicialmente tinha em mente consumir a lista de pokémons de forma fracionada, ou seja, a cada clique no botão 'Carregar mais' o usuário requeria mais 10 pokémons. Porém, vi que isso não seria possível, então optei por consumir toda a lista de uma vez, e com o método <code>slice()</code> tive a ideia de limitar os pokémons que o usuário poderia visualizar.</p>

<h1>Como Utiliza-lo 👨‍💻</h1>

<ol>
    <li>
        <p>No topo da raiz do repositório clique em 'code', e copie a url mostrada: <em>Code &gt HTTPS &gt Copy URL</em></p>
    </li>
    <li>
        <p>Com o auxílio do <em>GIT bash</em>, vá até o local que deseja inserir o clone do repositório;</p>
    </li>
    <li>
        <p>Dentro do terminal execute o comando <code>git clone + URL</code></p>
    </li>
    <li>
        <p>Abra a pasta criada com o seu editor de texto de preferência. Ex: VScode, Sublime, Atom, etc.;</p>
    </li>
    <li>
        <p>Na raiz da pasta, com <em>node.js</em> instalado, execute o comando: <code>npm install</code></p>
    </li>
    <li>
        <p>Ainda no terminal, execute o comando: <code>npm start</code></p>
    </li>
    <li>
        <p>Agora basta aproveitar a aplicação. 🤗</p>
    </li>
</ol>
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=f0f0f0&height=120&section=footer"/>
