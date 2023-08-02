<script>
    import sveltelogo from './images/svelte.svg';
    import webpacklogo from './images/webpack.png';
    import typescriptlogo from './images/typescript.png'
    import sasslogo from './images/sass.png';
    import githublogo from './images/github.png';
    import Counter from './lib/counter.svelte';

  </script>
  
  <main>
    <div class="container">
      <div class="head">
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
          <img class="logo svelte" src='{sveltelogo}' alt="svelte" />
        </a>
        <h1>Standalone - Svelte</h1>
        <a href="https://webpack.js.org" target="_blank" rel="noreferrer">
          <img class="logo webpack" src='{webpacklogo}' alt="webpack logo" />
        </a>
      </div>
      <p class="description">Standalone Svelte TS Webpack Version. supports codespace. <a href="https://www.typescriptlang.org/"><img class="typescript" src={typescriptlogo} alt='typescript-logo' /></a></p>
      <div class="button-box">
          <Counter />
      </div>
    </div>
    <div class="footer">
      <div class="version">
        <p>version 1.0.0</p>
        <img class="footer-logo" src={sasslogo} alt='sass-logo' />
      </div>
      <div class="version">
        <img class="footer-logo" src={githublogo} alt='github-logo' />
        <p>Codespace</p>
      </div>
    </div>
  </main>
  
  <style>

    h1 {
      font-weight: 500;
    }

    .container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

     .head {
       display: flex;
     }

     .description {
      display: flex;
      align-items: center;
      gap: 5px;
     }

     .logo {
       height: 20vh;
       will-change: filter;
        transition: filter 300ms;
     }

     .webpack:hover {
      filter: drop-shadow(0 0 2em #f7f7f7d0);
     }

     .svelte:hover {
      filter: drop-shadow(0 0 2em #a5330daa);
     }

     .typescript {
      width: 40px;
      will-change: filter;
      transition: filter 300ms;
     }

     .typescript:hover {
      filter: drop-shadow(0 0 2em #f7f7f7d0);
      
     }

     .head {
       display: flex;
       justify-content: center;
       align-items: center;
       gap: 20px
     }


     .footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
        position: absolute;
        bottom: 0;
        left: 0;
     }

     .version {
      display: flex;
      align-items: center;
      gap: 10px;
     }

     .version p {
      font-weight: 500;
     }

     .footer-logo {
        height: 40px;
        width: auto;
     }
  </style>