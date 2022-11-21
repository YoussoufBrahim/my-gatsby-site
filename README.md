<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

## 🚀 Points clés à retenir

- Pour créer un nouveau site Gatsby:

  ```shell
  gatsby new
  ```

- Pour exécuter votre site localement:

  ```shell
  gatsby develop
  ou
  npm run develop
  ```

- Changer node avec nvm

  ```shell
  source ~/.bash_profile
  ```

  - Installation des plugins

  ```shell
  npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem
  ```

  - Extraction de données dans des composants de base avec
    `useStaticQuery`

  - `gatsby-source-filesystem`crée des nœuds de fichier.

Un plugin de transformateur convertit les nœuds d'un type à un autre. Par exemple, le gatsby-plugin-mdxplugin transforme les nœuds File qui ont l' .mdxextension en nœuds MDX, qui ont un ensemble différent de champs que vous pouvez interroger à l'aide de GraphQL

Le gatsby-plugin-mdxplugin fournit les champs allMdxet mdxpour vos requêtes GraphQL.

- L'API File System Route de Gatsby vous permet de créer dynamiquement de nouvelles pages à partir de nœuds de couche de données en nommant vos fichiers avec une syntaxe spéciale.

  - Les routes du système de fichiers ne fonctionnent que sur les fichiers du src/pagesrépertoire (ou des sous-répertoires).

  - Pour créer une nouvelle route de collecte, vous nommez votre fichier {nodeType.field}.js, où nodeTypeest le type de nœud à partir duquel vous souhaitez créer des pages, et fieldest le champ de données de ce type de nœud que vous souhaitez utiliser dans l'URL de cette page.
