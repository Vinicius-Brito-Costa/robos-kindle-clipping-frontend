<script>
    export let page = "";
</script>

<div class="main-container">
    <a href="/" alt="home" class="corner">
        <img src="http://pa1.narvii.com/6621/8f8a92ca3286b24408f1c87fc111a22bacefac94_00.gif" alt="Site's Logo" />
    </a>
    <header>
        <nav>
            <a href="/" alt="Home" class="nav-item {page == "home" ? "selected" : ""}">Home</a>
            <a href="/about" alt="About" class="nav-item {page == "about" ? "selected" : ""}">About</a>
        </nav>
    </header>

</div>

<style>
    .main-container{
        display: grid;
        grid-template-columns: var(--application-grid-template);
        grid-auto-rows: 1fr;
        min-height: var(--header-height);
        height: var(--header-height);
    }
    .main-container > *{
        min-height: var(--header-height);
        height: var(--header-height);
        max-height: var(--header-height);
    }
    .corner{
        display: flex;
        align-items: center;
        object-fit: contain;
        justify-content: center;
    }
    .corner img{
        height: 100%;
    }
    header{
        width: 100%;
    }
    nav{
        display: flex;
        height: 100%;
        justify-content: space-evenly;
        align-items: center;
    }
    .nav-item{
        color: rgb(133, 133, 133);
        font-size: 20px;
        text-decoration: none;
        padding: 1px 6px;
        border-radius: var(--round-corner);
    }
    .selected{
        background-color: rgb(219, 193, 47);
        color: white;
    }
</style>