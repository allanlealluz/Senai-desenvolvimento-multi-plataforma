function generateCard(imageUrl, altText, title) {
    return `
    <div class="card bg-dark border-dark" style="width: 18rem;">
        <div class="card-body">
            <img src="${imageUrl}" alt="${altText}" class="card-img-top yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded">
            <h6 class="card-title text-center text-light">${title}</h6>
        </div>
    </div>`;
}

function Historico() {
    var divMain = document.getElementById('main');
    divMain.innerHTML = `
    <div class="container d-flex flex-column history justify-content-start">
        <h2 class="text-light">Histórico de Exibição</h2>
        <h3 class="text-light">Hoje</h3>
        ${generateCard("https://i.ytimg.com/vi/8mczzifNRc0/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDD2RAKhusg5-Gim-yaj0XcgZZUog", "GT4 THEME thumbnail", "GT4 THEME")}
    </div>`;
}

function Home() {
    var div = document.getElementById('main');
    div.innerHTML = `
    <div>
        <span class="badge big-badge"><h5>Tudo</h5></span>
        <span class="badge big-badge"><h5>Mix</h5></span>
        <span class="badge big-badge"><h5>Jogos</h5></span>
        <span class="badge big-badge"><h5>Dark Ambience</h5></span>
        <span class="badge big-badge"><h5>Fnaf</h5></span>
        <span class="badge big-badge"><h5>Core</h5></span>
        <span class="badge big-badge"><h5>Stella Blade</h5></span>
        <span class="badge big-badge"><h5>League of Legends</h5></span>
        <span class="badge big-badge"><h5>Plants vs Zombies</h5></span>
    </div>
    <div class="card-group">
        ${generateCard("img/download (1).jpg", "A IA irá nos substituir thumbnail", "A IA irá nos substituir")}
        ${generateCard("https://i.ytimg.com/vi/bva2KUuER6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBks0l8ZCuxR7ue5RzliY34YaLucA", "Como não ligar para a opinião dos outros, Modo Sério thumbnail", "Como não ligar para a opinião dos outros, Modo Sério")}
    </div>
    <div class="card-group low">
        ${generateCard("https://i.ytimg.com/vi/h5L_Aqkp-Gg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0l-t9xSeyDrxKR6YaGTQFitIqMA", "VENI, VIDI, VICI |1 hora de Ambiente Romano thumbnail", "VENI, VIDI, VICI |1 hora de Ambiente Romano")}
        ${generateCard("https://i.ytimg.com/vi/Sie6JcRTMtY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5LdMi3co9xDniEa7-2TQZzrtT_A", "O primeiro serial killer da história dos estados unidos H.H Homes thumbnail", "O primeiro serial killer da história dos estados unidos H.H Homes")}
    </div>`;
}

function Shorts() {
    var div = document.getElementById('main');
    div.innerHTML = `
    <div class="container-fluid">
        <img alt="Sea of Problems thumbnail" style="background-color: transparent;" class="img-fluid full_img" src="https://i.ytimg.com/vi/XpAUQlO7VS0/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBzgWAAtAFigIMCAAQARhNIBMofzAP&rs=AOn4CLCWareIFj2WRQsEGAvAFkSgBMH1LA">
        <h3 class="text-light full_text">Sea of Problems</h3>
    </div>`;
}

function Inscrições() {
    var div = document.getElementById('main');
    div.innerHTML = `
    <div class="container-fluid">
        <h2 class="text-light">Mais Recentes </h2>
        <div class="card-group">
            ${generateCard("https://i.ytimg.com/vi/hhbKZsTCNdg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqkT-GsTEkGQ_dzpQl7dxqVw4p-g", "SUPER XANDÃO 190 Q.I thumbnail", "SUPER XANDÃO 190 Q.I - OS CÉUS PROCLAMAM A GLÓRIA DE DEUS E O FIRMAMENTO ANUNCIA A OBRA DE SUAS MÃOS")}
            ${generateCard("https://i.ytimg.com/vi/bva2KUuER6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBks0l8ZCuxR7ue5RzliY34YaLucA", "Como não ligar para a opinião dos outros thumbnail", "Como não ligar para a opinião dos outros, Modo Sério")}
        </div>
    </div>`;
}

function AssistirTarde() {
    var div = document.getElementById('main');
    div.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-6 bg-secondary" style='border-radius:5%;'>
                <div class="card bg-secondary mb-3" style="max-width: 18rem;">
                    <div class="card-body">
                        <img src="https://i.ytimg.com/vi/wzo1wraF3nw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCzJpEUHPJiYWdjFMCoJZDgRX5rNw" alt="Assistir Mais Tarde thumbnail" class="card-img-top yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded">
                        <h3 class="card-title text-center text-light">Assistir Mais Tarde</h3>
                        <h5 class="card-title text-center text-light">Allone</h5>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    <div>
                        <span class="badge big-badge">
                            <svg class='icon-sm' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path></svg>
                            Ordenar
                        </span>
                        <span class="badge big-badge">Tudo</span>
                        <span class="badge big-badge">Videos</span>
                        <span class="badge big-badge">Shorts</span>
                    </div>
                </div>
                <div class="row">
                <div class="col">
                    <div class="card bg-dark border-dark mb-3" style="max-width: 18rem;">
                        <div class="card-body">
                        <img alt="" style="background-color: transparent;" class="card-img-top" src="https://i.ytimg.com/vi/KcWjbHYbaTA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCxzfxKAnyd5Wf5CBBX9LPsKngVpA">
                            <h6 class="card-title text-center text-light">Wandering the Ancient Land~ Relaxing Shadow of the Colossus music (w/ forest &amp; river ambience)</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}

