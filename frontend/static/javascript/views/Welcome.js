import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Welcome");
    }

    async getHtml() {
        return `
            <head>
            <meta charset="UTF-8">
            <meta name="Welcome" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
            <link rel="stylesheet" href="/static/css/Welcome.css">
            </head> 
            <h1>Hi new user.</h1>
            <p>
                ligma
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}