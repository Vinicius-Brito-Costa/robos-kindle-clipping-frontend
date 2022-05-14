<script>
    import logo from "$lib/assets/img/RoboVictory.webp";
    export let page = "";
</script>

<div class="main-container">
    <a href="/" alt="home" class="corner">
        <img src={logo} alt="Site's Logo" />
    </a>
    <header>
        <nav>
            <a href="/" alt="Home" class="nav-item {page == "home" ? "selected" : ""}">Home</a>
            <a href="/terms-of-use" alt="Terms" class="nav-item {page == "terms" ? "selected" : ""}">Terms of use</a>
            <a href="/privacy-policy" alt="Policy" class="nav-item {page == "policy" ? "selected" : ""}">Privacy policy</a>
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
        justify-content: space-around;
        align-items: center;
    }
    .nav-item{
        color: rgb(133, 133, 133);
        font-size: 20px;
        width: 120px;
        text-align: center;
        text-decoration: none;
        padding: 1px 6px;
        border-radius: var(--round-corner);
    }
    .nav-item:hover{
        color: darkseagreen;
    }
    .selected{
        background-color: darkseagreen;
        color: white;
    }
    .selected:hover{
        color: white;
    }
</style>