<a id="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo21.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Complete CRUD API for Questions and Answers</h3>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is a backend API designed to help you enhance your backend development skills. It's intended for beginners who are looking to improve their knowledge. In this project, I've created two main endpoints: questions and answers, where CRUD operations are implemented for the questions endpoint.

### Description

The API provides the following functionality for clients:
1. Create a question and answer
> - Each question must have a title and description.<br>
> - Questions are categorized (e.g., Software, Food, Travel, etc.)
2. Get all of questions and answers
3. Get a question and its answers by ID
4. Update title or description of question and update the content of its answers
5. Delete a question and its answers
6. Search questions by title or category
7. Agree or disagree with a question and its answer using a voting system

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![JavaScript][JavaScript]](JavaScript-url)
* [![Node.js][Node.js]][Node.js-url]
* [![Express.js][Express.js]][Express.js-url]
* [![Swagger][Swagger]][Swagger-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Sirawit-Boon/backend-skill-checkpoint-express-server
   ```
2. Install NPM packages
   ```sh
   > npm install
   > npm init -y
   > npm install cors
   > npm install express nodemon
   > npm install pg
   > npm install swagger-jsdoc@latest swagger-ui-express@latest
   ```
   
3. Enter your desired port in `app.mjs`
   ```js
   const port = 'YOUR PORT';
   ```
4. Configure your database connection in `db.mjs`
   ```js
   const connectionPool = new Pool({connectionString:"postgresql://postgres:your-password@your-localhost/your-database-name",});
   ```
5. Change the Git remote URL to avoid accidental pushes to the base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Once your database is connected, run the following command in your terminal:
```sh
 npm run start
```
You should see the message Server is running at Your Port 🚀 if everything is working properly.
> 1. Test your API with Postman: [![Postman][Postman]][Postman-url]<br>
![Postman Screen Shot][screenshot-postman]
> 2. Test your API with Swagger: [![Swagger][Swagger]][Swagger-url]<br>
![Product Name Screen Shot][screenshot-swagger]

_Example API documentation can be found [here.](https://docs.google.com/spreadsheets/d/1M68YgfcJ5LqxASjxxIAmaFz3x7CjrfUt5sh1a8KAe2A/edit?gid=0#gid=0)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Create complete CRUD API
- [x] Connect with PostgreSQL
- [x] Add Swagger Documentaion with Node and Express
- [ ] Create a client folder for the UI
- [ ] Implement API Authentication
- [ ] Deploy the project to a cloud service

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

### Top contributors:

<a href="https://github.com/Sirawit-Boon/backend-skill-checkpoint-express-server/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Sirawit-Boon/backend-skill-checkpoint-express-server" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Sirawit Boonthon 
- [![LinkedIn][linkedin-shield]][linkedin-url] 
- [![Gmail][Gmail]][Gmail-url]
- [![GitHub][GitHub]][GitHub-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This all of list is very helpfull to do this project

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub README template](https://github.com/othneildrew/Best-README-Template/)
* [SwaggerDocs](https://swagger.io/docs/)
* [ChatGPT](https://chatgpt.com/)
* [Img Shields](https://shields.io)
* [Markdown guide](https://www.markdownguide.org/basic-syntax/#reference-style-links)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Sirawit-Boon/backend-skill-checkpoint-express-server.svg?style=for-the-badge
[contributors-url]: https://github.com/Sirawit-Boon/backend-skill-checkpoint-express-server/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Sirawit-Boon/backend-skill-checkpoint-express-server.svg?style=for-the-badge
[forks-url]: https://github.com/Sirawit-Boon/backend-skill-checkpoint-express-server/network/members
[stars-shield]: https://img.shields.io/github/stars/Sirawit-Boon/backend-skill-checkpoint-express-server.svg?style=for-the-badge
[stars-url]: https://github.com/Sirawit-Boon/backend-skill-checkpoint-express-server/stargazers
[issues-shield]: https://img.shields.io/github/issues/Sirawit-Boon/backend-skill-checkpoint-express-server.svg?style=for-the-badge
[issues-url]: https://github.com/Sirawit-Boon/backend-skill-checkpoint-express-server/pulls
[license-shield]: https://img.shields.io/github/license/Sirawit-Boon/backend-skill-checkpoint-express-server.svg?style=for-the-badge
[license-url]: https://github.com/Sirawit-Boon/backend-skill-checkpoint-express-server/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: www.linkedin.com/in/sirawit-boonthon
[product-screenshot]: images/screenshot2.png
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node.js-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express.js-url]: https://expressjs.com/
[Swagger]: https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black
[Swagger-url]: https://swagger.io/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Postman]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[Postman-url]: https://www.postman.com/
[screenshot-postman]:./images/postman.png
[screenshot-swagger]:./images/swagger.png
[Gmail]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[Gmail-url]: Sirawit.Boonthon@gmail.com
[GitHub]: https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white
[GitHub-url]: https://github.com/Sirawit-Boon