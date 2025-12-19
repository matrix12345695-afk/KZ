const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("user").innerText =
    "Пользователь: " + (tg.initDataUnsafe.user?.first_name || "Гость");

function sendData() {
    const data = {
        action: "finish_inventory",
        time: new Date().toISOString()
    };

    tg.sendData(JSON.stringify(data));
}
