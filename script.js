const API_URL = "https://script.google.com/macros/s/AKfycbwlzBgQoST_MLC8nvPeJSMQBHnIFouiEB8MI6N2s-oObA0HP-X_txcevkIv8q7UFpfLJQ/exec";

async function fetchSheetData() {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (e) { return []; }
}

async function postToSheet(payload) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        return await response.json();
    } catch (e) { return { result: 'error' }; }
}

async function fetchMasterData() {
    // GAS側でシート名を指定して取得できるようにURLパラメータを付与
    const response = await fetch(API_URL + "?sheet=master"); 
    const data = await response.json();
    return data; // GAS側で A列の配列 ['E5系', 'E235系', ...] を返すようにしてください
}
