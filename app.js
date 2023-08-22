document.addEventListener("DOMContentLoaded", () => {
    const lyricsBtn = document.getElementById("lyrics-btn");
    const lyricsContent = document.getElementById("lyrics-content");

    lyricsBtn.addEventListener("click", () => {
        const options = {
            method: "GET",
            url: "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/",
            params: { id: "7076626" },
            headers: {
                "X-RapidAPI-Key":
                    "89ab35c67cmsh31e067e9058032cp120665jsndfe0a339bf92",
                "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then((response) => {
                const lyricsHtml = response.data.lyrics.lyrics.body.html || "";
                lyricsContent.innerHTML = lyricsHtml;
            })
            .catch((error) => {
                console.error("Error fetching lyrics:", error);
            });
    });
});
