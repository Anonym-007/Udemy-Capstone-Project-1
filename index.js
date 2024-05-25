import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const mainContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia doloremque fuga dolor vitae magni, ad sequi provident pariatur sed et assumenda, perferendis minima? Atque reprehenderit neque sed sit quo! Alias quidem esse ea quisquam accusantium voluptatum repellendus, doloremque at ipsam! Suscipit dignissimos voluptas vero ratione placeat aspernatur explicabo eius. Iusto vel, dolore autem sint consectetur inventore quia unde suscipit et praesentium soluta quas. Enim exercitationem excepturi modi sit sunt soluta dicta reiciendis delectus neque vero nulla nobis dignissimos numquam distinctio, pariatur ullam dolore ducimus atque voluptatem architecto nihil autem omnis reprehenderit sed. Voluptates rem repellendus, quisquam culpa tempore praesentium aperiam dicta pariatur debitis soluta reiciendis nam non est quaerat vero. Qui soluta, quo quam eligendi nesciunt cumque minima quaerat! Necessitatibus, nam quo dolores nostrum animi at quia, architecto sint aliquid optio accusantium molestias enim dolorem saepe ullam, veniam repudiandae labore! Consequuntur odit fuga, error velit maiores nemo fugiat maxime quia ullam expedita molestias dolorem atque facere, voluptates repudiandae beatae temporibus similique provident officia. Vel pariatur saepe iste odit id, quisquam placeat recusandae quia architecto! Iste, itaque. Autem saepe, exercitationem accusamus rerum reprehenderit harum iusto sequi aliquam eveniet explicabo asperiores blanditiis? Corrupti qui repellat expedita quibusdam sint magnam pariatur tempore voluptatibus voluptates sapiente illum dignissimos ducimus harum, porro iste quasi odio maxime ullam soluta perspiciatis ab repellendus corporis. Eveniet, ipsum ratione corrupti at natus necessitatibus cum aperiam ipsa non, qui voluptatum fuga. Modi harum, soluta similique est saepe, exercitationem quaerat non, error illo ex cupiditate debitis pariatur! Excepturi nemo quod praesentium placeat deleniti alias eius harum accusamus, officia ut nisi iste aperiam, enim vero, minus ipsum. Dolorum, eaque? Unde corporis, saepe rerum, dolor sint perferendis facilis tempora non mollitia delectus eligendi eaque nemo, deserunt rem repudiandae facere nulla! Non, recusandae. Veritatis est praesentium recusandae? Necessitatibus placeat maxime voluptatum aspernatur ipsa eaque."

const blogs = [
    { id: 1, title: 'Learning Javascript', content: 'Author: Anonymous'},
    { id: 2, title: 'Learing Mern', content: 'Author: Anonymous'},
    { id: 3, title: 'Learing Web Development', content: 'Author: Anonymous'},
    { id: 3, title: 'Learing Digital marketing', content: 'Author: Anonymous'},
];

app.get("/", (req, res) => {
    res.render("../views/pages/index.ejs", { mainContent: mainContent, blogs });
});

app.get("/pages/:id", (req, res) => {
    const postId = req.params.id;
    const post = blogs.find((post) => post.id == postId);

    if (post) {
        res.render(`pages/post${post.id}`, { post});
    } else {
        res.status(404).render(`../views/pages/404.ejs`);
    }
});

app.get("/about", (req, res) => {
    res.render("../views/pages/about.ejs", {mainContent: mainContent});
});

app.get("/services", (req, res) => {
    res.render("../views/pages/services.ejs", {mainContent: mainContent});
});

app.get("/contact", (req, res) => {
    res.render("../views/pages/contact.ejs", {mainContent: mainContent});
});

app.listen(port, () => {
    console.log(`Your Server is running on ${ port }`);
});