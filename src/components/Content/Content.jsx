class breakingBad {
    constructor(name, nickname, images) {
        this._name = () => name;
        this._nickname = () => nickname;
        this._images = () => this.images;
    }
    async getData() {
        //const bkbad = document.getElementById("bkbad");
        const URL = "https://breakingbadapi.com/api/characters";
        try {
            const request = await axios.get(URL);
            const data = request.data;
            console.log("request: ", request.data);
            for (const persona of data) {
                persona.name;
                persona.nickname;
                persona.images;
                bkbad.innerHTML += `<div class="card">
                <span>${persona.name}</span>
                <p>${persona.nickname}</p>
                <img src="${persona.img}"/>
                </div>
                `;
            }
        }
        catch (error) {
            console.error(error);
        }
    }
}
const info = new breakingBad()
info.getData();

