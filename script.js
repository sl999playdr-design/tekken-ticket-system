const API_URL = "ここに新しいGASのウェブアプリURLを貼り付け";

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
