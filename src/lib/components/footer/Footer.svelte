<footer>
    <div class="footer-container">
        <a href="https://www.linkedin.com/in/vin%C3%ADcius-brito-costa/" alt="Linkedin" target="_blank"class="social-media">
            <img src="img/linkedin-logo.png" alt="Linkedin" />
        </a>
        <a href="https://github.com/Vinicius-Brito-Costa" alt="Github" target="_blank"class="social-media">
            <img src="img/github-logo.png" alt="Github" />
        </a>
    </div>
</footer>

<style>
    footer{
        height: var(--footer-height);
        max-height: var(--footer-height);
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        
    }
    .footer-container{
        grid-column-start: 2;
        display: flex;
        justify-content: space-evenly;
    }
    .social-media{
        height: 100%;
        display: flex;
        align-items: center;
        object-fit: contain;
        justify-content: center;
    }
    .social-media img{
        border-radius: var(--ball-corner);
    }
</style>