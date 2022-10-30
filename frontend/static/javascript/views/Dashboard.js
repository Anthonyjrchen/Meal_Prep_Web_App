import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <head>
            <meta charset="UTF-8">
            <meta name="Dashboard" content="width=device-width, initial-scale=1.0">
            <title>Dashboard</title>
            <link rel="stylesheet" href="/static/css/Dashboard.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma">
            <style>
                body,h1,h2,h3,h4,h5,h6 {font-family: "Karma", sans-serif}
            </style>
            </head> 

            <body>

            <!-- TOP MENU -->
            <div class="top">
                <div class="top-center top-padding-16">My Food</div>
            </div>

            </body>

                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}